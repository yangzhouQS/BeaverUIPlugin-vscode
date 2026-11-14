// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/button.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'size',
        describe: '用于控制该按钮组内按钮的大小',
        type: '\'large\' | \'default\' | \'small\'',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/button#buttongroup-attributes'
    },
    {
        key: 'type',
        describe: '用于控制该按钮组内按钮的类型',
        type: '\'primary\' | \'success\' | \'warning\' | \'danger\' | \'info\'',
        values: [
            'primary',
            'success',
            'warning',
            'danger',
            'info'
        ],
        link: 'https://beaver-ui.yearrow.com/component/button#buttongroup-attributes'
    },
    {
        key: 'direction',
        describe: '展示的方向',
        type: '\'horizontal\' | \'vertical\'',
        default: 'horizontal',
        values: [
            'horizontal',
            'vertical'
        ],
        link: 'https://beaver-ui.yearrow.com/component/button#buttongroup-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义按钮组内容',
        link: 'https://beaver-ui.yearrow.com/component/button#buttongroup-slots'
    }
];

export default {
    key: 'b-button-group',
    attr,
    event,
    slot
};
