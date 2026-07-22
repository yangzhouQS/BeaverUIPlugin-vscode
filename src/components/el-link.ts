const attr = [
    {
        key: 'type',
        describe: '类型',
        type: 'enum',
        default: 'default',
        values: ['primary', 'success', 'warning', 'danger', 'info', 'default']
    },
    {
        key: 'underline',
        describe: '控制下划线是否出现',
        type: 'enum / boolean',
        default: 'hover',
        values: ['always', 'hover', 'never']
    },
    {
        key: 'disabled',
        describe: '是否禁用状态',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'href',
        describe: '原生 href 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'target',
        describe: '同原生 target 属性',
        type: 'enum',
        default: '_self',
        values: ['_blank', '_parent', '_self', '_top']
    },
    {
        key: 'icon',
        describe: '图标组件',
        type: 'string / Component',
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
        key: 'icon',
        describe: '图标内容'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/link.html#attributes';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/link.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-link',
    attr,
    event,
    slot
};
