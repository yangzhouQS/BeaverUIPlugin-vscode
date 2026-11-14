// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/menu.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'index',
        describe: '唯一标志（自 required 版本）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-item-attributes'
    },
    {
        key: 'route',
        describe: 'Vue Route 路由位置参数',
        type: 'string / object',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-item-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-item-attributes'
    }
];
const event: any[] = [
    {
        key: '@click',
        describe: '点击菜单项时回调函数, 参数为菜单项实例',
        type: '(item: MenuItemRegistered) => void',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-item-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-item-slots'
    },
    {
        key: 'title',
        describe: '自定义标题内容',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-item-slots'
    }
];

export default {
    key: 'b-menu-item',
    attr,
    event,
    slot
};
