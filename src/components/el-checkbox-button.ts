const attr = [
    {
        key: 'value',
        describe: '选中状态的值，只有在绑定对象类型为 array 时有效，2.6.0版本开始支持',
        type: 'string / number / boolean / object',
        default: '—'
    },
    {
        key: 'label',
        describe: '选中状态的值，只有在绑定对象类型为 array 时有效。如果没有 value， label则作为value使用',
        type: 'string / number / boolean / object',
        default: '—'
    },
    {
        key: 'true-value',
        describe: '选中时的值，2.6.0版本开始支持',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'false-value',
        describe: '没有选中时的值，2.6.0版本开始支持',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'name',
        describe: '原生 name 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'checked',
        describe: '当前是否勾选',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'true-label',
        describe: '选中时的值，已弃用',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'false-label',
        describe: '没有选中时的值，已弃用',
        type: 'string / number',
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
    x.link = 'https://element-plus.org/zh-CN/component/checkbox.html#checkbox-button-%E5%B1%9E%E6%80%A7';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/checkbox.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-checkbox-button',
    attr,
    event,
    slot
};
