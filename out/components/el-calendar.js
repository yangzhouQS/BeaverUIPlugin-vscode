"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '选中项绑定值。',
        type: 'date',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '选中项绑定值。',
        type: 'date',
        default: '—'
    },
    {
        key: 'range',
        describe: '时间范围，包括开始时间与结束时间。开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。',
        type: 'array',
        default: '—'
    },
    {
        key: 'controller-type',
        describe: '日历头部的控制器类型',
        type: 'enum',
        default: 'button'
    },
    {
        key: 'formatter',
        describe: '当 controller-type 为 select 时的格式标签',
        type: 'function',
        default: '—'
    }
];
const event = [];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/calendar.html#calendar-%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/calendar.html#calendar-%E4%BA%8B%E4%BB%B6';
});
exports.default = {
    key: 'el-calendar',
    attr,
    event
};
//# sourceMappingURL=el-calendar.js.map