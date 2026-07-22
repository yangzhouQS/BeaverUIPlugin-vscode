const attr = [
    {
        key: 'space',
        describe: '每个 step 的间距，不填写将自适应间距。支持百分比。',
        type: 'string / number',
        default: '\'\''
    },
    {
        key: 'direction',
        describe: '显示方向。',
        type: 'enum',
        default: 'horizontal',
        values: ['vertical', 'horizontal']
    },
    {
        key: 'active',
        describe: '设置当前激活步骤。',
        type: 'number',
        default: '0'
    },
    {
        key: 'process-status',
        describe: '设置当前步骤的状态。',
        type: 'enum',
        default: 'process',
        values: ['wait', 'process', 'finish', 'error', 'success']
    },
    {
        key: 'finish-status',
        describe: '设置结束步骤的状态。',
        type: 'enum',
        default: 'finish',
        values: ['wait', 'process', 'finish', 'error', 'success']
    },
    {
        key: 'align-center',
        describe: '进行居中对齐。',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'simple',
        describe: '是否应用简洁风格。',
        type: 'boolean',
        default: '—'
    }
];
const event: any[] = [];
const slot = [
    {
        key: 'default',
        describe: '自定义默认内容'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/steps.html#steps-%E5%B1%9E%E6%80%A7';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/steps.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-steps',
    attr,
    event,
    slot
};
