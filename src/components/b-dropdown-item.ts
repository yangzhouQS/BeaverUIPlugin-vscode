// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/dropdown.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'command',
        describe: '派发到command回调函数的指令参数',
        type: 'string / number / object',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-item-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-item-attributes'
    },
    {
        key: 'divided',
        describe: '是否显示分隔符',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-item-attributes'
    },
    {
        key: 'icon',
        describe: '自定义图标',
        type: 'string / Component',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-item-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义Dropdown-Item内容',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-item-slots'
    },
    {
        key: 'icon',
        describe: '自定义图标，它将覆盖图标prop（自 2.13.1 版本）',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-item-slots'
    }
];

export default {
    key: 'b-dropdown-item',
    attr,
    event,
    slot
};
