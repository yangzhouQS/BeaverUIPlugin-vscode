"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'locale',
        describe: '国际化语言包对象',
        type: 'object',
        default: 'en'
    },
    {
        key: 'size',
        describe: '全局组件尺寸',
        type: 'enum',
        default: 'default'
    },
    {
        key: 'z-index',
        describe: '全局初始 zIndex',
        type: 'number',
        default: '—'
    },
    {
        key: 'namespace',
        describe: '全局组件类名前缀（配合 $namespace 使用）',
        type: 'string',
        default: 'el'
    },
    {
        key: 'button',
        describe: '按钮相关配置，见下表',
        type: 'object',
        default: '见下表'
    },
    {
        key: 'link',
        describe: '链接相关配置，见下表',
        type: 'object',
        default: '见下表'
    },
    {
        key: 'dialog',
        describe: '对话框相关配置，见下表',
        type: 'object',
        default: '见下表'
    },
    {
        key: 'message',
        describe: '消息相关配置，见下表',
        type: 'object',
        default: '见下表'
    },
    {
        key: 'experimental-features',
        describe: '实验阶段的特性，所有特性默认设置为 false',
        type: 'object',
        default: '—'
    },
    {
        key: 'empty-values',
        describe: '组件的全局空值',
        type: 'array',
        default: '—'
    },
    {
        key: 'value-on-clear',
        describe: '全局清空返回值',
        type: 'string / number / boolean / function',
        default: '—'
    },
    {
        key: 'table',
        describe: '表格相关配置，见下表',
        type: 'object',
        default: '见下表'
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/config-provider.html#config-provider-%E5%B1%9E%E6%80%A7';
});
exports.default = {
    key: 'el-config-provider',
    attr,
    event
};
//# sourceMappingURL=el-config-provider.js.map