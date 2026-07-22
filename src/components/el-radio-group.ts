const attr = [
    {
        key: 'model-value',
        describe: '绑定值',
        type: 'string / number / boolean',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '绑定值',
        type: 'string / number / boolean',
        default: '—'
    },
    {
        key: 'size',
        describe: '单选框按钮或边框按钮的大小',
        type: 'string',
        default: 'default'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'text-color',
        describe: '按钮形式的 Radio 激活时的文本颜色',
        type: 'string',
        default: '#ffffff'
    },
    {
        key: 'fill',
        describe: '按钮形式的 Radio 激活时的填充色和边框色',
        type: 'string',
        default: '#409eff'
    },
    {
        key: 'validate-event',
        describe: '输入时是否触发表单的校验',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'aria-label',
        describe: '与 RadioGroup 中的 aria-label 属性相同',
        type: 'string',
        default: '—'
    },
    {
        key: 'name',
        describe: '原生 name 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'id',
        describe: '原生 id 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'label',
        describe: '与 RadioGroup 中的 aria-label 属性相同',
        type: 'string',
        default: '—'
    },
    {
        key: 'options',
        describe: '选项的数据源，value、label、disabled 的 key 可以通过 props 自定义，2.11.2版本开始支持',
        type: 'array',
        default: '—'
    },
    {
        key: 'props',
        describe: 'options 的配置，2.11.2版本开始支持',
        type: 'object',
        default: '{value: \'value\', label: \'label\', disabled: \'disabled\'}'
    },
    {
        key: 'type',
        describe: '用于渲染选项的组件类型，2.11.5版本开始支持',
        type: 'enum',
        default: '\'radio\'',
        values: ['radio', 'button']
    }
];
const event = [
    {
        key: '@change',
        describe: '绑定值变化时触发的事件',
        type: 'function'
    }
];
const slot = [
    {
        key: 'default',
        describe: '自定义默认内容'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/radio.html#radio-group-%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/radio.html#radio-group-%E4%BA%8B%E4%BB%B6';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/radio.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-radio-group',
    attr,
    event,
    slot
};
