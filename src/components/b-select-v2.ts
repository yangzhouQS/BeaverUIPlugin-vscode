// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/select-v2.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'string / number / boolean / object / array',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'options',
        describe: '选项的数据源， value 的 key 和 label 可以通过 props自定义.',
        type: 'array',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'props',
        describe: '配置选项，具体看下表',
        type: 'object',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'multiple',
        describe: '是否多选',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'value-key',
        describe: '作为 value 唯一标识的键名，绑定值为对象类型时必填',
        type: 'string',
        default: 'value',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'size',
        describe: '组件大小',
        type: '\'\' | \'large\' | \'default\' | \'small\'',
        default: '\'\'',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'clearable',
        describe: '是否可以清空选项',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'clear-icon',
        describe: '自定义清除图标',
        type: 'string / Component',
        default: 'CircleClose',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'collapse-tags',
        describe: '多选时是否将选中值按文字的形式展示',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'multiple-limit',
        describe: '多选时可被选择的最大数目。 当被设置为0时，可被选择的数目不设限。',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'id',
        describe: '原生 input 的 id',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'name',
        describe: '选择器的原生name属性',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'effect',
        describe: 'tooltip 主题，内置了 dark / light 两种',
        type: '\'dark\' | \'light\' / string',
        default: 'light',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'autocomplete',
        describe: '自动完成选择输入',
        type: 'string',
        default: 'off',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'placeholder',
        describe: '占位文字',
        type: 'string',
        default: 'Please select',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'filterable',
        describe: 'Select 组件是否可筛选',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'allow-create',
        describe: '是否允许创建新条目， 当使用该属性时，filterable必须设置为true',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'filter-method',
        describe: '自定义筛选方法的第一个参数是当前输入的值。 当filterable设置为 true 时才会生效',
        type: '(query: string) => void',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'loading',
        describe: '是否从远程加载数据',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'loading-text',
        describe: '从服务器加载数据时显示的文本，默认为“Loading”',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'reserve-keyword',
        describe: '筛选时，是否在选择选项后保留关键字',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'default-first-option',
        describe: '是否在输入框按下回车时，选择第一个匹配项。 需配合 filterable 或 remote 使用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'no-match-text',
        describe: '搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置，默认是 “No matching data\'”',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'no-data-text',
        describe: '当在没有数据时显示的文字，你同时可以使用empty插槽进行设置。',
        type: 'string',
        default: 'No Data',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'popper-class',
        describe: 'Select 下拉菜单和标签提示的自定义类名',
        type: 'string / object',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'popper-style',
        describe: 'Select 下拉菜单和标签提示的自定义样式',
        type: 'string / object',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'teleported',
        describe: '是否使用 teleport。设置成 true则会被追加到 append-to 的位置',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'append-to',
        describe: '下拉框挂载到哪个 DOM 元素',
        type: 'CSSSelector / HTMLElement',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'persistent',
        describe: '当下拉选择器未被激活并且persistent设置为false，选择器会被删除。',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'popper-options',
        describe: 'popper.js parameters',
        type: 'objectrefer to popper.js doc',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'automatic-dropdown',
        describe: '对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'fit-input-width',
        describe: '无论下拉框的宽度是否与输入框相同，如果值为number，则宽度是固定的。',
        type: 'boolean / number',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'suffix-icon',
        describe: '自定义后缀图标组件',
        type: 'string / Component',
        default: 'ArrowDown',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'height',
        describe: '下拉菜单的高度，每一个选项为34px',
        type: 'number',
        default: '274',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'item-height',
        describe: '下拉项的高度',
        type: 'number',
        default: '34',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'estimated-option-height',
        describe: '控制虚拟列表大小模式：如果未定义，则列表使用来自 item-height 的固定项目高度；如果提供，则列表使用动态项目大小，并将此值作为估计的项目高度。',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'scrollbar-always-on',
        describe: '是否总是展示滚动条',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'remote',
        describe: '是否从服务器获取数据',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'debounce',
        describe: '远程搜索时的防抖延迟（以毫秒为单位）',
        type: 'number',
        default: '300',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'remote-method',
        describe: '当输入值发生变化时触发的函数。 它的参数就是当前的输入值。 当filterable设置为 true 时才会生效',
        type: '(query: string) => void',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'offset',
        describe: '下拉面板偏移量',
        type: 'number',
        default: '12',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'show-arrow',
        describe: '下拉菜单的内容是否有箭头',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
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
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'fallback-placements',
        describe: 'dropdown 可用的 positions 请查看popper.js 文档',
        type: 'Placement[]',
        default: '[\'bottom-start\', \'top-start\', \'right\', \'left\']',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'collapse-tags-tooltip',
        describe: '当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此功能，collapse-tags的值必须为true',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'tag-tooltip',
        describe: '折叠标签工具提示的配置对象。 要使用此项， collapse-tags 和 collapse-tags-tooltip 必须为 true（自 2.13.3 版本）',
        type: 'TagTooltipProps',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'max-collapse-tags',
        describe: '需要显示的 Tag 的最大数量。 只有当 collapse-tags 设置为 true 时才会生效。',
        type: 'number',
        default: '1',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'tag-type',
        describe: '标签类型',
        type: '\'\' | \'success\' | \'info\' | \'warning\' | \'danger\'',
        default: 'info',
        values: [
            'success',
            'info',
            'warning',
            'danger'
        ],
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'tag-effect',
        describe: '标签效果',
        type: '\'\' | \'light\' | \'dark\' | \'plain\'',
        default: 'light',
        values: [
            'light',
            'dark',
            'plain'
        ],
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'aria-label',
        describe: '等价于原生 input aria-label 属性（自 a11y 版本）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'empty-values',
        describe: '组件的空值配置， 参考config-provider',
        type: 'array',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'value-on-clear',
        describe: '清空选项的值， 参考config-provider',
        type: 'string / number / boolean / Function',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'popper-append-to-body',
        describe: '是否将弹出框插入至 body 元素 当弹出框的位置出现问题时，你可以尝试将该属性设置为false。（自 deprecated 版本）【已废弃】',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'tabindex',
        describe: 'input 的 tabindex',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'value',
        describe: '指定选项的值为选项对象的某个属性值',
        type: 'string',
        default: 'value',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'label',
        describe: '指定节点标签为节点对象的某个属性值',
        type: 'string',
        default: 'label',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'options',
        describe: '指定选项的子选项为选项对象的某个属性值',
        type: 'string',
        default: 'options',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'disabled',
        describe: '指定选项的禁用为选项对象的某个属性值',
        type: 'string',
        default: 'disabled',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'append-to',
        describe: '指示 Tooltip 的内容将附加在哪一个网页元素上',
        type: 'CSSSelector / HTMLElement',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'placement',
        describe: 'Tooltip 组件出现的位置',
        type: '\'top\' | \'top-start\' | \'top-end\' | \'bottom\' | \'bottom-start\' | \'bottom-end\' | \'left\' | \'left-start\' | \'left-end\' | \'right\' | \'right-start\' | \'right-end\'',
        default: 'bottom',
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
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'fallback-placements',
        describe: 'Tooltip 可用的 positions 请查看popper.js 文档',
        type: 'Placement[]',
        default: '[\'bottom\', \'top\', \'right\', \'left\']',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'effect',
        describe: '文字提示（Tooltip）的主题，内置dark和light两种。',
        type: '\'dark\' | \'light\' / string',
        default: ':::',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'popper-class',
        describe: '为 Tooltip 的 popper 添加自定义类名',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'popper-style',
        describe: '为 Tooltip 的 popper 添加自定义样式',
        type: 'string / object',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'transition',
        describe: 'Tooltip 所应用过渡动画的名称',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'teleported',
        describe: '是否使用 teleport。设置成 true则会被追加到 append-to 的位置',
        type: 'boolean',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'popper-options',
        describe: 'popper.js parameters',
        type: 'objectrefer to popper.js doc',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'show-after',
        describe: '在触发后多久显示内容，单位毫秒',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'hide-after',
        describe: '关闭时的延迟',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'auto-close',
        describe: 'tooltip 出现后自动隐藏延时，单位毫秒',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    },
    {
        key: 'offset',
        describe: 'Tooltip 出现位置的偏移量',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '当所选值更改时触发，参数是当前选中的值',
        type: '(val: any) => void',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-events'
    },
    {
        key: '@visible-change',
        describe: '当下拉菜单出现/消失时触发器, 当它出现时, 参数将是 true, 否则将是 false',
        type: '(visible: boolean) => void',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-events'
    },
    {
        key: '@remove-tag',
        describe: '当一个标签在多个模式下被移除时触发，参数将被移除标签值',
        type: '(tagValue: any) => void',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-events'
    },
    {
        key: '@clear',
        describe: '可清空的单选模式下用户点击清空按钮时触发',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-events'
    },
    {
        key: '@blur',
        describe: '当选择器的输入框失去焦点时触发',
        type: '(event: FocusEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-events'
    },
    {
        key: '@focus',
        describe: '当选择器的输入框获得焦点时触发',
        type: '(event: FocusEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-events'
    },
    {
        key: '@end-reached',
        describe: '下拉滚动到结束时触发器（自 2.14.0 版本）',
        type: '(direction: \'top\' | \'bottom\' | \'left\' | \'right\') => void',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义 Option 模板',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-slots'
    },
    {
        key: 'header',
        describe: '下拉列表顶部的内容',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-slots'
    },
    {
        key: 'footer',
        describe: '下拉列表底部的内容',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-slots'
    },
    {
        key: 'empty',
        describe: '自定义当选项为空时的内容',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-slots'
    },
    {
        key: 'prefix',
        describe: '输入框的前缀',
        type: ':::',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-slots'
    },
    {
        key: 'tag',
        describe: '作为 Select 组件的内容时，子标签 data、selectDisabled 和 deleteTag 是在版本 中新增的。',
        type: '{ data: Option[], selectDisabled: boolean, deleteTag: (event: MouseEvent, option: Option) => void }',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-slots'
    },
    {
        key: 'loading',
        describe: 'select 组件自定义 loading内容',
        type: ':::',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-slots'
    },
    {
        key: 'label',
        describe: 'select 组件自定义标签内容 index 引入于',
        type: '{ index: number, label: string | any, value: string | any }',
        link: 'https://beaver-ui.yearrow.com/component/select-v2#virtualized-slots'
    }
];

export default {
    key: 'b-select-v2',
    attr,
    event,
    slot
};
