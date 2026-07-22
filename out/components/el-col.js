"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'span',
        describe: '栅格占据的列数',
        type: 'number',
        default: '24'
    },
    {
        key: 'offset',
        describe: '栅格左侧的间隔格数',
        type: 'number',
        default: '0'
    },
    {
        key: 'push',
        describe: '栅格向右移动格数',
        type: 'number',
        default: '0'
    },
    {
        key: 'pull',
        describe: '栅格向左移动格数',
        type: 'number',
        default: '0'
    },
    {
        key: 'xs',
        describe: '<768px 响应式栅格数或者栅格属性对象',
        type: 'number / object',
        default: '—'
    },
    {
        key: 'sm',
        describe: '≥768px 响应式栅格数或者栅格属性对象',
        type: 'number / object',
        default: '—'
    },
    {
        key: 'md',
        describe: '≥992px 响应式栅格数或者栅格属性对象',
        type: 'number / object',
        default: '—'
    },
    {
        key: 'lg',
        describe: '≥1200px 响应式栅格数或者栅格属性对象',
        type: 'number / object',
        default: '—'
    },
    {
        key: 'xl',
        describe: '≥1920px 响应式栅格数或者栅格属性对象',
        type: 'number / object',
        default: '—'
    },
    {
        key: 'tag',
        describe: '自定义元素标签',
        type: 'string',
        default: 'div'
    }
];
const event = [];
const slot = [
    {
        key: 'default',
        describe: '自定义默认内容'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/layout.html#col-%E5%B1%9E%E6%80%A7';
});
slot.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/layout.html#%E6%8F%92%E6%A7%BD';
});
exports.default = {
    key: 'el-col',
    attr,
    event,
    slot
};
//# sourceMappingURL=el-col.js.map