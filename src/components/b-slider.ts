// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/slider.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'number / number[]',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'min',
        describe: '最小值',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'max',
        describe: '最大值',
        type: 'number',
        default: '100',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'step',
        describe: '步长，可以是数字或 \'mark\' ^(2.13.6)，用于将值限制为刻度。 当设置为 \'mark\' 时，必须设置 marks 属性。',
        type: 'number / \'mark\'',
        default: '1',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'show-input',
        describe: '是否显示输入框，仅在 range 为 false 且 step 不为 \'mark\' 时生效。',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'show-input-controls',
        describe: '在显示输入框的情况下，是否显示输入框的控制按钮',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'size',
        describe: 'slider 包装器的大小，垂直模式下该属性不可用',
        type: '\'\' | \'large\' | \'default\' | \'small\'',
        default: 'default',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'input-size',
        describe: '输入框的大小，如果设置了 size 属性，默认值自动取 size',
        type: '\'\' | \'large\' | \'default\' | \'small\'',
        default: 'default',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'show-stops',
        describe: '是否显示间断点',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'show-tooltip',
        describe: '是否显示提示信息',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'format-tooltip',
        describe: '格式化提示信息',
        type: '(value: number) => number | string',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'range',
        describe: '是否开启选择范围',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'vertical',
        describe: '垂直模式',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'height',
        describe: '滑块高度，垂直模式必填',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'aria-label',
        describe: '原生 aria-label属性（自 a11y 版本）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'range-start-label',
        describe: '当 range 为true时，屏幕阅读器标签开始的标记',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'range-end-label',
        describe: '当 range 为true时，屏幕阅读器标签结尾的标记',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'format-value-text',
        describe: '显示屏幕阅读器的 aria-valuenow 属性的格式',
        type: '(value: number) => string',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'tooltip-class',
        describe: 'tooltip 的自定义类名',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'placement',
        describe: 'Tooltip 出现的位置',
        type: '\'top\' | \'top-start\' | \'top-end\' | \'bottom\' | \'bottom-start\' | \'bottom-end\' | \'left\' | \'left-start\' | \'left-end\' | \'right\' | \'right-start\' | \'right-end\'',
        default: 'top',
        values: [
            'top',
            'top-start',
            'top-end',
            'bottom',
            'bottom-start',
            'bottom-end',
            'left',
            'left-start',
            'left-end',
            'right',
            'right-start',
            'right-end'
        ],
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'marks',
        describe: '标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式',
        type: 'SliderMarks',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'validate-event',
        describe: '输入时是否触发表单的校验',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'persistent',
        describe: '当 slider 的 tooltip 处于非活动状态且 persistent 为 false 时，tooltip 将被销毁。 当 show-tooltip 为 false 时，persistent 将始终为 false。',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    },
    {
        key: 'label ^(a11y)',
        describe: '原生 aria-label属性（自 deprecated 版本）【已废弃】',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）',
        type: '(value: Arrayable<number>) => void',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-events'
    },
    {
        key: '@input',
        describe: '数据改变时触发（使用鼠标拖曳时，活动过程实时触发）',
        type: '(value: Arrayable<number>) => void',
        link: 'https://beaver-ui.yearrow.com/component/slider#slider-events'
    }
];
const slot: any[] = [];

export default {
    key: 'b-slider',
    attr,
    event,
    slot
};
