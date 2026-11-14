// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/timeline.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'timestamp',
        describe: '时间戳',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/timeline#timeline-item-attributes'
    },
    {
        key: 'hide-timestamp',
        describe: '是否隐藏时间戳',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/timeline#timeline-item-attributes'
    },
    {
        key: 'center',
        describe: '是否垂直居中',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/timeline#timeline-item-attributes'
    },
    {
        key: 'placement',
        describe: '时间戳位置',
        type: '\'top\' | \'bottom\'',
        default: 'bottom',
        values: [
            'top',
            'bottom'
        ],
        link: 'https://beaver-ui.yearrow.com/component/timeline#timeline-item-attributes'
    },
    {
        key: 'type',
        describe: '节点类型',
        type: '\'primary\' | \'success\' | \'warning\' | \'danger\' | \'info\'',
        default: '\'\'',
        values: [
            'primary',
            'success',
            'warning',
            'danger',
            'info'
        ],
        link: 'https://beaver-ui.yearrow.com/component/timeline#timeline-item-attributes'
    },
    {
        key: 'color',
        describe: '节点颜色',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/timeline#timeline-item-attributes'
    },
    {
        key: 'size',
        describe: '节点尺寸',
        type: '\'normal\' | \'large\'',
        default: 'normal',
        values: [
            'normal',
            'large'
        ],
        link: 'https://beaver-ui.yearrow.com/component/timeline#timeline-item-attributes'
    },
    {
        key: 'icon',
        describe: '自定义图标',
        type: 'string / Component',
        link: 'https://beaver-ui.yearrow.com/component/timeline#timeline-item-attributes'
    },
    {
        key: 'hollow',
        describe: '是否空心点',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/timeline#timeline-item-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义 timeline 项的默认内容',
        link: 'https://beaver-ui.yearrow.com/component/timeline#timeline-item-slots'
    },
    {
        key: 'dot',
        describe: '为时间线项目自定义已定义的节点',
        link: 'https://beaver-ui.yearrow.com/component/timeline#timeline-item-slots'
    }
];

export default {
    key: 'b-timeline-item',
    attr,
    event,
    slot
};
