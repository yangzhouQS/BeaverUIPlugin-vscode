// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/table-kit.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'data',
        describe: '数据（table-data 为 table-kit 别名，两者等价）',
        type: 'array',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'height',
        describe: '固定高度（表头吸顶）',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'max-height',
        describe: '最大高度（流体收缩）',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'stripe',
        describe: '斑马纹',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'border',
        describe: '边框（开启后列宽拖拽可用）',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'size',
        describe: '尺寸（large / default / small）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'fit',
        describe: '列宽自适应',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'show-header',
        describe: '显示表头',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'show-overflow',
        describe: '溢出处理（\'tooltip\' / \'ellipsis\' / \'title\'）',
        type: 'string',
        default: '\'tooltip\'',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'show-header-overflow',
        describe: '表头溢出处理',
        type: 'string',
        default: '\'ellipsis\'',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'highlight-current-row',
        describe: '单选高亮行',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'current-row-key',
        describe: '当前行 key（受控单选）',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'row-key',
        describe: '行 key 字段',
        type: 'string',
        default: '\'id\'',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'row-class-name',
        describe: '行类名 (row, rowIndex)',
        type: 'function / string',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'row-style',
        describe: '行样式 (row, rowIndex)',
        type: 'function / object',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'cell-class-name',
        describe: '单元格类名 ({ row, column, rowIndex, columnIndex })',
        type: 'function / string',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'cell-style',
        describe: '单元格样式（同上签名）',
        type: 'function / object',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'header-row-class-name',
        describe: '表头行类名',
        type: 'function / string',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'header-row-style',
        describe: '表头行样式',
        type: 'function / object',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'header-cell-class-name',
        describe: '表头单元格类名',
        type: 'function / string',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'header-cell-style',
        describe: '表头单元格样式',
        type: 'function / object',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'empty-text',
        describe: '空数据文案（配合 #empty 插槽）',
        type: 'string',
        default: '\'暂无数据\'',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'default-expand-all',
        describe: '初始全展开（归并 tree-config.expandAll）',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'expand-row-keys',
        describe: '初始展开行 keys（归并 tree-config.expandRowKeys）',
        type: 'array',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'default-sort',
        describe: '初始排序 { prop, order }',
        type: 'object',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'tooltip-effect',
        describe: '提示主题（light / dark）',
        type: 'string',
        default: '\'dark\'',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'tooltip-options',
        describe: '提示配置（placement / showArrow / enterable 等）',
        type: 'object',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'tooltip-formatter',
        describe: '提示内容 ({ row, column, cellValue }) => string',
        type: 'function',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'show-summary',
        describe: '表尾合计',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'sum-text',
        describe: '合计行首列文案',
        type: 'string',
        default: '\'合计\'',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'summary-method',
        describe: '合计方法 ({ columns, data }) => string[][]（二维数组即多行合计）',
        type: 'function',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'span-method',
        describe: '合并单元格 ({ row, column, rowIndex, columnIndex })',
        type: 'function',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'select-on-indeterminate',
        describe: '全选半选态点击行为',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'table-loading',
        describe: '加载状态（table-kit 自有）',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'column-configs',
        describe: '列配置（table-kit 核心，见列配置）',
        type: 'array',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'virtual-y-config',
        describe: 'Y 轴（行）虚拟滚动',
        type: 'object',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: '├─ gt',
        describe: '启用阈值（列数超过才窗口化）',
        type: 'number',
        default: '20',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: '├─ estimateHeight',
        describe: '行高估算（px）',
        type: 'number',
        default: '32',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: '├─ bufferSize',
        describe: '视口上下缓冲行数',
        type: 'number',
        default: '10',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: '├─ maxYHeight',
        describe: '高度上限（px）',
        type: 'number',
        default: '5000000',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: '└─ enabled',
        describe: '强制开关（false 可关闭）',
        type: 'boolean',
        default: '自动',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'virtual-x-config',
        describe: 'X 轴（列）虚拟滚动',
        type: 'object',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: '├─ enabled',
        describe: '显式开启（X 虚拟为 opt-in：enabled: true 才生效，与 Y 的 gt 自动不同）',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: '└─ bufferSize',
        describe: '视口左右缓冲列数',
        type: 'number',
        default: '2',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'tree-config',
        describe: '树配置（懒加载 / 层级连线 / 手风琴等）',
        type: 'object',
        default: 'showLine: true, square 图标',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'checkbox-config',
        describe: '勾选配置（checkStrictly / checkRowKeys / reserve）',
        type: 'object',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'menu-config',
        describe: '右键菜单配置（传则完全自定义，不传用内置）',
        type: 'object',
        default: '内置运维菜单',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'show-menus',
        describe: '启用内置懒加载运维右键菜单',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    },
    {
        key: 'footer-data',
        describe: '表尾合计数据（行数组，每行为与列对齐的单元格数组）',
        type: 'array',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-attributes'
    }
];
const event: any[] = [
    {
        key: '@query-change',
        describe: '{ skip, take, order, conditionItems }（table-kit 自有协议）',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@reload',
        describe: '兼容旧版（与 query-change 同步触发）',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@page-change',
        describe: '(page, pageSize)',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@select',
        describe: '(selection, row) 单行勾选（显式调用——用户点击或程序 API——均派发，仅内部级联不派发）',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@select-all',
        describe: '(selection) 全选（同上）',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@selection-change',
        describe: '(selection) 勾选变化（单行勾选与全选均触发，程序 API 亦触发）',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@current-change',
        describe: '(currentRow, oldCurrentRow) 双参',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@sort-change',
        describe: '({ column, prop, order })（column 的 property/label 可读）',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@filter-change',
        describe: '(filters: Record) 字典（键为 prop）',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@cell-click',
        describe: '(row, column, cell, event) 四参',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@cell-mouse-enter',
        describe: '(row, column, cell, event) 四参',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@cell-contextmenu',
        describe: '(row, column, cell, event) 四参（右键无条件派发，与菜单显示解耦）',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@row-click',
        describe: '(row, column \\| null, event) 三参',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@row-contextmenu',
        describe: '(row, column, event) 三参',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@header-click',
        describe: '(column, event)',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@header-dragend',
        describe: '(newWidth, oldWidth, column, event) 四参',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@expand-change',
        describe: '展开行列 (row, expandedRows)；树形 (row, expanded)',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@scroll',
        describe: '({ scrollLeft, scrollTop })',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@edit-closed',
        describe: '编辑单元格关闭 (payload)',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@selectChange',
        describe: '(records, params) 对齐旧版签名',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@loadNode',
        describe: '{ row, resolve } 懒加载事件',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    },
    {
        key: '@menu-click',
        describe: '{ menu, rowIndex } 右键菜单点击',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-events'
    }
];
const slot: any[] = [
    {
        key: 'setting',
        describe: '表头右上角浮动区',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-slots'
    },
    {
        key: 'bottom',
        describe: '底部左侧内容',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-slots'
    },
    {
        key: 'pagination',
        describe: '分页条左侧（Async / Report）',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-slots'
    },
    {
        key: 'empty',
        describe: '空数据',
        link: 'https://beaver-ui.yearrow.com/component/table-kit#b-tree-table-slots'
    }
];

export default {
    key: 'b-tree-table',
    attr,
    event,
    slot
};
