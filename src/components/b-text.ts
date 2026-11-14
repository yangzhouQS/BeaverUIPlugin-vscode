// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/text.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'type',
        describe: '类型',
        type: '\'primary\' | \'success\' | \'warning\' | \'danger\' | \'info\'',
        values: [
            'primary',
            'success',
            'warning',
            'danger',
            'info'
        ],
        link: 'https://beaver-ui.yearrow.com/component/text#text-attributes'
    },
    {
        key: 'size',
        describe: '大小',
        type: '\'large\' | \'default\' | \'small\'',
        default: 'default',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/text#text-attributes'
    },
    {
        key: 'truncated',
        describe: '显示省略号',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/text#text-attributes'
    },
    {
        key: 'line-clamp',
        describe: '最大行数',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/text#text-attributes'
    },
    {
        key: 'tag',
        describe: '自定义元素标签',
        type: 'string',
        default: 'span',
        link: 'https://beaver-ui.yearrow.com/component/text#text-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '默认内容',
        link: 'https://beaver-ui.yearrow.com/component/text#text-slots'
    }
];

export default {
    key: 'b-text',
    attr,
    event,
    slot
};
