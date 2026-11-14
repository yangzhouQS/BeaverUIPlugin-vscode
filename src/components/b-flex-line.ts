// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/flex-line.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'left-width',
        describe: '左区宽度，数字按 px 处理',
        type: 'string / number',
        default: '50%',
        link: 'https://beaver-ui.yearrow.com/component/flex-line#flexline-attributes'
    },
    {
        key: 'gap',
        describe: '左右区域间距，数字按 px 处理',
        type: 'string / number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/flex-line#flexline-attributes'
    },
    {
        key: 'left-padding',
        describe: '左区是否启用内边距',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/flex-line#flexline-attributes'
    },
    {
        key: 'left-clear-padding',
        describe: '清除左区指定方向内边距',
        type: '(\'top\' | \'right\' | \'bottom\' | \'left\')[]',
        default: '[]',
        values: [
            'right',
            'bottom'
        ],
        link: 'https://beaver-ui.yearrow.com/component/flex-line#flexline-attributes'
    },
    {
        key: 'right-padding',
        describe: '右区是否启用内边距',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/flex-line#flexline-attributes'
    },
    {
        key: 'right-clear-padding',
        describe: '清除右区指定方向内边距',
        type: '(\'top\' | \'right\' | \'bottom\' | \'left\')[]',
        default: '[]',
        values: [
            'right',
            'bottom'
        ],
        link: 'https://beaver-ui.yearrow.com/component/flex-line#flexline-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '左区内容（未传入时不渲染）',
        link: 'https://beaver-ui.yearrow.com/component/flex-line#flexline-slots'
    },
    {
        key: 'right',
        describe: '右区内容（未传入时不渲染）',
        link: 'https://beaver-ui.yearrow.com/component/flex-line#flexline-slots'
    }
];

export default {
    key: 'b-flex-line',
    attr,
    event,
    slot
};
