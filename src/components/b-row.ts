// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/layout.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'gutter',
        describe: '栅格间隔',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/layout#row-attributes'
    },
    {
        key: 'justify',
        describe: 'flex 布局下的水平排列方式',
        type: '\'start\' | \'end\' | \'center\' | \'space-around\' | \'space-between\' | \'space-evenly\'',
        default: 'start',
        values: [
            'start',
            'end',
            'center',
            'space-around',
            'space-between',
            'space-evenly'
        ],
        link: 'https://beaver-ui.yearrow.com/component/layout#row-attributes'
    },
    {
        key: 'align',
        describe: 'flex 布局下的垂直排列方式',
        type: '\'top\' | \'middle\' | \'bottom\'',
        values: [
            'top',
            'middle',
            'bottom'
        ],
        link: 'https://beaver-ui.yearrow.com/component/layout#row-attributes'
    },
    {
        key: 'tag',
        describe: '自定义元素标签',
        type: 'string',
        default: 'div',
        link: 'https://beaver-ui.yearrow.com/component/layout#row-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/layout#row-slots'
    }
];

export default {
    key: 'b-row',
    attr,
    event,
    slot
};
