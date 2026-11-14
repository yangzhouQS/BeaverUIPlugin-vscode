// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/tool-bar.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'divider',
        describe: '是否显示分割线',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tool-bar#toolbar-attributes'
    },
    {
        key: 'padding-size',
        describe: '内边距档位（不传则无内边距）',
        type: '\'large\' | \'default\' | \'small\'',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/tool-bar#toolbar-attributes'
    },
    {
        key: 'clear-padding',
        describe: '清除指定方向的内边距',
        type: '(\'top\' | \'right\' | \'bottom\' | \'left\')[]',
        default: '[]',
        values: [
            'right',
            'bottom'
        ],
        link: 'https://beaver-ui.yearrow.com/component/tool-bar#toolbar-attributes'
    },
    {
        key: 'tool-max-width',
        describe: '操作区最大宽度',
        type: 'string',
        default: '\'150px\'',
        link: 'https://beaver-ui.yearrow.com/component/tool-bar#toolbar-attributes'
    },
    {
        key: 'border',
        describe: '是否显示边框',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tool-bar#toolbar-attributes'
    },
    {
        key: 'background',
        describe: '是否显示背景色',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/tool-bar#toolbar-attributes'
    },
    {
        key: 'filter-gutter',
        describe: '筛选区 b-col 栅格间隔',
        type: 'number',
        default: '6',
        link: 'https://beaver-ui.yearrow.com/component/tool-bar#toolbar-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'filter',
        describe: '筛选区内容，配合 b-col 栅格使用',
        link: 'https://beaver-ui.yearrow.com/component/tool-bar#toolbar-slots'
    },
    {
        key: 'tool',
        describe: '操作按钮区内容',
        link: 'https://beaver-ui.yearrow.com/component/tool-bar#toolbar-slots'
    },
    {
        key: 'default',
        describe: '第二行内容区',
        link: 'https://beaver-ui.yearrow.com/component/tool-bar#toolbar-slots'
    }
];

export default {
    key: 'b-tool-bar',
    attr,
    event,
    slot
};
