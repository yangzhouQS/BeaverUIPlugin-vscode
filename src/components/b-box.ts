// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/box.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'padding-size',
        describe: '内边距档位',
        type: 'string',
        default: 'default',
        link: 'https://beaver-ui.yearrow.com/component/box#box-attributes'
    },
    {
        key: 'clear-padding',
        describe: '清除指定方向的内边距',
        type: 'array',
        link: 'https://beaver-ui.yearrow.com/component/box#box-attributes'
    },
    {
        key: 'border',
        describe: '是否显示边框（完整四边）',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/box#box-attributes'
    },
    {
        key: 'clear-border',
        describe: '清除指定方向的边框',
        type: 'array',
        link: 'https://beaver-ui.yearrow.com/component/box#box-attributes'
    },
    {
        key: 'shadow',
        describe: '阴影显示时机',
        type: 'string',
        default: 'never',
        link: 'https://beaver-ui.yearrow.com/component/box#box-attributes'
    },
    {
        key: 'background',
        describe: '是否显示背景色',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/box#box-attributes'
    },
    {
        key: 'height',
        describe: '容器高度',
        type: 'string',
        default: '100%',
        link: 'https://beaver-ui.yearrow.com/component/box#box-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '内容区',
        link: 'https://beaver-ui.yearrow.com/component/box#box-slots'
    }
];

export default {
    key: 'b-box',
    attr,
    event,
    slot
};
