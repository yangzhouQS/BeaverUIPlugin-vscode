const attr = [
    {
        key: 'direction',
        describe: '子元素的排列方向',
        type: 'enum',
        default: '子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal',
        values: ['horizontal', 'vertical']
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
    x.link = 'https://element-plus.org/zh-CN/component/container.html#container-%E5%B1%9E%E6%80%A7';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/container.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-container',
    attr,
    event,
    slot
};
