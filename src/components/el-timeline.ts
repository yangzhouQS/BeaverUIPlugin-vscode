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
        default: 'start',
        values: ['start', 'alternate', 'alternate-reverse', 'end']
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
    x.link = 'https://element-plus.org/zh-CN/component/timeline.html#timeline-%E5%B1%9E%E6%80%A7';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/timeline.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-timeline',
    attr,
    event,
    slot
};
