#!/usr/bin/env node
/**
 * beaver-ui 数据集 → VSCode 插件组件数据 生成器
 *
 * 输入：
 *   data/beaver-ui@<version>.json          —— 由 beaver-ui-mcp `npm run dataset:build` 从文档站提取的结构化数据集
 *   <beaver-ui>/src/component.ts           —— 组件注册表（B* 标识符 → b-* 标签的唯一权威来源）
 * 输出：
 *   src/components/b-*.ts                  —— 每个标签一个数据文件（attr / event / slot + 文档链接）
 *   src/components/index.ts                —— 组件清单（默认导出数组，注册表顺序）
 *   src/beaver-directives.ts               —— 指令数据（v-loading / v-auto-tip / v-highlight-query）
 *
 * 用法：node scripts/generate-data.mjs [--dataset <path>] [--component-ts <path>]
 * 路径默认读取 data/source.json。
 */
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
function argOf(name) {
    const i = args.indexOf(name);
    return i >= 0 ? args[i + 1] : undefined;
}

const sourceConfigPath = path.join(repoRoot, 'data', 'source.json');
const sourceConfig = fs.existsSync(sourceConfigPath) ? JSON.parse(fs.readFileSync(sourceConfigPath, 'utf-8')) : {};

const datasetPath = path.resolve(repoRoot, argOf('--dataset') ?? sourceConfig.dataset ?? 'data/beaver-ui@1.0.1.json');
const componentTsPath = path.resolve(repoRoot, argOf('--component-ts') ?? sourceConfig.componentTs ?? '../2026-08-31beaver-ui/packages/beaver-ui/src/component.ts');
const docsSite = sourceConfig.docsSite ?? 'https://beaver-ui.yearrow.com';
const outDir = path.join(repoRoot, 'src', 'components');
const directivesPath = path.join(repoRoot, 'src', 'beaver-directives.ts');

if (!fs.existsSync(datasetPath)) {
    console.error(`数据集不存在: ${datasetPath}`);
    process.exit(1);
}
if (!fs.existsSync(componentTsPath)) {
    console.error(`component.ts 不存在: ${componentTsPath}`);
    process.exit(1);
}

// ---------------------------------------------------------------------------
// 1. 组件标签注册表：component.ts 中的 B* 标识符 → b-* 标签
//    注意不能对 BAlert 这类「单驼峰」直接跑通用 camelToKebab（B 前无小写边界，
//    会得到 balert），必须先剥掉首字母 B。
// ---------------------------------------------------------------------------
const componentTs = fs.readFileSync(componentTsPath, 'utf-8');
const ids = [...new Set(componentTs.match(/\bB[A-Z][A-Za-z0-9]*\b/g) ?? [])];
const camelToKebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
const registryOrder = []; // 标签，按 component.ts 首次出现顺序
for (const id of ids) {
    const tag = 'b-' + camelToKebab(id.replace(/^B/, ''));
    if (!registryOrder.includes(tag)) registryOrder.push(tag);
}
const registry = new Set(registryOrder);

// ---------------------------------------------------------------------------
// 2. 套件页特殊映射：页面主标签不在注册表（页面文档的是一组壳组件）
//    该页的「通用」子表数据复制到套件下全部标签
// ---------------------------------------------------------------------------
const KIT_SPECIAL = {
    'table-kit': ['b-table-only', 'b-table-async', 'b-table-report', 'b-tree-table', 'b-table-edit'],
    'list-kit': ['b-list-only', 'b-list-async', 'b-list-report']
};
// 指令页：kind=directive / 无真实标签的指令文档页 → 生成指令数据而非组件数据
const DIRECTIVE_PAGES = ['loading', 'auto-tip', 'highlight-query'];

// ---------------------------------------------------------------------------
// 3. 读取数据集并解析
// ---------------------------------------------------------------------------
const dataset = JSON.parse(fs.readFileSync(datasetPath, 'utf-8'));
const version = dataset.version;
const pages = dataset.components;
const pageNames = new Set(pages.map((p) => p.name));

const norm = (s) =>
    s
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .toLowerCase();

const slug = (s) => s.toLowerCase().replace(/[\s_]+/g, '-'); // 近似 GitHub heading 锚点

const report = { emitted: [], skipped: [], empty: [] };
const claimed = new Map(); // tag → 页面名

/** 子组件 API → 数据文件对象 */
function shapeMember(member, link, isEvent = false) {
    // 文档双写键（如 model-value / v-model）归一为 v-model，其余取首段
    let name = (member.name ?? '').trim();
    if (name.includes('/')) {
        const parts = name.split('/').map((p) => p.trim());
        name = parts.includes('v-model') ? 'v-model' : parts[0];
    }
    const out = { key: isEvent ? `@${name}` : name };
    // plainCell 会把 ^[new](2.2.0) 标记折成 ^new 残留，这里清除
    let describe = (member.description ?? '').replace(/\^new\b/gi, '').replace(/\^\s*$/, '').trim();
    if (member.since) describe += `（自 ${member.since} 版本）`;
    if (member.deprecated) describe += '【已废弃】';
    if (describe) out.describe = describe;
    const type = (member.type ?? '').trim();
    if (type) out.type = type;
    if (member.default != null && member.default !== '' && member.default !== '—') out.default = String(member.default);
    // 枚举可选值：按 | 切分类型串后提取 'x' 引号项（函数类型除外）
    if (type && !/=>|function/i.test(type)) {
        const values = type
            .split('|')
            .map((part) => {
                const m = part.trim().match(/^'([^']*)'$/);
                return m ? m[1] : null;
            })
            .filter((v) => v !== null && v !== '' && v !== 'deprecated' && !/^\(.+\)$/.test(v));
        if (values.length >= 2) out.values = values;
    }
    if (link) out.link = link;
    return out;
}

/** prettier 风格（单引号、4 空格缩进）的对象字面量序列化 */
function lit(value, indent = 0) {
    const pad = ' '.repeat(4 * (indent + 1));
    const padEnd = ' '.repeat(4 * indent);
    if (value === null || value === undefined) return 'null';
    if (typeof value === 'number' || typeof value === 'boolean') return String(value);
    if (typeof value === 'string') return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
    if (Array.isArray(value)) {
        if (value.length === 0) return '[]';
        const items = value.map((v) => pad + lit(v, indent + 1));
        return `[\n${items.join(',\n')}\n${padEnd}]`;
    }
    // 对象
    const entries = Object.entries(value);
    if (entries.length === 0) return '{}';
    const items = entries.map(([k, v]) => `${pad}${k}: ${lit(v, indent + 1)}`);
    return `{\n${items.join(',\n')}\n${padEnd}}`;
}

/** 按 key 去重（保留后者，特定子表覆盖通用子表） */
function dedupeByKey(list) {
    const map = new Map();
    for (const item of list) map.set(item.key, item);
    return [...map.values()];
}

/** 按原始 name 去重（用于 pass3 未塑形成员，保留后者） */
function dedupeRaw(list) {
    const map = new Map();
    for (const item of list) map.set(item.name, item);
    return [...map.values()];
}

function sectionLinks(page, subSlug) {
    return {
        attr: `${docsSite}/component/${page}#${slug(subSlug)}-attributes`,
        event: `${docsSite}/component/${page}#${slug(subSlug)}-events`,
        slot: `${docsSite}/component/${page}#${slug(subSlug)}-slots`
    };
}

/** 生成一个标签的数据文件 */
function emitTag(tag, page, sub) {
    const links = sectionLinks(page, sub.name);
    const attr = (sub.attributes ?? []).map((x) => shapeMember(x, links.attr));
    const event = (sub.events ?? []).map((x) => shapeMember(x, links.event, true));
    const slot = (sub.slots ?? []).map((x) => shapeMember(x, links.slot));
    if (!attr.length && !event.length && !slot.length) {
        report.empty.push(`${tag} (page: ${page})`);
        return false;
    }
    const file = path.join(outDir, `${tag}.ts`);
    const header = [
        `// 本文件由 scripts/generate-data.mjs 生成，请勿手改。`,
        `// 数据来源：beaver-ui@${version} 数据集 ← docs-website/component/${page}.md`,
        `// 重新生成：node scripts/generate-data.mjs`,
        ''
    ].join('\n');
    const body = [
        `const attr: any[] = ${lit(attr)};`,
        `const event: any[] = ${lit(event)};`,
        `const slot: any[] = ${lit(slot)};`,
        '',
        `export default {`,
        `    key: '${tag}',`,
        `    attr,`,
        `    event,`,
        `    slot`,
        `};`,
        ''
    ].join('\n');
    fs.writeFileSync(file, header + body, 'utf-8');
    report.emitted.push(tag);
    claimed.set(tag, page);
    return true;
}

/** 从页面提取通用子表（套件页用） */
function genericSub(pageEntry) {
    return pageEntry.subComponents?.[0];
}

// --- pass 1：每个页面先认领自己的主标签（b-<page>）---
const mainAssign = new Map(); // 页面 → { tag, subName }
for (const pageEntry of pages) {
    if (!['component', 'config'].includes(pageEntry.kind)) continue;
    if (KIT_SPECIAL[pageEntry.name]) continue; // 套件页走 pass 3
    const mainTag = `b-${pageEntry.name}`;
    if (!registry.has(mainTag)) continue; // 指令页 / 无标签页
    const subs = pageEntry.subComponents ?? [];
    const mainSub = subs.find((s) => norm(s.name) === pageEntry.name) ?? subs[0];
    if (!mainSub) continue;
    if (claimed.has(mainTag)) continue;
    emitTag(mainTag, pageEntry.name, mainSub);
    mainAssign.set(pageEntry.name, { tag: mainTag, subName: mainSub.name });
}

// --- pass 2：子组件标签 ---
for (const pageEntry of pages) {
    if (!['component', 'config'].includes(pageEntry.kind)) continue;
    const page = pageEntry.name;
    if (page === 'config-provider') continue; // 其余子表为跨组件配置残留，跳过
    if (KIT_SPECIAL[page]) continue;
    const main = mainAssign.get(page);
    for (const sub of pageEntry.subComponents ?? []) {
        const sk = norm(sub.name);
        if (main && sk === norm(main.subName)) continue;
        // 该子名是另一个文档页 → 标签归那个页面所有
        if (pageNames.has(sk)) continue;
        const candidates = [`b-${sk}`, `b-${page}-${sk}`];
        const tag = candidates.find((t) => registry.has(t) && !claimed.has(t));
        if (!tag) {
            report.skipped.push(`${page} :: ${sub.name}（无注册表标签或已认领）`);
            continue;
        }
        emitTag(tag, page, sub);
    }
}

// --- pass 3：套件页复制 ---
for (const [page, tags] of Object.entries(KIT_SPECIAL)) {
    const pageEntry = pages.find((p) => p.name === page);
    if (!pageEntry) continue;
    const generic = genericSub(pageEntry);
    if (!generic) continue;
    const extraSubs = (pageEntry.subComponents ?? []).slice(1);
    for (const tag of tags) {
        if (!registry.has(tag)) {
            report.skipped.push(`${page} :: 套件标签不在注册表 ${tag}`);
            continue;
        }
        // 通用子表为底，特定子表（标签后缀匹配，如 ListAsync → b-list-async）合并覆盖；
        // 传原始成员，塑形统一由 emitTag 完成
        const specific = extraSubs.find((sub) => norm(sub.name) && tag.endsWith(`-${norm(sub.name)}`));
        const merged = {
            name: tag,
            attributes: dedupeRaw([...(generic.attributes ?? []), ...(specific?.attributes ?? [])]),
            events: dedupeRaw([...(generic.events ?? []), ...(specific?.events ?? [])]),
            slots: dedupeRaw([...(generic.slots ?? []), ...(specific?.slots ?? [])])
        };
        emitTag(tag, page, merged);
    }
}

// ---------------------------------------------------------------------------
// 4. 指令数据（v-loading / v-auto-tip / v-highlight-query）
// ---------------------------------------------------------------------------
const directivePages = DIRECTIVE_PAGES.map((name) => pages.find((p) => p.name === name)).filter(Boolean);
const directives = [];
for (const pageEntry of directivePages) {
    const sub = pageEntry.subComponents?.[0];
    if (!sub) continue;
    const link = `${docsSite}/component/${pageEntry.name}`;
    for (const member of sub.attributes ?? []) {
        directives.push(shapeMember(member, link));
    }
}
// v-infinite-scroll：beaver-ui 保留的 EP 同源指令（当前无文档页，链接省略）
directives.push(
    { key: 'v-infinite-scroll', describe: 'Infinite Scroll 无限滚动指令，滚动至底部时加载更多数据', type: 'function' },
    { key: 'infinite-scroll-disabled', describe: '是否禁用无限滚动', type: 'boolean', default: 'false' },
    { key: 'infinite-scroll-delay', describe: '节流延迟（毫秒）', type: 'number', default: '200' },
    { key: 'infinite-scroll-distance', describe: '触发加载的距离阈值（像素）', type: 'number', default: '0' },
    { key: 'infinite-scroll-immediate', describe: '是否立即执行加载方法，以防初始状态下内容撑不满容器', type: 'boolean', default: 'true' }
);
{
    const header = [
        '// 本文件由 scripts/generate-data.mjs 生成，请勿手改。',
        `// 数据来源：beaver-ui@${version} 数据集（loading / auto-tip / highlight-query 页）+ v-infinite-scroll 手工条目`,
        '// 重新生成：node scripts/generate-data.mjs',
        '',
        'export const directives = ' + JSON.stringify(directives, null, 4) + ';',
        ''
    ].join('\n');
    fs.writeFileSync(directivesPath, header, 'utf-8');
}

// ---------------------------------------------------------------------------
// 5. 生成组件清单 index.ts（注册表顺序）
// ---------------------------------------------------------------------------
const emittedSet = new Set(report.emitted);
const orderedTags = registryOrder.filter((t) => emittedSet.has(t));
const imports = orderedTags
    .map((t) => {
        const varName = t
            .slice(2)
            .split('-')
            .map((w) => w[0].toUpperCase() + w.slice(1))
            .join('');
        return `import ${varName} from './${t}';`;
    })
    .join('\n');
const indexTs = [
    '// 本文件由 scripts/generate-data.mjs 生成，请勿手改。',
    `// 组件总数：${orderedTags.length}（beaver-ui@${version}，标签顺序与 beaver-ui/src/component.ts 注册顺序一致）`,
    '// 重新生成：node scripts/generate-data.mjs',
    '',
    imports,
    '',
    '/**',
    ' * 全部受支持的组件数据。',
    ' * 注意：名称更长、更具体的组件要排在前面，避免被前缀相同的组件抢先匹配。',
    ' */',
    'const components: any[] = [',
    orderedTags.map((t) => {
        const varName = t
            .slice(2)
            .split('-')
            .map((w) => w[0].toUpperCase() + w.slice(1))
            .join('');
        return `    ${varName},`;
    }).join('\n'),
    '];',
    '',
    'export default components;',
    ''
].join('\n');
fs.writeFileSync(path.join(outDir, 'index.ts'), indexTs, 'utf-8');

// ---------------------------------------------------------------------------
// 6. 清理旧数据文件（不在本次产物集合中的 b-*.ts / el-*.ts）
// ---------------------------------------------------------------------------
for (const file of fs.readdirSync(outDir)) {
    if (!file.endsWith('.ts') || file === 'index.ts') continue;
    const tag = file.replace(/\.ts$/, '');
    if (!emittedSet.has(tag)) {
        fs.unlinkSync(path.join(outDir, file));
        console.log(`[清理] ${file}`);
    }
}

// ---------------------------------------------------------------------------
// 7. 报告
// ---------------------------------------------------------------------------
console.log(`数据集版本: beaver-ui@${version}`);
console.log(`注册表标签: ${registryOrder.length}｜生成组件数据: ${report.emitted.length}｜指令条目: ${directives.length}`);
console.log(`空数据跳过 (${report.empty.length}): ${report.empty.join(', ') || '无'}`);
console.log(`子表跳过 (${report.skipped.length}):`);
for (const s of report.skipped) console.log(`  - ${s}`);
const orphan = registryOrder.filter((t) => !emittedSet.has(t));
console.log(`注册表无数据标签 (${orphan.length}): ${orphan.join(', ') || '无'}`);
