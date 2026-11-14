// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/menu.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'index',
        describe: '唯一标志（自 required 版本）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/menu#submenu-attributes'
    },
    {
        key: 'popper-class',
        describe: '为 popper 添加类名',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/menu#submenu-attributes'
    },
    {
        key: 'popper-style',
        describe: '为 popper 添加自定义样式',
        type: 'string / object',
        link: 'https://beaver-ui.yearrow.com/component/menu#submenu-attributes'
    },
    {
        key: 'show-timeout',
        describe: '子菜单出现之前的延迟，(继承 menu 的 show-timeout 配置)',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/menu#submenu-attributes'
    },
    {
        key: 'hide-timeout',
        describe: '子菜单消失之前的延迟，(继承 menu 的 hide-timeout 配置)',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/menu#submenu-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/menu#submenu-attributes'
    },
    {
        key: 'teleported',
        describe: '是否将弹出菜单挂载到 body 上，第一级SubMenu默认值为 true，其他SubMenus 的值为 false',
        type: 'boolean',
        default: 'undefined',
        link: 'https://beaver-ui.yearrow.com/component/menu#submenu-attributes'
    },
    {
        key: 'popper-offset',
        describe: '弹出窗口的偏移量 (覆盖 popper的菜单)',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/menu#submenu-attributes'
    },
    {
        key: 'expand-close-icon',
        describe: '父菜单展开且子菜单关闭时的图标， expand-close-icon 和 expand-open-icon 需要一起配置才能生效',
        type: 'string / Component',
        link: 'https://beaver-ui.yearrow.com/component/menu#submenu-attributes'
    },
    {
        key: 'expand-open-icon',
        describe: '父菜单展开且子菜单打开时的图标， expand-open-icon 和 expand-close-icon 需要一起配置才能生效',
        type: 'string / Component',
        link: 'https://beaver-ui.yearrow.com/component/menu#submenu-attributes'
    },
    {
        key: 'collapse-close-icon',
        describe: '父菜单收起且子菜单关闭时的图标， collapse-close-icon 和 collapse-open-icon 需要一起配置才能生效',
        type: 'string / Component',
        link: 'https://beaver-ui.yearrow.com/component/menu#submenu-attributes'
    },
    {
        key: 'collapse-open-icon',
        describe: '父菜单收起且子菜单打开时的图标， collapse-open-icon 和 collapse-close-icon 需要一起配置才能生效',
        type: 'string / Component',
        link: 'https://beaver-ui.yearrow.com/component/menu#submenu-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/menu#submenu-slots'
    },
    {
        key: 'title',
        describe: '自定义标题内容',
        link: 'https://beaver-ui.yearrow.com/component/menu#submenu-slots'
    }
];

export default {
    key: 'b-sub-menu',
    attr,
    event,
    slot
};
