"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '绑定值',
        type: 'array',
        default: '[]'
    },
    {
        key: 'v-model',
        describe: '绑定值',
        type: 'array',
        default: '[]'
    },
    {
        key: 'size',
        describe: '多选框组尺寸',
        type: 'enum',
        default: '—',
        values: ['large', 'default', 'small']
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'min',
        describe: '可被勾选的 checkbox 的最小数量',
        type: 'number',
        default: '—'
    },
    {
        key: 'max',
        describe: '可被勾选的 checkbox 的最大数量',
        type: 'number',
        default: '—'
    },
    {
        key: 'aria-label',
        describe: '原生 aria-label 属性，2.7.2版本开始支持',
        type: 'string',
        default: '—'
    },
    {
        key: 'text-color',
        describe: '当按钮为活跃状态时的字体颜色',
        type: 'string',
        default: '#ffffff'
    },
    {
        key: 'fill',
        describe: '当按钮为活跃状态时的边框和背景颜色',
        type: 'string',
        default: '#409eff'
    },
    {
        key: 'tag',
        describe: '复选框组元素标签',
        type: 'string',
        default: 'div'
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'label',
        describe: '原生 aria-label 属性，已弃用',
        type: 'string',
        default: '—'
    },
    {
        key: 'options',
        describe: '选项的数据源，value、label、disabled 的 key 可以通过 props 自定义，2.11.2版本开始支持',
        type: 'array',
        default: '—'
    },
    {
        key: 'props',
        describe: 'options 的配置，2.11.2版本开始支持',
        type: 'object',
        default: '{value: \'value\', label: \'label\', disabled: \'disabled\'}'
    },
    {
        key: 'type',
        describe: '用于渲染选项的组件类型，2.11.5版本开始支持',
        type: 'enum',
        default: '\'checkbox\'',
        values: ['checkbox', 'button']
    }
];
const event = [
    {
        key: '@change',
        describe: '当绑定值变化时触发的事件',
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
    x.link = 'https://element-plus.org/zh-CN/component/checkbox.html#checkbox-group-%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/checkbox.html#checkbox-group-%E4%BA%8B%E4%BB%B6';
});
slot.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/checkbox.html#%E6%8F%92%E6%A7%BD';
});
exports.default = {
    key: 'el-checkbox-group',
    attr,
    event,
    slot
};
//# sourceMappingURL=el-checkbox-group.js.map