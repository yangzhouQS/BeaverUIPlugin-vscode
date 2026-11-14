// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/carousel.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'height',
        describe: 'carousel 的高度',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/carousel#carousel-attributes'
    },
    {
        key: 'initial-index',
        describe: '初始状态激活的幻灯片的索引，从 0 开始',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/carousel#carousel-attributes'
    },
    {
        key: 'trigger',
        describe: '指示器的触发方式',
        type: '\'hover\' | \'click\'',
        default: 'hover',
        values: [
            'hover',
            'click'
        ],
        link: 'https://beaver-ui.yearrow.com/component/carousel#carousel-attributes'
    },
    {
        key: 'autoplay',
        describe: '是否自动切换',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/carousel#carousel-attributes'
    },
    {
        key: 'interval',
        describe: '自动切换的时间间隔，单位为毫秒',
        type: 'number',
        default: '3000',
        link: 'https://beaver-ui.yearrow.com/component/carousel#carousel-attributes'
    },
    {
        key: 'indicator-position',
        describe: '指示器的位置',
        type: '\'\' | \'none\' | \'outside\'',
        default: '\'\'',
        values: [
            'none',
            'outside'
        ],
        link: 'https://beaver-ui.yearrow.com/component/carousel#carousel-attributes'
    },
    {
        key: 'arrow',
        describe: '切换箭头的显示时机',
        type: '\'always\' | \'hover\' | \'never\'',
        default: 'hover',
        values: [
            'always',
            'hover',
            'never'
        ],
        link: 'https://beaver-ui.yearrow.com/component/carousel#carousel-attributes'
    },
    {
        key: 'type',
        describe: 'carousel 的类型',
        type: '\'\' | \'card\'',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/carousel#carousel-attributes'
    },
    {
        key: 'card-scale',
        describe: '当 type 为 card时，二级卡的缩放大小',
        type: 'number',
        default: '0.83',
        link: 'https://beaver-ui.yearrow.com/component/carousel#carousel-attributes'
    },
    {
        key: 'loop',
        describe: '是否循环显示',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/carousel#carousel-attributes'
    },
    {
        key: 'direction',
        describe: '展示的方向',
        type: '\'horizontal\' | \'vertical\'',
        default: 'horizontal',
        values: [
            'horizontal',
            'vertical'
        ],
        link: 'https://beaver-ui.yearrow.com/component/carousel#carousel-attributes'
    },
    {
        key: 'pause-on-hover',
        describe: '鼠标悬浮时暂停自动切换',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/carousel#carousel-attributes'
    },
    {
        key: 'motion-blur',
        describe: '添加动态模糊以给走马灯注入活力和流畅性。',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/carousel#carousel-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '当前展示的幻灯片切换时触发，它有两个参数， 一个是新幻灯片的索引，另一个是旧幻灯片的索引',
        type: '(current: number, prev: number) => void',
        link: 'https://beaver-ui.yearrow.com/component/carousel#carousel-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/carousel#carousel-slots'
    }
];

export default {
    key: 'b-carousel',
    attr,
    event,
    slot
};
