"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const assert = __importStar(require("assert"));
const vscode = __importStar(require("vscode"));
suite('Integration Test Suite（真实编辑器环境）', () => {
    test('补全项应携带 documentation 文档', async () => {
        const doc = await vscode.workspace.openTextDocument({ language: 'html', content: '<el-button ' });
        await vscode.window.showTextDocument(doc);
        // 等待插件激活
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const list = await vscode.commands.executeCommand('vscode.executeCompletionItemProvider', doc.uri, new vscode.Position(0, 11));
        assert.ok(list && list.items.length > 0, '应返回补全列表');
        const typeItem = list.items.find((x) => String(x.label).includes('type'));
        assert.ok(typeItem, '应包含 type 属性');
        assert.ok(typeItem.documentation, '补全项应携带 documentation');
        const docText = typeof typeItem.documentation === 'string' ? typeItem.documentation : typeItem.documentation.value;
        assert.ok(docText.includes('描述'), 'documentation 应包含中文描述');
        assert.ok(docText.includes('文档链接'), 'documentation 应包含文档链接');
    });
    test('Hover 应返回文档内容', async () => {
        const doc = await vscode.workspace.openTextDocument({ language: 'html', content: '<el-button type="primary">按钮</el-button>' });
        await vscode.window.showTextDocument(doc);
        await new Promise((resolve) => setTimeout(resolve, 500));
        // 悬停在 type 上（第 11 个字符处）
        const hovers = await vscode.commands.executeCommand('vscode.executeHoverProvider', doc.uri, new vscode.Position(0, 12));
        assert.ok(hovers && hovers.length > 0, '应返回 Hover 内容');
        const text = hovers
            .map((h) => h.contents.map((c) => (typeof c === 'string' ? c : c.value)).join('\n'))
            .join('\n');
        assert.ok(text.includes('描述'), 'Hover 应包含中文描述');
    });
});
//# sourceMappingURL=integration.test.js.map