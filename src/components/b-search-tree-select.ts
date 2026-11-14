// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/search-tree-select.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '选中节点的 value 字段值',
        type: 'string / number / null',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'data',
        describe: '根节点数据（对象或数组）',
        type: 'object / array',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'props',
        describe: '节点字段映射',
        type: 'object（label / value / disabled）',
        default: 'label、id、disabled',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'page-size',
        describe: '每层每页条数',
        type: 'number',
        default: '20',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'lazy',
        describe: '懒加载模式；全量树传 false——节点 children 非空即视为已加载，点开直接展开渲染，不触发 load',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'hide-leaf-icon',
        describe: '隐藏叶子节点图标占位（叶子行更紧凑）；需叶子与父级展开图标对齐的树传 false',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'searchable',
        describe: '是否显示搜索入口',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'reloadable',
        describe: '是否显示刷新按钮',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'pageable',
        describe: '是否启用"展开更多"分页',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'clearable',
        describe: '是否可清空',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'auto-expand',
        describe: '挂载后自动展开',
        type: 'string',
        default: 'none',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'default-expanded-keys',
        describe: '默认展开链路',
        type: 'array',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'default-text',
        describe: '初始回显文本',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'id',
        describe: '输入框 id（配合 b-filter-item 的 label 关联，透传内部输入框）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'placeholder',
        describe: '关闭态占位文本',
        type: 'string',
        default: '\'\'（未选择时显示已选标签，为空不占位）',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'search-placeholder',
        describe: '搜索态占位文本（与关闭态互不依赖）',
        type: 'string',
        default: '请输入检索信息',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'width',
        describe: '输入框宽度（CSS 尺寸值）',
        type: 'string',
        default: '100%',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'size',
        describe: '组件尺寸',
        type: '\'large\' | \'default\' | \'small\'',
        default: 'default',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'dropdown-width',
        describe: '搜索结果下拉宽度（空串 = 跟随输入框宽度）',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'dropdown-height',
        describe: '搜索结果下拉高度',
        type: 'string',
        default: '300px',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'show-line',
        describe: '层级连线（对齐 BTreeTable treeConfig.showLine，虚线 + disabled 文本色）',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    },
    {
        key: 'expand-icon',
        describe: '展开图标形态（对齐 BTreeTable 默认 square +/− 方块）',
        type: '\'square\' | \'caret\'',
        default: 'square',
        values: [
            'square',
            'caret'
        ],
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-attributes'
    }
];
const event: any[] = [
    {
        key: '@load',
        describe: '展开节点 / 加载更多时触发',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-events'
    },
    {
        key: '@load-search',
        describe: '搜索时触发（500ms 防抖）',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-events'
    },
    {
        key: '@select-change',
        describe: '选中节点时触发',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-events'
    },
    {
        key: '@clear',
        describe: '清空 / 刷新时触发',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-events'
    }
];
const slot: any[] = [
    {
        key: 'node',
        describe: '自定义树节点行，参数 { data }',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-slots'
    },
    {
        key: 'item',
        describe: '自定义搜索结果行，参数 { data }',
        link: 'https://beaver-ui.yearrow.com/component/search-tree-select#searchtreeselect-slots'
    }
];

export default {
    key: 'b-search-tree-select',
    attr,
    event,
    slot
};
