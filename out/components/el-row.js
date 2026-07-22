"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'gutter',
        describe: '栅格间隔',
        type: 'number',
        default: '0'
    },
    {
        key: 'justify',
        describe: 'flex 布局下的水平排列方式',
        type: 'enum',
        default: 'start',
        values: ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly']
    },
    {
        key: 'align',
        describe: 'flex 布局下的垂直排列方式',
        type: 'enum',
        default: '—',
        values: ['top', 'middle', 'bottom']
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
    x.link = 'https://element-plus.org/zh-CN/component/layout.html#row-%E5%B1%9E%E6%80%A7';
});
slot.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/layout.html#%E6%8F%92%E6%A7%BD';
});
exports.default = {
    key: 'el-row',
    attr,
    event,
    slot
};
//# sourceMappingURL=el-row.js.map