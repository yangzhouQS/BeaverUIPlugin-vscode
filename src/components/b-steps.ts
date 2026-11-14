// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/steps.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'space',
        describe: '每个 step 的间距，不填写将自适应间距。 支持百分比。',
        type: 'number / string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/steps#steps-attributes'
    },
    {
        key: 'direction',
        describe: '显示方向',
        type: '\'vertical\' | \'horizontal\'',
        default: 'horizontal',
        values: [
            'vertical',
            'horizontal'
        ],
        link: 'https://beaver-ui.yearrow.com/component/steps#steps-attributes'
    },
    {
        key: 'active',
        describe: '设置当前激活步骤',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/steps#steps-attributes'
    },
    {
        key: 'process-status',
        describe: '设置当前步骤的状态',
        type: '\'wait\' | \'process\' | \'finish\' | \'error\' | \'success\'',
        default: 'process',
        values: [
            'wait',
            'process',
            'finish',
            'error',
            'success'
        ],
        link: 'https://beaver-ui.yearrow.com/component/steps#steps-attributes'
    },
    {
        key: 'finish-status',
        describe: '设置结束步骤的状态',
        type: '\'wait\' | \'process\' | \'finish\' | \'error\' | \'success\'',
        default: 'finish',
        values: [
            'wait',
            'process',
            'finish',
            'error',
            'success'
        ],
        link: 'https://beaver-ui.yearrow.com/component/steps#steps-attributes'
    },
    {
        key: 'align-center',
        describe: '进行居中对齐',
        type: 'boolean',
        link: 'https://beaver-ui.yearrow.com/component/steps#steps-attributes'
    },
    {
        key: 'simple',
        describe: '是否应用简洁风格',
        type: 'boolean',
        link: 'https://beaver-ui.yearrow.com/component/steps#steps-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '当活动步骤发生变化时触发',
        link: 'https://beaver-ui.yearrow.com/component/steps#steps-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '默认插槽',
        link: 'https://beaver-ui.yearrow.com/component/steps#steps-slots'
    }
];

export default {
    key: 'b-steps',
    attr,
    event,
    slot
};
