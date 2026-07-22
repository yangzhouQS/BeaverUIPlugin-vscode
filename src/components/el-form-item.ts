const attr = [
    {
        key: 'prop',
        describe: 'model 的键名。它可以是一个属性的值(如 a.b.0 或 [\'a\', \'b\', \'0\'])。在使用了 validate、resetFields 的方法时，该属性是必填的。',
        type: 'string / string[]',
        default: '—'
    },
    {
        key: 'label',
        describe: '标签文本',
        type: 'string',
        default: '—'
    },
    {
        key: 'label-position',
        describe: '表单域标签的位置，当设置为 left 或 right 时，则也需要设置 label-width 属性。默认会继承 Form 的 label-position（2.7.7 新增）',
        type: 'enum',
        default: '\'\'',
        values: ['left', 'right', 'top']
    },
    {
        key: 'label-width',
        describe: '标签宽度，例如 \'50px\'。可以使用 auto。',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'required',
        describe: '是否为必填项，如不设置，则会根据校验规则确认',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'rules',
        describe: '表单验证规则，具体配置见下表，更多内容可以参考 async-validator',
        type: 'object',
        default: '—'
    },
    {
        key: 'error',
        describe: '表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 error，并显示该错误信息。',
        type: 'string',
        default: '—'
    },
    {
        key: 'show-message',
        describe: '是否显示校验错误信息',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'inline-message',
        describe: '是否在行内显示校验信息',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'size',
        describe: '用于控制该表单域下组件的默认尺寸',
        type: 'enum',
        default: '—',
        values: ['large', 'default', 'small']
    },
    {
        key: 'for',
        describe: '和原生标签相同能力',
        type: 'string',
        default: '—'
    },
    {
        key: 'validate-status',
        describe: 'formitem 校验的状态',
        type: 'enum',
        default: '—',
        values: ['error', 'validating', 'success']
    }
];
const event: any[] = [];
const slot = [
    {
        key: 'default',
        describe: '自定义默认内容'
    },
    {
        key: 'label',
        describe: '标签内容'
    },
    {
        key: 'error',
        describe: '验证错误信息内容'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/form.html#form-item-%E5%B1%9E%E6%80%A7';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/form.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-form-item',
    attr,
    event,
    slot
};
