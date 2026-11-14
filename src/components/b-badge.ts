// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/badge.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'value',
        describe: '显示值',
        type: 'string / number',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/badge#badge-attributes'
    },
    {
        key: 'max',
        describe: '最大值，超过最大值会显示 {max}+。 只有当 value 是数字类型时起作用。',
        type: 'number',
        default: '99',
        link: 'https://beaver-ui.yearrow.com/component/badge#badge-attributes'
    },
    {
        key: 'is-dot',
        describe: '是否显示小圆点。',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/badge#badge-attributes'
    },
    {
        key: 'hidden',
        describe: '是否隐藏 Badge。',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/badge#badge-attributes'
    },
    {
        key: 'type',
        describe: 'badge 类型。',
        type: '\'primary\' | \'success\' | \'warning\' | \'danger\' | \'info\'',
        default: 'danger',
        values: [
            'primary',
            'success',
            'warning',
            'danger',
            'info'
        ],
        link: 'https://beaver-ui.yearrow.com/component/badge#badge-attributes'
    },
    {
        key: 'show-zero',
        describe: '值为零时是否显示 Badge',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/badge#badge-attributes'
    },
    {
        key: 'color',
        describe: '背景色',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/badge#badge-attributes'
    },
    {
        key: 'offset',
        describe: 'badge 的偏移量',
        type: '[number, number]',
        default: '[0, 0]',
        link: 'https://beaver-ui.yearrow.com/component/badge#badge-attributes'
    },
    {
        key: 'badge-style',
        describe: '自定义 badge 样式',
        type: 'CSSProperties',
        link: 'https://beaver-ui.yearrow.com/component/badge#badge-attributes'
    },
    {
        key: 'badge-class',
        describe: '自定义 badge 类名',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/badge#badge-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        type: '-',
        link: 'https://beaver-ui.yearrow.com/component/badge#badge-slots'
    },
    {
        key: 'content',
        describe: '自定义显示内容',
        type: '{ value: string }',
        link: 'https://beaver-ui.yearrow.com/component/badge#badge-slots'
    }
];

export default {
    key: 'b-badge',
    attr,
    event,
    slot
};
