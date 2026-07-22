"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'title',
        describe: 'result 组件的标题。',
        type: 'string',
        default: "''"
    },
    {
        key: 'sub-title',
        describe: 'result 组件的副标题。',
        type: 'string',
        default: "''"
    },
    {
        key: 'icon',
        describe: 'result 组件的图标类型。',
        type: 'enum',
        default: "'info'"
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/result.html#result-%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/result.html#result-%E4%BA%8B%E4%BB%B6';
});
exports.default = {
    key: 'el-result',
    attr,
    event
};
//# sourceMappingURL=el-result.js.map