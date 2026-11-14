// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/alert.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'title',
        describe: 'Alert 标题。',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/alert#alert-attributes'
    },
    {
        key: 'type',
        describe: 'Alert 类型。',
        type: '\'primary\' (2.9.11) | \'success\' | \'warning\' | \'info\' | \'error\'',
        default: 'info',
        values: [
            'success',
            'warning',
            'info',
            'error'
        ],
        link: 'https://beaver-ui.yearrow.com/component/alert#alert-attributes'
    },
    {
        key: 'description',
        describe: '描述性文本',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/alert#alert-attributes'
    },
    {
        key: 'closable',
        describe: '是否可以关闭',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/alert#alert-attributes'
    },
    {
        key: 'center',
        describe: '文字是否居中',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/alert#alert-attributes'
    },
    {
        key: 'close-text',
        describe: '自定义关闭按钮文本',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/alert#alert-attributes'
    },
    {
        key: 'show-icon',
        describe: '是否显示类型图标',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/alert#alert-attributes'
    },
    {
        key: 'effect',
        describe: '主题样式',
        type: '\'light\' | \'dark\'',
        default: 'light',
        values: [
            'light',
            'dark'
        ],
        link: 'https://beaver-ui.yearrow.com/component/alert#alert-attributes'
    }
];
const event: any[] = [
    {
        key: '@close',
        describe: '关闭 Alert 时触发的事件',
        type: '(event: MouseEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/alert#alert-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: 'Alert 内容描述',
        link: 'https://beaver-ui.yearrow.com/component/alert#alert-slots'
    },
    {
        key: 'title',
        describe: '标题的内容',
        link: 'https://beaver-ui.yearrow.com/component/alert#alert-slots'
    },
    {
        key: 'icon',
        describe: 'icon 的内容',
        link: 'https://beaver-ui.yearrow.com/component/alert#alert-slots'
    }
];

export default {
    key: 'b-alert',
    attr,
    event,
    slot
};
