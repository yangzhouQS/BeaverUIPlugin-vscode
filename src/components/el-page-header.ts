const attr = [
    {
        key: 'icon',
        describe: 'Page Header 的图标 Icon 组件。',
        type: 'string / Component',
        default: 'Back'
    },
    {
        key: 'title',
        describe: 'Page Header 的主标题，默认是 Back (内置 a11y)。',
        type: 'string',
        default: "''"
    },
    {
        key: 'content',
        describe: 'Page Header 的内容。',
        type: 'string',
        default: "''"
    }
];

const event: any = [
    {
        key: '@back',
        describe: '点击左侧区域触发',
        type: 'function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/page-header.html#page-header-%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/page-header.html#page-header-%E4%BA%8B%E4%BB%B6';
});

export default {
    key: 'el-page-header',
    attr,
    event
};
