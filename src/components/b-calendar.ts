// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/calendar.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'Date',
        link: 'https://beaver-ui.yearrow.com/component/calendar#calendar-attributes'
    },
    {
        key: 'range',
        describe: '时间范围，包括开始时间与结束时间。 开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。',
        type: '[Date, Date]',
        link: 'https://beaver-ui.yearrow.com/component/calendar#calendar-attributes'
    },
    {
        key: 'controller-type',
        describe: '日历头部的控制器类型（自 2.13.1 版本）',
        type: '\'button\' | \'select\'',
        default: 'button',
        values: [
            'button',
            'select'
        ],
        link: 'https://beaver-ui.yearrow.com/component/calendar#calendar-attributes'
    },
    {
        key: 'formatter',
        describe: '当 controller-type 为“select”时的格式标签（自 2.13.1 版本）',
        type: '(value: number, type: \'year\' | \'month\') => string | number',
        link: 'https://beaver-ui.yearrow.com/component/calendar#calendar-attributes'
    },
    {
        key: 'hide-header',
        describe: '强制隐藏日历头部（标题与控制器整体不渲染，含 header 插槽内容）',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/calendar#calendar-attributes'
    }
];
const event: any[] = [
    {
        key: '@pick',
        describe: '点击日期单元格',
        link: 'https://beaver-ui.yearrow.com/component/calendar#calendar-events'
    }
];
const slot: any[] = [
    {
        key: 'date-cell',
        describe: 'type 表示该日期的所属月份，可选值有 prev-month、current-month 和 next-month；isSelected 标明该日期是否被选中；day 是格式化的日期，格式为 yyyy-MM-dd；date 是单元格的日期',
        type: '{ data: { type: \'prev-month\' | \'current-month\' | \'next-month\', isSelected: boolean, day: string, date: Date } }',
        link: 'https://beaver-ui.yearrow.com/component/calendar#calendar-slots'
    },
    {
        key: 'header',
        describe: '卡片标题内容',
        type: '{ date: string }',
        link: 'https://beaver-ui.yearrow.com/component/calendar#calendar-slots'
    }
];

export default {
    key: 'b-calendar',
    attr,
    event,
    slot
};
