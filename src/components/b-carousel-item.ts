// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/carousel.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'name',
        describe: '幻灯片的名字，可用作 setActiveItem 的参数',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/carousel#carousel-item-attributes'
    },
    {
        key: 'label',
        describe: '该幻灯片所对应指示器的文本',
        type: 'string / number',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/carousel#carousel-item-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/carousel#carousel-item-slots'
    }
];

export default {
    key: 'b-carousel-item',
    attr,
    event,
    slot
};
