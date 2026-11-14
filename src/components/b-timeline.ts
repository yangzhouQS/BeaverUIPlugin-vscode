// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/timeline.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'reverse',
        describe: '是否逆序排序',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/timeline#timeline-attributes'
    },
    {
        key: 'mode',
        describe: '时间线与内容的相对位置（自 2.13.1 版本）',
        type: '\'start\' | \'alternate\' | \'alternate-reverse\' | \'end\'',
        default: 'start',
        values: [
            'start',
            'alternate',
            'alternate-reverse',
            'end'
        ],
        link: 'https://beaver-ui.yearrow.com/component/timeline#timeline-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: 'timeline 组件的自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/timeline#timeline-slots'
    }
];

export default {
    key: 'b-timeline',
    attr,
    event,
    slot
};
