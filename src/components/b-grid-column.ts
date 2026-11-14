// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/grid.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'type',
        describe: 'seq 序号 / html 富文本 / checkbox / radio / expand（预留）',
        type: 'string',
        default: 'text',
        link: 'https://beaver-ui.yearrow.com/component/grid#column-attributes'
    },
    {
        key: 'field',
        describe: '字段名 / 标题',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/grid#column-attributes'
    },
    {
        key: 'width',
        describe: '宽度 / 最小宽度',
        type: 'number / string、number',
        link: 'https://beaver-ui.yearrow.com/component/grid#column-attributes'
    },
    {
        key: 'fixed',
        describe: '固定列',
        type: '\'left\' / \'right\' / boolean',
        link: 'https://beaver-ui.yearrow.com/component/grid#column-attributes'
    },
    {
        key: 'align',
        describe: '列级三区对齐',
        type: 'string',
        default: '继承表级',
        link: 'https://beaver-ui.yearrow.com/component/grid#column-attributes'
    },
    {
        key: 'visible',
        describe: '是否显示',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/grid#column-attributes'
    },
    {
        key: 'resizable',
        describe: '列宽拖拽（覆盖 column-config）',
        type: 'boolean',
        link: 'https://beaver-ui.yearrow.com/component/grid#column-attributes'
    },
    {
        key: 'sortable',
        describe: '可排序',
        type: 'boolean',
        link: 'https://beaver-ui.yearrow.com/component/grid#column-attributes'
    },
    {
        key: 'filters',
        describe: '筛选项 [{label, value}]',
        type: 'array',
        link: 'https://beaver-ui.yearrow.com/component/grid#column-attributes'
    },
    {
        key: 'filter-multiple',
        describe: '筛选多选',
        type: 'boolean',
        link: 'https://beaver-ui.yearrow.com/component/grid#column-attributes'
    },
    {
        key: 'formatter',
        describe: '格式化：函数或注册名',
        type: 'function / string',
        link: 'https://beaver-ui.yearrow.com/component/grid#column-attributes'
    },
    {
        key: 'show-overflow',
        describe: '溢出展示：true=\'tooltip\' / \'ellipsis\' / \'title\' / \'tooltip\'（覆盖表级）',
        type: 'boolean / string',
        link: 'https://beaver-ui.yearrow.com/component/grid#column-attributes'
    },
    {
        key: 'tree-node',
        describe: '树展开列',
        type: 'boolean',
        default: '首个字段列',
        link: 'https://beaver-ui.yearrow.com/component/grid#column-attributes'
    },
    {
        key: 'edit-render',
        describe: '编辑器 {name: \'BInput\'/\'BInputNumber\'/\'BSelect\'/\'BDatePicker\'/\'BSwitch\'/自定义 renderer 名, props}',
        type: 'object',
        link: 'https://beaver-ui.yearrow.com/component/grid#column-attributes'
    },
    {
        key: 'edit-rules',
        describe: '校验规则数组',
        type: 'array',
        link: 'https://beaver-ui.yearrow.com/component/grid#column-attributes'
    },
    {
        key: 'class-name',
        describe: '三区类名',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/grid#column-attributes'
    },
    {
        key: 'children',
        describe: '多级表头子列',
        type: 'GridColumnProps[]',
        link: 'https://beaver-ui.yearrow.com/component/grid#column-attributes'
    },
    {
        key: 'slots',
        describe: '插槽函数 default/header/footer',
        type: 'object',
        link: 'https://beaver-ui.yearrow.com/component/grid#column-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [];

export default {
    key: 'b-grid-column',
    attr,
    event,
    slot
};
