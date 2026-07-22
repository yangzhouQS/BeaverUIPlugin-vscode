const attr = [
    {
        key: 'index',
        describe: '唯一标志。',
        type: 'string',
        default: '—'
    },
    {
        key: 'route',
        describe: 'Vue Route 路由位置参数。',
        type: 'string / object',
        default: '—'
    },
    {
        key: 'disabled',
        describe: '是否禁用。',
        type: 'boolean',
        default: 'false'
    }
];

const event: any = [
    {
        key: '@click',
        describe: '点击菜单项时回调函数，参数为菜单项实例。',
        type: 'function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/menu.html#menu-item-%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/menu.html#menu-item-%E4%BA%8B%E4%BB%B6';
});

export default {
    key: 'el-menu-item',
    attr,
    event
};
