const attr = [
    {
        key: 'variant',
        describe: '当前渲染 skeleton 类型',
        type: 'enum',
        default: 'text'
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/skeleton.html#skeleton-item-%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/skeleton.html#skeleton-item-%E4%BA%8B%E4%BB%B6';
});

export default {
    key: 'el-skeleton-item',
    attr,
    event
};
