// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/link.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'type',
        describe: '类型',
        type: '\'primary\' | \'success\' | \'warning\' | \'danger\' | \'info\' | \'default\'',
        default: 'default',
        values: [
            'primary',
            'success',
            'warning',
            'danger',
            'info',
            'default'
        ],
        link: 'https://beaver-ui.yearrow.com/component/link#link-attributes'
    },
    {
        key: 'underline',
        describe: '控制下划线是否出现',
        type: '\'always\' | \'hover\' | \'never\' | boolean',
        default: 'hover',
        values: [
            'always',
            'hover',
            'never'
        ],
        link: 'https://beaver-ui.yearrow.com/component/link#link-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用状态',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/link#link-attributes'
    },
    {
        key: 'href',
        describe: '原生 href 属性',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/link#link-attributes'
    },
    {
        key: 'target',
        describe: '同原生 target 属性',
        type: '\'_blank\' | \'_parent\' | \'_self\' | \'_top\'',
        default: '\\_self',
        values: [
            '_blank',
            '_parent',
            '_self',
            '_top'
        ],
        link: 'https://beaver-ui.yearrow.com/component/link#link-attributes'
    },
    {
        key: 'icon',
        describe: '图标组件',
        type: 'string / Component',
        link: 'https://beaver-ui.yearrow.com/component/link#link-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/link#link-slots'
    },
    {
        key: 'icon',
        describe: '自定义图标组件',
        link: 'https://beaver-ui.yearrow.com/component/link#link-slots'
    }
];

export default {
    key: 'b-link',
    attr,
    event,
    slot
};
