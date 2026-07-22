const attr = [
    {
        key: 'height',
        describe: '顶栏高度',
        type: 'string',
        default: '60px'
    }
];

const event: any[] = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/container.html#header-%E5%B1%9E%E6%80%A7';
});

export default {
    key: 'el-header',
    attr,
    event
};
