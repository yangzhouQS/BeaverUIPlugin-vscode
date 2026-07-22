"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '选中项绑定值',
        type: 'string',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'string',
        default: '—'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'clearable',
        describe: '是否显示清空按钮',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'size',
        describe: '尺寸',
        type: 'enum',
        default: '—',
        values: ['large', 'default', 'small']
    },
    {
        key: 'show-alpha',
        describe: '是否支持透明度选择',
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
        key: 'popper-class',
        describe: 'ColorPicker 下拉框的类名',
        type: 'string / object',
        default: '\'\''
    },
    {
        key: 'popper-style',
        describe: 'ColorPicker 下拉面板的自定义样式，2.11.4版本开始支持',
        type: 'string / object',
        default: '—'
    },
    {
        key: 'predefine',
        describe: '预定义颜色',
        type: 'array',
        default: '—'
    },
    {
        key: 'validate-event',
        describe: '输入时是否触发表单的校验',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'tabindex',
        describe: 'ColorPicker 的 tabindex',
        type: 'string / number',
        default: '0'
    },
    {
        key: 'aria-label',
        describe: 'ColorPicker 的 aria-label，a11y 2.7.2',
        type: 'string',
        default: '—'
    },
    {
        key: 'empty-values',
        describe: '组件的空值配置，参考 config-provider，2.10.3版本开始支持',
        type: 'array',
        default: '—'
    },
    {
        key: 'value-on-clear',
        describe: '清空选项的值，参考 config-provider，2.10.3版本开始支持',
        type: 'string / number / boolean / function',
        default: '—'
    },
    {
        key: 'id',
        describe: 'ColorPicker 的 id',
        type: 'string',
        default: '—'
    },
    {
        key: 'teleported',
        describe: '是否将 popover 的下拉列表渲染至 body 下，2.7.2',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'label',
        describe: 'ColorPicker 的 aria-label，a11y 已废弃',
        type: 'string',
        default: '—'
    },
    {
        key: 'persistent',
        describe: '当颜色选择器未激活且 persistent 为 false 时，颜色面板将被销毁，2.10.5版本开始支持',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'append-to',
        describe: '挂载到哪个 DOM 元素，2.10.5版本开始支持',
        type: 'string / HTMLElement',
        default: '—'
    }
];
const event = [
    {
        key: '@change',
        describe: '当绑定值变化时触发',
        type: 'function'
    },
    {
        key: '@active-change',
        describe: '面板中当前显示的颜色发生改变时触发',
        type: 'function'
    },
    {
        key: '@focus',
        describe: '当获得焦点时触发（2.4.0 新增）',
        type: 'function'
    },
    {
        key: '@blur',
        describe: '当失去焦点时触发（2.4.0 新增）',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/color-picker.html#color-picker-%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/color-picker.html#color-picker-%E4%BA%8B%E4%BB%B6';
});
exports.default = {
    key: 'el-color-picker',
    attr,
    event
};
//# sourceMappingURL=el-color-picker.js.map