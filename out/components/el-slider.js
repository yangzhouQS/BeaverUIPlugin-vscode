"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '选中项绑定值',
        type: 'number / array',
        default: '0'
    },
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'number / array',
        default: '0'
    },
    {
        key: 'min',
        describe: '最小值',
        type: 'number',
        default: '0'
    },
    {
        key: 'max',
        describe: '最大值',
        type: 'number',
        default: '100'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'step',
        describe: '步长，可以是数字或 \'mark\'（2.13.6版本开始支持），用于将值限制为刻度。当设置为 \'mark\' 时，必须设置 marks 属性',
        type: 'number / string',
        default: '1',
        values: ['mark']
    },
    {
        key: 'show-input',
        describe: '是否显示输入框，仅在 range 为 false 且 step 不为 \'mark\' 时生效',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'show-input-controls',
        describe: '在显示输入框的情况下，是否显示输入框的控制按钮',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'size',
        describe: 'slider 包装器的大小，垂直模式下该属性不可用',
        type: 'enum',
        default: 'default',
        values: ['large', 'default', 'small']
    },
    {
        key: 'input-size',
        describe: '输入框的大小，如果设置了 size 属性，默认值自动取 size',
        type: 'enum',
        default: 'default',
        values: ['large', 'default', 'small']
    },
    {
        key: 'show-stops',
        describe: '是否显示间断点',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'show-tooltip',
        describe: '是否显示提示信息',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'format-tooltip',
        describe: '格式化提示信息',
        type: 'function',
        default: '—'
    },
    {
        key: 'range',
        describe: '是否开启选择范围',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'vertical',
        describe: '垂直模式',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'height',
        describe: '滑块高度，垂直模式必填',
        type: 'string',
        default: '—'
    },
    {
        key: 'aria-label',
        describe: '原生 aria-label 属性 (a11y)（版本 2.7.2）',
        type: 'string',
        default: '—'
    },
    {
        key: 'range-start-label',
        describe: '当 range 为 true 时，屏幕阅读器标签开始的标记',
        type: 'string',
        default: '—'
    },
    {
        key: 'range-end-label',
        describe: '当 range 为 true 时，屏幕阅读器标签结尾的标记',
        type: 'string',
        default: '—'
    },
    {
        key: 'format-value-text',
        describe: '显示屏幕阅读器的 aria-valuenow 属性的格式',
        type: 'function',
        default: '—'
    },
    {
        key: 'tooltip-class',
        describe: 'tooltip 的自定义类名',
        type: 'string',
        default: '—'
    },
    {
        key: 'placement',
        describe: 'Tooltip 出现的位置',
        type: 'enum',
        default: 'top',
        values: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']
    },
    {
        key: 'marks',
        describe: '标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式',
        type: 'object',
        default: '—'
    },
    {
        key: 'validate-event',
        describe: '输入时是否触发表单的校验',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'persistent',
        describe: '当 slider 的 tooltip 处于非活动状态且 persistent 为 false 时，tooltip 将被销毁。 当 show-tooltip 为 false 时，persistent 将始终为 false。 (版本 2.9.5)',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'label',
        describe: '原生 aria-label 属性 (deprecated)',
        type: 'string',
        default: '—'
    }
];
const event = [
    {
        key: '@change',
        describe: '值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）',
        type: 'function'
    },
    {
        key: '@input',
        describe: '数据改变时触发（使用鼠标拖曳时，活动过程实时触发）',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/slider.html#slider-%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/slider.html#slider-%E4%BA%8B%E4%BB%B6';
});
exports.default = {
    key: 'el-slider',
    attr,
    event
};
//# sourceMappingURL=el-slider.js.map