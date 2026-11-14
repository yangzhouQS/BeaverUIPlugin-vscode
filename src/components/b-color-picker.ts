// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/color-picker.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-attributes'
    },
    {
        key: 'clearable',
        describe: '文本框可输入（自 2.13.1 版本）',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-attributes'
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
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-attributes'
    },
    {
        key: 'show-alpha',
        describe: '是否支持透明度选择',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-attributes'
    },
    {
        key: 'color-format',
        describe: '写入 v-model 的颜色的格式',
        type: '\'rgb\' | \'prgb\' | \'hex\' | \'hex3\' | \'hex4\' | \'hex6\' | \'hex8\' | \'name\' | \'hsl\' | \'hsv\'',
        default: '^[enum]\'hex\' (when show-alpha is false) \\| \'rgb\' (when show-alpha is true)',
        values: [
            'rgb',
            'prgb',
            'hex',
            'hex3',
            'hex4',
            'hex6',
            'hex8',
            'name',
            'hsl',
            'hsv'
        ],
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-attributes'
    },
    {
        key: 'popper-class',
        describe: 'ColorPicker 下拉框的类名',
        type: 'string / object',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-attributes'
    },
    {
        key: 'popper-style',
        describe: 'ColorPicker 下拉面板的自定义样式',
        type: 'string / object',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-attributes'
    },
    {
        key: 'predefine',
        describe: '预定义颜色',
        type: 'string[]',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-attributes'
    },
    {
        key: 'validate-event',
        describe: '输入时是否触发表单的校验',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-attributes'
    },
    {
        key: 'tabindex',
        describe: 'ColorPicker 的 tabindex',
        type: 'string / number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-attributes'
    },
    {
        key: 'aria-label',
        describe: 'ColorPicker 的 aria-label（自 a11y 版本）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-attributes'
    },
    {
        key: 'empty-values',
        describe: '组件的空值配置， 参考config-provider',
        type: 'array',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-attributes'
    },
    {
        key: 'value-on-clear',
        describe: '清空选项的值， 参考config-provider',
        type: 'string / number / boolean / Function',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-attributes'
    },
    {
        key: 'id',
        describe: 'ColorPicker 的 id',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-attributes'
    },
    {
        key: 'teleported',
        describe: '是否将 popover 的下拉列表渲染至 body 下',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-attributes'
    },
    {
        key: 'label ^(a11y)',
        describe: 'ColorPicker 的 aria-label（自 deprecated 版本）【已废弃】',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-attributes'
    },
    {
        key: 'persistent',
        describe: '当颜色选择器未激活且 persistent 为 false 时，颜色面板将被销毁。',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-attributes'
    },
    {
        key: 'append-to',
        describe: '挂载到哪个 DOM 元素',
        type: 'CSSSelector / HTMLElement',
        default: '-',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '当绑定值变化时触发',
        type: '(value: string) => void',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-events'
    },
    {
        key: '@active-change',
        describe: '面板中当前显示的颜色发生改变时触发',
        type: '(value: string) => void',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-events'
    },
    {
        key: '@focus',
        describe: '当获得焦点时触发',
        type: '(event: FocusEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-events'
    },
    {
        key: '@blur',
        describe: '当失去焦点时触发',
        type: '(event: FocusEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-events'
    },
    {
        key: '@clear',
        describe: '当点击清除按钮时触发（自 2.13.1 版本）',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/color-picker#colorpicker-events'
    }
];
const slot: any[] = [];

export default {
    key: 'b-color-picker',
    attr,
    event,
    slot
};
