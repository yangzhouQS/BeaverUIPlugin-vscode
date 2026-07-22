"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'variant',
        describe: '当前渲染 skeleton 类型',
        type: 'enum',
        default: 'text',
        values: ['p', 'text', 'h1', 'h3', 'caption', 'button', 'image', 'circle', 'rect']
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/skeleton.html#skeleton-item-%E5%B1%9E%E6%80%A7';
});
exports.default = {
    key: 'el-skeleton-item',
    attr,
    event
};
//# sourceMappingURL=el-skeleton-item.js.map