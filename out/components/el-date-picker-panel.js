"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '绑定值，如果是 range 选择器，数组长度应为 2',
        type: 'number / string / object',
        default: "''"
    },
    {
        key: 'v-model',
        describe: '绑定值，如果是 range 选择器，数组长度应为 2',
        type: 'number / string / object',
        default: "''"
    },
    {
        key: 'border',
        describe: '日期选择器是否有边框',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'disabled',
        describe: '禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'clearable',
        describe: '是否显示清除按钮',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'editable',
        describe: '文本框可输入，2.13.0版本开始支持',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'type',
        describe: '选择器类型，默认是普通选择器',
        type: 'enum',
        default: 'date'
    },
    {
        key: 'default-value',
        describe: '可选，选择器打开时默认显示的时间',
        type: 'object',
        default: '—'
    },
    {
        key: 'default-time',
        describe: '范围选择时选中日期所使用的当日内具体时刻',
        type: 'object',
        default: '—'
    },
    {
        key: 'value-format',
        describe: '可选，绑定值的格式。不指定则绑定值为 Date 对象',
        type: 'string',
        default: '—'
    },
    {
        key: 'date-format',
        describe: '可选，输入框内部面板中显示的日期格式',
        type: 'string',
        default: 'YYYY-MM-DD'
    },
    {
        key: 'time-format',
        describe: '可选，输入框内部面板中显示的时间格式',
        type: 'string',
        default: 'HH:mm:ss'
    },
    {
        key: 'unlink-panels',
        describe: '在范围选择器里取消两个日期面板之间的联动',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'single-panel',
        describe: '在范围选择器中只显示一个面板，2.14.0版本开始支持',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'disabled-date',
        describe: '一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。应该返回一个 Boolean 值。',
        type: 'function',
        default: '—'
    },
    {
        key: 'shortcuts',
        describe: '设置快捷选项，需要传入数组对象',
        type: 'array',
        default: '[]'
    },
    {
        key: 'cell-class-name',
        describe: '设置自定义类名',
        type: 'function',
        default: '—'
    },
    {
        key: 'show-footer',
        describe: '是否在日期选择器中显示页脚',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'show-confirm',
        describe: '是否显示确定按钮',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'show-week-number',
        describe: '显示周数（除周外）',
        type: 'boolean',
        default: 'false'
    }
];
const event = [
    {
        key: '@calendar-change',
        describe: '在日历所选日期更改时触发（仅限 range 类型）',
        type: 'function'
    },
    {
        key: '@panel-change',
        describe: '当日期面板改变时触发',
        type: 'function'
    },
    {
        key: '@clear',
        describe: '当点击清除按钮时触发，2.13.1版本开始支持',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/date-picker-panel.html#%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/date-picker-panel.html#events';
});
exports.default = {
    key: 'el-date-picker-panel',
    attr,
    event
};
//# sourceMappingURL=el-date-picker-panel.js.map