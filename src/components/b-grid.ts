// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/grid.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'selectRange',
        describe: '选区形态：cell 单元格矩形 / row 扩展整行 / column 扩展整列',
        default: 'cell',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'extend',
        describe: 'Shift+点击扩展当前选区到点击格',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'autoClear',
        describe: '排序/筛选/翻页等数据变化后自动清空选区',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'areaSelectable',
        describe: '列级排除（seq/checkbox/radio 列自动排除）',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'getSelectedArea()',
        describe: '获取当前选区矩形（无选区返回 null）',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'getSelectedAreaData()',
        describe: '获取选区二维数据（data[row][col]）',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'setSelectedArea(area)',
        describe: '程序化设置选区',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'clearAreaSelection()',
        describe: '清空选区',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'data',
        describe: '数据源（client 模式）',
        type: 'array',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'columns',
        describe: 'JSON 列配置（与模板列二选一）',
        type: 'GridColumnProps[]',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'height',
        describe: '容器高度',
        type: 'number / string',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'size',
        describe: '尺寸',
        type: '\'default\' / \'small\' / \'large\'',
        default: 'default',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'stripe',
        describe: '斑马纹 / 边框（外框+行列分隔线） / 圆角',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'align',
        describe: '三区对齐',
        type: '\'left\' / \'center\' / \'right\'',
        default: 'left',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'show-header',
        describe: '显示表头/表尾',
        type: 'boolean',
        default: 'true / false',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'footer-data',
        describe: '表尾数据/合计方法',
        type: 'array[] / function',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'row-key',
        describe: '行 key 字段',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'row-class-name',
        describe: '行列样式钩子',
        type: 'string/function、object/function',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'header-row-class-name',
        describe: '表头行/格样式钩子（{ rowIndex } / { column, columnIndex }）',
        type: 'string/function、object/function',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'fit',
        describe: '列宽自撑开（false 锁定 Σ列宽不随容器拉伸，像素列宽时生效）',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'span-method',
        describe: '合并单元格',
        type: 'function({row, column, rowIndex, columnIndex})',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'empty-text',
        describe: '空数据文案',
        type: 'string',
        default: '暂无数据',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'column-config',
        describe: 'resizable 总开关（默认开启）、defaultWidth',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'row-config',
        describe: 'height 统一行高（虚拟基准）',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'virtual-y-config',
        describe: '纵向虚拟：enabled/gt(100)/buffer-size(10)',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'virtual-x-config',
        describe: '横向虚拟：enabled/gt(20)/buffer-size(2)',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'scrollbar-config',
        describe: '滚动条（b-table 同款）：native（回退原生）/alwaysOn（常显，默认悬停淡入淡出）/minSize（thumb 最小高度，默认 20）/tabindex',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'loading-config',
        describe: 'loading 遮罩文案：text',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'empty-render',
        describe: '空态渲染器（gridRenderer.renderEmpty 查表）：{ name, props }',
        type: 'object',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'auto-resize',
        describe: '容器尺寸变化自适应重算',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'resize-config',
        describe: '自适应防抖：refreshDelay(100)',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'show-overflow',
        describe: '单元格溢出：true=\'tooltip\'/ellipsis/title/tooltip（列级同名覆盖）',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'show-header-overflow',
        describe: '表头/表尾溢出（同上）',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'tooltip-config',
        describe: '溢出提示：showDelay(500)/showAll（未溢出也提示）/theme(\'dark\'默认/\'light\')/contentMethod',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'expand-config',
        describe: '展开行：trigger(default/row)/lazy/loadMethod/accordion/visibleMethod/expandAll（声明式全展开）/expandRowKeys（声明式展开键集，数据变化后同步）',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'zoom-config',
        describe: '全屏缩放：escRestore(true)',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'merge-cells',
        describe: '声明式合并（数据空间 row/col/rowspan/colspan）',
        type: 'array',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'seq-config',
        describe: '序号：startIndex / seqMethod({row, seq})',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'toolbar-config 增强',
        describe: 'print/import/zoom 按钮 + tools 右侧工具组（toolbar-tool-click）',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'clip-config',
        describe: '区域级剪贴板：isCopy/isCut（复制后清空）/isPaste/includeFields/excludeFields；Ctrl+C 优先复制选区（TSV），Ctrl+V 粘贴到选区锚点（行列增量）',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'row-config.height',
        describe: '\'auto\' 变高行模式（实测缓存+前缀和二分窗口）；virtual-y-config.estimateHeight 估算高',
        type: '—',
        default: '32',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'row-resize-config',
        describe: '行高拖拽：enabled/minHeight(24)，行底边热区，row-resizable-change 事件',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'virtual-y-config.maxYHeight',
        describe: '超大虚拟空间映射上限（默认 5e6px，比例缩放）',
        type: 'number',
        default: '5e6',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'custom-config',
        describe: '自定义列持久化：storage(localStorage)/storageKey；saveCustom 时写入、挂载自动恢复；getCustomStoreData/setCustomStoreData 程序化读写',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'id',
        describe: '表格唯一标识（持久化键组成部分）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'tooltip-config 增强',
        describe: 'showAll（未溢出也提示）/theme(\'dark\'默认/\'light\')/showDelay/contentMethod',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'filter-config.showIcon',
        describe: 'false 隐藏列头筛选图标',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'checkbox-config',
        describe: 'trigger/checkMethod/maxCount（勾选上限）/reserve（翻页保留勾选）/checkStrictly（树父子独立，默认级联）/checkRowKeys（初始勾选）/selectOnIndeterminate（表头半选点击行为，默认 true 全选）',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'radio-config',
        describe: 'trigger',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'current-row-config',
        describe: 'trigger(\'default\'/\'cell\')',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'tree-config',
        describe: '树配置（transform/lazy/loadMethod/层级连线等，子项详见 TableKit 文档）',
        type: 'object',
        default: 'showLine:true, square 图标',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'sort-config',
        describe: 'multiple/remote/defaultSort',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'filter-config',
        describe: 'remote/filterMethod/defaultFilter/appendTo（筛选面板挂载目标）',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'edit-config',
        describe: '编辑配置（触发方式/激活拦截/编辑器选择，子项详见下方）',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'valid-config',
        describe: 'rules（全局校验规则）',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'pager-config',
        describe: '分页配置（三模式/页大小/布局，子项详见下方）',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'proxy-config',
        describe: '数据代理（ajax 取数/响应映射/生命周期钩子，子项详见下方）',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'toolbar-config',
        describe: 'enabled/refresh/custom/export/buttons',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'export-config',
        describe: 'types([\'csv\'])/mode(\'current\')/filename/isHeader/columns/remote',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'keyboard-config',
        describe: 'enabled/isArrow/isTab/isEnter/isEnterToTab/isEscape/isDel/isEdit/isCopy/isChecked/isFNR',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'mouse-config',
        describe: 'selected（点击选中单元格，无需键盘配置）',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'form-config',
        describe: '搜索区配置（items 表单条目/data 初始值，子项详见下方）',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'undo-redo-config',
        describe: 'enabled/maxCount(100)',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'aggregate-config',
        describe: 'enabled/fields[{field, aggregate[\'sum\',\'avg\',\'min\',\'max\',\'count\'], accuracy}]',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'row-drag-config',
        describe: 'enabled/animation',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'column-drag-config',
        describe: 'enabled（仅平铺列）/animation',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'menu-config',
        describe: 'enabled/body/header/footer[{options[{code,name,disabled（布尔或按行函数）}]}]/visibleMethod（动态控制与禁用）',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'fnr-config',
        describe: 'enabled/caseSensitive',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    },
    {
        key: 'area-config',
        describe: 'enabled/selectRange(\'cell\'/\'row\'/\'column\')/extend(Shift 扩展)/autoClear/multiple（Ctrl 多区域上限 10）/fillHandle(\'copy\'复制填充/\'calc\'等差序列)/beforeFillMethod 拦截',
        type: 'object',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-attributes'
    }
];
const event: any[] = [
    {
        key: '@column-width-change',
        describe: '列宽拖拽结束',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@scroll',
        describe: '滚动',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@checkbox-change',
        describe: '复选变化',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@checkbox-all',
        describe: '全选/取消全选',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@radio-change',
        describe: '单选变化',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@current-change',
        describe: '当前行变化',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@toggle-row-expand',
        describe: '树节点展开/收起',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@sort-change',
        describe: '排序变化',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@filter-change',
        describe: '筛选变化',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@edit-activated',
        describe: '编辑激活',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@edit-closed',
        describe: '编辑关闭',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@edit-disabled',
        describe: 'activeMethod 拒绝激活',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@cell-click',
        describe: '单元格交互（数据空间索引）',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@cell-selected',
        describe: '选中格变化（键盘导航或 mouse-config.selected 点击）',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@cell-menu',
        describe: '三区右键菜单打开',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@header-cell-click',
        describe: '表头表尾单元格交互',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@row-click',
        describe: '行交互',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@enter-append-row',
        describe: '键盘末行回车（请求追加行）',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@toggle-row-expand',
        describe: '展开行切换',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@toggle-tree-expand',
        describe: '树节点展开切换',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@cell-area-copy',
        describe: '选区复制（Ctrl+C / copySelection 且存在选区）',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@cell-area-paste',
        describe: '选区粘贴（Ctrl+V 写入完成）',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@cell-area-extension-start',
        describe: '拖拽填充生命周期',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@cell-area-fill-copy',
        describe: '填充完成',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@cell-area-merge',
        describe: '区域合并与清空',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@checkbox-range-start',
        describe: '拖拽勾选',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@open-fnr',
        describe: 'FNR 全生命周期',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@row-height-change',
        describe: '行高程序化/拖拽变化',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@valid-error',
        describe: '校验失败',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@page-change',
        describe: '翻页/页大小变化',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@proxy-query',
        describe: '代理请求发起/成功',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@proxy-query-fail',
        describe: '代理请求失败',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@toolbar-button-click',
        describe: '工具栏自定义按钮点击',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@custom-change',
        describe: '自定义列保存',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@export-data',
        describe: '导出完成',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@import-data',
        describe: '导入完成',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@print-data',
        describe: '打印完成',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@cell-copy',
        describe: '复制到剪贴板',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@cell-paste',
        describe: '粘贴解析',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@fnr-change',
        describe: '查找替换完成',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@menu-click',
        describe: '右键菜单项点击',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@row-drag-end',
        describe: '行拖拽完成',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@column-drag-end',
        describe: '列拖拽完成',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@cell-area-selection-start',
        describe: '区域选择开始',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@cell-area-selection-change',
        describe: '区域选择变化',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@cell-area-selection-end',
        describe: '区域选择结束',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@undo-change',
        describe: '撤销',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    },
    {
        key: '@redo-change',
        describe: '重做',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-events'
    }
];
const slot: any[] = [
    {
        key: 'empty',
        describe: '空态内容',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-slots'
    },
    {
        key: 'toolbar-buttons',
        describe: '工具栏左侧按钮区',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-slots'
    },
    {
        key: 'toolbar-tools',
        describe: '工具栏右侧工具区',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-slots'
    },
    {
        key: '列 slots.default',
        describe: '单元格：{ row, column, rowIndex, columnIndex }',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-slots'
    },
    {
        key: '列 slots.header',
        describe: '表头/表尾单元格',
        link: 'https://beaver-ui.yearrow.com/component/grid#grid-slots'
    }
];

export default {
    key: 'b-grid',
    attr,
    event,
    slot
};
