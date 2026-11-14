// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/radio.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '绑定值',
        type: 'string / number / boolean',
        link: 'https://beaver-ui.yearrow.com/component/radio#radiogroup-attributes'
    },
    {
        key: 'size',
        describe: '单选框按钮或边框按钮的大小',
        type: 'string',
        default: 'default',
        link: 'https://beaver-ui.yearrow.com/component/radio#radiogroup-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/radio#radiogroup-attributes'
    },
    {
        key: 'validate-event',
        describe: '输入时是否触发表单的校验',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/radio#radiogroup-attributes'
    },
    {
        key: 'text-color',
        describe: '按钮形式的 Radio 激活时的文本颜色',
        type: 'string',
        default: '#ffffff',
        link: 'https://beaver-ui.yearrow.com/component/radio#radiogroup-attributes'
    },
    {
        key: 'fill',
        describe: '按钮形式的 Radio 激活时的填充色和边框色',
        type: 'string',
        default: '#409eff',
        link: 'https://beaver-ui.yearrow.com/component/radio#radiogroup-attributes'
    },
    {
        key: 'aria-label',
        describe: '与 RadioGroup 中的 aria-label 属性相同（自 a11y 版本）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/radio#radiogroup-attributes'
    },
    {
        key: 'name',
        describe: '原生 name 属性',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/radio#radiogroup-attributes'
    },
    {
        key: 'id',
        describe: '原生 id 属性',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/radio#radiogroup-attributes'
    },
    {
        key: 'label ^(a11y)',
        describe: '与 RadioGroup 中的 aria-label 属性相同（自 deprecated 版本）【已废弃】',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/radio#radiogroup-attributes'
    },
    {
        key: 'options',
        describe: '选项的数据源， value 的 key 和 label 和 disabled可以通过 props自定义.',
        type: 'Array<{[key: string]: any}>',
        link: 'https://beaver-ui.yearrow.com/component/radio#radiogroup-attributes'
    },
    {
        key: 'props',
        describe: 'options 的配置',
        type: '{ value?: string, label?: string, disabled?: string}',
        default: '{value: \'value\', label: \'label\', disabled: \'disabled\'}',
        link: 'https://beaver-ui.yearrow.com/component/radio#radiogroup-attributes'
    },
    {
        key: 'type',
        describe: '用于渲染选项的组件类型（例如 \'button\'）',
        type: '\'radio\' | \'button\'',
        default: '\'radio\'',
        values: [
            'radio',
            'button'
        ],
        link: 'https://beaver-ui.yearrow.com/component/radio#radiogroup-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '绑定值变化时触发的事件',
        type: '(value: string | number | boolean) => void',
        link: 'https://beaver-ui.yearrow.com/component/radio#radiogroup-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/radio#radiogroup-slots'
    }
];

export default {
    key: 'b-radio-group',
    attr,
    event,
    slot
};
