"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '选中项绑定值。',
        type: 'string / number / boolean / object / array',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '选中项绑定值。',
        type: 'string / number / boolean / object / array',
        default: '—'
    },
    {
        key: 'multiple',
        describe: '是否多选。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'options',
        describe: '选项的数据源，value 的 key 和 label 和 disabled 可以通过 props 自定义。版本 2.10.5 引入。',
        type: 'array',
        default: '—'
    },
    {
        key: 'props',
        describe: 'options 的配置。版本 2.10.5 引入。',
        type: 'object',
        default: '—'
    },
    {
        key: 'disabled',
        describe: '是否禁用。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'value-key',
        describe: '作为 value 唯一标识的键名，绑定值为对象类型时必填。',
        type: 'string',
        default: 'value'
    },
    {
        key: 'size',
        describe: '输入框尺寸。',
        type: 'enum',
        default: '—',
        values: ['large', 'default', 'small']
    },
    {
        key: 'clearable',
        describe: '是否可以清空选项。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'collapse-tags',
        describe: '多选时是否将选中值按文字的形式展示。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'collapse-tags-tooltip',
        describe: '当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true。 版本 2.3.0 引入。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'tag-tooltip',
        describe: '折叠标签工具提示的配置对象。要使用此项，collapse-tags 和 collapse-tags-tooltip 必须为 true。版本 2.13.3 引入。',
        type: 'object',
        default: '{}'
    },
    {
        key: 'multiple-limit',
        describe: 'multiple 属性设置为 true 时，代表多选场景下用户最多可以选择的项目数，为 0 则不限制。',
        type: 'number',
        default: '0'
    },
    {
        key: 'id',
        describe: '原生 input 的 id。',
        type: 'string',
        default: '—'
    },
    {
        key: 'name',
        describe: 'Select 输入框的原生 name 属性。',
        type: 'string',
        default: '—'
    },
    {
        key: 'effect',
        describe: 'tooltip 主题，内置了 dark / light 两种。',
        type: 'enum / string',
        default: 'light',
        values: ['dark', 'light']
    },
    {
        key: 'autocomplete',
        describe: 'Select 输入框的原生 autocomplete 属性。',
        type: 'string',
        default: 'off'
    },
    {
        key: 'placeholder',
        describe: '占位符，默认为“Select”。',
        type: 'string',
        default: '—'
    },
    {
        key: 'filterable',
        describe: 'Select 组件是否可筛选。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'allow-create',
        describe: '是否允许用户创建新条目，只有当 filterable 设置为 true 时才会生效。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'filter-method',
        describe: '自定义筛选方法。',
        type: 'function',
        default: '—'
    },
    {
        key: 'remote',
        describe: '其中的选项是否从服务器远程加载。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'debounce',
        describe: '远程搜索时的防抖延迟（以毫秒为单位）。版本 2.11.7 引入。',
        type: 'number',
        default: '300'
    },
    {
        key: 'remote-method',
        describe: '自定义远程搜索方法。',
        type: 'function',
        default: '—'
    },
    {
        key: 'remote-show-suffix',
        describe: '远程搜索方法显示后缀图标。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'loading',
        describe: '是否正在从远程获取数据。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'loading-text',
        describe: '从服务器加载数据时显示的文本，默认为“Loading”。',
        type: 'string',
        default: '—'
    },
    {
        key: 'no-match-text',
        describe: '搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置，默认是 “No matching data”。',
        type: 'string',
        default: '—'
    },
    {
        key: 'no-data-text',
        describe: '无选项时显示的文字，也可以使用 empty 插槽设置自定义内容，默认是 “No data”。',
        type: 'string',
        default: '—'
    },
    {
        key: 'popper-class',
        describe: '为 Select 下拉菜单和标签提示设置自定义类名。',
        type: 'string',
        default: '\'\''
    },
    {
        key: 'popper-style',
        describe: '为 Select 下拉菜单和标签提示设置自定义样式。版本 2.11.0 引入。',
        type: 'string / object',
        default: '—'
    },
    {
        key: 'reserve-keyword',
        describe: '当 multiple 和 filterable 被设置为 true 时，是否在选中一个选项后保留当前的搜索关键词。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'default-first-option',
        describe: '是否在输入框按下回车时，选择第一个匹配项。需配合 filterable 或 remote 使用。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'teleported',
        describe: '是否使用 teleport。设置成 true 则会被追加到 append-to 的位置。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'append-to',
        describe: '下拉框挂载到哪个 DOM 元素。版本 2.8.4 引入。',
        type: 'CSSSelector / HTMLElement',
        default: '—'
    },
    {
        key: 'persistent',
        describe: '当下拉选择器未被激活并且 persistent 设置为 false，选择器会被删除。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'automatic-dropdown',
        describe: '对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'clear-icon',
        describe: '自定义清除图标。',
        type: 'string / Component',
        default: 'CircleClose'
    },
    {
        key: 'fit-input-width',
        describe: '下拉框的宽度是否与输入框相同。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'suffix-icon',
        describe: '自定义后缀图标组件。',
        type: 'string / Component',
        default: 'ArrowDown'
    },
    {
        key: 'tag-type',
        describe: '标签类型。',
        type: 'enum',
        default: 'info',
        values: ['success', 'info', 'warning', 'danger']
    },
    {
        key: 'tag-effect',
        describe: '标签效果。版本 2.7.7 引入。',
        type: 'enum',
        default: 'light',
        values: ['light', 'dark', 'plain']
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'offset',
        describe: '下拉面板偏移量。版本 2.8.8 引入。',
        type: 'number',
        default: '12'
    },
    {
        key: 'show-arrow',
        describe: '下拉菜单的内容是否有箭头。版本 2.8.8 引入。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'placement',
        describe: '下拉框出现的位置。版本 2.2.17 引入。',
        type: 'enum',
        default: 'bottom-start',
        values: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']
    },
    {
        key: 'fallback-placements',
        describe: 'dropdown 可用的 positions 请查看 popper.js 文档。版本 2.5.6 引入。',
        type: 'array',
        default: '[\'bottom-start\', \'top-start\', \'right\', \'left\']'
    },
    {
        key: 'max-collapse-tags',
        describe: '需要显示的 Tag 的最大数量，只有当 collapse-tags 设置为 true 时才会生效。版本 2.3.0 引入。',
        type: 'number',
        default: '1'
    },
    {
        key: 'popper-options',
        describe: 'popper.js 参数。',
        type: 'object',
        default: '{}'
    },
    {
        key: 'aria-label',
        describe: '等价于原生 input aria-label 属性。',
        type: 'string',
        default: '—'
    },
    {
        key: 'empty-values',
        describe: '组件的空值配置，参考 config-provider。版本 2.7.0 引入。',
        type: 'array',
        default: '—'
    },
    {
        key: 'value-on-clear',
        describe: '清空选项的值，参考 config-provider。版本 2.7.0 引入。',
        type: 'string / number / boolean / Function',
        default: '—'
    },
    {
        key: 'suffix-transition',
        describe: '下拉菜单显示/消失时后缀图标的动画，已废弃。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'tabindex',
        describe: 'input 的 tabindex。版本 2.9.0 引入。',
        type: 'string / number',
        default: '—'
    }
];
const event = [
    {
        key: '@change',
        describe: '选中值发生变化时触发',
        type: 'function'
    },
    {
        key: '@visible-change',
        describe: '下拉框出现/隐藏时触发',
        type: 'function'
    },
    {
        key: '@remove-tag',
        describe: '多选模式下移除tag时触发',
        type: 'function'
    },
    {
        key: '@clear',
        describe: '可清空的单选模式下用户点击清空按钮时触发',
        type: 'function'
    },
    {
        key: '@blur',
        describe: '当 input 失去焦点时触发',
        type: 'function'
    },
    {
        key: '@focus',
        describe: '当 input 获得焦点时触发',
        type: 'function'
    },
    {
        key: '@popup-scroll',
        describe: '下拉滚动时触发（版本 2.9.4）',
        type: 'function'
    },
    {
        key: '@end-reached',
        describe: '下拉滚动到结束时触发（版本 2.14.0）',
        type: 'function'
    }
];
const slot = [
    {
        key: 'default',
        describe: '自定义默认内容'
    },
    {
        key: 'header',
        describe: '头部内容'
    },
    {
        key: 'footer',
        describe: '底部内容'
    },
    {
        key: 'prefix',
        describe: '输入框头部内容 / 前缀内容'
    },
    {
        key: 'empty',
        describe: '空状态内容'
    },
    {
        key: 'tag',
        describe: 'content as Select tag, subTags `data`, `selectDisabled` and `deleteTag` introduced in'
    },
    {
        key: 'loading',
        describe: 'content as Select loading'
    },
    {
        key: 'label',
        describe: '标签内容'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/select.html#select-%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/select.html#select-%E4%BA%8B%E4%BB%B6';
});
slot.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/select.html#%E6%8F%92%E6%A7%BD';
});
exports.default = {
    key: 'el-select',
    attr,
    event,
    slot
};
//# sourceMappingURL=el-select.js.map