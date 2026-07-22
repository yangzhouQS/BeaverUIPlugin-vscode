const attr = [
    {
        key: 'width',
        describe: '水印的宽度，content 的默认值是它自己的宽度',
        type: 'number',
        default: '120'
    },
    {
        key: 'height',
        describe: '水印的高度，content 的默认值是它自己的高度',
        type: 'number',
        default: '64'
    },
    {
        key: 'rotate',
        describe: '水印的旋转角度，单位 °',
        type: 'number',
        default: '-22'
    },
    {
        key: 'z-index',
        describe: '水印元素的 z-index 值',
        type: 'number',
        default: '9'
    },
    {
        key: 'image',
        describe: '水印图片，建议使用 2x 或 3x 图像',
        type: 'string',
        default: '—'
    },
    {
        key: 'content',
        describe: '水印文本内容',
        type: 'string / array',
        default: 'Element Plus'
    },
    {
        key: 'font',
        describe: '文字样式',
        type: 'object',
        default: '—'
    },
    {
        key: 'gap',
        describe: '水印之间的间距',
        type: 'array',
        default: '[100, 100]'
    },
    {
        key: 'offset',
        describe: '水印从容器左上角的偏移，默认值为 gap/2',
        type: 'array',
        default: '[gap[0]/2, gap[1]/2]'
    }
];

const event: any[] = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/watermark.html#%E5%B1%9E%E6%80%A7';
});

export default {
    key: 'el-watermark',
    attr,
    event
};
