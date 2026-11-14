// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/select.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'value',
        describe: '选项的值',
        type: 'string / number / boolean / object',
        link: 'https://beaver-ui.yearrow.com/component/select#option-attributes'
    },
    {
        key: 'label',
        describe: '选项的标签，若不设置则默认与value相同',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/select#option-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用该选项',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/select#option-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '默认插槽内容',
        link: 'https://beaver-ui.yearrow.com/component/select#option-slots'
    }
];

export default {
    key: 'b-option',
    attr,
    event,
    slot
};
