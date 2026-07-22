const attr = [
    {
        key: 'model-value',
        describe: '选中项绑定值',
        type: 'string / number / boolean',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'string / number / boolean',
        default: '—'
    },
    {
        key: 'value',
        describe: '单选框的值',
        type: 'string / number / boolean',
        default: '—'
    },
    {
        key: 'label',
        describe: '单选框的 label 如果value没有值， label则作为value使用',
        type: 'string / number / boolean',
        default: '—'
    },
    {
        key: 'disabled',
        describe: '是否禁用单选框',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'border',
        describe: '是否显示边框',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'size',
        describe: '单选框的尺寸',
        type: 'enum',
        default: '—',
        values: ['large', 'default', 'small']
    },
    {
        key: 'name',
        describe: '原始 name 属性',
        type: 'string',
        default: '—'
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
    x.link = 'https://element-plus.org/zh-CN/component/radio.html#radio-%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/radio.html#radio-%E4%BA%8B%E4%BB%B6';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/radio.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-radio',
    attr,
    event,
    slot
};
