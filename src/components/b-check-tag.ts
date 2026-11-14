// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/tag.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'checked',
        describe: '是否选中',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tag#checktag-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tag#checktag-attributes'
    },
    {
        key: 'type',
        describe: 'CheckTag 类型',
        type: '\'primary\' | \'success\' | \'info\' | \'warning\' | \'danger\'',
        default: 'primary',
        values: [
            'primary',
            'success',
            'info',
            'warning',
            'danger'
        ],
        link: 'https://beaver-ui.yearrow.com/component/tag#checktag-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '点击 Check Tag 时触发的事件',
        type: '(value: boolean) => void',
        link: 'https://beaver-ui.yearrow.com/component/tag#checktag-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/tag#checktag-slots'
    }
];

export default {
    key: 'b-check-tag',
    attr,
    event,
    slot
};
