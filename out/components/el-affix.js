"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'offset',
        describe: '偏移距离。',
        type: 'number',
        default: '0'
    },
    {
        key: 'position',
        describe: '固钉位置。',
        type: 'enum',
        default: 'top',
        values: ['top', 'bottom']
    },
    {
        key: 'target',
        describe: '指定容器（CSS 选择器）。',
        type: 'string',
        default: '—'
    },
    {
        key: 'z-index',
        describe: 'z-index。',
        type: 'number',
        default: '100'
    },
    {
        key: 'teleported',
        describe: '固钉元素是否使用 teleport 特性，设置为 true 将会传送至 append-to 设置的位置，2.13.0版本开始支持',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'append-to',
        describe: '固钉元素将被挂载至哪个元素，2.13.0版本开始支持',
        type: 'string / HTMLElement',
        default: 'body'
    }
];
const event = [
    {
        key: '@change',
        describe: '固钉状态改变时触发的事件。',
        type: 'function'
    },
    {
        key: '@scroll',
        describe: '滚动时触发的事件。',
        type: 'function'
    }
];
const slot = [
    {
        key: 'default',
        describe: '自定义默认内容'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/affix.html#%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/affix.html#%E4%BA%8B%E4%BB%B6';
});
slot.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/affix.html#%E6%8F%92%E6%A7%BD';
});
exports.default = {
    key: 'el-affix',
    attr,
    event,
    slot
};
//# sourceMappingURL=el-affix.js.map