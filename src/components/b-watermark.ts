// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/watermark.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'width',
        describe: '水印的宽度， content 的默认值是它自己的宽度',
        type: 'number',
        default: '120',
        link: 'https://beaver-ui.yearrow.com/component/watermark#watermark-attributes'
    },
    {
        key: 'height',
        describe: '水印的高度， content 的默认值是它自己的高度',
        type: 'number',
        default: '64',
        link: 'https://beaver-ui.yearrow.com/component/watermark#watermark-attributes'
    },
    {
        key: 'rotate',
        describe: '水印的旋转角度, 单位 °',
        type: 'number',
        default: '-22',
        link: 'https://beaver-ui.yearrow.com/component/watermark#watermark-attributes'
    },
    {
        key: 'z-index',
        describe: '水印元素的z-index值',
        type: 'number',
        default: '9',
        link: 'https://beaver-ui.yearrow.com/component/watermark#watermark-attributes'
    },
    {
        key: 'image',
        describe: '水印图片，建议使用 2x 或 3x 图像',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/watermark#watermark-attributes'
    },
    {
        key: 'content',
        describe: '水印文本内容',
        type: 'string/string[]',
        default: 'Beaver UI',
        link: 'https://beaver-ui.yearrow.com/component/watermark#watermark-attributes'
    },
    {
        key: 'font',
        describe: '文字样式',
        type: 'Font',
        default: '字体',
        link: 'https://beaver-ui.yearrow.com/component/watermark#watermark-attributes'
    },
    {
        key: 'gap',
        describe: '水印之间的间距',
        type: '[number, number]',
        default: '\\[100, 100\\]',
        link: 'https://beaver-ui.yearrow.com/component/watermark#watermark-attributes'
    },
    {
        key: 'offset',
        describe: '水印从容器左上角的偏移 默认值为 gap/2',
        type: '[number, number]',
        default: '\\[gap\\[0\\]/2, gap\\[1\\]/2\\]',
        link: 'https://beaver-ui.yearrow.com/component/watermark#watermark-attributes'
    },
    {
        key: 'color',
        describe: '字体颜色',
        type: 'string',
        default: 'rgba(0,0,0,.15)',
        link: 'https://beaver-ui.yearrow.com/component/watermark#watermark-attributes'
    },
    {
        key: 'fontSize',
        describe: '字体大小',
        type: 'number / string',
        default: '16',
        link: 'https://beaver-ui.yearrow.com/component/watermark#watermark-attributes'
    },
    {
        key: 'fontWeight',
        describe: '字重',
        type: '\'normal\' | \'bold\' | \'lighter\' | \'bolder\' | number',
        default: 'normal',
        values: [
            'normal',
            'bold',
            'lighter',
            'bolder'
        ],
        link: 'https://beaver-ui.yearrow.com/component/watermark#watermark-attributes'
    },
    {
        key: 'fontFamily',
        describe: '字体',
        type: 'string',
        default: 'sans-serif',
        link: 'https://beaver-ui.yearrow.com/component/watermark#watermark-attributes'
    },
    {
        key: 'fontGap',
        describe: '字体间隙',
        type: 'number',
        default: '3',
        link: 'https://beaver-ui.yearrow.com/component/watermark#watermark-attributes'
    },
    {
        key: 'fontStyle',
        describe: '字体样式',
        type: '\'none\' | \'normal\' | \'italic\' | \'oblique\'',
        default: 'normal',
        values: [
            'none',
            'normal',
            'italic',
            'oblique'
        ],
        link: 'https://beaver-ui.yearrow.com/component/watermark#watermark-attributes'
    },
    {
        key: 'textAlign',
        describe: '文本对齐',
        type: '\'left\' | \'right\' | \'center\' | \'start\' | \'end\'',
        default: 'center',
        values: [
            'left',
            'right',
            'center',
            'start',
            'end'
        ],
        link: 'https://beaver-ui.yearrow.com/component/watermark#watermark-attributes'
    },
    {
        key: 'textBaseline',
        describe: '文本基线',
        type: '\'top\' | \'hanging\' | \'middle\' | \'alphabetic\' | \'ideographic\' | \'bottom\'',
        default: 'hanging',
        values: [
            'top',
            'hanging',
            'middle',
            'alphabetic',
            'ideographic',
            'bottom'
        ],
        link: 'https://beaver-ui.yearrow.com/component/watermark#watermark-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: '默认',
        describe: '添加水印的容器',
        link: 'https://beaver-ui.yearrow.com/component/watermark#watermark-slots'
    }
];

export default {
    key: 'b-watermark',
    attr,
    event,
    slot
};
