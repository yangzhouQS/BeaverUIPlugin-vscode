const attr = [
    {
        key: 'model-value',
        describe: 'OTP 字段的值，由于数字不能有前导零，modelValue 仅在初始化期间允许为数字',
        type: 'string / number',
        default: 'undefined'
    },
    {
        key: 'v-model',
        describe: '绑定值',
        type: 'string / number',
        default: 'undefined'
    },
    {
        key: 'length',
        describe: 'OTP 字段长度',
        type: 'number',
        default: '6'
    },
    {
        key: 'validator',
        describe: '自定义验证函数',
        type: 'function',
        default: '() => true'
    },
    {
        key: 'inputmode',
        describe: '原生 inputmode 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'type',
        describe: 'OTP 字段类型',
        type: 'enum',
        default: 'outlined'
    },
    {
        key: 'size',
        describe: 'OTP 字段的尺寸',
        type: 'enum',
        default: '—'
    },
    {
        key: 'mask',
        describe: '是否启用密码模式',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'disabled',
        describe: '是否禁用 OTP 字段',
        type: 'boolean',
        default: 'undefined'
    },
    {
        key: 'separator',
        describe: 'OTP 字段之间的分隔符',
        type: 'string / VNode / function',
        default: '—'
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'readonly',
        describe: '原生 readonly 属性',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'id',
        describe: '原生 id 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'aria-label',
        describe: '原生 aria-label 属性',
        type: 'string',
        default: '—'
    }
];

const event = [
    {
        key: '@update:modelValue',
        describe: '值更新时触发',
        type: 'function'
    },
    {
        key: '@change',
        describe: '当输入框失去焦点后且值发生变化时触发',
        type: 'function'
    },
    {
        key: '@finish',
        describe: '当所有字段都已填写时触发',
        type: 'function'
    },
    {
        key: '@focus',
        describe: '输入框获得焦点时触发',
        type: 'function'
    },
    {
        key: '@blur',
        describe: '输入框失去焦点时触发',
        type: 'function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/input-otp.html#%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/input-otp.html#events';
});

export default {
    key: 'el-input-otp',
    attr,
    event
};
