// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/space.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'alignment',
        describe: '对齐的方式',
        type: '\'center\' | \'normal\' | \'stretch\' | ... align-items',
        default: 'center',
        values: [
            'center',
            'normal',
            'stretch'
        ],
        link: 'https://beaver-ui.yearrow.com/component/space#space-attributes'
    },
    {
        key: 'class',
        describe: 'className',
        type: 'string / object / array',
        link: 'https://beaver-ui.yearrow.com/component/space#space-attributes'
    },
    {
        key: 'direction',
        describe: '排列的方向',
        type: '\'vertical\' | \'horizontal\'',
        default: 'horizontal',
        values: [
            'vertical',
            'horizontal'
        ],
        link: 'https://beaver-ui.yearrow.com/component/space#space-attributes'
    },
    {
        key: 'prefix-cls',
        describe: '给 space-items 的类名前缀',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/space#space-attributes'
    },
    {
        key: 'style',
        describe: '额外样式',
        type: 'string / CSSProperties | CSSProperties[] | string[]',
        link: 'https://beaver-ui.yearrow.com/component/space#space-attributes'
    },
    {
        key: 'spacer',
        describe: '间隔符',
        type: 'string / number / VNode',
        link: 'https://beaver-ui.yearrow.com/component/space#space-attributes'
    },
    {
        key: 'size',
        describe: '间隔大小',
        type: '\'default\' | \'small\' | \'large\' / number / [number, number]',
        default: 'small',
        values: [
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/space#space-attributes'
    },
    {
        key: 'wrap',
        describe: '设置是否自动折行',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/space#space-attributes'
    },
    {
        key: 'fill',
        describe: '子元素是否填充父容器',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/space#space-attributes'
    },
    {
        key: 'fill-ratio',
        describe: '填充父容器的比例',
        type: 'number',
        default: '100',
        link: 'https://beaver-ui.yearrow.com/component/space#space-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '需要添加间隔的元素',
        link: 'https://beaver-ui.yearrow.com/component/space#space-slots'
    }
];

export default {
    key: 'b-space',
    attr,
    event,
    slot
};
