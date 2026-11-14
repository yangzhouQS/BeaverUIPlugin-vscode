// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/navigation.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'routers',
        describe: '面包屑导航项列表',
        type: 'NavigationRouterItem[]',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/navigation#navigation-attributes'
    },
    {
        key: 'height',
        describe: '容器高度，数字按 px 处理',
        type: 'string / number',
        default: '20px',
        link: 'https://beaver-ui.yearrow.com/component/navigation#navigation-attributes'
    },
    {
        key: 'separator',
        describe: '分隔符',
        type: 'string',
        default: '/',
        link: 'https://beaver-ui.yearrow.com/component/navigation#navigation-attributes'
    },
    {
        key: 'title',
        describe: '展示标题',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/navigation#navigation-attributes'
    },
    {
        key: 'to',
        describe: '跳转目标，字符串路径或对象',
        type: 'string / RouteLocationRaw',
        link: 'https://beaver-ui.yearrow.com/component/navigation#navigation-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'item',
        describe: '自定义导航项渲染',
        link: 'https://beaver-ui.yearrow.com/component/navigation#navigation-slots'
    },
    {
        key: 'tool',
        describe: '右侧工具区内容',
        link: 'https://beaver-ui.yearrow.com/component/navigation#navigation-slots'
    }
];

export default {
    key: 'b-navigation',
    attr,
    event,
    slot
};
