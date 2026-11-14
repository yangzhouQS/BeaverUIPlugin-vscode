// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/date-picker.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '绑定值，如果是 range 选择器，数组长度应为 2',
        type: 'number / string / Date / number[] | string[] | Date[]',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'readonly',
        describe: '只读',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'disabled',
        describe: '禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'size',
        describe: '输入框尺寸',
        type: '\'\' | \'large\' | \'default\' | \'small\'',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'editable',
        describe: '文本框可输入',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'clearable',
        describe: '是否显示清除按钮',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'placeholder',
        describe: '非范围选择时的占位内容',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'start-placeholder',
        describe: '范围选择时开始日期的占位内容',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'end-placeholder',
        describe: '范围选择时结束日期的占位内容',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
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
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'format',
        describe: '显示在输入框中的格式',
        type: 'string 参考 日期格式',
        default: 'YYYY-MM-DD',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'popper-class',
        describe: 'DatePicker 下拉框的类名',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'popper-style',
        describe: '弹出内容的自定义样式',
        type: 'string / object',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'popper-options',
        describe: '自定义 popper 选项，更多请参考 popper.js',
        type: 'Partial<PopperOptions>',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'range-separator',
        describe: '选择范围时的分隔符',
        type: 'string',
        default: '\'-\'',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'default-value',
        describe: '可选，选择器打开时默认显示的时间',
        type: 'Date | [Date, Date]',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'default-time',
        describe: '范围选择时选中日期所使用的当日内具体时刻',
        type: 'Date | [Date, Date]',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'value-format',
        describe: '可选，绑定值的格式。 不指定则绑定值为 Date 对象',
        type: 'string 参考 日期格式',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'id',
        describe: '等价于原生 input id 属性',
        type: 'string / [string, string]',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'name',
        describe: '等价于原生 input name 属性',
        type: 'string / [string, string]',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'unlink-panels',
        describe: '在范围选择器里取消两个日期面板之间的联动',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'single-panel',
        describe: '在范围选择器中只显示一个面板（自 2.14.0 版本）',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'prefix-icon',
        describe: '自定义前缀图标 如果 type的值是TimeLikeType，那么就是 Clock，不然就是 Calendar',
        type: 'string / Component',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'clear-icon',
        describe: '自定义清除图标',
        type: 'string / Component',
        default: 'CircleClose',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'disabled-date',
        describe: '一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。',
        type: '(data: Date) => boolean',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'shortcuts',
        describe: '设置快捷选项，需要传入数组对象',
        type: 'Array<{ text: string, value: Date | Function }>',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'cell-class-name',
        describe: '设置自定义类名',
        type: '(data: Date) => string',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'teleported',
        describe: '是否将 date-picker 的下拉列表插入至 body 元素',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'empty-values',
        describe: '组件的空值配置， 参考config-provider',
        type: 'array',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'value-on-clear',
        describe: '清空选项的值， 参考config-provider',
        type: 'string / number / boolean / Function',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'fallback-placements',
        describe: 'Tooltip 可用的 positions 请查看popper.js 文档',
        type: 'Placement[]',
        default: '[\'bottom\', \'top\', \'right\', \'left\']',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'placement',
        describe: '下拉框出现的位置',
        type: 'Placement',
        default: 'bottom',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'show-footer',
        describe: '是否显示 footer',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'show-confirm',
        describe: '是否显示确定按钮',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'show-week-number',
        describe: '显示周数(除周外)',
        type: 'boolean',
        default: '你好',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    },
    {
        key: 'automatic-dropdown',
        describe: '该属性决定在输入框获得焦点时日期选择面板是否弹出。 （在 3.0 版本中，默认值将设置为 false）',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '当用户确认值或点击外部时触发',
        type: '(val: typeof v-model) => void',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-events'
    },
    {
        key: '@blur',
        describe: '在组件 Input 失去焦点时触发',
        type: '(e: FocusEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-events'
    },
    {
        key: '@focus',
        describe: '在组件 Input 获得焦点时触发',
        type: '(e: FocusEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-events'
    },
    {
        key: '@clear',
        describe: '当点击清除按钮时触发',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-events'
    },
    {
        key: '@calendar-change',
        describe: '在日历所选日期更改时触发 仅用于 range',
        type: '(val: [Date, null | Date]) => void',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-events'
    },
    {
        key: '@panel-change',
        describe: '当日期面板改变时触发。',
        type: '(date: Date | [Date, Date], mode: \'month\' | \'year\', view?: string) => void',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-events'
    },
    {
        key: '@visible-change',
        describe: '当 DatePicker 的下拉列表出现/消失时触发',
        type: '(visibility: boolean) => void',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义单元格内容',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-slots'
    },
    {
        key: 'range-separator',
        describe: '自定义范围分割符内容',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-slots'
    },
    {
        key: 'prev-month',
        describe: '上个月的图标',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-slots'
    },
    {
        key: 'next-month',
        describe: '下个月的图标',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-slots'
    },
    {
        key: 'prev-year',
        describe: '上一年图标',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-slots'
    },
    {
        key: 'next-year',
        describe: '下一年图标',
        link: 'https://beaver-ui.yearrow.com/component/date-picker#datepicker-slots'
    }
];

export default {
    key: 'b-date-picker',
    attr,
    event,
    slot
};
