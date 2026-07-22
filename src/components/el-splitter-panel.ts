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
const slot = [
    {
        key: 'default',
        describe: '自定义默认内容'
    },
    {
        key: 'start-collapsible',
        describe: 'Custom content for the start collapsible button'
    },
    {
        key: 'end-collapsible',
        describe: 'Custom content for the end collapsible button'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/splitter.html#splitterpanel-%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/splitter.html#splitterpanel-%E4%BA%8B%E4%BB%B6';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/splitter.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-splitter-panel',
    attr,
    event,
    slot
};
