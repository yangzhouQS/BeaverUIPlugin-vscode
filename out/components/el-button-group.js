"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'size',
        describe: '用于控制该按钮组内按钮的大小',
        type: 'enum',
        default: '—',
        values: ['large', 'default', 'small']
    },
    {
        key: 'type',
        describe: '用于控制该按钮组内按钮的类型',
        type: 'enum',
        default: '—',
        values: ['primary', 'success', 'warning', 'danger', 'info']
    },
    {
        key: 'direction',
        describe: '展示的方向，2.11.9版本开始支持',
        type: 'enum',
        default: 'horizontal',
        values: ['horizontal', 'vertical']
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
    x.link = 'https://element-plus.org/zh-CN/component/button.html#buttongroup-%E5%B1%9E%E6%80%A7';
});
slot.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/button.html#%E6%8F%92%E6%A7%BD';
});
exports.default = {
    key: 'el-button-group',
    attr,
    event,
    slot
};
//# sourceMappingURL=el-button-group.js.map