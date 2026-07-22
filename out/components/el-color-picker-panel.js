"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '绑定值',
        type: 'string',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '绑定值',
        type: 'string',
        default: '—'
    },
    {
        key: 'border',
        describe: '颜色选择器面板是否有边框',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'show-alpha',
        describe: '是否显示 alpha 滑块',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'color-format',
        describe: '写入 v-model 的颜色的格式',
        type: 'enum',
        default: '—',
        values: ['rgb', 'prgb', 'hex', 'hex3', 'hex4', 'hex6', 'hex8', 'name', 'hsl', 'hsv']
    },
    {
        key: 'predefine',
        describe: '预定义颜色',
        type: 'array',
        default: '—'
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证，2.11.7版本开始支持',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'hue-slider-class',
        describe: '类名将会传递给 hue-slider，2.13.6版本开始支持',
        type: 'string / array / object',
        default: '—'
    },
    {
        key: 'hue-slider-style',
        describe: '样式将会传递给 hue-slider，2.13.6版本开始支持',
        type: 'string / object',
        default: '—'
    }
];
const event = [];
const slot = [
    {
        key: 'footer',
        describe: '底部内容'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/color-picker-panel.html#color-picker-panel-%E5%B1%9E%E6%80%A7';
});
slot.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/color-picker-panel.html#%E6%8F%92%E6%A7%BD';
});
exports.default = {
    key: 'el-color-picker-panel',
    attr,
    event,
    slot
};
//# sourceMappingURL=el-color-picker-panel.js.map