// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/filter-item.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'label',
        describe: '标签文本',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/filter-item#filteritem-attributes'
    },
    {
        key: 'label-width',
        describe: '标签宽度，数字按 px 处理',
        type: 'string / number',
        default: '\'80px\'',
        link: 'https://beaver-ui.yearrow.com/component/filter-item#filteritem-attributes'
    },
    {
        key: 'label-position',
        describe: '标签位置与对齐：left 标签在左且文本左对齐，right 标签在左且文本右对齐（贴近控件），top 标签在上方',
        type: '\'left\' | \'top\' | \'right\'',
        default: 'right',
        values: [
            'left',
            'top',
            'right'
        ],
        link: 'https://beaver-ui.yearrow.com/component/filter-item#filteritem-attributes'
    },
    {
        key: 'description',
        describe: '是否为描述信息模式',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/filter-item#filteritem-attributes'
    },
    {
        key: 'size',
        describe: '描述模式内边距档位',
        type: '\'large\' | \'default\' | \'small\'',
        default: 'small',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/filter-item#filteritem-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '筛选控件内容，占满剩余宽度',
        link: 'https://beaver-ui.yearrow.com/component/filter-item#filteritem-slots'
    },
    {
        key: 'label',
        describe: '自定义标签内容，覆盖 label 属性',
        link: 'https://beaver-ui.yearrow.com/component/filter-item#filteritem-slots'
    }
];

export default {
    key: 'b-filter-item',
    attr,
    event,
    slot
};
