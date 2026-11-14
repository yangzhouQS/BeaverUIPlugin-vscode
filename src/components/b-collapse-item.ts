// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/collapse.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'name',
        describe: '唯一标志符',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/collapse#collapse-item-attributes'
    },
    {
        key: 'title',
        describe: '面板标题',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/collapse#collapse-item-attributes'
    },
    {
        key: 'icon',
        describe: '折叠项目的图标',
        type: 'string / Component',
        default: 'ArrowRight',
        link: 'https://beaver-ui.yearrow.com/component/collapse#collapse-item-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/collapse#collapse-item-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: 'Collapse Item 的内容',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/collapse#collapse-item-slots'
    },
    {
        key: 'title',
        describe: 'Collapse Item 的标题',
        type: '{ isActive: boolean }',
        link: 'https://beaver-ui.yearrow.com/component/collapse#collapse-item-slots'
    },
    {
        key: 'icon',
        describe: '折叠项目图标的内容',
        type: '{ isActive: boolean }',
        link: 'https://beaver-ui.yearrow.com/component/collapse#collapse-item-slots'
    }
];

export default {
    key: 'b-collapse-item',
    attr,
    event,
    slot
};
