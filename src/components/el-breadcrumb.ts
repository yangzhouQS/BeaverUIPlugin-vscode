const attr = [
    {
        key: 'separator',
        describe: '分隔符。',
        type: 'string',
        default: '/'
    },
    {
        key: 'separator-icon',
        describe: '图标分隔符的组件或组件名。',
        type: 'string / Component',
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
    x.link = 'https://element-plus.org/zh-CN/component/breadcrumb.html#breadcrumb-%E5%B1%9E%E6%80%A7';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/breadcrumb.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-breadcrumb',
    attr,
    event,
    slot
};
