const attr = [
    {
        key: 'border',
        describe: '是否带有边框。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'column',
        describe: '一行 Descriptions Item 的数量。',
        type: 'number',
        default: '3'
    },
    {
        key: 'direction',
        describe: '排列的方向。',
        type: 'enum',
        default: 'horizontal',
        values: ['vertical', 'horizontal']
    },
    {
        key: 'size',
        describe: '列表的尺寸。',
        type: 'enum',
        default: '—',
        values: ['large', 'default', 'small']
    },
    {
        key: 'title',
        describe: '标题文本，显示在左上方。',
        type: 'string',
        default: '\'\''
    },
    {
        key: 'extra',
        describe: '操作区文本，显示在右上方。',
        type: 'string',
        default: '\'\''
    },
    {
        key: 'label-width',
        describe: '每一列的标签宽度。自 2.8.8 版本起支持。',
        type: 'string / number',
        default: '—'
    }
];
const event: any[] = [];
const slot = [
    {
        key: 'default',
        describe: '自定义默认内容'
    },
    {
        key: 'title',
        describe: '标题内容'
    },
    {
        key: 'extra',
        describe: '额外区域内容'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/descriptions.html#descriptions-%E5%B1%9E%E6%80%A7';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/descriptions.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-descriptions',
    attr,
    event,
    slot
};
