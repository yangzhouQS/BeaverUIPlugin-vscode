const attr = [
    {
        key: 'title',
        describe: '组标题',
        type: 'string',
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
        key: 'title',
        describe: '标题内容'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/menu.html#menu-item-group-%E5%B1%9E%E6%80%A7';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/menu.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-menu-item-group',
    attr,
    event,
    slot
};
