// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/form.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'model',
        describe: '表单数据对象',
        type: 'Record<string, any>',
        link: 'https://beaver-ui.yearrow.com/component/form#form-attributes'
    },
    {
        key: 'rules',
        describe: '表单验证规则',
        type: 'FormRules',
        link: 'https://beaver-ui.yearrow.com/component/form#form-attributes'
    },
    {
        key: 'inline',
        describe: '行内表单模式',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/form#form-attributes'
    },
    {
        key: 'label-position',
        describe: '表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性',
        type: '\'left\' | \'right\' | \'top\'',
        default: 'right',
        values: [
            'left',
            'right',
            'top'
        ],
        link: 'https://beaver-ui.yearrow.com/component/form#form-attributes'
    },
    {
        key: 'label-width',
        describe: '标签的长度，例如 \'50px\'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto。',
        type: 'string / number',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/form#form-attributes'
    },
    {
        key: 'label-suffix',
        describe: '表单域标签的后缀',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/form#form-attributes'
    },
    {
        key: 'hide-required-asterisk',
        describe: '是否隐藏必填字段标签旁边的红色星号。',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/form#form-attributes'
    },
    {
        key: 'require-asterisk-position',
        describe: '星号的位置。',
        type: '\'left\' | \'right\'',
        default: 'left',
        values: [
            'left',
            'right'
        ],
        link: 'https://beaver-ui.yearrow.com/component/form#form-attributes'
    },
    {
        key: 'show-message',
        describe: '是否显示校验错误信息',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/form#form-attributes'
    },
    {
        key: 'inline-message',
        describe: '是否以行内形式展示校验信息',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/form#form-attributes'
    },
    {
        key: 'status-icon',
        describe: '是否在输入框中显示校验结果反馈图标',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/form#form-attributes'
    },
    {
        key: 'validate-on-rule-change',
        describe: '是否在 rules 属性改变后立即触发一次验证',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/form#form-attributes'
    },
    {
        key: 'size',
        describe: '用于控制该表单内组件的尺寸',
        type: '\'\' | \'large\' | \'default\' | \'small\'',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/form#form-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用该表单内的所有组件。设置为 true 时会覆盖内部组件的 disabled 属性。',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/form#form-attributes'
    },
    {
        key: 'scroll-to-error',
        describe: '当校验失败时，滚动到第一个错误表单项',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/form#form-attributes'
    },
    {
        key: 'scroll-into-view-options',
        describe: '当校验有失败结果时，滚动到第一个失败的表单项目 可通过 scrollIntoView 配置',
        type: 'ScrollIntoViewOptions / boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/form#form-attributes'
    }
];
const event: any[] = [
    {
        key: '@validate',
        describe: '任一表单项被校验后触发',
        type: '(prop: FormItemProp, isValid: boolean, message: string) => void',
        link: 'https://beaver-ui.yearrow.com/component/form#form-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/form#form-slots'
    }
];

export default {
    key: 'b-form',
    attr,
    event,
    slot
};
