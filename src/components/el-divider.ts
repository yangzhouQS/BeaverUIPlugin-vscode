const attr = [
    {
        key: 'direction',
        describe: '设置分割线方向',
        type: 'enum',
        default: 'horizontal'
    },
    {
        key: 'border-style',
        describe: '设置分隔符样式',
        type: 'enum',
        default: 'solid'
    },
    {
        key: 'content-position',
        describe: '自定义分隔线内容的位置',
        type: 'enum',
        default: 'center'
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/divider.html#%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = '';
});

export default {
    key: 'el-divider',
    attr,
    event
};
