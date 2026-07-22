"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'name',
        describe: '幻灯片的名字，可用作 setActiveItem 的参数。',
        type: 'string',
        default: '\'\''
    },
    {
        key: 'label',
        describe: '该幻灯片所对应指示器的文本。',
        type: 'string / number',
        default: '\'\''
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
    x.link = 'https://element-plus.org/zh-CN/component/carousel.html#carousel-item-%E5%B1%9E%E6%80%A7';
});
slot.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/carousel.html#%E6%8F%92%E6%A7%BD';
});
exports.default = {
    key: 'el-carousel-item',
    attr,
    event,
    slot
};
//# sourceMappingURL=el-carousel-item.js.map