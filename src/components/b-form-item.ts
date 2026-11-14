// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/form.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'prop',
        describe: 'model 的键名。 它可以是属性的路径（如 a.b.0 或 [\'a\', \'b\', \'0\']）。 在使用了 validate、resetFields 的方法时，该属性是必填的。',
        type: 'string / ^[string&#91;&#93;]',
        link: 'https://beaver-ui.yearrow.com/component/form#formitem-attributes'
    },
    {
        key: 'label',
        describe: '标签文本',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/form#formitem-attributes'
    },
    {
        key: 'label-position',
        describe: '表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性 默认会继承 Form的label-position',
        type: '\'left\' | \'right\' | \'top\'',
        default: '\'\'',
        values: [
            'left',
            'right',
            'top'
        ],
        link: 'https://beaver-ui.yearrow.com/component/form#formitem-attributes'
    },
    {
        key: 'label-width',
        describe: '标签宽度，例如 \'50px\'。 可以使用 auto。',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/form#formitem-attributes'
    },
    {
        key: 'required',
        describe: '是否为必填项，如不设置，则会根据校验规则确认',
        type: 'boolean',
        link: 'https://beaver-ui.yearrow.com/component/form#formitem-attributes'
    },
    {
        key: 'rules',
        describe: '表单验证规则, 具体配置见下表, 更多内容可以参考async-validator',
        type: 'Arrayable<FormItemRule>',
        link: 'https://beaver-ui.yearrow.com/component/form#formitem-attributes'
    },
    {
        key: 'error',
        describe: '表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 error，并显示该错误信息。',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/form#formitem-attributes'
    },
    {
        key: 'show-message',
        describe: '是否显示校验错误信息',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/form#formitem-attributes'
    },
    {
        key: 'inline-message',
        describe: '是否在行内显示校验信息',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/form#formitem-attributes'
    },
    {
        key: 'size',
        describe: '用于控制该表单域下组件的默认尺寸',
        type: '\'\' | \'large\' | \'default\' | \'small\'',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/form#formitem-attributes'
    },
    {
        key: 'for',
        describe: '和原生标签相同能力',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/form#formitem-attributes'
    },
    {
        key: 'validate-status',
        describe: 'formitem 校验的状态',
        type: '\'\' | \'error\' | \'validating\' | \'success\'',
        values: [
            'error',
            'validating',
            'success'
        ],
        link: 'https://beaver-ui.yearrow.com/component/form#formitem-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '表单的内容。',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/form#formitem-slots'
    },
    {
        key: 'label',
        describe: '标签位置显示的内容',
        type: '{ label: string }',
        link: 'https://beaver-ui.yearrow.com/component/form#formitem-slots'
    },
    {
        key: 'error',
        describe: '验证错误信息的显示内容',
        type: '{ error: string }',
        link: 'https://beaver-ui.yearrow.com/component/form#formitem-slots'
    }
];

export default {
    key: 'b-form-item',
    attr,
    event,
    slot
};
