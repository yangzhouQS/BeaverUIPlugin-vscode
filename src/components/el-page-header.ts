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
        default: '\'\''
    },
    {
        key: 'content',
        describe: 'Page Header 的内容。',
        type: 'string',
        default: '\'\''
    }
];
const event = [
    {
        key: '@back',
        describe: '点击左侧区域触发',
        type: 'function'
    }
];
const slot = [
    {
        key: 'icon',
        describe: '图标内容'
    },
    {
        key: 'title',
        describe: '标题内容'
    },
    {
        key: 'content',
        describe: '弹出的内容'
    },
    {
        key: 'extra',
        describe: '额外区域内容'
    },
    {
        key: 'breadcrumb',
        describe: 'content as breadcrumb'
    },
    {
        key: 'default',
        describe: '自定义默认内容'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/page-header.html#page-header-%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/page-header.html#page-header-%E4%BA%8B%E4%BB%B6';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/page-header.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-page-header',
    attr,
    event,
    slot
};
