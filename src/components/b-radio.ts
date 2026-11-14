// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/radio.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'string / number / boolean',
        link: 'https://beaver-ui.yearrow.com/component/radio#radio-attributes'
    },
    {
        key: 'value',
        describe: '单选框的值',
        type: 'string / number / boolean',
        default: ':::',
        link: 'https://beaver-ui.yearrow.com/component/radio#radio-attributes'
    },
    {
        key: 'label',
        describe: '单选框的 label 如果value没有值， label则作为value使用',
        type: 'string / number / boolean',
        default: ':::',
        link: 'https://beaver-ui.yearrow.com/component/radio#radio-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用单选框',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/radio#radio-attributes'
    },
    {
        key: 'border',
        describe: '是否显示边框',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/radio#radio-attributes'
    },
    {
        key: 'size',
        describe: '单选框的尺寸',
        type: '\'large\' | \'default\' | \'small\'',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/radio#radio-attributes'
    },
    {
        key: 'name',
        describe: '原始 name 属性',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/radio#radio-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '绑定值变化时触发的事件',
        type: '(value: string | number | boolean) => void',
        link: 'https://beaver-ui.yearrow.com/component/radio#radio-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/radio#radio-slots'
    }
];

export default {
    key: 'b-radio',
    attr,
    event,
    slot
};
