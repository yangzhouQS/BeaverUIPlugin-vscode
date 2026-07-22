const attr = [
    {
        key: 'name',
        describe: '幻灯片的名字，可用作 setActiveItem 的参数。',
        type: 'string',
        default: "''"
    },
    {
        key: 'label',
        describe: '该幻灯片所对应指示器的文本。',
        type: 'string / number',
        default: "''"
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/carousel.html#carousel-item-%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/carousel.html#carousel-item-%E4%BA%8B%E4%BB%B6';
});

export default {
    key: 'el-carousel-item',
    attr,
    event
};
