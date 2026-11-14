// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/date-range-picker.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '选中区间',
        type: 'string[] / Dayjs[]',
        link: 'https://beaver-ui.yearrow.com/component/date-range-picker#daterangepicker-attributes'
    },
    {
        key: 'type',
        describe: '面板类型',
        type: 'string',
        default: 'daterange',
        link: 'https://beaver-ui.yearrow.com/component/date-range-picker#daterangepicker-attributes'
    },
    {
        key: 'shortcuts',
        describe: '快捷期间项',
        type: 'string[]',
        default: '全部六项',
        link: 'https://beaver-ui.yearrow.com/component/date-range-picker#daterangepicker-attributes'
    },
    {
        key: 'default-shortcut',
        describe: '初始快捷期间（v-model 为空时生效）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/date-range-picker#daterangepicker-attributes'
    },
    {
        key: 'accounting-day',
        describe: '账期结转日（月/季/年按此日划分，如 25 表示上月 26 日~本月 25 日为一账期月）；≤0 一律按自然月处理（等同于 31）',
        type: 'number',
        default: '31',
        link: 'https://beaver-ui.yearrow.com/component/date-range-picker#daterangepicker-attributes'
    },
    {
        key: 'range-limit',
        describe: '可选最大跨度天数，0 不限',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/date-range-picker#daterangepicker-attributes'
    },
    {
        key: 'value-format',
        describe: '绑定值格式',
        type: 'string',
        default: 'YYYY-MM-DD',
        link: 'https://beaver-ui.yearrow.com/component/date-range-picker#daterangepicker-attributes'
    },
    {
        key: 'size',
        describe: '尺寸',
        type: 'string',
        default: 'default',
        link: 'https://beaver-ui.yearrow.com/component/date-range-picker#daterangepicker-attributes'
    },
    {
        key: 'range-separator',
        describe: '分隔符',
        type: 'string',
        default: '-',
        link: 'https://beaver-ui.yearrow.com/component/date-range-picker#daterangepicker-attributes'
    },
    {
        key: 'start-placeholder',
        describe: '起始日期占位文本',
        type: 'string',
        default: '开始时间',
        link: 'https://beaver-ui.yearrow.com/component/date-range-picker#daterangepicker-attributes'
    },
    {
        key: 'end-placeholder',
        describe: '结束日期占位文本',
        type: 'string',
        default: '结束时间',
        link: 'https://beaver-ui.yearrow.com/component/date-range-picker#daterangepicker-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/date-range-picker#daterangepicker-attributes'
    },
    {
        key: 'readonly',
        describe: '是否只读',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/date-range-picker#daterangepicker-attributes'
    },
    {
        key: 'clearable',
        describe: '值是否可清空（显示清空按钮）',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/date-range-picker#daterangepicker-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '值变化时触发',
        link: 'https://beaver-ui.yearrow.com/component/date-range-picker#daterangepicker-events'
    }
];
const slot: any[] = [];

export default {
    key: 'b-date-range-picker',
    attr,
    event,
    slot
};
