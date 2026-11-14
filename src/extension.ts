import * as vscode from 'vscode';
import { markdownString } from './utils/template';
import components from './components';
import { directives } from './beaver-directives';

/**
 * 生成属性 / 事件 / 指令的 CompletionItem 列表
 * sortOffset 用于把指令排在组件属性之后
 */
const renderCompletionItems = (data: any[], isEvent: boolean = false, sortOffset: number = 0) => {
    return data.map((item: any, index: number) => {
        const key = isEvent ? item.key.replace('@', '') : item.key;
        const instance = new vscode.CompletionItem(`${item.key}⚡`, vscode.CompletionItemKind.Property);

        let insertText = '';
        const placeholder = '${1:value}';

        if (isEvent) {
            // 事件：@ 已由用户输入，插入文本不再带 @
            insertText = `${key}="${placeholder}"`;
        } else if (key.startsWith('v-')) {
            // 指令和 v-model 系列不需要补前缀
            insertText = `${key}="${placeholder}"`;
        } else if (item.values && item.values.length) {
            // 枚举属性：字符串值直接写属性，占位符给出可选值片段
            insertText = `${key}="\${1|${item.values.join(',')}|}"`;
        } else if (/^boolean\b/.test(String(item.type))) {
            // 布尔属性：v-bind + true/false 选择片段
            insertText = `:${key}="\${1|true,false|}"`;
        } else if (/^string\b/.test(String(item.type))) {
            // 字符串属性：直接写属性
            insertText = `${key}="${placeholder}"`;
        } else {
            // 其余（number / object / function 等）视为 v-bind
            insertText = `:${key}="${placeholder}"`;
        }

        instance.insertText = new vscode.SnippetString(insertText);
        // 补零排序，避免字典序导致 "10" 排在 "2" 前面
        instance.sortText = String(sortOffset + index).padStart(3, '0');
        instance.documentation = new vscode.MarkdownString(markdownString(item, isEvent ? '事件' : '属性'));
        return instance;
    });
};

/**
 * 生成属性枚举值的 CompletionItem 列表
 */
const renderValueItems = (component: any, item: any) => {
    return item.values.map((value: string, index: number) => {
        const instance = new vscode.CompletionItem(`${value}⚡`, vscode.CompletionItemKind.Value);
        instance.insertText = value;
        instance.sortText = String(index).padStart(3, '0');
        instance.detail = `${component.key} 组件 ${item.key} 属性的可选值`;
        instance.documentation = new vscode.MarkdownString(markdownString(item));
        return instance;
    });
};

/**
 * 生成插槽名的 CompletionItem 列表
 */
const renderSlotItems = (component: any) => {
    return (component.slot || []).map((item: any, index: number) => {
        const instance = new vscode.CompletionItem(`#${item.key}⚡`, vscode.CompletionItemKind.Field);
        instance.insertText = item.key;
        instance.filterText = item.key;
        instance.sortText = String(index).padStart(3, '0');
        instance.documentation = new vscode.MarkdownString(markdownString(item, '插槽'));
        return instance;
    });
};

/**
 * 提取行前缀：截取光标所在行、光标之前最近一个未闭合标签的内容
 */
export function getLinePrefix(document: vscode.TextDocument, position: vscode.Position): string {
    const text = document.lineAt(position).text.substring(0, position.character);
    const match = text.match(/<[/]?[a-zA-Z][a-zA-Z0-9-]*[^<>]*$/);
    return match ? match[0] : text;
}

/**
 * 根据行前缀计算代码提示，返回 CompletionItem 列表（导出以便单元测试）
 */
export function provideCompletions(linePrefix: string): vscode.CompletionItem[] | undefined {
    for (const component of components) {
        // 光标必须处于该组件未闭合的标签内
        const inTag = new RegExp(`<${component.key}(?=[\\s/>]|$)[^<>]*$`, 'i').test(linePrefix);
        if (!inTag) {
            continue;
        }

        // 引号内：属性枚举值 / slot 插槽值提示
        const valueMatch = linePrefix.match(/\s:?([a-zA-Z0-9-]+)="[^"]*$/);
        if (valueMatch) {
            const attrName = valueMatch[1];
            if (attrName === 'slot' && component.slot) {
                return renderSlotItems(component);
            }
            const item = component.attr.find((x: any) => x.key === attrName);
            if (item && item.values && item.values.length) {
                return renderValueItems(component, item);
            }
            // 引号内不触发属性提示
            return undefined;
        }

        // 输入 @：事件提示
        if (/@$/.test(linePrefix)) {
            return renderCompletionItems(component.event, true);
        }

        // 输入 #：插槽提示
        if (/#$/.test(linePrefix) && component.slot) {
            return renderSlotItems(component);
        }

        // 其余情况：属性提示（附带指令，指令排序在组件属性之后）
        return [...renderCompletionItems(component.attr), ...renderCompletionItems(directives, false, 900)];
    }

    // 非组件标签内：仅提示指令
    if (/<[a-zA-Z][a-zA-Z0-9-]*(?=[\s/>]|$)[^<>]*$/.test(linePrefix)) {
        return renderCompletionItems(directives);
    }

    return undefined;
}

/**
 * 根据行前缀和悬停单词计算 Hover 文档（导出以便单元测试）
 */
export function provideHoverMarkdown(linePrefix: string, word: string): vscode.MarkdownString | undefined {
    for (const component of components) {
        const inTag = new RegExp(`<${component.key}(?=[\\s/>]|$)[^<>]*$`, 'i').test(linePrefix);
        const inCloseTag = new RegExp(`</${component.key}$`, 'i').test(linePrefix);
        if (!inTag && !inCloseTag) {
            continue;
        }

        // 悬停在标签名上
        if (new RegExp(`</?${component.key}$`, 'i').test(linePrefix)) {
            const anyItem = [...component.attr, ...component.event, ...(component.slot || [])][0];
            const link = anyItem && anyItem.link ? anyItem.link.split('#')[0] : 'https://beaver-ui.yearrow.com/component/';
            return new vscode.MarkdownString(`## <${component.key}> 组件\n\n**文档链接**: ${link}\n\n<br />\n`);
        }

        const clean = word.replace(/^[:@#]/, '');
        const attrItem = component.attr.find((x: any) => x.key === clean);
        if (attrItem) {
            return new vscode.MarkdownString(markdownString(attrItem, '属性'));
        }
        const eventItem = component.event.find((x: any) => x.key === '@' + clean);
        if (eventItem) {
            return new vscode.MarkdownString(markdownString(eventItem, '事件'));
        }
        const slotItem = (component.slot || []).find((x: any) => x.key === clean);
        if (slotItem) {
            return new vscode.MarkdownString(markdownString(slotItem, '插槽'));
        }

        return undefined;
    }

    return undefined;
}

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.languages.registerCompletionItemProvider(
            ['html', 'vue'],
            {
                provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
                    return provideCompletions(getLinePrefix(document, position));
                }
            },
            '@',
            ' ',
            '#',
            '"'
        ),
        vscode.languages.registerHoverProvider(['html', 'vue'], {
            provideHover(document: vscode.TextDocument, position: vscode.Position) {
                const range = document.getWordRangeAtPosition(position, /[a-zA-Z0-9-]+/);
                if (!range) {
                    return undefined;
                }
                const word = document.getText(range);
                const linePrefix = document.lineAt(position).text.substring(0, range.start.character);
                const markdown = provideHoverMarkdown(linePrefix, word);
                if (!markdown) {
                    return undefined;
                }
                return new vscode.Hover(markdown);
            }
        })
    );
}

export function deactivate() {}
