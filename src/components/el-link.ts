const attr = [
    {
        key: 'type',
        describe: '类型',
        type: 'enum',
        default: 'default'
    },
    {
        key: 'underline',
        describe: '控制下划线是否出现',
        type: 'enum / boolean',
        default: 'hover'
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
        default: '_self'
    },
    {
        key: 'icon',
        describe: '图标组件',
        type: 'string / Component',
        default: '—'
    }
];

const event: any[] = [];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/link.html#attributes';
});

export default {
    key: 'el-link',
    attr,
    event
};
