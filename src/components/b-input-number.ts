// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/input-number.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'number / null',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'min',
        describe: '设置计数器允许的最小值',
        type: 'number',
        default: 'Number.MIN_SAFE_INTEGER',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'max',
        describe: '设置计数器允许的最大值',
        type: 'number',
        default: 'Number.MAX_SAFE_INTEGER',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'step',
        describe: '计数器步长',
        type: 'number',
        default: '1',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'step-strictly',
        describe: '是否只能输入 step 的倍数',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'precision',
        describe: '数值精度',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'size',
        describe: '计数器尺寸',
        type: '\'large\' | \'default\' | \'small\'',
        default: 'default',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'readonly',
        describe: '原生 readonly 属性，是否只读',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用状态',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'controls',
        describe: '是否使用控制按钮',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'controls-position',
        describe: '控制按钮位置',
        type: '\'\' | \'right\'',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'name',
        describe: '等价于原生 input name 属性',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'aria-label',
        describe: '等价于原生 input aria-label 属性（自 a11y 版本）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'placeholder',
        describe: '等价于原生 input placeholder 属性',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'id',
        describe: '等价于原生 input id 属性',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'value-on-clear',
        describe: '当输入框被清空时显示的值',
        type: 'number / null / \'min\' | \'max\'',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'label ^(a11y)',
        describe: '等价于原生 input aria-label 属性（自 deprecated 版本）【已废弃】',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'inputmode',
        describe: '等价于原生 input inputmode 属性',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'align',
        describe: '内部输入文本对齐',
        type: '\'left\' | \'center\' | \'right\'',
        default: '\'center\'',
        values: [
            'left',
            'center',
            'right'
        ],
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'disabled-scientific',
        describe: '禁用科学计数法的输入（例如输入 \'e\'）',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'tabindex',
        describe: '输入框的 tabindex（自 2.14.0 版本）',
        type: 'string / number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'formatter',
        describe: '指定输入值的格式（自 2.14.0 版本）',
        type: '(value: string) => string',
        default: ':::',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    },
    {
        key: 'parser',
        describe: '指定从格式化输入中提取的值（自 2.14.0 版本）',
        type: '(value: string) => string',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '绑定值被改变时触发',
        type: '(currentValue: number | undefined, oldValue: number | undefined) => void',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-events'
    },
    {
        key: '@blur',
        describe: '在组件 Input 失去焦点时触发',
        type: '(event: FocusEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-events'
    },
    {
        key: '@focus',
        describe: '在组件 Input 获得焦点时触发',
        type: '(event: FocusEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-events'
    }
];
const slot: any[] = [
    {
        key: 'decrease-icon',
        describe: '自定义输入框按钮减少图标',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-slots'
    },
    {
        key: 'increase-icon',
        describe: '自定义输入框按钮增加图标',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-slots'
    },
    {
        key: 'prefix',
        describe: '输入框头部内容',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-slots'
    },
    {
        key: 'suffix',
        describe: '输入框尾部内容',
        link: 'https://beaver-ui.yearrow.com/component/input-number#input-slots'
    }
];

export default {
    key: 'b-input-number',
    attr,
    event,
    slot
};
