import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Integration Test Suite（真实编辑器环境）', () => {
    test('补全项应携带 documentation 文档', async () => {
        const doc = await vscode.workspace.openTextDocument({ language: 'html', content: '<el-button ' });
        await vscode.window.showTextDocument(doc);
        // 等待插件激活
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const list = await vscode.commands.executeCommand<vscode.CompletionList>(
            'vscode.executeCompletionItemProvider',
            doc.uri,
            new vscode.Position(0, 11)
        );

        assert.ok(list && list.items.length > 0, '应返回补全列表');
        const typeItem = list.items.find((x) => String(x.label).includes('type'));
        assert.ok(typeItem, '应包含 type 属性');
        assert.ok(typeItem.documentation, '补全项应携带 documentation');
        const docText = typeof typeItem.documentation === 'string' ? typeItem.documentation : typeItem.documentation!.value;
        assert.ok(docText.includes('描述'), 'documentation 应包含中文描述');
        assert.ok(docText.includes('文档链接'), 'documentation 应包含文档链接');
    });

    test('Hover 应返回文档内容', async () => {
        const doc = await vscode.workspace.openTextDocument({ language: 'html', content: '<el-button type="primary">按钮</el-button>' });
        await vscode.window.showTextDocument(doc);
        await new Promise((resolve) => setTimeout(resolve, 500));

        // 悬停在 type 上（第 11 个字符处）
        const hovers = await vscode.commands.executeCommand<vscode.Hover[]>(
            'vscode.executeHoverProvider',
            doc.uri,
            new vscode.Position(0, 12)
        );

        assert.ok(hovers && hovers.length > 0, '应返回 Hover 内容');
        const text = hovers
            .map((h) => h.contents.map((c) => (typeof c === 'string' ? c : (c as vscode.MarkdownString).value)).join('\n'))
            .join('\n');
        assert.ok(text.includes('描述'), 'Hover 应包含中文描述');
    });
});
