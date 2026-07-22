const attr = [
    {
        key: 'timestamp',
        describe: '时间戳',
        type: 'string',
        default: '\'\''
    },
    {
        key: 'hide-timestamp',
        describe: '是否隐藏时间戳',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'center',
        describe: '是否垂直居中',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'placement',
        describe: '时间戳位置，可选值: bottom',
        type: 'enum',
        default: 'bottom',
        values: ['top', 'bottom']
    },
    {
        key: 'type',
        describe: '节点类型',
        type: 'enum',
        default: '\'\'',
        values: ['primary', 'success', 'warning', 'danger', 'info']
    },
    {
        key: 'color',
        describe: '节点颜色',
        type: 'string',
        default: '\'\''
    },
    {
        key: 'size',
        describe: '节点尺寸，可选值: normal',
        type: 'enum',
        default: 'normal',
        values: ['normal', 'large']
    },
    {
        key: 'icon',
        describe: '自定义图标，支持字符串或组件',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'hollow',
        describe: '是否为空心点',
        type: 'boolean',
        default: 'false'
    }
];
const event: any[] = [];
const slot = [
    {
        key: 'default',
        describe: '自定义默认内容'
    },
    {
        key: 'dot',
        describe: 'customize defined node for timeline item'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/timeline.html#timeline-item-%E5%B1%9E%E6%80%A7';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/timeline.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-timeline-item',
    attr,
    event,
    slot
};
