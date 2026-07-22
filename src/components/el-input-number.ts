const attr = [
    {
        key: 'model-value',
        describe: '选中项绑定值，支持 v-model',
        type: 'number / null',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '双向绑定选中项的值，等价于 model-value',
        type: 'number / null',
        default: '—'
    },
    {
        key: 'min',
        describe: '设置计数器允许的最小值',
        type: 'number',
        default: 'Number.MIN_SAFE_INTEGER'
    },
    {
        key: 'max',
        describe: '设置计数器允许的最大值',
        type: 'number',
        default: 'Number.MAX_SAFE_INTEGER'
    },
    {
        key: 'step',
        describe: '计数器步长',
        type: 'number',
        default: '1'
    },
    {
        key: 'step-strictly',
        describe: '是否只能输入 step 的倍数',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'precision',
        describe: '数值精度',
        type: 'number',
        default: '—'
    },
    {
        key: 'size',
        describe: '计数器尺寸，可选值：default',
        type: 'enum',
        default: 'default',
        values: ['large', 'default', 'small']
    },
    {
        key: 'readonly',
        describe: '是否只读，原生 readonly 属性，2.2.16 版本支持',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'disabled',
        describe: '是否禁用状态',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'controls',
        describe: '是否使用控制按钮',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'controls-position',
        describe: '控制按钮位置',
        type: 'enum',
        default: '—',
        values: ['right']
    },
    {
        key: 'name',
        describe: '等价于原生 input name 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'aria-label',
        describe: '等价于原生 input aria-label 属性，a11y 2.7.2 版本支持',
        type: 'string',
        default: '—'
    },
    {
        key: 'placeholder',
        describe: '等价于原生 input placeholder 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'id',
        describe: '等价于原生 input id 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'value-on-clear',
        describe: '当输入框被清空时显示的值，支持 number / null / enum，2.2.0 版本支持',
        type: 'number / null / enum',
        default: '—',
        values: ['min', 'max']
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'label',
        describe: '等价于原生 input aria-label 属性，已废弃',
        type: 'string',
        default: '—'
    },
    {
        key: 'inputmode',
        describe: '等价于原生 input inputmode 属性，2.10.3 版本支持',
        type: 'string',
        default: '—'
    },
    {
        key: 'align',
        describe: '内部输入文本对齐，2.10.5 版本支持',
        type: 'enum',
        default: 'center',
        values: ['left', 'center', 'right']
    },
    {
        key: 'disabled-scientific',
        describe: '禁用科学计数法的输入（例如输入 e），2.10.5 版本支持',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'tabindex',
        describe: '等价于原生 input tabindex 属性',
        type: 'string / number',
        default: '0'
    },
    {
        key: 'formatter',
        describe: '指定输入值的显示格式',
        type: 'function',
        default: '—'
    },
    {
        key: 'parser',
        describe: '指定从格式化后的输入中提取的值',
        type: 'function',
        default: '—'
    }
];
const event = [
    {
        key: '@change',
        describe: '绑定值被改变时触发',
        type: 'function'
    },
    {
        key: '@blur',
        describe: '在组件 Input 失去焦点时触发',
        type: 'function'
    },
    {
        key: '@focus',
        describe: '在组件 Input 获得焦点时触发',
        type: 'function'
    }
];
const slot = [
    {
        key: 'decrease-icon',
        describe: 'custom input box button decrease icon'
    },
    {
        key: 'increase-icon',
        describe: 'custom input box button increase icon'
    },
    {
        key: 'prefix',
        describe: '输入框头部内容 / 前缀内容'
    },
    {
        key: 'suffix',
        describe: '输入框尾部内容 / 后缀内容'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/input-number.html#attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/input-number.html#events';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/input-number.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-input-number',
    attr,
    event,
    slot
};
