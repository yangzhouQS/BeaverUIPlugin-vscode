// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/list-kit.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'list-data',
        describe: '{ result: any[], count: number } 信封',
        type: 'object',
        link: 'https://beaver-ui.yearrow.com/component/list-kit#b-list-async-attributes'
    },
    {
        key: 'loading',
        describe: '加载中',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/list-kit#b-list-async-attributes'
    },
    {
        key: 'height',
        describe: '容器高度',
        type: 'string',
        default: '100%',
        link: 'https://beaver-ui.yearrow.com/component/list-kit#b-list-async-attributes'
    },
    {
        key: 'direction',
        describe: '排列方向',
        type: '\'horizontal\' / \'vertical\'',
        default: 'horizontal',
        link: 'https://beaver-ui.yearrow.com/component/list-kit#b-list-async-attributes'
    },
    {
        key: 'wrap',
        describe: '自动换行',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/list-kit#b-list-async-attributes'
    },
    {
        key: 'fill',
        describe: '撑满整行',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/list-kit#b-list-async-attributes'
    },
    {
        key: 'space-size',
        describe: '间距',
        type: 'number / string / [number, number]',
        default: '组件各异',
        link: 'https://beaver-ui.yearrow.com/component/list-kit#b-list-async-attributes'
    },
    {
        key: 'list-item-props',
        describe: '卡片属性（width/height/border/shadow/background/paddingSize）',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/list-kit#b-list-async-attributes'
    },
    {
        key: 'alignment',
        describe: '对齐方式',
        type: 'string',
        default: '组件各异',
        link: 'https://beaver-ui.yearrow.com/component/list-kit#b-list-async-attributes'
    },
    {
        key: 'fill-ratio',
        describe: 'fill 模式占比',
        type: 'number',
        default: '100',
        link: 'https://beaver-ui.yearrow.com/component/list-kit#b-list-async-attributes'
    },
    {
        key: 'space-style',
        describe: '间距容器样式',
        type: 'string / object',
        default: '\'width: 100%\'',
        link: 'https://beaver-ui.yearrow.com/component/list-kit#b-list-async-attributes'
    },
    {
        key: 'input',
        describe: '初始查询参数（take/draw/order/conditionItems）',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/list-kit#b-list-async-attributes'
    },
    {
        key: 'pagination',
        describe: '分页配置（currentSize/pageSizes/layout）',
        type: 'object',
        link: 'https://beaver-ui.yearrow.com/component/list-kit#b-list-async-attributes'
    }
];
const event: any[] = [
    {
        key: '@reload',
        describe: '翻页/换页大小触发（兼容旧版签名）',
        link: 'https://beaver-ui.yearrow.com/component/list-kit#b-list-async-events'
    },
    {
        key: '@pageChange',
        describe: '(page, pageSize)',
        link: 'https://beaver-ui.yearrow.com/component/list-kit#b-list-async-events'
    }
];
const slot: any[] = [
    {
        key: 'item',
        describe: '列表项内容（必须）',
        link: 'https://beaver-ui.yearrow.com/component/list-kit#b-list-async-slots'
    },
    {
        key: 'pagination',
        describe: '分页条左侧自定义（Async/Report）',
        link: 'https://beaver-ui.yearrow.com/component/list-kit#b-list-async-slots'
    },
    {
        key: 'empty',
        describe: '空数据',
        link: 'https://beaver-ui.yearrow.com/component/list-kit#b-list-async-slots'
    }
];

export default {
    key: 'b-list-async',
    attr,
    event,
    slot
};
