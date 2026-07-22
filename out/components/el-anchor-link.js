"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'title',
        describe: '链接的文本内容。',
        type: 'string',
        default: '—'
    },
    {
        key: 'href',
        describe: '链接的地址。',
        type: 'string',
        default: '—'
    }
];
const event = [];
const slot = [
    {
        key: 'default',
        describe: '自定义默认内容'
    },
    {
        key: 'sub-link',
        describe: 'Slots for child links.'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/anchor.html#anchor-link-%E5%B1%9E%E6%80%A7';
});
slot.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/anchor.html#%E6%8F%92%E6%A7%BD';
});
exports.default = {
    key: 'el-anchor-link',
    attr,
    event,
    slot
};
//# sourceMappingURL=el-anchor-link.js.map