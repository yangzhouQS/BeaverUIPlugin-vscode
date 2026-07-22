const attr = [
    {
        key: 'command',
        describe: '派发到 command 回调函数的指令参数。',
        type: 'string / number / object',
        default: '—'
    },
    {
        key: 'disabled',
        describe: '是否禁用。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'divided',
        describe: '是否显示分隔符。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'icon',
        describe: '自定义图标。',
        type: 'string / Component',
        default: '—'
    }
];
const event: any[] = [];
const slot = [
    {
        key: 'default',
        describe: '自定义默认内容'
    },
    {
        key: 'icon',
        describe: '图标内容'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/dropdown.html#dropdown-item-%E5%B1%9E%E6%80%A7';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/dropdown.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-dropdown-item',
    attr,
    event,
    slot
};
