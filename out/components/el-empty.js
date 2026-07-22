"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'image',
        describe: 'empty 组件的图像地址。',
        type: 'string',
        default: '\'\''
    },
    {
        key: 'image-size',
        describe: 'empty 组件的图像尺寸（宽度）。',
        type: 'number',
        default: '—'
    },
    {
        key: 'description',
        describe: 'empty 组件的描述信息。',
        type: 'string',
        default: '\'\''
    }
];
const event = [];
const slot = [
    {
        key: 'default',
        describe: '自定义默认内容'
    },
    {
        key: 'image',
        describe: 'content as image'
    },
    {
        key: 'description',
        describe: 'content as description'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/empty.html#empty-%E5%B1%9E%E6%80%A7';
});
slot.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/empty.html#%E6%8F%92%E6%A7%BD';
});
exports.default = {
    key: 'el-empty',
    attr,
    event,
    slot
};
//# sourceMappingURL=el-empty.js.map