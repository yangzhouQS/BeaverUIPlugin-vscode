// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/date-picker-panel.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '绑定值，如果是 range 选择器，数组长度应为 2',
        type: 'number / string / Date / number[] | string[] | Date[]',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-attributes'
    },
    {
        key: 'border',
        describe: '日期选择器是否有边框',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-attributes'
    },
    {
        key: 'disabled',
        describe: '禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-attributes'
    },
    {
        key: 'clearable',
        describe: '是否显示清除按钮',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-attributes'
    },
    {
        key: 'editable',
        describe: '文本框可输入（自 2.13.0 版本）',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-attributes'
    },
    {
        key: 'type',
        describe: 'type of the picker. quarter, quarters, and quarterrange are supported since ^(2.14.5)',
        type: '\'year\' | \'years\' |\'month\' | \'months\' | \'date\' | \'dates\' | \'datetime\' | \'week\' | \'quarter\' | \'quarters\' | \'datetimerange\' | \'daterange\' | \'monthrange\' | \'yearrange\' | \'quarterrange\'',
        default: 'date',
        values: [
            'year',
            'years',
            'month',
            'months',
            'date',
            'dates',
            'datetime',
            'week',
            'quarter',
            'quarters',
            'datetimerange',
            'daterange',
            'monthrange',
            'yearrange',
            'quarterrange'
        ],
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-attributes'
    },
    {
        key: 'default-value',
        describe: '可选，选择器打开时默认显示的时间',
        type: 'Date | [Date, Date]',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-attributes'
    },
    {
        key: 'default-time',
        describe: '范围选择时选中日期所使用的当日内具体时刻',
        type: 'Date | [Date, Date]',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-attributes'
    },
    {
        key: 'value-format',
        describe: '可选，绑定值的格式。 不指定则绑定值为 Date 对象',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-attributes'
    },
    {
        key: 'date-format',
        describe: '可选，输入框内部面板中显示的日期格式',
        type: 'string see date formats',
        default: 'YYYY-MM-DD',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-attributes'
    },
    {
        key: 'time-format',
        describe: '可选，输入框内部面板中显示的时间格式',
        type: 'string see date formats',
        default: 'HH:mm:ss',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-attributes'
    },
    {
        key: 'unlink-panels',
        describe: '在范围选择器里取消两个日期面板之间的联动',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-attributes'
    },
    {
        key: 'single-panel',
        describe: '在范围选择器中只显示一个面板（自 2.14.0 版本）',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-attributes'
    },
    {
        key: 'disabled-date',
        describe: '一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。',
        type: '(data: Date) => boolean',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-attributes'
    },
    {
        key: 'shortcuts',
        describe: '设置快捷选项，需要传入数组对象',
        type: 'Array<{ text: string, value: Date | Function }>',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-attributes'
    },
    {
        key: 'cell-class-name',
        describe: '设置自定义类名',
        type: '(data: Date) => string',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-attributes'
    },
    {
        key: 'show-footer',
        describe: 'whether to show footer where the date picker is one ^[enum]\'dates\' \\| \'months\' \\| \'years\' \\| \'quarters\' \\| \'datetime\' \\| \'datetimerange\'',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-attributes'
    },
    {
        key: 'show-confirm',
        describe: '是否显示确定按钮',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-attributes'
    },
    {
        key: 'show-week-number',
        describe: '显示周数(除周外)',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-attributes'
    }
];
const event: any[] = [
    {
        key: '@calendar-change',
        describe: '在日历所选日期更改时触发 仅限“range”类型。',
        type: '(val: [Date, null | Date]) => void',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-events'
    },
    {
        key: '@panel-change',
        describe: '当日期面板改变时触发。',
        type: '(date: Date | [Date, Date], mode: \'month\' | \'year\', view?: string) => void',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-events'
    },
    {
        key: '@clear',
        describe: '当点击清除按钮时触发（自 2.13.1 版本）',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义单元格内容',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-slots'
    },
    {
        key: 'prev-month',
        describe: '上个月的图标',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-slots'
    },
    {
        key: 'next-month',
        describe: '下个月的图标',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-slots'
    },
    {
        key: 'prev-year',
        describe: '上一年图标',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-slots'
    },
    {
        key: 'next-year',
        describe: '下一年图标',
        link: 'https://beaver-ui.yearrow.com/component/date-picker-panel#datepickerpane-slots'
    }
];

export default {
    key: 'b-date-picker-panel',
    attr,
    event,
    slot
};
