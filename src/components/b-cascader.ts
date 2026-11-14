// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/cascader.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'string / number /string[] | number[] | any',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'options',
        describe: '选项的数据源， value 和 label 可以通过 CascaderProps 自定义.',
        type: 'CascaderOption[]',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'props',
        describe: '配置选项, 请参阅下面 CascaderProps 表。',
        type: 'CascaderProps',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'size',
        describe: '尺寸',
        type: '\'large\' | \'default\' | \'small\'',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'placeholder',
        describe: '输入框占位文本',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'clearable',
        describe: '是否支持清空选项',
        type: 'boolean',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'clear-icon',
        describe: '自定义清除图标',
        type: 'string / Component',
        default: 'CircleClose',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'show-all-levels',
        describe: '输入框中是否显示选中值的完整路径',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'collapse-tags',
        describe: '多选模式下是否折叠Tag',
        type: 'boolean',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'collapse-tags-tooltip',
        describe: '当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此属性，collapse-tags属性必须设定为 true',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'max-collapse-tags-tooltip-height',
        describe: 'collapse tags 的最大高度',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'separator',
        describe: '用于分隔选项的字符',
        type: 'string',
        default: '\' / \'',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'filterable',
        describe: '该选项是否可以被搜索',
        type: 'boolean',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'filter-method',
        describe: '自定义搜索逻辑，第一个参数是node，第二个参数是keyword，返回的布尔值表示是否保留该选项',
        type: '(node: CascaderNode, keyword: string) => boolean',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'debounce',
        describe: '搜索关键词正在输入时的去抖延迟，单位为毫秒',
        type: 'number',
        default: '300',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'before-filter',
        describe: '过滤函数调用前，所要调用的钩子函数，该函数接收要过滤的值作为参数。 如果该函数的返回值是 false 或者是一个被拒绝的 Promise，那么接下来的过滤逻辑便不会执行。',
        type: '(value: string) => boolean',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'popper-class',
        describe: 'Cascader 下拉菜单和标签提示的自定义类名',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'popper-style',
        describe: 'Cascader 下拉菜单和标签提示的自定义样式',
        type: 'string / object',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'teleported',
        describe: '弹层是否使用 teleport',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'effect',
        describe: 'tooltip 主题，内置了 dark / light 两种',
        type: '\'dark\' | \'light\' / string',
        default: 'light',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'tag-type',
        describe: '标签类型',
        type: '\'success\' | \'info\' | \'warning\' | \'danger\'',
        default: 'info',
        values: [
            'success',
            'info',
            'warning',
            'danger'
        ],
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'tag-effect',
        describe: 'tag effect',
        type: '\'light\' | \'dark\' | \'plain\'',
        default: 'light',
        values: [
            'light',
            'dark',
            'plain'
        ],
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'validate-event',
        describe: '输入时是否触发表单的校验',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'max-collapse-tags',
        describe: '需要显示的 Tag 的最大数量 要使用此功能，collapse-tags的值必须为true',
        type: 'number',
        default: '1',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'empty-values',
        describe: '组件的空值配置， 参考config-provider',
        type: 'array',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'value-on-clear',
        describe: '清空选项的值， 参考config-provider',
        type: 'string / number / boolean / Function',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'persistent',
        describe: '当下拉框未被激活并且persistent设置为false，下拉框容器会被删除。',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'fallback-placements',
        describe: 'Tooltip 可用的 positions 请查看popper.js 文档',
        type: 'Placement[]',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'placement',
        describe: '下拉框出现的位置',
        type: '\'top\' | \'top-start\' | \'top-end\' | \'bottom\' | \'bottom-start\' | \'bottom-end\' | \'left\' | \'left-start\' | \'left-end\' | \'right\' | \'right-start\' | \'right-end\'',
        default: 'bottom-start',
        values: [
            'top',
            'top-start',
            'top-end',
            'bottom',
            'bottom-start',
            'bottom-end',
            'left',
            'left-start',
            'left-end',
            'right',
            'right-start',
            'right-end'
        ],
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'popper-append-to-body',
        describe: '是否将弹出的内容直接插入到 body 元素。 在弹出内容的边框定位出现问题时，可将该属性设置为 false（自 deprecated 版本）【已废弃】',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'show-checked-strategy',
        describe: '多选模式下已选节点的展示策略。 当你想让显示更简洁时，使用 parent。 当你想显示每个子项时，使用 child。',
        type: '\'parent\' | \'child\'',
        default: 'child',
        values: [
            'parent',
            'child'
        ],
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'virtual-scroll',
        describe: '是否为大数据启用虚拟滚动（自 2.14.0 版本）',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'fit-input-width',
        describe: '建议面板的宽度是否与输入框一致；如果值为 number，则宽度为固定值。（自 2.14.0 版本）',
        type: 'boolean / number',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'item-size',
        describe: '虚拟滚动的节点高度 (px)（自 2.14.0 版本）',
        type: 'number',
        default: '34',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    },
    {
        key: 'height',
        describe: '虚拟滚动的菜单高度 (px)（自 2.14.0 版本）',
        type: 'number',
        default: '204',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '当绑定值变化时触发的事件',
        type: '(value: CascaderValue) => void',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-events'
    },
    {
        key: '@expand-change',
        describe: '当展开节点发生变化时触发',
        type: '(value: CascaderValue) => void',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-events'
    },
    {
        key: '@blur',
        describe: '当失去焦点时触发',
        type: '(event: FocusEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-events'
    },
    {
        key: '@focus',
        describe: '当获得焦点时触发',
        type: '(event: FocusEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-events'
    },
    {
        key: '@clear',
        describe: '可清空的单选模式下用户点击清空按钮时触发',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-events'
    },
    {
        key: '@visible-change',
        describe: '下拉框出现/隐藏时触发',
        type: '(value: boolean) => void',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-events'
    },
    {
        key: '@remove-tag',
        describe: '在多选模式下，移除Tag时触发',
        type: '(value: CascaderNode[\'valueByOption\']) => void',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义备选项的节点内容，分别为当前节点的 Node 对象和数据',
        type: '{ node: any, data: any }',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-slots'
    },
    {
        key: 'empty',
        describe: '无匹配选项时的内容',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-slots'
    },
    {
        key: 'prefix',
        describe: '输入框头部内容',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-slots'
    },
    {
        key: 'suggestion-item',
        describe: '搜索时自定义建议项内容',
        type: '{ item: CascaderNode }',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-slots'
    },
    {
        key: 'tag',
        describe: '自定义tag样式',
        type: '{ data: Tag[], deleteTag: (tag: Tag) => void }',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-slots'
    },
    {
        key: 'header',
        describe: '下拉列表顶部的内容',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-slots'
    },
    {
        key: 'footer',
        describe: '下拉列表底部的内容',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascader-slots'
    }
];

export default {
    key: 'b-cascader',
    attr,
    event,
    slot
};
