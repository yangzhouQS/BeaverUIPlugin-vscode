// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/time-picker.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '绑定值，如果它是数组，长度应该是 2',
        type: 'number / string / Date | [Date, Date] | [number, number] | [string, string]',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'readonly',
        describe: '完全只读',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'disabled',
        describe: '禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'editable',
        describe: '文本框可输入',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'clearable',
        describe: '是否显示清除按钮',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'size',
        describe: '输入框尺寸',
        type: '\'large\' | \'default\' | \'small\'',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'placeholder',
        describe: '非范围选择时的占位内容',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'start-placeholder',
        describe: '范围选择时开始日期的占位内容',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'end-placeholder',
        describe: '范围选择时结束日期的占位内容',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'is-range',
        describe: '是否为时间范围选择',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'arrow-control',
        describe: '是否使用箭头进行时间选择',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'popper-class',
        describe: 'TimePicker 下拉框的类名',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'popper-style',
        describe: '为 TimePicke 的下拉菜单自定义样式',
        type: 'string / object',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'popper-options',
        describe: '自定义 popper 选项，更多请参考 popper.js',
        type: 'Partial<PopperOptions>',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'fallback-placements',
        describe: 'Tooltip 可用的 positions 请查看popper.js 文档',
        type: 'Placement[]',
        default: '[\'bottom\', \'top\', \'right\', \'left\']',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'placement',
        describe: '下拉框出现的位置',
        type: '展示位置',
        default: 'bottom',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'range-separator',
        describe: '选择范围时的分隔符',
        type: 'string',
        default: '\'-\'',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'format',
        describe: '显示在输入框中的格式',
        type: 'string 参考 日期格式',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'default-value',
        describe: '可选，选择器打开时默认显示的时间',
        type: 'Date / [Date, Date]',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'value-format',
        describe: '可选，绑定值的格式。 不指定则绑定值为 Date 对象',
        type: 'string 参考 日期格式',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'id',
        describe: '等价于原生 input id 属性',
        type: 'string / [string, string]',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'name',
        describe: '等价于原生 input name 属性',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'aria-label',
        describe: '等价于原生 input aria-label 属性（自 a11y 版本）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'prefix-icon',
        describe: '自定义前缀图标',
        type: 'string / Component',
        default: 'Clock',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'clear-icon',
        describe: '自定义清除图标',
        type: 'string / Component',
        default: 'CircleClose',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'disabled-hours',
        describe: '禁止选择部分小时选项',
        type: '(role: string, comparingDate?: Dayjs) => number[]',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'disabled-minutes',
        describe: '禁止选择部分分钟选项',
        type: '(hour: number, role: string, comparingDate?: Dayjs) => number[]',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'disabled-seconds',
        describe: '禁止选择部分秒选项',
        type: '(hour: number, minute: number, role: string, comparingDate?: Dayjs) => number[]',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'teleported',
        describe: '是否将 popover 的下拉列表镜像至 body 元素',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'tabindex',
        describe: '输入框的 tabindex',
        type: 'string / number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'empty-values',
        describe: '组件的空值配置， 参考config-provider',
        type: 'array',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'value-on-clear',
        describe: '清空选项的值， 参考config-provider',
        type: 'string / number / boolean / Function',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'save-on-blur',
        describe: '当未选择任何值时，是否在获得焦点时自动填充为当前时间。（自 2.13.4 版本）',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    },
    {
        key: 'label ^(a11y)',
        describe: '等价于原生 input aria-label 属性（自 deprecated 版本）【已废弃】',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '用户确认选定的值时触发',
        type: '(val: number | string | Date | [number, number] | [string, string] | [Date, Date]) => void',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-events'
    },
    {
        key: '@blur',
        describe: '在组件 Input 失去焦点时触发',
        type: '(e: FocusEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-events'
    },
    {
        key: '@focus',
        describe: '在组件 Input 获得焦点时触发',
        type: '(e: FocusEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-events'
    },
    {
        key: '@clear',
        describe: '可清空的模式下用户点击清空按钮时触发',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-events'
    },
    {
        key: '@visible-change',
        describe: '当 TimePicker 的下拉列表出现/消失时触发',
        type: '(visibility: boolean) => void',
        link: 'https://beaver-ui.yearrow.com/component/time-picker#timepicker-events'
    }
];
const slot: any[] = [];

export default {
    key: 'b-time-picker',
    attr,
    event,
    slot
};
