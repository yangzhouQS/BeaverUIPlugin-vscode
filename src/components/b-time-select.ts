// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/time-select.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    },
    {
        key: 'disabled',
        describe: '禁用状态',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    },
    {
        key: 'editable',
        describe: '文本框可输入',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    },
    {
        key: 'clearable',
        describe: '是否显示清除按钮',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    },
    {
        key: 'include-end-time',
        describe: '是否在选项中包含end',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    },
    {
        key: 'size',
        describe: '输入框尺寸',
        type: '\'large\' | \'default\' | \'small\'',
        default: 'default',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    },
    {
        key: 'placeholder',
        describe: '非范围选择时的占位内容',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    },
    {
        key: 'name',
        describe: '原生属性（自 2.13.3 版本）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    },
    {
        key: 'effect',
        describe: 'Tooltip 主题，内置了 dark / light 两种主题',
        type: 'string / \'dark\' | \'light\'',
        default: 'light',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    },
    {
        key: 'prefix-icon',
        describe: '自定义前缀图标',
        type: 'string / Component',
        default: 'Clock',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    },
    {
        key: 'clear-icon',
        describe: '自定义清除图标',
        type: 'string / Component',
        default: 'CircleClose',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    },
    {
        key: 'start',
        describe: '开始时间',
        type: 'string',
        default: '09:00',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    },
    {
        key: 'end',
        describe: '结束时间',
        type: 'string',
        default: '18:00',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    },
    {
        key: 'step',
        describe: '间隔时间',
        type: 'string',
        default: '00:30',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    },
    {
        key: 'min-time',
        describe: '最早时间点，早于该时间的时间段将被禁用',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    },
    {
        key: 'max-time',
        describe: '最晚时间点，晚于该时间的时间段将被禁用',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    },
    {
        key: 'format',
        describe: '设置时间格式',
        type: 'string see formats',
        default: 'HH:mm',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    },
    {
        key: 'empty-values',
        describe: '组件的空值配置， 参考config-provider',
        type: 'array',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    },
    {
        key: 'value-on-clear',
        describe: '清空选项的值， 参考config-provider',
        type: 'string / number / boolean / Function',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    },
    {
        key: 'popper-class',
        describe: '为 TimeSelect 下拉面板设置自定义类名',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    },
    {
        key: 'popper-style',
        describe: '为 TimeSelect 下拉面板设置自定义样式',
        type: 'string / object',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '用户确认选定的值时触发',
        type: '(value: string) => void',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-events'
    },
    {
        key: '@blur',
        describe: '在组件 Input 失去焦点时触发',
        type: '(event: FocusEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-events'
    },
    {
        key: '@focus',
        describe: '在组件 Input 获得焦点时触发',
        type: '(event: FocusEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-events'
    },
    {
        key: '@clear',
        describe: '可清空的单选模式下用户点击清空按钮时触发',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/time-select#timeselect-events'
    }
];
const slot: any[] = [];

export default {
    key: 'b-time-select',
    attr,
    event,
    slot
};
