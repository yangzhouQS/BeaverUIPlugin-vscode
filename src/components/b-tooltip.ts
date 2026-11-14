// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/tooltip.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'append-to',
        describe: '指示 Tooltip 的内容将附加在哪一个网页元素上',
        type: 'CSSSelector / HTMLElement',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'effect',
        describe: 'Tooltip 主题，内置了 dark / light 两种',
        type: '\'dark\' | \'light\'',
        default: 'dark',
        values: [
            'dark',
            'light'
        ],
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'content',
        describe: '显示的内容，也可被 slot#content 覆盖',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'raw-content',
        describe: 'content 中的内容是否作为 HTML 字符串处理',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
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
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'fallback-placements',
        describe: 'Tooltip 可用的 positions 请查看popper.js 文档',
        type: 'Placement[]',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'visible',
        describe: 'Tooltip 组件可见性',
        type: 'boolean',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'disabled',
        describe: 'Tooltip 组件是否禁用',
        type: 'boolean',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'offset',
        describe: 'Tooltip 出现位置的偏移量',
        type: 'number',
        default: '12',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'transition',
        describe: '动画名称',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'popper-options',
        describe: 'popper.js 参数',
        type: 'object 请参考 popper.js 文档',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'arrow-offset',
        describe: '控制Tooltip的箭头相对于弹出窗口的偏移(添加)。',
        type: 'number',
        default: '5',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'show-after',
        describe: '延迟显示时间（以毫秒为单位），在受控模式下无效。',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'show-arrow',
        describe: 'tooltip 的内容是否有箭头',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'hide-after',
        describe: '消失延迟时间（以毫秒为单位），在受控模式下无效。',
        type: 'number',
        default: '200',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'auto-close',
        describe: '隐藏提示框的超时时间（以毫秒为单位），在受控模式下无效。',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'popper-class',
        describe: '为 Tooltip 的 popper 添加自定义类名',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'popper-style',
        describe: '为 Tooltip 的 popper 添加自定义样式',
        type: 'string / object',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'enterable',
        describe: '鼠标是否可进入到 tooltip 中',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'teleported',
        describe: '是否使用 teleport。设置成 true则会被追加到 append-to 的位置',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'trigger',
        describe: '提示框的触发方式（用于显示），在受控模式下无效。',
        type: '\'hover\' | \'click\' | \'focus\' | \'contextmenu\' / Array<\'click\' | \'focus\' | \'hover\' | \'contextmenu\'>',
        default: 'hover',
        values: [
            'hover',
            'click',
            'focus',
            'focus',
            'hover'
        ],
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'virtual-triggering',
        describe: '用来标识虚拟触发是否被启用',
        type: 'boolean',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'virtual-ref',
        describe: '标识虚拟触发时的触发元素',
        type: 'HTMLElement',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'trigger-keys',
        describe: '当通过鼠标点击使触发元素获得焦点时，可以定义一组键盘按键代码，通过键盘控制提示框的显示，在受控模式下无效。',
        type: 'Array',
        default: '[\'Enter\',\'Space\']',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'persistent',
        describe: '当tooltip未激活且 persistent 为 false 时，tooltip将被销毁。',
        type: 'boolean',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'aria-label',
        describe: '和 aria-label 属性保持一致（自 a11y 版本）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    },
    {
        key: 'focus-on-target',
        describe: '当通过悬停触发提示时，是否聚焦触发元素，以提升可访问性',
        type: 'false',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-attributes'
    }
];
const event: any[] = [
    {
        key: '@before-show',
        describe: '在显示提示框之前触发。 将触发原因作为参数传入。',
        type: '(event?: Event) => void',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-events'
    },
    {
        key: '@show',
        describe: '在提示框显示时触发。 将触发原因作为参数传入。',
        type: '(event?: Event) => void',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-events'
    },
    {
        key: '@before-hide',
        describe: '在提示框隐藏之前触发。 将触发原因作为参数传入。',
        type: '(event?: Event) => void',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-events'
    },
    {
        key: '@hide',
        describe: '在提示框隐藏时触发。 将触发原因作为参数传入。',
        type: '(event?: Event) => void',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '提示框触发及参考元素，只接受单个根元素。',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-slots'
    },
    {
        key: 'content',
        describe: '自定义内容',
        link: 'https://beaver-ui.yearrow.com/component/tooltip#tooltip-slots'
    }
];

export default {
    key: 'b-tooltip',
    attr,
    event,
    slot
};
