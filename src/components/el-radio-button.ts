const attr = [
    {
        key: 'value',
        describe: '单选框的值',
        type: 'string / number / boolean',
        default: '—'
    },
    {
        key: 'label',
        describe: '单选框的 label 如果没有 value， label则作为value使用',
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
        key: 'name',
        describe: '原生 name 属性',
        type: 'string',
        default: '—'
    }
];
const event: any[] = [];
const slot = [
    {
        key: 'default',
        describe: '自定义默认内容'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/radio.html#radio-button-%E5%B1%9E%E6%80%A7';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/radio.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-radio-button',
    attr,
    event,
    slot
};
