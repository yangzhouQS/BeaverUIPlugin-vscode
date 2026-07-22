"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'size',
        describe: '控制头像组中的头像大小',
        type: 'number / enum',
        default: '—'
    },
    {
        key: 'shape',
        describe: '控制头像组中的头像形状',
        type: 'enum',
        default: '—'
    },
    {
        key: 'collapse-avatars',
        describe: '是否折叠头像',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'collapse-avatars-tooltip',
        describe: '是否在鼠标悬停折叠头像的文字时显示所有折叠头像。若要使用此功能，collapse-avatars 必须为 true',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'max-collapse-avatars',
        describe: '需要显示的头像的最大数量。若要使用此功能，collapse-avatars 必须为 true',
        type: 'number',
        default: '1'
    },
    {
        key: 'effect',
        describe: 'tooltip 主题，内置了 dark / light 两种',
        type: 'enum / string',
        default: 'light'
    },
    {
        key: 'placement',
        describe: 'tooltip 的位置',
        type: 'enum',
        default: 'top'
    },
    {
        key: 'popper-class',
        describe: 'tooltip 的自定义类名',
        type: 'string',
        default: "''"
    },
    {
        key: 'popper-style',
        describe: 'tooltip 的自定义样式',
        type: 'string / object',
        default: '—'
    },
    {
        key: 'collapse-class',
        describe: 'collapse-avatar 的自定义类名',
        type: 'string',
        default: "''"
    },
    {
        key: 'collapse-style',
        describe: 'collapse-avatar 的自定义样式',
        type: 'string / object',
        default: '—'
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/avatar.html#avatargroup-%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/avatar.html#avatargroup-%E4%BA%8B%E4%BB%B6';
});
exports.default = {
    key: 'el-avatar-group',
    attr,
    event
};
//# sourceMappingURL=el-avatar-group.js.map