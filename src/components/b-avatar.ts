// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/avatar.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'icon',
        describe: '设置 Avatar 的图标类型，具体参考 Icon 组件',
        type: 'string / Component',
        link: 'https://beaver-ui.yearrow.com/component/avatar#avatar-attributes'
    },
    {
        key: 'size',
        describe: 'Avatar 大小',
        type: 'number / \'large\' | \'default\' | \'small\'',
        values: [
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/avatar#avatar-attributes'
    },
    {
        key: 'shape',
        describe: 'Avatar 形状',
        type: '\'circle\' | \'square\'',
        values: [
            'circle',
            'square'
        ],
        link: 'https://beaver-ui.yearrow.com/component/avatar#avatar-attributes'
    },
    {
        key: 'src',
        describe: 'Avatar 图片的源地址',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/avatar#avatar-attributes'
    },
    {
        key: 'src-set',
        describe: '图片 Avatar 的原生 srcset 属性',
        type: 'string',
        default: 'string',
        link: 'https://beaver-ui.yearrow.com/component/avatar#avatar-attributes'
    },
    {
        key: 'alt',
        describe: '图片 Avatar 的原生 alt 属性',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/avatar#avatar-attributes'
    },
    {
        key: 'fit',
        describe: '当展示类型为图片的时候，设置图片如何适应容器',
        type: '\'fill\' | \'contain\' | \'cover\' | \'none\' | \'scale-down\'',
        default: 'cover',
        values: [
            'fill',
            'contain',
            'cover',
            'none',
            'scale-down'
        ],
        link: 'https://beaver-ui.yearrow.com/component/avatar#avatar-attributes'
    }
];
const event: any[] = [
    {
        key: '@error',
        describe: '图片加载失败时触发',
        type: '(e: Event) => void',
        link: 'https://beaver-ui.yearrow.com/component/avatar#avatar-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义头像展示内容',
        link: 'https://beaver-ui.yearrow.com/component/avatar#avatar-slots'
    }
];

export default {
    key: 'b-avatar',
    attr,
    event,
    slot
};
