// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/search-select.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '选中项的 value 字段值',
        type: 'string / number / null',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-attributes'
    },
    {
        key: 'props',
        describe: '选项字段映射',
        type: 'object（label / value / subLabel / nextLabel / disabled）',
        default: 'label、value、subLabel、nextLabel、disabled',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-attributes'
    },
    {
        key: 'page-size',
        describe: '每页条数（load 事件 take = page-size + 1）',
        type: 'number',
        default: '10',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-attributes'
    },
    {
        key: 'height',
        describe: '下拉面板高度（px，虚拟列表视口高度）',
        type: 'number',
        default: '274',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-attributes'
    },
    {
        key: 'width',
        describe: '输入框宽度',
        type: 'string / number',
        default: '100%',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-attributes'
    },
    {
        key: 'dropdown-width',
        describe: '下拉面板固定宽度，设置后不再跟随输入框',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-attributes'
    },
    {
        key: 'dropdown-max-width',
        describe: '下拉面板最大宽度，跟随输入框时生效；与 dropdown-width 同时使用时以 dropdown-width 为准',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-attributes'
    },
    {
        key: 'searchable',
        describe: '是否可搜索',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-attributes'
    },
    {
        key: 'clearable',
        describe: '是否可清空',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-attributes'
    },
    {
        key: 'allow-create',
        describe: '是否允许创建',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-attributes'
    },
    {
        key: 'debounce',
        describe: '搜索防抖（毫秒）',
        type: 'number',
        default: '300',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-attributes'
    },
    {
        key: 'size',
        describe: '组件大小（透传输入框）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-attributes'
    },
    {
        key: 'id',
        describe: '输入框 id（配合 b-filter-item 的 label 关联，透传内部输入框）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-attributes'
    },
    {
        key: 'placeholder',
        describe: '关闭态占位文本（组件内部默认：请选择）',
        type: 'string',
        default: '请选择',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-attributes'
    },
    {
        key: 'search-placeholder',
        describe: '搜索态占位文本（与关闭态独立，组件内部默认：请输入关键词搜索）',
        type: 'string',
        default: '请输入关键词搜索',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-attributes'
    },
    {
        key: 'default-text',
        describe: '初始回显文本（设置后挂载不触发 load）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-attributes'
    }
];
const event: any[] = [
    {
        key: '@load',
        describe: '首次加载 / 搜索 / 翻页时触发',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-events'
    },
    {
        key: '@change',
        describe: '选中某一项时触发',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-events'
    },
    {
        key: '@create',
        describe: '创建新选项时触发',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-events'
    },
    {
        key: '@clear',
        describe: '清空时触发',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-events'
    },
    {
        key: '@focus',
        describe: '输入框聚焦 / 失焦',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-events'
    }
];
const slot: any[] = [
    {
        key: 'item',
        describe: '自定义选项行内容（支持可变高度，实际高度自动测量）',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-slots'
    },
    {
        key: 'header',
        describe: '下拉列表顶部固定区（不随列表滚动）',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-slots'
    },
    {
        key: 'footer',
        describe: '下拉列表底部固定区，不随列表滚动；未传时仅在加载完成（无更多数据）显示默认"没有更多了"文案',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-slots'
    },
    {
        key: 'loading',
        describe: '首屏加载中文案区',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-slots'
    },
    {
        key: 'empty',
        describe: '无数据文案区',
        link: 'https://beaver-ui.yearrow.com/component/search-select#searchselect-slots'
    }
];

export default {
    key: 'b-search-select',
    attr,
    event,
    slot
};
