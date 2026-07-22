const attr = [
    {
        key: 'model-value',
        describe: '选中项绑定值',
        type: 'string / number / array',
        default: '—'
    },
    {
        key: 'v-model',
        describe: 'v-model，选中项的绑定值，和 model-value 属性相同',
        type: 'string / number / array',
        default: '—'
    },
    {
        key: 'options',
        describe: '选项的数据源，value 和 label 可以通过 CascaderProps 自定义',
        type: 'array',
        default: '—'
    },
    {
        key: 'props',
        describe: '配置选项，请参阅下面 CascaderProps 表。',
        type: 'object',
        default: '—'
    },
    {
        key: 'size',
        describe: '尺寸',
        type: 'enum',
        default: '—',
        values: ['large', 'default', 'small']
    },
    {
        key: 'placeholder',
        describe: '输入框占位文本',
        type: 'string',
        default: '—'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'clearable',
        describe: '是否支持清空选项',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'clear-icon',
        describe: '自定义清除图标',
        type: 'string / Component',
        default: 'CircleClose'
    },
    {
        key: 'show-all-levels',
        describe: '输入框中是否显示选中值的完整路径，默认值为 true',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'collapse-tags',
        describe: '多选模式下是否折叠Tag',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'collapse-tags-tooltip',
        describe: '当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags 属性必须设定为 true，默认值为 false',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'max-collapse-tags-tooltip-height',
        describe: '折叠标签提示的最大高度',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'separator',
        describe: '用于分隔选项的字符，默认值为 " / "',
        type: 'string',
        default: '\' / \''
    },
    {
        key: 'filterable',
        describe: '该选项是否可以被搜索',
        type: 'boolean',
        default: '—'
    },
    {
        key: 'filter-method',
        describe: '自定义搜索逻辑，第一个参数是 node，第二个参数是 keyword，返回的布尔值表示是否保留该选项',
        type: 'function',
        default: '—'
    },
    {
        key: 'debounce',
        describe: '搜索关键词正在输入时的去抖延迟，单位为毫秒，默认值为 300',
        type: 'number',
        default: '300'
    },
    {
        key: 'before-filter',
        describe: '过滤函数调用前，所要调用的钩子函数，该函数接收要过滤的值作为参数。如果该函数的返回值是 false 或者是一个被拒绝的 Promise，那么接下来的过滤逻辑便不会执行。',
        type: 'function',
        default: '—'
    },
    {
        key: 'popper-class',
        describe: '弹出内容的自定义类名，默认值为空字符串',
        type: 'string',
        default: '\'\''
    },
    {
        key: 'popper-style',
        describe: 'Cascader 下拉菜单和标签提示的自定义样式',
        type: 'string / object',
        default: '—'
    },
    {
        key: 'teleported',
        describe: '弹层是否使用 teleport，默认值为 true',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'effect',
        describe: 'tooltip 主题，内置了 dark / light 两种',
        type: 'enum / string',
        default: 'light',
        values: ['dark', 'light']
    },
    {
        key: 'tag-type',
        describe: '标签类型，默认值为 info',
        type: 'enum',
        default: 'info',
        values: ['success', 'info', 'warning', 'danger']
    },
    {
        key: 'tag-effect',
        describe: 'tag effect，版本 2.7.8 之后为 light',
        type: 'enum',
        default: 'light',
        values: ['light', 'dark', 'plain']
    },
    {
        key: 'validate-event',
        describe: '输入时是否触发表单的校验',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'max-collapse-tags',
        describe: '需要显示的 Tag 的最大数量，只有当 collapse-tags 设置为 true 时才会生效，版本 2.3.10 之后默认为 1',
        type: 'number',
        default: '1'
    },
    {
        key: 'empty-values',
        describe: '组件的空值配置，参考 config-provider，版本 2.7.0',
        type: 'array',
        default: '—'
    },
    {
        key: 'value-on-clear',
        describe: '清空选项的值，参考 config-provider，版本 2.7.0',
        type: 'string / number / boolean / Function',
        default: '—'
    },
    {
        key: 'persistent',
        describe: '当下拉框未被激活并且 persistent 设置为 false，下拉框容器会被删除，版本 2.7.8 之后默认为 true',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'fallback-placements',
        describe: 'Tooltip 可用的 positions，请查看 popper.js 文档，版本 2.8.1',
        type: 'array',
        default: '—'
    },
    {
        key: 'placement',
        describe: '下拉框出现的位置，版本 2.8.1 默认为 bottom-start',
        type: 'enum',
        default: 'bottom-start',
        values: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']
    },
    {
        key: 'popper-append-to-body',
        describe: '是否将弹出的内容直接插入到 body 元素。在弹出内容的边框定位出现问题时，可将该属性设置为 false，已弃用',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'show-checked-strategy',
        describe: '多选模式下已选节点的展示策略，parent 显示更简洁，child 显示每个子项',
        type: 'enum',
        default: 'child',
        values: ['parent', 'child']
    },
    {
        key: 'virtual-scroll',
        describe: '是否为大数据启用虚拟滚动',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'fit-input-width',
        describe: '建议面板的宽度是否与输入框一致；如果值为 number，则宽度为固定值',
        type: 'boolean / number',
        default: 'false'
    },
    {
        key: 'item-size',
        describe: '虚拟滚动的节点高度 (px)',
        type: 'number',
        default: '34'
    },
    {
        key: 'height',
        describe: '虚拟滚动的菜单高度 (px)',
        type: 'number',
        default: '204'
    }
];
const event = [
    {
        key: '@change',
        describe: '当绑定值变化时触发的事件',
        type: 'function'
    },
    {
        key: '@expand-change',
        describe: '当展开节点发生变化时触发',
        type: 'function'
    },
    {
        key: '@blur',
        describe: '当失去焦点时触发',
        type: 'function'
    },
    {
        key: '@focus',
        describe: '当获得焦点时触发',
        type: 'function'
    },
    {
        key: '@clear',
        describe: '可清空的单选模式下用户点击清空按钮时触发，版本 2.7.7 后新增',
        type: 'function'
    },
    {
        key: '@visible-change',
        describe: '下拉框出现/隐藏时触发',
        type: 'function'
    },
    {
        key: '@remove-tag',
        describe: '在多选模式下，移除Tag时触发',
        type: 'function'
    }
];
const slot = [
    {
        key: 'default',
        describe: '自定义默认内容'
    },
    {
        key: 'empty',
        describe: '空状态内容'
    },
    {
        key: 'prefix',
        describe: '输入框头部内容 / 前缀内容'
    },
    {
        key: 'suggestion-item',
        describe: 'custom content for suggestion item when searching'
    },
    {
        key: 'tag',
        describe: 'custom tags style'
    },
    {
        key: 'header',
        describe: '头部内容'
    },
    {
        key: 'footer',
        describe: '底部内容'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/cascader.html#cascader-%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/cascader.html#cascader-%E4%BA%8B%E4%BB%B6';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/cascader.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-cascader',
    attr,
    event,
    slot
};
