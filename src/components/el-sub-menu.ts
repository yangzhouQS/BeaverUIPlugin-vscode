const attr = [
    {
        key: 'index',
        describe: '唯一标志。',
        type: 'string',
        default: '—'
    },
    {
        key: 'popper-class',
        describe: '为 popper 添加类名。',
        type: 'string',
        default: '—'
    },
    {
        key: 'popper-style',
        describe: '为 popper 添加自定义样式（2.11.5 版本新增）。',
        type: 'string / object',
        default: '—'
    },
    {
        key: 'show-timeout',
        describe: '子菜单出现之前的延迟，(继承 menu 的 show-timeout 配置)。',
        type: 'number',
        default: '—'
    },
    {
        key: 'hide-timeout',
        describe: '子菜单消失之前的延迟，(继承 menu 的 hide-timeout 配置)。',
        type: 'number',
        default: '—'
    },
    {
        key: 'disabled',
        describe: '是否禁用。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'teleported',
        describe: '是否将弹出菜单挂载到 body 上，第一级SubMenu默认值为 true，其他SubMenus 的值为 false。',
        type: 'boolean',
        default: 'undefined'
    },
    {
        key: 'popper-offset',
        describe: '弹出窗口的偏移量 (覆盖 popper的菜单)。',
        type: 'number',
        default: '—'
    },
    {
        key: 'expand-close-icon',
        describe: '父菜单展开且子菜单关闭时的图标， expand-close-icon 和 expand-open-icon 需要一起配置才能生效。',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'expand-open-icon',
        describe: '父菜单展开且子菜单打开时的图标， expand-open-icon 和 expand-close-icon 需要一起配置才能生效。',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'collapse-close-icon',
        describe: '父菜单收起且子菜单关闭时的图标， collapse-close-icon 和 collapse-open-icon 需要一起配置才能生效。',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'collapse-open-icon',
        describe: '父菜单收起且子菜单打开时的图标， collapse-open-icon 和 collapse-close-icon 需要一起配置才能生效。',
        type: 'string / Component',
        default: '—'
    }
];
const event: any[] = [];
const slot = [
    {
        key: 'default',
        describe: '自定义默认内容'
    },
    {
        key: 'title',
        describe: '标题内容'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/menu.html#submenu-%E5%B1%9E%E6%80%A7';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/menu.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-sub-menu',
    attr,
    event,
    slot
};
