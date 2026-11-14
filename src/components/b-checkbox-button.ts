// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/checkbox.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'value',
        describe: '选中状态的值，只有在绑定对象类型为 array 时有效。',
        type: 'string / number / boolean / object',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxbutton-attributes'
    },
    {
        key: 'label',
        describe: '选中状态的值，只有在绑定对象类型为 array 时有效。 如果没有 value， label则作为value使用',
        type: 'string / number / boolean / object',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxbutton-attributes'
    },
    {
        key: 'true-value',
        describe: '选中时的值',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxbutton-attributes'
    },
    {
        key: 'false-value',
        describe: '没有选中时的值',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxbutton-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxbutton-attributes'
    },
    {
        key: 'name',
        describe: '原生 name 属性',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxbutton-attributes'
    },
    {
        key: 'checked',
        describe: '当前是否勾选',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxbutton-attributes'
    },
    {
        key: 'true-label',
        describe: '选中时的值（自 deprecated 版本）【已废弃】',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxbutton-attributes'
    },
    {
        key: 'false-label',
        describe: '没有选中时的值（自 deprecated 版本）【已废弃】',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxbutton-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxbutton-slots'
    }
];

export default {
    key: 'b-checkbox-button',
    attr,
    event,
    slot
};
