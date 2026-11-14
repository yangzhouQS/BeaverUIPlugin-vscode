// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/menu.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'mode',
        describe: '菜单展示模式',
        type: '\'horizontal\' | \'vertical\'',
        default: 'vertical',
        values: [
            'horizontal',
            'vertical'
        ],
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    },
    {
        key: 'collapse',
        describe: '是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    },
    {
        key: 'ellipsis',
        describe: '是否省略多余的子项（仅在横向模式生效）',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    },
    {
        key: 'ellipsis-icon',
        describe: '自定义省略图标 (仅在水平模式下可用)',
        type: 'string / Component',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    },
    {
        key: 'popper-offset',
        describe: '弹出层的偏移量(对所有子菜单有效)',
        type: 'number',
        default: '6',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    },
    {
        key: 'default-active',
        describe: '页面加载时默认激活菜单的 index',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    },
    {
        key: 'default-openeds',
        describe: '默认打开的 sub-menu 的 index 的数组',
        type: 'string[]',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    },
    {
        key: 'unique-opened',
        describe: '是否只保持一个子菜单的展开',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    },
    {
        key: 'menu-trigger',
        describe: '子菜单打开的触发方式，只在 mode 为 horizontal 时有效。',
        type: '\'hover\' | \'click\'',
        default: 'hover',
        values: [
            'hover',
            'click'
        ],
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    },
    {
        key: 'router',
        describe: '是否启用 vue-router 模式。 启用该模式会在激活导航时以 index 作为 path 进行路由跳转 使用 default-active 来设置加载时的激活项。',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    },
    {
        key: 'collapse-transition',
        describe: '是否开启折叠动画',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    },
    {
        key: 'popper-effect',
        describe: 'Tooltip 主题，内置了 dark / light 两种主题，当菜单折叠时生效。',
        type: '\'dark\' | \'light\' / string',
        default: 'dark',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    },
    {
        key: 'close-on-click-outside',
        describe: '可选，单击外部时是否折叠菜单',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    },
    {
        key: 'popper-class',
        describe: '用于所有弹出菜单和标题提示的自定义类名',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    },
    {
        key: 'popper-style',
        describe: '用于所有弹出菜单和标题提示的自定义样式',
        type: 'string / object',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    },
    {
        key: 'show-timeout',
        describe: '菜单出现前的延迟',
        type: 'number',
        default: '300',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    },
    {
        key: 'hide-timeout',
        describe: '菜单消失前的延迟',
        type: 'number',
        default: '300',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    },
    {
        key: 'background-color',
        describe: '菜单的背景颜色 (十六进制格式) (推荐在样式类中使用 --b-menu-bg-color)（自 deprecated 版本）【已废弃】',
        type: 'string',
        default: '#ffffff',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    },
    {
        key: 'text-color',
        describe: '菜单的文字颜色 (十六进制格式) (推荐在样式类中使用 --b-menu-text-color)（自 deprecated 版本）【已废弃】',
        type: 'string',
        default: '#303133',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    },
    {
        key: 'active-text-color',
        describe: '活动菜单项的文本颜色（十六进制格式）（推荐使用 css var --b-menu-active-color）（自 deprecated 版本）【已废弃】',
        type: 'string',
        default: '#409eff',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    },
    {
        key: 'persistent',
        describe: '当菜单处于非活动状态且 persistent 为 false 时，下拉菜单将被销毁',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-attributes'
    }
];
const event: any[] = [
    {
        key: '@select',
        describe: '菜单激活回调',
        type: 'MenuSelectEvent',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-events'
    },
    {
        key: '@open',
        describe: 'sub-menu 展开的回调',
        type: 'MenuOpenEvent',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-events'
    },
    {
        key: '@close',
        describe: 'sub-menu 收起的回调',
        type: 'MenuCloseEvent',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/menu#menu-slots'
    }
];

export default {
    key: 'b-menu',
    attr,
    event,
    slot
};
