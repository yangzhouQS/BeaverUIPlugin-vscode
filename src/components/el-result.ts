const attr = [
    {
        key: 'title',
        describe: 'result 组件的标题。',
        type: 'string',
        default: '\'\''
    },
    {
        key: 'sub-title',
        describe: 'result 组件的副标题。',
        type: 'string',
        default: '\'\''
    },
    {
        key: 'icon',
        describe: 'result 组件的图标类型。',
        type: 'enum',
        default: '\'info\'',
        values: ['primary', 'success', 'warning', 'info', 'error']
    }
];
const event: any[] = [];
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
        key: 'sub-title',
        describe: 'content as result sub title'
    },
    {
        key: 'extra',
        describe: '额外区域内容'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/result.html#result-%E5%B1%9E%E6%80%A7';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/result.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-result',
    attr,
    event,
    slot
};
