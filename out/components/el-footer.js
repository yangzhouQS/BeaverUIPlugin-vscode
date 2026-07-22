"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'height',
        describe: '底栏高度',
        type: 'string',
        default: '60px'
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
    x.link = 'https://element-plus.org/zh-CN/component/container.html#footer-%E5%B1%9E%E6%80%A7';
});
slot.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/container.html#%E6%8F%92%E6%A7%BD';
});
exports.default = {
    key: 'el-footer',
    attr,
    event,
    slot
};
//# sourceMappingURL=el-footer.js.map