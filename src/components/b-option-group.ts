// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/select.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'label',
        describe: '分组的名称',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/select#option-group-attributes'
    },
    {
        key: 'disabled',
        describe: '是否将该分组下所有选项置为禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/select#option-group-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/select#option-group-slots'
    }
];

export default {
    key: 'b-option-group',
    attr,
    event,
    slot
};
