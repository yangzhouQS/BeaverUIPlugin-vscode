// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/tabs.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '绑定值，选中选项卡的 name，默认值是第一个 tab 的 name',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tabs-attributes'
    },
    {
        key: 'default-value',
        describe: '在初始渲染时处于激活状态的标签的值。 （避免初始化时变动）',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tabs-attributes'
    },
    {
        key: 'type',
        describe: '风格类型',
        type: '\'\' | \'card\' | \'border-card\'',
        default: '\'\'',
        values: [
            'card',
            'border-card'
        ],
        link: 'https://beaver-ui.yearrow.com/component/tabs#tabs-attributes'
    },
    {
        key: 'closable',
        describe: '标签是否可关闭',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tabs-attributes'
    },
    {
        key: 'addable',
        describe: '标签是否可增加',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tabs-attributes'
    },
    {
        key: 'editable',
        describe: '标签是否同时可增加和关闭',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tabs-attributes'
    },
    {
        key: 'tab-position',
        describe: '选项卡所在位置',
        type: '\'top\' | \'right\' | \'bottom\' | \'left\'',
        default: 'top',
        values: [
            'top',
            'right',
            'bottom',
            'left'
        ],
        link: 'https://beaver-ui.yearrow.com/component/tabs#tabs-attributes'
    },
    {
        key: 'stretch',
        describe: '标签的宽度是否自撑开',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tabs-attributes'
    },
    {
        key: 'before-leave',
        describe: '切换标签之前的钩子函数， 若返回 false 或者返回被 reject 的 Promise ，则阻止切换。',
        type: '(activeName: TabPaneName, oldActiveName: TabPaneName) => Awaitable<void | boolean>',
        default: '() => true',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tabs-attributes'
    },
    {
        key: 'tabindex',
        describe: 'tabs 的 tabindex',
        type: 'string / number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tabs-attributes'
    }
];
const event: any[] = [
    {
        key: '@tab-click',
        describe: 'tab 被选中时触发',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tabs-events'
    },
    {
        key: '@tab-change',
        describe: 'activeName 改变时触发',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tabs-events'
    },
    {
        key: '@tab-remove',
        describe: '点击 tab 移除按钮时触发',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tabs-events'
    },
    {
        key: '@tab-add',
        describe: '点击 tab 新增按钮时触发',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tabs-events'
    },
    {
        key: '@edit',
        describe: '点击 tab 的新增或移除按钮后触发',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tabs-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '默认插槽',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tabs-slots'
    },
    {
        key: 'add-icon',
        describe: '自定义添加按钮图标',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tabs-slots'
    },
    {
        key: 'addIcon',
        describe: '自定义添加按钮图标（自 deprecated 版本）【已废弃】',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tabs-slots'
    }
];

export default {
    key: 'b-tabs',
    attr,
    event,
    slot
};
