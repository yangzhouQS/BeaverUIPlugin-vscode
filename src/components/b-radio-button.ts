// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/radio.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'value',
        describe: '单选框的值',
        type: 'string / number / boolean',
        link: 'https://beaver-ui.yearrow.com/component/radio#radiobutton-attributes'
    },
    {
        key: 'label',
        describe: '单选框的 label 如果没有 value， label则作为value使用',
        type: 'string / number / boolean',
        link: 'https://beaver-ui.yearrow.com/component/radio#radiobutton-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用单选框',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/radio#radiobutton-attributes'
    },
    {
        key: 'name',
        describe: '原生 name 属性',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/radio#radiobutton-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '默认插槽内容',
        link: 'https://beaver-ui.yearrow.com/component/radio#radiobutton-slots'
    }
];

export default {
    key: 'b-radio-button',
    attr,
    event,
    slot
};
