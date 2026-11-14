// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/collapse.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '当前活动面板，在手风琴模式下其类型是string，在其他模式下是array',
        type: 'string / array',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/collapse#collapse-attributes'
    },
    {
        key: 'accordion',
        describe: '是否手风琴模式',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/collapse#collapse-attributes'
    },
    {
        key: 'expand-icon-position',
        describe: '设置展开图标位置',
        type: '\'left\' | \'right\'',
        default: 'right',
        values: [
            'left',
            'right'
        ],
        link: 'https://beaver-ui.yearrow.com/component/collapse#collapse-attributes'
    },
    {
        key: 'before-collapse',
        describe: '折叠状态更改之前的折叠钩子。 返回 false 或者返回 Promise 且被 reject 则停止切换',
        type: '() => Promise<boolean> | boolean',
        link: 'https://beaver-ui.yearrow.com/component/collapse#collapse-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '切换当前活动面板，在手风琴模式下其类型是string，在其他模式下是array',
        type: '(activeNames: array | string) => void',
        link: 'https://beaver-ui.yearrow.com/component/collapse#collapse-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/collapse#collapse-slots'
    }
];

export default {
    key: 'b-collapse',
    attr,
    event,
    slot
};
