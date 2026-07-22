"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '绑定值，选中选项卡的 name，默认值是第一个 tab 的 name',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '绑定值，选中选项卡的 name，默认值是第一个 tab 的 name',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'default-value',
        describe: '初始渲染时处于激活状态的标签的值（避免初始化时变动），2.11.9 版本新增',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'type',
        describe: '风格类型',
        type: 'enum',
        default: '\'\'',
        values: ['card', 'border-card']
    },
    {
        key: 'closable',
        describe: '标签是否可关闭',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'addable',
        describe: '标签是否可增加',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'editable',
        describe: '标签是否同时可增加和关闭',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'tab-position',
        describe: '选项卡所在位置',
        type: 'enum',
        default: 'top',
        values: ['top', 'right', 'bottom', 'left']
    },
    {
        key: 'stretch',
        describe: '标签的宽度是否自撑开',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'before-leave',
        describe: '切换标签之前的钩子函数，若返回 false 或者返回被 reject 的 Promise，则阻止切换。',
        type: 'function',
        default: '() => true'
    },
    {
        key: 'tabindex',
        describe: 'tabs 的 tabindex，2.11.7 版本新增',
        type: 'string / number',
        default: '0'
    }
];
const event = [
    {
        key: '@tab-click',
        describe: 'tab 被选中时触发',
        type: 'function'
    },
    {
        key: '@tab-change',
        describe: 'activeName 改变时触发',
        type: 'function'
    },
    {
        key: '@tab-remove',
        describe: '点击 tab 移除按钮时触发',
        type: 'function'
    },
    {
        key: '@tab-add',
        describe: '点击 tab 新增按钮时触发',
        type: 'function'
    },
    {
        key: '@edit',
        describe: '点击 tab 的新增或移除按钮后触发',
        type: 'function'
    }
];
const slot = [
    {
        key: 'default',
        describe: '自定义默认内容'
    },
    {
        key: 'add-icon',
        describe: 'customize add button icon'
    },
    {
        key: 'add-icon',
        describe: 'customize add button icon'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/tabs.html#tabs-%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/tabs.html#tabs-%E4%BA%8B%E4%BB%B6';
});
slot.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/tabs.html#%E6%8F%92%E6%A7%BD';
});
exports.default = {
    key: 'el-tabs',
    attr,
    event,
    slot
};
//# sourceMappingURL=el-tabs.js.map