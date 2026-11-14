// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/popover.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'trigger',
        describe: 'popover 触发方式，在受控模式下无效。',
        type: '\'click\' | \'focus\' | \'hover\' | \'contextmenu\' / Array<\'click\' | \'focus\' | \'hover\' | \'contextmenu\'>',
        default: 'hover',
        values: [
            'click',
            'focus',
            'hover',
            'focus',
            'hover'
        ],
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'trigger-keys',
        describe: '当通过鼠标点击使触发元素获得焦点时，可以定义一组键盘按键代码，通过键盘控制气泡框的显示，在受控模式下无效。',
        type: 'Array',
        default: '[\'Enter\',\'Space\']',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'title',
        describe: '标题',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'effect',
        describe: 'Tooltip 主题，Beaver UI 内置了 dark / light 两种主题',
        type: '\'dark\' | \'light\' / string',
        default: 'light',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'content',
        describe: '显示的内容，也可以通过写入默认 slot 修改显示内容',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'width',
        describe: '宽度',
        type: 'string / number',
        default: '150',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'placement',
        describe: '出现位置',
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
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'disabled',
        describe: 'Popover 是否可用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'visible',
        describe: 'Popover 是否显示',
        type: 'boolean / null',
        default: 'null',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'offset',
        describe: '浮层偏移量, Popover 是在 Tooltip,基础上开发的， Popover的 offset 是 undefined, 但Tooltip 的 offset 是12',
        type: 'number',
        default: 'undefined',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'transition',
        describe: '定义渐变动画，默认是 b-fade-in-linear',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'show-arrow',
        describe: '是否显示 Tooltip 箭头， 欲了解更多信息，请参考 BPopper',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'popper-options',
        describe: 'popper.js 的参数',
        type: 'object',
        default: '{modifiers: [{name: \'computeStyles\',options: {gpuAcceleration: false}}]}',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'popper-class',
        describe: '为 popper 添加类名',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'popper-style',
        describe: '为 popper 自定义样式',
        type: 'string / object',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'show-after',
        describe: '延迟显示时间（以毫秒为单位），在受控模式下无效。',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'hide-after',
        describe: '消失延迟时间（以毫秒为单位），在受控模式下无效。',
        type: 'number',
        default: '200',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'auto-close',
        describe: '隐藏提示框的超时时间（以毫秒为单位），在受控模式下无效。',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'tabindex',
        describe: 'Popover 组件的 tabindex',
        type: 'number / string',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'teleported',
        describe: '是否将 popover 的下拉列表插入至 body 元素',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'append-to',
        describe: '指示 Tooltip 的内容将附加在哪一个网页元素上',
        type: 'CSSSelector / HTMLElement',
        default: 'body',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'persistent',
        describe: '当 popover 组件长时间不触发且 persistent 属性设置为 false 时, popover 将会被删除',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'virtual-triggering',
        describe: '是否启用虚拟触发器',
        type: 'boolean',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'virtual-ref',
        describe: '代表 tooltip 所要附加的参照元素',
        type: 'HTMLElement',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    },
    {
        key: 'tooltip',
        describe: '继承自 Tooltip 的所有属性',
        type: ':::',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-attributes'
    }
];
const event: any[] = [
    {
        key: '@show',
        describe: '显示时触发',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-events'
    },
    {
        key: '@before-enter',
        describe: '显示动画播放前触发',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-events'
    },
    {
        key: '@after-enter',
        describe: '显示动画播放完毕后触发',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-events'
    },
    {
        key: '@hide',
        describe: '隐藏时触发',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-events'
    },
    {
        key: '@before-leave',
        describe: '隐藏动画播放前触发',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-events'
    },
    {
        key: '@after-leave',
        describe: '隐藏动画播放完毕后触发',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '弹出框的内容，^(2.13.4) 及之后版本可以接收 hide 参数。',
        type: '{hide: () => void}',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-slots'
    },
    {
        key: 'reference',
        describe: '触发弹出框的 HTML 元素，只接受单个根元素。',
        type: '-',
        link: 'https://beaver-ui.yearrow.com/component/popover#popover-slots'
    }
];

export default {
    key: 'b-popover',
    attr,
    event,
    slot
};
