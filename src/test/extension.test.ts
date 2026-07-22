import * as assert from 'assert';
import { provideCompletions, provideHoverMarkdown, getLinePrefix } from '../extension';

suite('Element Plus Snippets Test Suite', () => {
    test('属性提示：输入空格触发组件属性', () => {
        const items = provideCompletions('<el-button ');
        assert.ok(items && items.length > 0, '应返回属性提示');
        const labels = items.map((x) => x.label);
        assert.ok(labels.includes('type⚡'), '应包含 type 属性');
        assert.ok(labels.includes('dashed⚡'), '应包含 dashed 属性（2.13.3 新增）');
    });

    test('属性提示：非字符串类型自动补 : 前缀', () => {
        const items = provideCompletions('<el-button ');
        assert.ok(items);
        const plain = items.find((x) => x.label === 'plain⚡');
        assert.ok(plain);
        assert.strictEqual((plain.insertText as any).value ?? plain.insertText, ':plain="${1:value}"');
    });

    test('属性提示：v-model 不补前缀', () => {
        const items = provideCompletions('<el-input ');
        assert.ok(items);
        const vm = items.find((x) => x.label === 'v-model⚡');
        assert.ok(vm, 'el-input 应包含 v-model');
        assert.strictEqual((vm.insertText as any).value ?? vm.insertText, 'v-model="${1:value}"');
    });

    test('属性提示：子组件优先于前缀相同的父组件匹配', () => {
        const items = provideCompletions('<el-menu-item ');
        assert.ok(items);
        const labels = items.map((x) => x.label);
        assert.ok(labels.includes('index⚡'), 'el-menu-item 应包含 index 属性');
        assert.ok(!labels.includes('mode⚡'), '不应误匹配到 el-menu 的属性');
    });

    test('事件提示：输入 @ 触发组件事件', () => {
        const items = provideCompletions('<el-input @');
        assert.ok(items && items.length > 0, '应返回事件提示');
        const labels = items.map((x) => x.label);
        assert.ok(labels.includes('@change⚡'), '应包含 @change 事件');
        const change = items.find((x) => x.label === '@change⚡');
        assert.ok(change);
        // 用户已输入 @，插入文本不再带 @
        assert.strictEqual((change.insertText as any).value ?? change.insertText, 'change="${1:value}"');
    });

    test('枚举值提示：引号内给出属性可选值', () => {
        const items = provideCompletions('<el-button type="');
        assert.ok(items && items.length > 0, '应返回枚举值提示');
        const labels = items.map((x) => x.label);
        assert.ok(labels.includes('primary⚡'), '应包含 primary');
        assert.ok(labels.includes('danger⚡'), '应包含 danger');
    });

    test('枚举值提示：无候选值的属性在引号内不触发提示', () => {
        const items = provideCompletions('<el-input placeholder="');
        assert.strictEqual(items, undefined);
    });

    test('插槽提示：输入 # 触发插槽名', () => {
        const items = provideCompletions('<el-input #');
        assert.ok(items && items.length > 0, '应返回插槽提示');
        const labels = items.map((x) => x.label);
        assert.ok(labels.includes('#prefix⚡'), '应包含 prefix 插槽');
    });

    test('指令提示：非组件标签内提示官方指令', () => {
        const items = provideCompletions('<div ');
        assert.ok(items && items.length > 0, '应返回指令提示');
        const labels = items.map((x) => x.label);
        assert.ok(labels.includes('v-loading⚡'), '应包含 v-loading');
        assert.ok(labels.includes('v-infinite-scroll⚡'), '应包含 v-infinite-scroll');
    });

    test('指令提示：指令不补 : 前缀', () => {
        const items = provideCompletions('<div ');
        assert.ok(items);
        const loading = items.find((x) => x.label === 'v-loading⚡');
        assert.ok(loading);
        assert.strictEqual((loading.insertText as any).value ?? loading.insertText, 'v-loading="${1:value}"');
    });

    test('排序：sortText 补零，避免字典序错乱', () => {
        const items = provideCompletions('<el-button ');
        assert.ok(items && items.length >= 19);
        const sortTexts = items.map((x) => String(x.sortText));
        const sorted = [...sortTexts].sort();
        assert.deepStrictEqual(sortTexts, sorted, 'sortText 应按数组顺序递增');
    });

    test('Hover：悬停属性显示文档', () => {
        const md = provideHoverMarkdown('<el-button ', 'type');
        assert.ok(md, '应返回悬停文档');
        assert.ok(md.value.includes('type'), '文档应包含属性名');
        assert.ok(md.value.includes('可选值'), '文档应包含可选值');
    });

    test('Hover：悬停事件显示文档', () => {
        const md = provideHoverMarkdown('<el-input @', 'change');
        assert.ok(md, '应返回事件悬停文档');
        assert.ok(md.value.includes('@change'), '文档应包含事件名');
    });

    test('Hover：悬停标签名显示组件文档链接', () => {
        const md = provideHoverMarkdown('<el-button', 'el-button');
        assert.ok(md, '应返回组件悬停文档');
        assert.ok(md.value.includes('element-plus.org'), '文档应包含官方文档链接');
    });

    test('Hover：闭合标签外不显示文档', () => {
        const md = provideHoverMarkdown('<el-button type="primary">按钮</el-button> ', 'type');
        assert.strictEqual(md, undefined);
    });

    test('getLinePrefix：提取最近一个未闭合标签', () => {
        const fakeDoc: any = {
            lineAt: () => ({ text: '<div><el-button ty' })
        };
        const prefix = getLinePrefix(fakeDoc, { character: 18 } as any);
        assert.strictEqual(prefix, '<el-button ty');
    });
});
