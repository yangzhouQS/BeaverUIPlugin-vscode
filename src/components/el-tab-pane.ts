const attr = [
    {
        key: 'label',
        describe: '选项卡标题',
        type: 'string',
        default: '\'\''
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'name',
        describe: '与选项卡绑定值 value 对应的标识符，表示选项卡别名。默认值是 tab 面板的序列号，如第一个 tab 是 0',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'closable',
        describe: '标签是否可关闭',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'lazy',
        describe: '标签是否延迟渲染',
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
        key: 'label',
        describe: '标签内容'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/tabs.html#tab-pane-%E5%B1%9E%E6%80%A7';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/tabs.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-tab-pane',
    attr,
    event,
    slot
};
