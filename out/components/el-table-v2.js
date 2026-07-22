"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'cache',
        describe: '为了更好的渲染效果预先多加载的行数',
        type: 'number',
        default: '2'
    },
    {
        key: 'estimated-row-height',
        describe: '渲染动态的单元格的预估高度',
        type: 'number',
        default: '—'
    },
    {
        key: 'header-class',
        describe: 'header 部分的自定义 class 名',
        type: 'string / Function<HeaderClassGetter>',
        default: '—'
    },
    {
        key: 'header-props',
        describe: 'header 部分的自定义 props 名',
        type: 'object / Function<HeaderPropsGetter>',
        default: '—'
    },
    {
        key: 'header-cell-props',
        describe: 'header cell 部分的自定义 props 名',
        type: 'object / Function<HeaderCellPropsGetter>',
        default: '—'
    },
    {
        key: 'header-height',
        describe: 'Header 的高度由 height 设置。如果传入数组，它会使 header row 等于数组长度',
        type: 'number / number[]',
        default: '50'
    },
    {
        key: 'footer-height',
        describe: 'Footer 部分的高度，当传入值时，这部分将被计算入 table 的高度里',
        type: 'number',
        default: '0'
    },
    {
        key: 'row-class',
        describe: 'row wrapper 部分的自定义 class 名',
        type: 'string / Function<RowClassGetter>',
        default: '—'
    },
    {
        key: 'row-key',
        describe: '每行的 key 值，如果不提供，将使用索引 index 代替',
        type: 'string / Symbol / number',
        default: 'id'
    },
    {
        key: 'row-props',
        describe: 'row component 部分的自定义 class 名',
        type: 'object / Function<RowPropsGetter>',
        default: '—'
    },
    {
        key: 'row-height',
        describe: '每行的高度, 用于计算表的总高度',
        type: 'number',
        default: '50'
    },
    {
        key: 'row-event-handlers',
        describe: '附加到每一行的事件处理器的集合',
        type: 'object<RowEventHandlers>',
        default: '—'
    },
    {
        key: 'cell-props',
        describe: '每个单元格 cell 的自定义 props (除了 header cell 以外)',
        type: 'object / Function<CellPropsGetter>',
        default: '—'
    },
    {
        key: 'columns',
        describe: '列 column 的配置数组',
        type: 'Column[]',
        default: '—'
    },
    {
        key: 'data',
        describe: '要在表中渲染的数据数组',
        type: 'Data[]',
        default: '[]'
    },
    {
        key: 'data-getter',
        describe: '一个自定义方法从数据源获取数据',
        type: 'Function<DataGetter<T>>',
        default: '—'
    },
    {
        key: 'fixed-data',
        describe: '渲染行在表格主内容上方和 header 下方区域的数据',
        type: 'object<Data>',
        default: '—'
    },
    {
        key: 'expand-column-key',
        describe: '列的 key 来标记哪个行可以被展开',
        type: 'string',
        default: '—'
    },
    {
        key: 'expanded-row-keys',
        describe: '存放行展开状态的 key 的数组，可以和 v-model 搭配使用',
        type: 'KeyType[]',
        default: '—'
    },
    {
        key: 'default-expanded-row-keys',
        describe: '默认展开的行的 key 的数组, 这个数据不是响应式的',
        type: 'KeyType[]',
        default: '—'
    },
    {
        key: 'class',
        describe: '表格的类名称，将应用于表格的全部的三个部分 (左、右、主)',
        type: 'string / array / object',
        default: '—'
    },
    {
        key: 'fixed',
        describe: '单元格宽度是自适应还是固定',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'width',
        describe: '表格的宽度（必填）',
        type: 'number',
        default: '—'
    },
    {
        key: 'height',
        describe: '表格的高度（必填）',
        type: 'number',
        default: '—'
    },
    {
        key: 'max-height',
        describe: '表格的最大高度',
        type: 'number',
        default: '—'
    },
    {
        key: 'indent-size',
        describe: '树形表的水平缩进',
        type: 'number',
        default: '12'
    },
    {
        key: 'h-scrollbar-size',
        describe: '配置表格的水平滚动条大小，防止水平和垂直滚动条重叠',
        type: 'number',
        default: '6'
    },
    {
        key: 'v-scrollbar-size',
        describe: '配置表格的垂直滚动条大小，防止水平和垂直滚动条重叠',
        type: 'number',
        default: '6'
    },
    {
        key: 'scrollbar-always-on',
        describe: '如果开启，滚动条将一直显示，反之只会在鼠标经过时显示',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'sort-by',
        describe: '排序方式',
        type: 'object<SortBy>',
        default: '{}'
    },
    {
        key: 'sort-state',
        describe: '多个排序',
        type: 'object<SortState>',
        default: 'undefined'
    }
];
const event = [
    {
        key: '@column-sort',
        describe: '列排序时调用',
        type: 'function'
    },
    {
        key: '@expanded-rows-change',
        describe: '行展开状态改变时触发',
        type: 'function'
    },
    {
        key: '@end-reached',
        describe: '到达表格末尾时触发。回调包含剩余距离，它通常是滚动条高度',
        type: 'function'
    },
    {
        key: '@scroll',
        describe: '表格被用户滚动后触发',
        type: 'function'
    },
    {
        key: '@rows-rendered',
        describe: '当行被渲染后触发',
        type: 'function'
    },
    {
        key: '@row-expand',
        describe: '点击箭头图标展开/折叠树节点时触发',
        type: 'function'
    }
];
const slot = [
    {
        key: 'cell',
        describe: ''
    },
    {
        key: 'header',
        describe: '头部内容'
    },
    {
        key: 'header-cell',
        describe: ''
    },
    {
        key: 'row',
        describe: ''
    },
    {
        key: 'footer',
        describe: '底部内容'
    },
    {
        key: 'empty',
        describe: '空状态内容'
    },
    {
        key: 'overlay',
        describe: ''
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/table-v2.html#tablev2-%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/table-v2.html#tablev2-%E4%BA%8B%E4%BB%B6';
});
slot.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/table-v2.html#%E6%8F%92%E6%A7%BD';
});
exports.default = {
    key: 'el-table-v2',
    attr,
    event,
    slot
};
//# sourceMappingURL=el-table-v2.js.map