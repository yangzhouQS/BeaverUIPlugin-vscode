const attr = [
    {
        key: 'value',
        describe: '选项的值',
        type: 'string / number / boolean / object',
        default: '—'
    },
    {
        key: 'label',
        describe: '选项的标签，若不设置则默认与value相同',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'disabled',
        describe: '是否禁用该选项',
        type: 'boolean',
        default: 'false'
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
    x.link = 'https://element-plus.org/zh-CN/component/select.html#option-%E5%B1%9E%E6%80%A7';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/select.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-option',
    attr,
    event,
    slot
};
