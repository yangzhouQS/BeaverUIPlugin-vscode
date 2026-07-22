const attr = [
    {
        key: 'size',
        describe: '面板的尺寸（像素或百分比）',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'min',
        describe: '面板的最小尺寸（像素或百分比）',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'max',
        describe: '面板的最大尺寸（像素或百分比）',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'resizable',
        describe: '面板是否可调整大小',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'collapsible',
        describe: '面板是否可折叠',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'v-model:size',
        describe: '绑定值，面板的尺寸',
        type: 'string / number',
        default: '—'
    }
];

const event = [
    {
        key: '@update:size',
        describe: '面板尺寸变化时触发',
        type: 'function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/splitter.html#splitterpanel-%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/splitter.html#splitterpanel-%E4%BA%8B%E4%BB%B6';
});

export default {
    key: 'el-splitter-panel',
    attr,
    event
};
