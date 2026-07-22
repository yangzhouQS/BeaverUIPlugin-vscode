import * as vscode from 'vscode';
import { markdownString } from './utils/template';

import ElRow from './components/el-row';
import ElCol from './components/el-col';
import ElButtonGroup from './components/el-button-group';
import ElButton from './components/el-button';
import ElContainer from './components/el-container';
import ElHeader from './components/el-header';
import ElFooter from './components/el-footer';
import ElAside from './components/el-aside';
import ElMain from './components/el-main';
import ElIcon from './components/el-icon';
import ElConfigProvider from './components/el-config-provider';

import ElLink from './components/el-link';
import ElText from './components/el-text';
import ElScrollbar from './components/el-scrollbar';
import ElSpace from './components/el-space';
import ElAutocomplete from './components/el-autocomplete';
import ElCascader from './components/el-cascader';
import ElCascaderPanel from './components/el-cascader-panel';
import ElColorPickerPanel from './components/el-color-picker-panel';
import ElColorPicker from './components/el-color-picker';
import ElCheckboxButton from './components/el-checkbox-button';
import ElCheckboxGroup from './components/el-checkbox-group';
import ElCheckbox from './components/el-checkbox';
import ElDatePickerPanel from './components/el-date-picker-panel';
import ElDatePicker from './components/el-date-picker';
import ElFormItem from './components/el-form-item';
import ElForm from './components/el-form';
import ElInputOtp from './components/el-input-otp';
import ElInput from './components/el-input';
import ElInputNumber from './components/el-input-number';
import ElMention from './components/el-mention';
import ElRadioGroup from './components/el-radio-group';
import ElRadioButton from './components/el-radio-button';
import ElRadio from './components/el-radio';
import ElRate from './components/el-rate';
import ElSelect from './components/el-select';
import ElOption from './components/el-option';
import ElOptionGroup from './components/el-option-group';
import ElSelectV2 from './components/el-select-v2';
import ElSlider from './components/el-slider';
import ElSwitch from './components/el-switch';
import ElTimePicker from './components/el-time-picker';
import ElTimeSelect from './components/el-time-select';
import ElTransfer from './components/el-transfer';
import ElTreeSelect from './components/el-tree-select';
import ElUpload from './components/el-upload';
import ElAvatarGroup from './components/el-avatar-group';
import ElAvatar from './components/el-avatar';
import ElBadge from './components/el-badge';
import ElCalendar from './components/el-calendar';
import ElCard from './components/el-card';
import ElCarousel from './components/el-carousel';
import ElCarouselItem from './components/el-carousel-item';
import ElCollapseItem from './components/el-collapse-item';
import ElCollapse from './components/el-collapse';
import ElDescriptionsItem from './components/el-descriptions-item';
import ElDescriptions from './components/el-descriptions';
import ElEmpty from './components/el-empty';
import ElImageViewer from './components/el-image-viewer';
import ElImage from './components/el-image';
import ElPagination from './components/el-pagination';
import ElProgress from './components/el-progress';
import ElResult from './components/el-result';
import ElSkeletonItem from './components/el-skeleton-item';
import ElSkeleton from './components/el-skeleton';
import ElTableColumn from './components/el-table-column';
import ElTable from './components/el-table';
import ElTableV2 from './components/el-table-v2';
import ElCheckTag from './components/el-check-tag';
import ElTag from './components/el-tag';
import ElTimelineItem from './components/el-timeline-item';
import ElTimeline from './components/el-timeline';
import ElTour from './components/el-tour';
import ElTourStep from './components/el-tour-step';
import ElTree from './components/el-tree';
import ElTreeV2 from './components/el-tree-v2';
import ElStatistic from './components/el-statistic';
import ElCountdown from './components/el-countdown';
import ElSegmented from './components/el-segmented';
import ElAffix from './components/el-affix';
import ElBreadcrumbItem from './components/el-breadcrumb-item';
import ElBreadcrumb from './components/el-breadcrumb';
import ElMenuItemGroup from './components/el-menu-item-group';
import ElMenuItem from './components/el-menu-item';
import ElSubMenu from './components/el-sub-menu';
import ElMenu from './components/el-menu';
import ElPageHeader from './components/el-page-header';
import ElStep from './components/el-step';
import ElSteps from './components/el-steps';
import ElTabPane from './components/el-tab-pane';
import ElTabs from './components/el-tabs';
import ElAlert from './components/el-alert';
import ElDialog from './components/el-dialog';
import ElDrawer from './components/el-drawer';
import ElPopconfirm from './components/el-popconfirm';
import ElPopover from './components/el-popover';
import ElTooltip from './components/el-tooltip';
import ElDivider from './components/el-divider';
import ElBacktop from './components/el-backtop';
import ElDropdownItem from './components/el-dropdown-item';
import ElDropdownMenu from './components/el-dropdown-menu';
import ElDropdown from './components/el-dropdown';
import ElInputTag from './components/el-input-tag';
import ElAnchorLink from './components/el-anchor-link';
import ElAnchor from './components/el-anchor';
import ElWatermark from './components/el-watermark';
import ElSplitterPanel from './components/el-splitter-panel';
import ElSplitter from './components/el-splitter';

/**
 * 定义支持的组件（模块级常量，避免每次触发都重建数组）
 * 注意：名称更长、更具体的组件要排在前面，避免被前缀相同的组件抢先匹配
 */
const components: any[] = [
    ElButtonGroup,
    ElButton,
    ElContainer,
    ElHeader,
    ElFooter,
    ElAside,
    ElMain,
    ElIcon,
    ElConfigProvider,
    ElLink,
    ElText,
    ElScrollbar,
    ElSpace,
    ElAutocomplete,
    ElCascaderPanel,
    ElCascader,
    ElColorPickerPanel,
    ElColorPicker,
    ElCheckboxButton,
    ElCheckboxGroup,
    ElCheckbox,
    ElDatePickerPanel,
    ElDatePicker,
    ElFormItem,
    ElForm,
    ElInputNumber,
    ElInputTag,
    ElInputOtp,
    ElInput,
    ElMention,
    ElRadioGroup,
    ElRadioButton,
    ElRadio,
    ElRate,
    ElSelectV2,
    ElSelect,
    ElOptionGroup,
    ElOption,
    ElCollapseItem,
    ElCollapse,
    ElRow,
    ElCol,
    ElSlider,
    ElSwitch,
    ElTimePicker,
    ElTimeSelect,
    ElTransfer,
    ElTreeSelect,
    ElUpload,
    ElAvatarGroup,
    ElAvatar,
    ElBadge,
    ElCalendar,
    ElCard,
    ElCarouselItem,
    ElCarousel,
    ElDescriptionsItem,
    ElDescriptions,
    ElEmpty,
    ElImageViewer,
    ElImage,
    ElPagination,
    ElProgress,
    ElResult,
    ElSkeletonItem,
    ElSkeleton,
    ElTableV2,
    ElTableColumn,
    ElTable,
    ElCheckTag,
    ElTag,
    ElTimelineItem,
    ElTimeline,
    ElTourStep,
    ElTour,
    ElTree,
    ElTreeV2,
    ElStatistic,
    ElCountdown,
    ElSegmented,
    ElAffix,
    ElAnchorLink,
    ElAnchor,
    ElBacktop,
    ElBreadcrumbItem,
    ElBreadcrumb,
    ElDropdownItem,
    ElDropdownMenu,
    ElDropdown,
    ElMenuItemGroup,
    ElMenuItem,
    ElSubMenu,
    ElMenu,
    ElPageHeader,
    ElSteps,
    ElStep,
    ElTabPane,
    ElTabs,
    ElAlert,
    ElDialog,
    ElDrawer,
    ElPopconfirm,
    ElPopover,
    ElTooltip,
    ElDivider,
    ElWatermark,
    ElSplitterPanel,
    ElSplitter
];

/**
 * Element Plus 官方指令（可用于任意标签）
 */
const directives = [
    {
        key: 'v-loading',
        describe: 'Loading 加载指令，加载数据时显示加载动画',
        type: 'boolean / object',
        link: 'https://element-plus.org/zh-CN/component/loading.html'
    },
    {
        key: 'element-loading-text',
        describe: '显示在加载图标下方的加载文案',
        type: 'string',
        link: 'https://element-plus.org/zh-CN/component/loading.html'
    },
    {
        key: 'element-loading-spinner',
        describe: '自定义加载图标',
        type: 'string',
        link: 'https://element-plus.org/zh-CN/component/loading.html'
    },
    {
        key: 'element-loading-svg',
        describe: '自定义加载图标（同 element-loading-spinner）',
        type: 'string',
        link: 'https://element-plus.org/zh-CN/component/loading.html'
    },
    {
        key: 'element-loading-svg-view-box',
        describe: '设置加载 svg 元素的 viewBox 属性',
        type: 'string',
        link: 'https://element-plus.org/zh-CN/component/loading.html'
    },
    {
        key: 'element-loading-background',
        describe: '加载遮罩的背景色',
        type: 'string',
        link: 'https://element-plus.org/zh-CN/component/loading.html'
    },
    {
        key: 'element-loading-custom-class',
        describe: '自定义加载类名',
        type: 'string',
        link: 'https://element-plus.org/zh-CN/component/loading.html'
    },
    {
        key: 'v-infinite-scroll',
        describe: 'Infinite Scroll 无限滚动指令，滚动至底部时加载更多数据',
        type: 'function',
        link: 'https://element-plus.org/zh-CN/component/infinite-scroll.html'
    },
    {
        key: 'infinite-scroll-disabled',
        describe: '是否禁用无限滚动',
        type: 'boolean',
        default: 'false',
        link: 'https://element-plus.org/zh-CN/component/infinite-scroll.html'
    },
    {
        key: 'infinite-scroll-delay',
        describe: '节流延迟（毫秒）',
        type: 'number',
        default: '200',
        link: 'https://element-plus.org/zh-CN/component/infinite-scroll.html'
    },
    {
        key: 'infinite-scroll-distance',
        describe: '触发加载的距离阈值（像素）',
        type: 'number',
        default: '0',
        link: 'https://element-plus.org/zh-CN/component/infinite-scroll.html'
    },
    {
        key: 'infinite-scroll-immediate',
        describe: '是否立即执行加载方法，以防初始状态下内容撑不满容器',
        type: 'boolean',
        default: 'true',
        link: 'https://element-plus.org/zh-CN/component/infinite-scroll.html'
    }
];

/**
 * 提取行前缀：截取光标所在行、光标之前最近一个未闭合标签的内容
 */
export function getLinePrefix(document: vscode.TextDocument, position: vscode.Position): string {
    const text = document.lineAt(position).text.substring(0, position.character);
    const match = text.match(/<[/]?[a-zA-Z][a-zA-Z0-9-]*[^<>]*$/);
    return match ? match[0] : text;
}

/**
 * 生成属性 / 事件 / 指令的 CompletionItem 列表
 * sortOffset 用于把指令排在组件属性之后
 */
const renderCompletionItems = (data: any[], isEvent: boolean = false, sortOffset: number = 0) => {
    return data.map((item: any, index: number) => {
        const key = isEvent ? item.key.replace('@', '') : item.key;
        const instance = new vscode.CompletionItem(`${item.key}⚡`, vscode.CompletionItemKind.Property);

        let insertText = '';

        // 如果是事件，不需要补前缀（@ 已由用户输入）
        if (isEvent) {
            insertText = key;
        }

        // 如果是属性，则要判断补前缀
        if (!isEvent) {
            if (String(item.type).startsWith('string')) {
                insertText = key;
            }

            // 字符串以外，都视为 v-bind
            if (String(item.type).startsWith('string') === false) {
                insertText = ':' + key;
            }

            // 指令和 v-model 系列不需要补前缀
            if (key.startsWith('v-')) {
                insertText = key;
            }
        }

        instance.insertText = new vscode.SnippetString(insertText + '="${1:value}"');
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

        // 其余情况：属性提示（附带官方指令，指令排序在组件属性之后）
        return [...renderCompletionItems(component.attr), ...renderCompletionItems(directives, false, 900)];
    }

    // 非组件标签内：仅提示官方指令
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
            const link = anyItem && anyItem.link ? anyItem.link.split('#')[0] : 'https://element-plus.org/zh-CN/';
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
