const attr = [
    {
        key: 'color',
        describe: 'svg 的 fill 颜色',
        type: 'string',
        default: '继承颜色'
    },
    {
        key: 'size',
        describe: 'SVG 图标的大小，size x size',
        type: 'number / string',
        default: '继承字体大小'
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
    x.link = 'https://element-plus.org/zh-CN/component/icon.html#attributes';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/icon.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-icon',
    attr,
    event,
    slot
};
