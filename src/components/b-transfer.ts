// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/transfer.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'Array<string | number>',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-attributes'
    },
    {
        key: 'data',
        describe: 'Transfer 的数据源',
        type: 'Record<string, any>[]',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-attributes'
    },
    {
        key: 'filterable',
        describe: '是否可搜索',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-attributes'
    },
    {
        key: 'filter-placeholder',
        describe: '搜索框占位符',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-attributes'
    },
    {
        key: 'filter-method',
        describe: '自定义搜索方法',
        type: '(query: string, item: Record<string, any>) => boolean',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-attributes'
    },
    {
        key: 'target-order',
        describe: '右侧列表元素的排序策略： 若为 original，则保持与数据源相同的顺序； 若为 push，则新加入的元素排在最后； 若为 unshift，则新加入的元素排在最前',
        type: '\'original\' | \'push\' | \'unshift\'',
        default: 'original',
        values: [
            'original',
            'push',
            'unshift'
        ],
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-attributes'
    },
    {
        key: 'titles',
        describe: '自定义列表标题',
        type: '[string, string]',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-attributes'
    },
    {
        key: 'button-texts',
        describe: '自定义按钮文案',
        type: '[string, string]',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-attributes'
    },
    {
        key: 'render-content',
        describe: '自定义数据项渲染函数',
        type: 'renderContent',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-attributes'
    },
    {
        key: 'format',
        describe: '列表顶部勾选状态文案',
        type: 'TransferFormat',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-attributes'
    },
    {
        key: 'props',
        describe: '数据源的字段别名',
        type: 'TransferPropsAlias',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-attributes'
    },
    {
        key: 'left-default-checked',
        describe: '初始状态下左侧列表的已勾选项的 key 数组',
        type: 'Array<string | number>',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-attributes'
    },
    {
        key: 'right-default-checked',
        describe: '初始状态下右侧列表的已勾选项的 key 数组',
        type: 'Array<string | number>',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-attributes'
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-attributes'
    },
    {
        key: 'virtual-scroll',
        describe: '是否为大数据启用虚拟滚动（自 2.14.3 版本）',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-attributes'
    },
    {
        key: 'item-size',
        describe: '虚拟滚动的节点高度 (px)（自 2.14.3 版本）',
        type: 'number',
        default: '30',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '右侧列表元素变化时触发',
        type: '(value: TransferKey[], direction: TransferDirection, movedKeys: TransferKey[]) => void',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-events'
    },
    {
        key: '@left-check-change',
        describe: '左侧列表元素被用户选中 / 取消选中时触发',
        type: '(value: TransferKey[], movedKeys?: TransferKey[]) => void',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-events'
    },
    {
        key: '@right-check-change',
        describe: '右侧列表元素被用户选中 / 取消选中时触发',
        type: '(value: TransferKey[], movedKeys?: TransferKey[]) => void',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义数据项的内容，',
        type: '{ option: TransferDataItem }',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-slots'
    },
    {
        key: 'left-footer',
        describe: '左侧列表底部的内容',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-slots'
    },
    {
        key: 'right-footer',
        describe: '右侧列表底部的内容',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-slots'
    },
    {
        key: 'left-empty',
        describe: '左侧面板为空或没有数据符合筛选条件时的内容',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-slots'
    },
    {
        key: 'right-empty',
        describe: '右侧面板为空或没有数据符合筛选条件时的内容',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/transfer#transfer-slots'
    }
];

export default {
    key: 'b-transfer',
    attr,
    event,
    slot
};
