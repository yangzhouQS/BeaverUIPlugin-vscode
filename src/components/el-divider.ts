const attr = [
    {
        key: 'direction',
        describe: '设置分割线方向',
        type: 'enum',
        default: 'horizontal',
        values: ['horizontal', 'vertical']
    },
    {
        key: 'border-style',
        describe: '设置分隔符样式',
        type: 'enum',
        default: 'solid',
        values: ['none', 'solid', 'hidden', 'dashed']
    },
    {
        key: 'content-position',
        describe: '自定义分隔线内容的位置',
        type: 'enum',
        default: 'center',
        values: ['left', 'right', 'center']
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
    x.link = 'https://element-plus.org/zh-CN/component/divider.html#%E5%B1%9E%E6%80%A7';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/divider.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-divider',
    attr,
    event,
    slot
};
