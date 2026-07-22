"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'title',
        describe: '组标题',
        type: 'string',
        default: '—'
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/menu.html#menu-item-group-%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/menu.html#menu-item-group-%E4%BA%8B%E4%BB%B6';
});
exports.default = {
    key: 'el-menu-item-group',
    attr,
    event
};
//# sourceMappingURL=el-menu-item-group.js.map