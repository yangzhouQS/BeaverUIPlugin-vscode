// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/dropdown.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'type',
        describe: '菜单按钮类型，同 Button 组件一样，仅在 split-button 为 true 的情况下有效。',
        type: '\'\' | \'default\' | \'primary\' | \'success\' | \'warning\' | \'info\' | \'danger\' | \'text\' (deprecated)',
        default: '\'\'',
        values: [
            'default',
            'primary',
            'success',
            'warning',
            'info',
            'danger'
        ],
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'size',
        describe: '菜单尺寸，在 split-button 为 true 的情况下也对触发按钮生效。',
        type: '\'\' | \'large\' | \'default\' | \'small\'',
        default: '\'\'',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'button-props',
        describe: '按钮组件的 props，参考 按钮属性',
        type: 'object',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'max-height',
        describe: '菜单最大高度',
        type: 'string / number',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'split-button',
        describe: '下拉触发元素呈现为按钮组',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'placement',
        describe: '菜单弹出位置',
        type: '\'top\' | \'top-start\' | \'top-end\' | \'bottom\' | \'bottom-start\' | \'bottom-end\'',
        default: 'bottom',
        values: [
            'top',
            'top-start',
            'top-end',
            'bottom',
            'bottom-start',
            'bottom-end'
        ],
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'effect',
        describe: 'Tooltip 主题，内置了 dark / light 两种主题',
        type: '\'dark\' | \'light\' / string',
        default: 'light',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'trigger',
        describe: '触发下拉的行为',
        type: '\'click\' | \'hover\' | \'contextmenu\' / Array<\'click\' | \'hover\' | \'contextmenu\'>',
        default: 'hover',
        values: [
            'click',
            'hover',
            'hover'
        ],
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'trigger-keys',
        describe: '指定键盘上哪些按键可以触发操作',
        type: 'string[]',
        default: '[\'Enter\', \'Space\', \'ArrowDown\', \'NumpadEnter\']',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'virtual-triggering',
        describe: '是否启用虚拟触发器',
        type: 'boolean',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'virtual-ref',
        describe: '指示下拉框所依附的参考元素',
        type: 'HTMLElement',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'hide-on-click',
        describe: '是否在点击菜单项后隐藏菜单',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'show-arrow',
        describe: 'tooltip 的内容是否有箭头',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'show-timeout',
        describe: '展开下拉菜单的延时，仅在 trigger 为 hover 时有效',
        type: 'number',
        default: '150',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'hide-timeout',
        describe: '收起下拉菜单的延时（仅在 trigger 为 hover 时有效）',
        type: 'number',
        default: '150',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'role',
        describe: '下拉菜单的 ARIA 属性。 根据具体场景，您可能想要将此更改为“navigation”',
        type: '\'dialog\' | \'grid\' | \'group\' | \'listbox\' | \'menu\' | \'navigation\' | \'tooltip\' | \'tree\'',
        default: 'menu',
        values: [
            'dialog',
            'grid',
            'group',
            'listbox',
            'menu',
            'navigation',
            'tooltip',
            'tree'
        ],
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'tabindex',
        describe: 'Dropdown 组件的 tabindex',
        type: 'number / string',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'popper-class',
        describe: '自定义浮层类名',
        type: 'string / object',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'popper-style',
        describe: '自定义浮层类名',
        type: 'string / object',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'popper-options',
        describe: 'popper.js 参数',
        type: 'object',
        default: '{modifiers: [{name: \'computeStyles\',options: {gpuAcceleration: false}}]}',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'teleported',
        describe: '是否将下拉列表插入至 body 元素',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'append-to',
        describe: 'dropdown 的内容将挂载到哪一个元素上（自 2.13.0 版本）',
        type: 'CSSSelector / HTMLElement',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    },
    {
        key: 'persistent',
        describe: '当下拉菜单处于非活动状态且 persistent 为 false 时，下拉菜单将被销毁',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-attributes'
    }
];
const event: any[] = [
    {
        key: '@click',
        describe: 'split-button 为 true 时，点击左侧按钮的回调',
        type: '(e: MouseEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-events'
    },
    {
        key: '@command',
        describe: '当下拉项被点击时触发，参数是从下拉菜单中发送的命令',
        type: '(...args: any[]) => void',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-events'
    },
    {
        key: '@visible-change',
        describe: '当下拉菜单出现/消失时触发器, 当它出现时, 参数将是 true, 否则将是 false',
        type: '(val: boolean) => void',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '下拉菜单的内容。 注意：必须是有效的 html DOM 元素（例如 、 等）或 b-component，以附加监听触发器',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-slots'
    },
    {
        key: 'dropdown',
        describe: '下拉列表，通常是 组件',
        link: 'https://beaver-ui.yearrow.com/component/dropdown#dropdown-slots'
    }
];

export default {
    key: 'b-dropdown',
    attr,
    event,
    slot
};
