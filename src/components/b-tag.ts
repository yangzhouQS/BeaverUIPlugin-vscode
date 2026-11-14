// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/tag.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'type',
        describe: 'Tag 的类型',
        type: '\'primary\' | \'success\' | \'info\' | \'warning\' | \'danger\'',
        default: 'primary',
        values: [
            'primary',
            'success',
            'info',
            'warning',
            'danger'
        ],
        link: 'https://beaver-ui.yearrow.com/component/tag#tag-attributes'
    },
    {
        key: 'closable',
        describe: '是否可关闭',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tag#tag-attributes'
    },
    {
        key: 'disable-transitions',
        describe: '是否禁用渐变动画',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tag#tag-attributes'
    },
    {
        key: 'hit',
        describe: '是否有边框描边',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tag#tag-attributes'
    },
    {
        key: 'color',
        describe: '背景色',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/tag#tag-attributes'
    },
    {
        key: 'size',
        describe: 'Tag 的尺寸',
        type: '\'large\' | \'default\' | \'small\'',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/tag#tag-attributes'
    },
    {
        key: 'effect',
        describe: 'Tag 的主题',
        type: '\'dark\' | \'light\' | \'plain\'',
        default: 'light',
        values: [
            'dark',
            'light',
            'plain'
        ],
        link: 'https://beaver-ui.yearrow.com/component/tag#tag-attributes'
    },
    {
        key: 'round',
        describe: 'Tag 是否为圆角',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tag#tag-attributes'
    }
];
const event: any[] = [
    {
        key: '@click',
        describe: '点击 Tag 时触发的事件',
        type: '(evt: MouseEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/tag#tag-events'
    },
    {
        key: '@close',
        describe: '关闭 Tag 时触发的事件',
        type: '(evt: MouseEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/tag#tag-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/tag#tag-slots'
    }
];

export default {
    key: 'b-tag',
    attr,
    event,
    slot
};
