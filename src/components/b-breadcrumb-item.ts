// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/breadcrumb.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'to',
        describe: '路由跳转目标，同 vue-router 的 to 属性',
        type: 'string / RouteLocationRaw',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/breadcrumb#breadcrumbitem-attributes'
    },
    {
        key: 'replace',
        describe: '如果设置该属性为 true, 导航将不会留下历史记录',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/breadcrumb#breadcrumbitem-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/breadcrumb#breadcrumbitem-slots'
    }
];

export default {
    key: 'b-breadcrumb-item',
    attr,
    event,
    slot
};
