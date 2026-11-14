// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/steps.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'title',
        describe: '标题',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/steps#step-attributes'
    },
    {
        key: 'description',
        describe: '描述文案',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/steps#step-attributes'
    },
    {
        key: 'icon',
        describe: 'Step 组件的自定义图标。 也支持 slot 方式写入',
        type: 'string / Component',
        link: 'https://beaver-ui.yearrow.com/component/steps#step-attributes'
    },
    {
        key: 'status',
        describe: '设置当前步骤的状态， 不设置则根据 steps 确定状态',
        type: '\'\' | \'wait\' | \'process\' | \'finish\' | \'error\' | \'success\'',
        default: '\'\'',
        values: [
            'wait',
            'process',
            'finish',
            'error',
            'success'
        ],
        link: 'https://beaver-ui.yearrow.com/component/steps#step-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'icon',
        describe: '自定义图标',
        link: 'https://beaver-ui.yearrow.com/component/steps#step-slots'
    },
    {
        key: 'title',
        describe: '自定义标题',
        link: 'https://beaver-ui.yearrow.com/component/steps#step-slots'
    },
    {
        key: 'description',
        describe: '自定义描述文案',
        link: 'https://beaver-ui.yearrow.com/component/steps#step-slots'
    }
];

export default {
    key: 'b-step',
    attr,
    event,
    slot
};
