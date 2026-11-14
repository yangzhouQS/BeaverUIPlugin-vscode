// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/list.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'data',
        describe: '列表数据：数组（only / report）或 { result, count } 信封（async / cursor）',
        type: 'array / object',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/list#list-attributes'
    },
    {
        key: 'mode',
        describe: '业务模式，缺省按数据形状推断',
        type: '\'only\' | \'async\' | \'report\' | \'cursor\'',
        values: [
            'only',
            'async',
            'report',
            'cursor'
        ],
        link: 'https://beaver-ui.yearrow.com/component/list#list-attributes'
    },
    {
        key: 'loading',
        describe: '加载中遮罩',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/list#list-attributes'
    },
    {
        key: 'height',
        describe: '容器高度',
        type: 'string / number',
        default: '\'100%\'',
        link: 'https://beaver-ui.yearrow.com/component/list#list-attributes'
    },
    {
        key: 'empty-text',
        describe: '空数据描述文案',
        type: 'string',
        default: '暂无数据',
        link: 'https://beaver-ui.yearrow.com/component/list#list-attributes'
    },
    {
        key: 'item-key',
        describe: '行 key 字段名（推荐配置）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/list#list-attributes'
    },
    {
        key: 'direction',
        describe: '排列方向',
        type: '\'horizontal\' | \'vertical\'',
        default: 'horizontal',
        values: [
            'horizontal',
            'vertical'
        ],
        link: 'https://beaver-ui.yearrow.com/component/list#list-attributes'
    },
    {
        key: 'wrap',
        describe: '是否自动换行',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/list#list-attributes'
    },
    {
        key: 'fill',
        describe: '子项是否撑满整行',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/list#list-attributes'
    },
    {
        key: 'fill-ratio',
        describe: 'fill 模式每行占比',
        type: 'number',
        default: '100',
        link: 'https://beaver-ui.yearrow.com/component/list#list-attributes'
    },
    {
        key: 'space-size',
        describe: '子项间距',
        type: '\'default\' | \'small\' | \'large\' / number / [number, number]',
        default: 'small',
        values: [
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/list#list-attributes'
    },
    {
        key: 'space-style',
        describe: '间距容器自定义样式',
        type: 'string / object',
        link: 'https://beaver-ui.yearrow.com/component/list#list-attributes'
    },
    {
        key: 'alignment',
        describe: '子项对齐方式',
        type: 'string',
        default: 'center',
        link: 'https://beaver-ui.yearrow.com/component/list#list-attributes'
    },
    {
        key: 'item-props',
        describe: '卡片容器属性，见下表',
        type: 'ListItemProps',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/list#list-attributes'
    },
    {
        key: 'pager-config',
        describe: '分页配置，见下表',
        type: 'ListPagerConfig',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/list#list-attributes'
    },
    {
        key: 'input',
        describe: '服务端模式初始查询参数（take 初始每页条数、draw 初始页码，order / conditionItems 透传）',
        type: 'ListQueryInput',
        link: 'https://beaver-ui.yearrow.com/component/list#list-attributes'
    },
    {
        key: 'skip',
        describe: '跳过行数，SQL OFFSET（= 每页条数 × (页码 - 1)）',
        link: 'https://beaver-ui.yearrow.com/component/list#list-attributes'
    },
    {
        key: 'take',
        describe: '取出行数，SQL LIMIT（cursor 模式内部为 pageSize + 1，用于探测下一页）',
        link: 'https://beaver-ui.yearrow.com/component/list#list-attributes'
    },
    {
        key: 'order',
        describe: '排序字段（由 input.order 透传）',
        link: 'https://beaver-ui.yearrow.com/component/list#list-attributes'
    },
    {
        key: 'conditionItems',
        describe: '查询条件（由 input.conditionItems 透传），如 [{ fieldName, op, fieldValue }]',
        link: 'https://beaver-ui.yearrow.com/component/list#list-attributes'
    }
];
const event: any[] = [
    {
        key: '@query-change',
        describe: '服务端模式（async / cursor）翻页、改页大小、refresh() 时派发，参数为平台查询协议',
        link: 'https://beaver-ui.yearrow.com/component/list#list-events'
    },
    {
        key: '@page-change',
        describe: '前端分页（report）翻页、改页大小时派发',
        link: 'https://beaver-ui.yearrow.com/component/list#list-events'
    }
];
const slot: any[] = [
    {
        key: 'item',
        describe: '卡片内容',
        link: 'https://beaver-ui.yearrow.com/component/list#list-slots'
    },
    {
        key: 'empty',
        describe: '自定义空态',
        link: 'https://beaver-ui.yearrow.com/component/list#list-slots'
    },
    {
        key: 'pagination-left',
        describe: '分页栏左侧内容（统计、批量操作）',
        link: 'https://beaver-ui.yearrow.com/component/list#list-slots'
    }
];

export default {
    key: 'b-list',
    attr,
    event,
    slot
};
