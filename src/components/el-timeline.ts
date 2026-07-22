const attr = [
    {
        key: 'reverse',
        describe: '是否逆序排序，2.11.9 版本新增',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'mode',
        describe: '时间线与内容的相对位置，2.13.1 版本新增',
        type: 'enum',
        default: 'start'
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/timeline.html#timeline-%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/timeline.html#timeline-%E4%BA%8B%E4%BB%B6';
});

export default {
    key: 'el-timeline',
    attr,
    event
};
