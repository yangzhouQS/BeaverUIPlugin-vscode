#!/usr/bin/env node
/**
 * snippets 重生成器
 *
 * 1. 迁移上游 Element Plus Snippets：el-* → b-*（仅保留 beaver-ui 注册表中存在的标签；
 *    body 引用了已移除组件的 snippet 整条丢弃，保证产物中无 el- 残留）
 * 2. 为 beaver 新增组件（上游没有 snippet 的）从数据集 demo 提取基础示例
 *
 * 输入：snippets/template.code-snippets（当前内容，作为上游迁移源）+ data/beaver-ui@1.0.1.json
 * 输出：snippets/template.code-snippets（覆盖，JSONC 分组注释）
 *
 * 用法：node scripts/generate-snippets.mjs [--dataset <path>] [--skip-upstream]
 * 注意：脚本读取当前 template.code-snippets 作为上游迁移源后立即覆盖，
 *       重复运行请加 --skip-upstream（只用数据集生成新增部分）。
 */
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const argOf = (name) => {
    const i = args.indexOf(name);
    return i >= 0 ? args[i + 1] : undefined;
};

const sourceConfig = JSON.parse(fs.readFileSync(path.join(repoRoot, 'data', 'source.json'), 'utf-8'));
const datasetPath = path.resolve(repoRoot, argOf('--dataset') ?? sourceConfig.dataset);
const dataset = JSON.parse(fs.readFileSync(datasetPath, 'utf-8'));
const snippetFile = path.join(repoRoot, 'snippets', 'template.code-snippets');
const skipUpstream = args.includes('--skip-upstream');

// 当前注册表：从生成的组件清单读取
const indexSrc = fs.readFileSync(path.join(repoRoot, 'src', 'components', 'index.ts'), 'utf-8');
const tags = [...indexSrc.matchAll(/import \w+ from '\.\/(b-[\w-]+)';/g)].map((m) => m[1]);
const tagSet = new Set(tags);
if (tagSet.size === 0) {
    console.error('组件清单为空，请先运行 generate-data.mjs');
    process.exit(1);
}

/** 数据集页面 ↔ 标签（用于取标题/分类/demo） */
const datasetByTag = new Map();
for (const page of dataset.components) {
    for (const tag of page.tagNames ?? []) {
        if (tagSet.has(tag) && !datasetByTag.has(tag)) datasetByTag.set(tag, page);
    }
    // 套件页/子标签启发式：b-table-only → table-kit 页
    for (const tag of tags) {
        if (!datasetByTag.has(tag) && tag.startsWith(`b-${page.name}`)) datasetByTag.set(tag, page);
    }
}

const snippets = {};
const dropped = [];
let migrated = 0;

// ---------------------------------------------------------------------------
// 1. 迁移上游 snippets
// ---------------------------------------------------------------------------
if (!skipUpstream && fs.existsSync(snippetFile)) {
    const upstreamText = fs.readFileSync(snippetFile, 'utf-8');
    // 仅剥离整块 /** ... */ 文档注释（snippet 内容不会出现行首块注释），并清理 JSONC 尾逗号
    const upstream = JSON.parse(
        upstreamText.replace(/\n?[ \t]*\/\*\*[\s\S]*?\*\//g, '').replace(/,(\s*[}\]])/g, '$1')
    );
    for (const [name, snip] of Object.entries(upstream)) {
        const prefix = snip.prefix ?? '';
        const mainTagMatch = prefix.match(/<([\w-]+)⚡/);
        if (!mainTagMatch) {
            dropped.push(`${name}（前缀无标签）`);
            continue;
        }
        const elTag = mainTagMatch[1];
        const bTag = elTag.replace(/^el-/, 'b-');
        if (!tagSet.has(bTag)) {
            dropped.push(`${name}（${elTag} 已移除/无数据）`);
            continue;
        }
        // body 中的全部 el-* 标签映射；出现注册表外的标签则整条丢弃（杜绝 el- 残留）
        const bodyTags = [...new Set(snip.body.join('\n').match(/<(\/?)el-([\w-]+)/g) ?? [])].map(
            (t) => t.replace(/<(\/?)el-/, '')
        );
        if (bodyTags.some((t) => !tagSet.has(`b-${t}`))) {
            dropped.push(`${name}（body 引用已移除组件：${bodyTags.filter((t) => !tagSet.has(`b-${t}`)).join(', ')}）`);
            continue;
        }
        const body = snip.body
            .map((line) => line.replace(/<(\/?)el-([\w-]+)/g, (_m, slash, sub) => `<${slash}b-${sub}`))
            // 标签已替换；剩余 el- 仅出现在 class 等样式引用中（如 el-icon--right），同步映射为 b-
            .map((line) => line.replace(/(class="[^"]*?)el-/g, '$1b-').replace(/(class="[^"]*?)el-/g, '$1b-'));
        snippets[name] = { ...snip, prefix: prefix.replace(elTag, bTag), body };
        migrated += 1;
    }
}

// ---------------------------------------------------------------------------
// 2. beaver 新增组件：从数据集 demo 生成基础 snippet
// ---------------------------------------------------------------------------
const coveredTags = new Set(
    Object.values(snippets)
        .map((s) => (s.prefix.match(/<([\w-]+)⚡/) ?? [])[1])
        .filter(Boolean)
);

const escapeSnippet = (text) => text.replace(/\$/g, '$$$$');

function templateOf(sfcSource, maxLines = 16) {
    const m = sfcSource.match(/<template>([\s\S]*?)<\/template>/);
    const inner = (m ? m[1] : sfcSource).replace(/^\n/, '').replace(/\n\s*$/, '');
    const lines = inner.split('\n');
    if (lines.length > maxLines) {
        return [...lines.slice(0, maxLines - 1), '    <!-- … -->'].join('\n');
    }
    return inner;
}

function demoFor(page, preferNames) {
    for (const n of preferNames) {
        const hit = page.demos.find((d) => d.name === n);
        if (hit) return hit;
    }
    const basic = page.demos.find((d) => d.section.includes('基础'));
    return basic ?? page.demos[0];
}

const added = [];
const usedNames = new Set(Object.keys(snippets));
for (const tag of tags) {
    if (coveredTags.has(tag)) continue;
    const page = datasetByTag.get(tag);
    if (!page || !page.demos?.length) continue;
    const demo = demoFor(page, ['basic', 'only', 'async', `${tag.slice(2)}-basic`]);
    if (!demo) continue;
    const template = templateOf(demo.source);
    if (!template) continue;
    let name = page.title;
    if (usedNames.has(name)) name = `${page.title}（${tag.slice(2)}）`;
    if (usedNames.has(name)) continue;
    usedNames.add(name);
    snippets[name] = {
        prefix: `<${tag}⚡`,
        body: escapeSnippet(template).split('\n'),
        description: `${page.title} · beaver-ui 新增组件（官方示例：${demo.section}）`
    };
    added.push(tag);
}

// ---------------------------------------------------------------------------
// 3. 写出（JSONC，带分类注释）
// ---------------------------------------------------------------------------
const byCategory = new Map();
for (const [name, snip] of Object.entries(snippets)) {
    const page = datasetByTag.get((snip.prefix.match(/<([\w-]+)⚡/) ?? [])[1]);
    const cat = page?.categoryText ?? '其他';
    if (!byCategory.has(cat)) byCategory.set(cat, []);
    byCategory.get(cat).push(name);
}

const catOrder = ['基础组件', '布局组件', '容器组件', '表单组件', '数据展示', '导航', '反馈', '其他'];
const categories = [...byCategory.keys()].sort((a, b) => {
    const ia = catOrder.indexOf(a);
    const ib = catOrder.indexOf(b);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
});

let out = '{\n';
for (const cat of categories) {
    out += `    /**\n     * ${cat}\n     */\n`;
    for (const name of byCategory.get(cat)) {
        const snip = snippets[name];
        out += `    ${JSON.stringify(name)}: {\n`;
        out += `        "prefix": ${JSON.stringify(snip.prefix)},\n`;
        out += `        "body": [\n${snip.body.map((l) => `            ${JSON.stringify(l)}`).join(',\n')}\n        ],\n`;
        out += `        "description": ${JSON.stringify(snip.description ?? name)}\n`;
        out += '    },\n';
    }
    out += '\n';
}
out = out.replace(/,(\n\n)$/, '$1') + '}\n';
fs.writeFileSync(snippetFile, out, 'utf-8');

console.log(`snippet 总数: ${Object.keys(snippets).length}（上游迁移 ${migrated}，新增 ${added.length}）`);
console.log(`新增标签 (${added.length}): ${added.join(', ') || '无'}`);
console.log(`丢弃上游 snippet (${dropped.length}):`);
for (const d of dropped) console.log(`  - ${d}`);
