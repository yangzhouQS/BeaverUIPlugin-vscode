const attr = [
    {
        key: 'width',
        describe: '侧边栏宽度',
        type: 'string',
        default: '300px'
    }
];

const event: any[] = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/container.html#aside-%E5%B1%9E%E6%80%A7';
});

export default {
    key: 'el-aside',
    attr,
    event
};
