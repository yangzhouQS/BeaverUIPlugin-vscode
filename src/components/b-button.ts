// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/button.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'size',
        describe: '尺寸',
        type: '\'large\' | \'default\' | \'small\'',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/button#button-attributes'
    },
    {
        key: 'type',
        describe: '按钮类型，在设置color时，后者优先。',
        type: '\'default\' | \'primary\' | \'success\' | \'warning\' | \'danger\' | \'info\' | \'\' | \'text\' (deprecated)',
        values: [
            'default',
            'primary',
            'success',
            'warning',
            'danger',
            'info'
        ],
        link: 'https://beaver-ui.yearrow.com/component/button#button-attributes'
    },
    {
        key: 'plain',
        describe: '是否为朴素按钮',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/button#button-attributes'
    },
    {
        key: 'text',
        describe: '是否为文字按钮（自 2.2.0 版本）',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/button#button-attributes'
    },
    {
        key: 'bg',
        describe: '是否显示文字按钮背景颜色',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/button#button-attributes'
    },
    {
        key: 'link',
        describe: '是否为链接按钮',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/button#button-attributes'
    },
    {
        key: 'round',
        describe: '是否为圆角按钮',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/button#button-attributes'
    },
    {
        key: 'circle',
        describe: '是否为圆形按钮',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/button#button-attributes'
    },
    {
        key: 'dashed',
        describe: '是否是虚线按钮（自 2.13.3 版本）',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/button#button-attributes'
    },
    {
        key: 'loading',
        describe: '是否为加载中状态',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/button#button-attributes'
    },
    {
        key: 'loading-icon',
        describe: '自定义加载中状态图标组件',
        type: 'string / Component',
        default: 'Loading',
        link: 'https://beaver-ui.yearrow.com/component/button#button-attributes'
    },
    {
        key: 'disabled',
        describe: '按钮是否为禁用状态',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/button#button-attributes'
    },
    {
        key: 'icon',
        describe: '图标组件',
        type: 'string / Component',
        link: 'https://beaver-ui.yearrow.com/component/button#button-attributes'
    },
    {
        key: 'autofocus',
        describe: '原生 autofocus 属性',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/button#button-attributes'
    },
    {
        key: 'native-type',
        describe: '原生 type 属性',
        type: '\'button\' | \'submit\' | \'reset\'',
        default: 'button',
        values: [
            'button',
            'submit',
            'reset'
        ],
        link: 'https://beaver-ui.yearrow.com/component/button#button-attributes'
    },
    {
        key: 'auto-insert-space',
        describe: '两个中文字符之间自动插入空格(仅当文本长度为 2 且所有字符均为中文时才生效)',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/button#button-attributes'
    },
    {
        key: 'color',
        describe: '自定义按钮颜色, 并自动计算 hover 和 active 触发后的颜色 自 ^(2.13.7) 起，支持 link/text 按钮。',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/button#button-attributes'
    },
    {
        key: 'dark',
        describe: 'dark 模式, 意味着自动设置 color 为 dark 模式的颜色',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/button#button-attributes'
    },
    {
        key: 'tag',
        describe: '自定义元素标签',
        type: 'string / Component',
        default: 'button',
        link: 'https://beaver-ui.yearrow.com/component/button#button-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/button#button-slots'
    },
    {
        key: 'loading',
        describe: '自定义加载中组件',
        link: 'https://beaver-ui.yearrow.com/component/button#button-slots'
    },
    {
        key: 'icon',
        describe: '自定义图标组件',
        link: 'https://beaver-ui.yearrow.com/component/button#button-slots'
    }
];

export default {
    key: 'b-button',
    attr,
    event,
    slot
};
