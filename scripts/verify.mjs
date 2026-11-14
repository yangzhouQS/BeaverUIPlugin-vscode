#!/usr/bin/env node
/**
 * 离线全量核对脚本（不依赖 VSCode 运行时）
 *
 * 通过 stub `vscode` 模块加载编译产物 out/extension.js，验证：
 *  1. 组件数据完整性（数量、唯一性、链接格式、无 el- 残留）
 *  2. 补全/事件/枚举/插槽/指令行为（与单元测试同口径）
 *  3. snippets 与注册表一致性
 *  4. package.json 品牌字段与引用文件存在性
 *
 * 用法：先 `npm run compile`，再 `npm run verify`
 */
import Module from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import assert from 'node:assert';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const outExtensionJs = path.join(repoRoot, 'out', 'extension.js');

if (!fs.existsSync(outExtensionJs)) {
    console.error('未找到 out/extension.js，请先运行 npm run compile');
    process.exit(1);
}

// ---------------------------------------------------------------------------
// vscode 模块 stub
// ---------------------------------------------------------------------------
class SnippetString {
    constructor(value) {
        this.value = value;
    }
}
class MarkdownString {
    constructor(value) {
        this.value = value;
    }
}
class CompletionItem {
    constructor(label, kind) {
        this.label = label;
        this.kind = kind;
    }
}
const stub = {
    SnippetString,
    MarkdownString,
    CompletionItem,
    CompletionItemKind: { Property: 9, Value: 21, Field: 14 },
    Hover: class {},
    Position: class {},
    TextDocument: class {},
    languages: { registerCompletionItemProvider: () => ({ dispose() {} }), registerHoverProvider: () => ({ dispose() {} }) },
    commands: { registerCommand: () => ({ dispose() {} }) },
    window: {},
    workspace: {},
    ExtensionContext: class {}
};

const originalLoad = Module._load;
Module._load = function (request, parent, isMain) {
    if (request === 'vscode') return stub;
    return originalLoad.apply(this, arguments);
};

// eslint-disable-next-line import/no-dynamic-require
const require = Module.createRequire(url.pathToFileURL(outExtensionJs));
const { provideCompletions, provideHoverMarkdown, getLinePrefix } = require(outExtensionJs);

// ---------------------------------------------------------------------------
// 1. 组件数据完整性
// ---------------------------------------------------------------------------
const componentsDir = path.join(repoRoot, 'src', 'components');
const generatedFiles = fs.readdirSync(componentsDir).filter((f) => /^b-[\w-]+\.ts$/.test(f));
const indexSrc = fs.readFileSync(path.join(componentsDir, 'index.ts'), 'utf-8');
const indexTags = [...indexSrc.matchAll(/import \w+ from '\.\/(b-[\w-]+)';/g)].map((m) => m[1]);
assert.strictEqual(indexTags.length, generatedFiles.length, 'index.ts 导入数应与数据文件数一致');
assert.deepStrictEqual(new Set(indexTags).size, indexTags.length, '组件 key 不应重复');

// 通过 out 产物读取运行时数据（相对 out/ 目录解析）
const runtimeComponents = require('./components/index.js').default;
const keys = runtimeComponents.map((c) => c.key);
assert.ok(keys.every((k) => /^b-[\w-]+$/.test(k)), '所有组件 key 应为 b-* 标签');
assert.strictEqual(new Set(keys).size, keys.length, '运行时组件 key 不应重复');
console.log(`✓ 组件数据：${keys.length} 个标签，与 index.ts 清单一致`);

// 链接格式与 el- 残留
let memberCount = 0;
for (const comp of runtimeComponents) {
    const all = [...(comp.attr ?? []), ...(comp.event ?? []), ...(comp.slot ?? [])];
    memberCount += all.length;
    assert.ok(all.length > 0, `${comp.key} 不应为空数据`);
    for (const item of all) {
        assert.ok(item.key && item.key !== 'null' && !item.key.includes('undefined'), `${comp.key} 存在异常 key`);
        if (item.link) {
            assert.ok(item.link.startsWith('https://beaver-ui.yearrow.com/component/'), `${comp.key}.${item.key} 链接域名错误`);
        }
        assert.ok(!/\bel-[\w]/.test(item.describe ?? ''), `${comp.key}.${item.key} describe 含 el- 残留`);
    }
}
console.log(`✓ 数据成员：共 ${memberCount} 条（attr/event/slot），链接与描述均合规`);

// ---------------------------------------------------------------------------
// 2. 补全行为
// ---------------------------------------------------------------------------
const insertOf = (item) => item.insertText?.value ?? item.insertText;
{
    const items = provideCompletions('<b-button ');
    const labels = items.map((x) => x.label);
    assert.ok(labels.includes('type⚡'), 'b-button 应包含 type 属性');
    const size = items.find((x) => x.label === 'size⚡');
    assert.strictEqual(insertOf(size), 'size="${1|large,default,small|}"', '枚举属性应生成选择片段');
    const plain = items.find((x) => x.label === 'plain⚡');
    assert.strictEqual(insertOf(plain), ':plain="${1|true,false|}"', '布尔属性应生成 true/false 片段');
    const color = items.find((x) => x.label === 'color⚡');
    assert.strictEqual(insertOf(color), 'color="${1:value}"', '字符串属性直接写属性');
    const autoLoad = items.find((x) => x.label === 'auto-insert-space⚡');
    assert.ok(autoLoad, 'b-button 应包含 auto-insert-space');
}
{
    const items = provideCompletions('<b-menu-item ');
    const labels = items.map((x) => x.label);
    assert.ok(labels.includes('index⚡'), 'b-menu-item 应包含 index');
    assert.ok(!labels.includes('mode⚡'), '不应误匹配 b-menu 的属性');
}
{
    const items = provideCompletions('<b-input @');
    const change = items.find((x) => x.label === '@change⚡');
    assert.ok(change, 'b-input 应包含 @change 事件');
    assert.strictEqual(insertOf(change), 'change="${1:value}"', '事件插入文本不应带 @');
}
{
    const items = provideCompletions('<b-button type="');
    const labels = items.map((x) => x.label);
    assert.ok(labels.includes('primary⚡'), 'type 引号内应给出枚举值');
    assert.ok(labels.includes('danger⚡'), 'type 引号内应给出 danger');
}
{
    const items = provideCompletions('<b-input #');
    assert.ok(items.map((x) => x.label).includes('#prefix⚡'), 'b-input 应包含 prefix 插槽');
}
{
    const items = provideCompletions('<div ');
    const labels = items.map((x) => x.label);
    assert.ok(labels.includes('v-loading⚡'), 'div 内应提示 v-loading');
    assert.ok(labels.includes('v-auto-tip⚡'), 'div 内应提示 v-auto-tip');
    assert.ok(labels.includes('v-infinite-scroll⚡'), 'div 内应提示 v-infinite-scroll');
}
console.log('✓ 补全行为：属性/枚举/布尔/事件/插槽/指令 全部符合预期');

// ---------------------------------------------------------------------------
// 3. Hover 行为
// ---------------------------------------------------------------------------
{
    const md = provideHoverMarkdown('<b-button ', 'type');
    assert.ok(md.value.includes('type') && md.value.includes('可选值'), '属性 Hover 文档异常');
    const tag = provideHoverMarkdown('<b-button', 'b-button');
    assert.ok(tag.value.includes('beaver-ui.yearrow.com'), '标签 Hover 应含文档站链接');
    const closed = provideHoverMarkdown('<b-button type="primary">按钮</b-button> ', 'type');
    assert.strictEqual(closed, undefined, '闭合标签外不应返回文档');
}
console.log('✓ Hover 行为：属性/标签/闭合标签 全部符合预期');

// ---------------------------------------------------------------------------
// 4. snippets 一致性
// ---------------------------------------------------------------------------
{
    const snippetFile = path.join(repoRoot, 'snippets', 'template.code-snippets');
    const json = JSON.parse(fs.readFileSync(snippetFile, 'utf-8').replace(/\n?[ \t]*\/\*\*[\s\S]*?\*\//g, ''));
    const names = Object.keys(json);
    assert.ok(names.length > 60, 'snippet 数量应保持规模');
    const tagSet = new Set(keys);
    for (const [name, snip] of Object.entries(json)) {
        const m = snip.prefix.match(/<([\w-]+)⚡/);
        assert.ok(m, `${name} prefix 缺少标签`);
        assert.ok(tagSet.has(m[1]), `${name} 的标签 ${m[1]} 不在注册表`);
        assert.ok(Array.isArray(snip.body) && snip.body.length > 0, `${name} body 为空`);
        const joined = snip.body.join('\n');
        assert.ok(!/<(\/)?el-[\w]/.test(joined), `${name} body 含 el- 标签残留`);
        assert.ok(!/class="[^"]*el-/.test(joined), `${name} body 含 el- 样式残留`);
    }
    console.log(`✓ snippets：${names.length} 条，标签全部在注册表内，无 el- 残留`);
}

// ---------------------------------------------------------------------------
// 5. package.json 与引用资源
// ---------------------------------------------------------------------------
{
    const pkg = JSON.parse(fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf-8'));
    assert.strictEqual(pkg.name, 'beaver-ui');
    assert.strictEqual(pkg.displayName, 'Beaver UI');
    assert.strictEqual(pkg.publisher, 'yearrow');
    assert.ok(fs.existsSync(path.join(repoRoot, pkg.icon)), `图标不存在: ${pkg.icon}`);
    for (const contrib of pkg.contributes.snippets) {
        assert.ok(fs.existsSync(path.join(repoRoot, contrib.path)), `snippet 文件不存在: ${contrib.path}`);
    }
    console.log('✓ package.json：品牌字段与引用资源全部就绪');
}

// ---------------------------------------------------------------------------
// 6. getLinePrefix 冒烟
// ---------------------------------------------------------------------------
{
    const fakeDoc = { lineAt: () => ({ text: '<div><b-grid co' }) };
    assert.strictEqual(getLinePrefix(fakeDoc, { character: 15 }), '<b-grid co');
    console.log('✓ getLinePrefix 冒烟通过');
}

console.log('\n全部核对通过 ✅');
