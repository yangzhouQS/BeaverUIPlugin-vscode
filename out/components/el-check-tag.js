"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'checked',
        describe: '是否选中，可与 v-model 绑定',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'v-model:checked',
        describe: '是否选中，支持 v-model 绑定',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'disabled',
        describe: '是否禁用，2.8.2 版本新增',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'type',
        describe: 'CheckTag 类型，可选值: primary，2.5.4 版本新增',
        type: 'enum',
        default: 'primary',
        values: ['primary', 'success', 'info', 'warning', 'danger']
    }
];
const event = [
    {
        key: '@change',
        describe: '点击 Check Tag 时触发的事件',
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
    x.link = 'https://element-plus.org/zh-CN/component/tag.html#check-tag-%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/tag.html#check-tag-%E4%BA%8B%E4%BB%B6';
});
slot.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/tag.html#%E6%8F%92%E6%A7%BD';
});
exports.default = {
    key: 'el-check-tag',
    attr,
    event,
    slot
};
//# sourceMappingURL=el-check-tag.js.map