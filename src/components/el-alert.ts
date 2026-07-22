const attr = [
    {
        key: 'title',
        describe: 'Alert 标题。',
        type: 'string',
        default: '—'
    },
    {
        key: 'type',
        describe: 'Alert 类型。',
        type: 'enum',
        default: 'info',
        values: ['primary', 'success', 'warning', 'info', 'error']
    },
    {
        key: 'description',
        describe: '描述性文本',
        type: 'string',
        default: '—'
    },
    {
        key: 'closable',
        describe: '是否可以关闭',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'center',
        describe: '文字是否居中',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'close-text',
        describe: '自定义关闭按钮文本',
        type: 'string',
        default: '—'
    },
    {
        key: 'show-icon',
        describe: '是否显示类型图标',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'effect',
        describe: '主题样式',
        type: 'enum',
        default: 'light',
        values: ['light', 'dark']
    }
];
const event = [
    {
        key: '@close',
        describe: '关闭 Alert 时触发的事件',
        type: 'function'
    }
];
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
        key: 'icon',
        describe: '图标内容'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/alert.html#alert-%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/alert.html#alert-%E4%BA%8B%E4%BB%B6';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/alert.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-alert',
    attr,
    event,
    slot
};
