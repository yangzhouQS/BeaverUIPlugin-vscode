// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/label-extend.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'content',
        describe: '显示文本（为空时显示 placeholder）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/label-extend#labelextend-attributes'
    },
    {
        key: 'placeholder',
        describe: '空值占位文本（占位态不触发溢出提示）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/label-extend#labelextend-attributes'
    },
    {
        key: 'placement',
        describe: '溢出提示弹出位置',
        type: 'string',
        default: 'top-start',
        link: 'https://beaver-ui.yearrow.com/component/label-extend#labelextend-attributes'
    },
    {
        key: 'effect',
        describe: '溢出提示主题',
        type: 'string',
        default: 'dark',
        link: 'https://beaver-ui.yearrow.com/component/label-extend#labelextend-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [];

export default {
    key: 'b-label-extend',
    attr,
    event,
    slot
};
