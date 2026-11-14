// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/panel.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'header',
        describe: '标题行形态，hidden 时隐藏标题行（历史 false 输入兼容归一，推荐 hidden）',
        type: '\'default\' | \'card\' | \'hidden\'',
        default: 'default',
        values: [
            'default',
            'card',
            'hidden'
        ],
        link: 'https://beaver-ui.yearrow.com/component/panel#panel-attributes'
    },
    {
        key: 'header-border',
        describe: '是否显示标题行底部边框',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/panel#panel-attributes'
    },
    {
        key: 'title',
        describe: '标题文本，可通过 slot#title 覆盖',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/panel#panel-attributes'
    },
    {
        key: 'padding-size',
        describe: '内容区内边距档位',
        type: '\'large\' | \'default\' | \'small\'',
        default: 'small',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/panel#panel-attributes'
    },
    {
        key: 'clear-padding',
        describe: '清除内容区指定方向的内边距',
        type: '(\'top\' | \'right\' | \'bottom\' | \'left\')[]',
        default: '[]',
        values: [
            'right',
            'bottom'
        ],
        link: 'https://beaver-ui.yearrow.com/component/panel#panel-attributes'
    },
    {
        key: 'border',
        describe: '是否显示边框',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/panel#panel-attributes'
    },
    {
        key: 'shadow',
        describe: '阴影显示时机',
        type: '\'always\' | \'hover\' | \'never\'',
        default: 'never',
        values: [
            'always',
            'hover',
            'never'
        ],
        link: 'https://beaver-ui.yearrow.com/component/panel#panel-attributes'
    },
    {
        key: 'background',
        describe: '是否显示背景色',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/panel#panel-attributes'
    },
    {
        key: 'height',
        describe: '容器高度',
        type: 'string',
        default: '\'100%\'',
        link: 'https://beaver-ui.yearrow.com/component/panel#panel-attributes'
    },
    {
        key: 'body-class',
        describe: '内容区自定义类名',
        type: 'string / object / array',
        link: 'https://beaver-ui.yearrow.com/component/panel#panel-attributes'
    },
    {
        key: 'body-style',
        describe: '内容区自定义样式',
        type: 'string / object / StyleValue',
        link: 'https://beaver-ui.yearrow.com/component/panel#panel-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '内容区',
        link: 'https://beaver-ui.yearrow.com/component/panel#panel-slots'
    },
    {
        key: 'title',
        describe: '自定义标题内容，覆盖 title 属性',
        link: 'https://beaver-ui.yearrow.com/component/panel#panel-slots'
    },
    {
        key: 'tool',
        describe: '标题行右侧工具区',
        link: 'https://beaver-ui.yearrow.com/component/panel#panel-slots'
    }
];

export default {
    key: 'b-panel',
    attr,
    event,
    slot
};
