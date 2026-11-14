// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/breadcrumb.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'separator',
        describe: '分隔符',
        type: 'string',
        default: '/',
        link: 'https://beaver-ui.yearrow.com/component/breadcrumb#breadcrumb-attributes'
    },
    {
        key: 'separator-icon',
        describe: '图标分隔符的组件或组件名',
        type: 'string / Component',
        link: 'https://beaver-ui.yearrow.com/component/breadcrumb#breadcrumb-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/breadcrumb#breadcrumb-slots'
    }
];

export default {
    key: 'b-breadcrumb',
    attr,
    event,
    slot
};
