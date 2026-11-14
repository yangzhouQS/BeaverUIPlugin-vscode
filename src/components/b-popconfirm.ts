// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/popconfirm.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'title',
        describe: '标题',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/popconfirm#popconfirm-attributes'
    },
    {
        key: 'effect',
        describe: 'Tooltip 主题，内置了 dark / light 两种',
        type: '\'dark\' | \'light\' / string',
        default: 'light',
        link: 'https://beaver-ui.yearrow.com/component/popconfirm#popconfirm-attributes'
    },
    {
        key: 'confirm-button-text',
        describe: '确认按钮文字',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/popconfirm#popconfirm-attributes'
    },
    {
        key: 'cancel-button-text',
        describe: '取消按钮文字',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/popconfirm#popconfirm-attributes'
    },
    {
        key: 'confirm-button-type',
        describe: '确认按钮类型',
        type: '\'primary\' | \'success\' | \'warning\' | \'danger\' | \'info\' | \'text\'',
        default: 'primary',
        values: [
            'primary',
            'success',
            'warning',
            'danger',
            'info',
            'text'
        ],
        link: 'https://beaver-ui.yearrow.com/component/popconfirm#popconfirm-attributes'
    },
    {
        key: 'cancel-button-type',
        describe: '取消按钮类型',
        type: '\'primary\' | \'success\' | \'warning\' | \'danger\' | \'info\' | \'text\'',
        default: 'text',
        values: [
            'primary',
            'success',
            'warning',
            'danger',
            'info',
            'text'
        ],
        link: 'https://beaver-ui.yearrow.com/component/popconfirm#popconfirm-attributes'
    },
    {
        key: 'icon',
        describe: '自定义图标',
        type: 'string / Component',
        default: 'QuestionFilled',
        link: 'https://beaver-ui.yearrow.com/component/popconfirm#popconfirm-attributes'
    },
    {
        key: 'icon-color',
        describe: 'Icon 颜色',
        type: 'string',
        default: '#f90',
        link: 'https://beaver-ui.yearrow.com/component/popconfirm#popconfirm-attributes'
    },
    {
        key: 'hide-icon',
        describe: '是否隐藏 Icon',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/popconfirm#popconfirm-attributes'
    },
    {
        key: 'hide-after',
        describe: '关闭时的延迟',
        type: 'number',
        default: '200',
        link: 'https://beaver-ui.yearrow.com/component/popconfirm#popconfirm-attributes'
    },
    {
        key: 'teleported',
        describe: '是否将 popover 的下拉列表插入至 body 元素',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/popconfirm#popconfirm-attributes'
    },
    {
        key: 'persistent',
        describe: '当 popover 组件长时间不触发且 persistent 属性设置为 false 时, popover 将会被删除',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/popconfirm#popconfirm-attributes'
    },
    {
        key: 'width',
        describe: '弹层宽度，最小宽度 150px',
        type: 'string / number',
        default: '150',
        link: 'https://beaver-ui.yearrow.com/component/popconfirm#popconfirm-attributes'
    },
    {
        key: 'tooltip',
        describe: '继承自 Tooltip 的所有属性，但不包括：popper-class、popper-style、fallback-placements',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/popconfirm#popconfirm-attributes'
    }
];
const event: any[] = [
    {
        key: '@confirm',
        describe: '点击确认按钮时触发',
        type: '(e: MouseEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/popconfirm#popconfirm-events'
    },
    {
        key: '@cancel',
        describe: '点击取消按钮时触发',
        type: '(e: MouseEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/popconfirm#popconfirm-events'
    }
];
const slot: any[] = [
    {
        key: 'reference',
        describe: '触发 Popconfirm 显示的 HTML 元素',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/popconfirm#popconfirm-slots'
    },
    {
        key: 'actions',
        describe: '页脚的内容',
        type: '{ confirm: (e: MouseEvent) => void, cancel: (e: MouseEvent) => void }',
        link: 'https://beaver-ui.yearrow.com/component/popconfirm#popconfirm-slots'
    }
];

export default {
    key: 'b-popconfirm',
    attr,
    event,
    slot
};
