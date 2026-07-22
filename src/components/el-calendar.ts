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
        default: 'button',
        values: ['button', 'select']
    },
    {
        key: 'formatter',
        describe: '当 controller-type 为 select 时的格式标签',
        type: 'function',
        default: '—'
    }
];
const event: any[] = [];
const slot = [
    {
        key: 'date-cell',
        describe: '`type` indicates which month the date belongs, optional values are prev-month, current-month, next-month; `isSelected` indicates whether the date is selected; `day` is the formatted date in the format `YYYY-MM-DD`; `date` is date the cell represents'
    },
    {
        key: 'header',
        describe: '头部内容'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/calendar.html#calendar-%E5%B1%9E%E6%80%A7';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/calendar.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-calendar',
    attr,
    event,
    slot
};
