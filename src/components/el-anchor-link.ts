const attr = [
    {
        key: 'title',
        describe: '链接的文本内容。',
        type: 'string',
        default: '—'
    },
    {
        key: 'href',
        describe: '链接的地址。',
        type: 'string',
        default: '—'
    }
];

const event: any = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/anchor.html#anchor-link-%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/anchor.html#anchor-link-%E4%BA%8B%E4%BB%B6';
});

export default {
    key: 'el-anchor-link',
    attr,
    event
};
