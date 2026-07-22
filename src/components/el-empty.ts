const attr = [
    {
        key: 'image',
        describe: 'empty 组件的图像地址。',
        type: 'string',
        default: "''"
    },
    {
        key: 'image-size',
        describe: 'empty 组件的图像尺寸（宽度）。',
        type: 'number',
        default: '—'
    },
    {
        key: 'description',
        describe: 'empty 组件的描述信息。',
        type: 'string',
        default: "''"
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/empty.html#empty-%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/empty.html#empty-%E4%BA%8B%E4%BB%B6';
});

export default {
    key: 'el-empty',
    attr,
    event
};
