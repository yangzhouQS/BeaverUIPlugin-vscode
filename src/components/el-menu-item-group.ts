const attr = [
    {
        key: 'title',
        describe: '组标题',
        type: 'string',
        default: '—'
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/menu.html#menu-item-group-%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/menu.html#menu-item-group-%E4%BA%8B%E4%BB%B6';
});

export default {
    key: 'el-menu-item-group',
    attr,
    event
};
