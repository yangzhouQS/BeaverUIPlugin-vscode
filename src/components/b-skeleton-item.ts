// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/skeleton.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'variant',
        describe: '当前渲染 skeleton 类型',
        type: '\'p\' | \'text\' | \'h1\' | \'h3\' | \'caption\' | \'button\' | \'image\' | \'circle\' | \'rect\'',
        default: 'text',
        values: [
            'p',
            'text',
            'h1',
            'h3',
            'caption',
            'button',
            'image',
            'circle',
            'rect'
        ],
        link: 'https://beaver-ui.yearrow.com/component/skeleton#skeletonitem-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [];

export default {
    key: 'b-skeleton-item',
    attr,
    event,
    slot
};
