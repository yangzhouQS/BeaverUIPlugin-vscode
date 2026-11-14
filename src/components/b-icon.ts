// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/icon.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'color',
        describe: 'svg 的 fill 颜色',
        type: 'string',
        default: '继承颜色',
        link: 'https://beaver-ui.yearrow.com/component/icon#icon-attributes'
    },
    {
        key: 'size',
        describe: 'SVG 图标的大小，size x size',
        type: 'number / string',
        default: '继承字体大小',
        link: 'https://beaver-ui.yearrow.com/component/icon#icon-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/icon#icon-slots'
    }
];

export default {
    key: 'b-icon',
    attr,
    event,
    slot
};
