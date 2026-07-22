const attr = [
    {
        key: 'direction',
        describe: '子元素的排列方向',
        type: 'enum',
        default: '子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal'
    }
];

const event: any[] = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/container.html#container-%E5%B1%9E%E6%80%A7';
});

export default {
    key: 'el-container',
    attr,
    event
};
