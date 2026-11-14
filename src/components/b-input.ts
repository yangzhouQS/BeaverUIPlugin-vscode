// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/input.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'type',
        describe: '输入类型，更多信息请参见 MDN',
        type: '\'text\' | \'textarea\' | \'number\' | \'password\' | \'email\' | \'search\' | \'tel\' | \'url\'',
        default: 'text',
        values: [
            'text',
            'textarea',
            'number',
            'password',
            'email',
            'search',
            'tel',
            'url'
        ],
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'v-model',
        describe: '绑定值',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'model-modifiers',
        describe: 'v-model 修饰符，参考 Vue 修饰符',
        type: '{ lazy?: true, number?: true, trim?: true }',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'maxlength',
        describe: '同原生 maxlength 属性',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'minlength',
        describe: '原生属性，最小输入长度',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'show-word-limit',
        describe: '是否显示统计字数, 只在 type 为 \'text\' 或 \'textarea\' 的时候生效',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'word-limit-position',
        describe: '字数统计的位置，仅当 show-word-limit 为 true 时生效。',
        type: '\'inside\' | \'outside\'',
        default: '"inside"',
        values: [
            'inside',
            'outside'
        ],
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'placeholder',
        describe: '输入框占位文本',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'clearable',
        describe: '是否显示清除按钮，只有当 type 不是 textarea时生效',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'clear-icon',
        describe: '自定义清除图标',
        type: 'string / Component',
        default: 'CircleClose',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'formatter',
        describe: '指定输入值的格式。(只有当 type 是"text"时才能工作)',
        type: '(value: string | number) => string',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'parser',
        describe: '指定从格式化器输入中提取的值。(仅当 type 是"text"时才起作用)',
        type: '(value: string) => string',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'show-password',
        describe: '是否显示切换密码图标',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'size',
        describe: '输入框尺寸，只在 type 不为 \'textarea\' 时有效',
        type: '\'large\' | \'default\' | \'small\'',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'prefix-icon',
        describe: '自定义前缀图标',
        type: 'string / Component',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'suffix-icon',
        describe: '自定义后缀图标',
        type: 'string / Component',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'rows',
        describe: '输入框行数，仅 type 为 \'textarea\' 时有效',
        type: 'number',
        default: '2',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'autosize',
        describe: 'textarea 高度是否自适应，仅 type 为 \'textarea\' 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }',
        type: 'boolean / { minRows?: number, maxRows?: number }',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'autocomplete',
        describe: '原生 autocomplete 属性',
        type: 'string',
        default: 'off',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'name',
        describe: '等价于原生 input name 属性',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'readonly',
        describe: '原生 readonly 属性，是否只读',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'max',
        describe: '原生 max 属性，设置最大值',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'min',
        describe: '原生属性，设置最小值',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'step',
        describe: '原生属性，设置输入字段的合法数字间隔',
        type: ':::',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'resize',
        describe: '控制是否能被用户缩放',
        type: '\'none\' | \'both\' | \'horizontal\' | \'vertical\'',
        values: [
            'none',
            'both',
            'horizontal',
            'vertical'
        ],
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'autofocus',
        describe: '原生属性，自动获取焦点',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'form',
        describe: '原生属性',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'aria-label',
        describe: '等价于原生 input aria-label 属性（自 a11y 版本）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'tabindex',
        describe: '输入框的 tabindex',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'validate-event',
        describe: '输入时是否触发表单的校验',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'input-style',
        describe: 'input 元素或 textarea 元素的 style',
        type: 'string / CSSProperties | CSSProperties[] | string[]',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'label ^(a11y)',
        describe: '等价于原生 input aria-label 属性（自 deprecated 版本）【已废弃】',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'inputmode',
        describe: '等价于原生 input inputmode 属性',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    },
    {
        key: 'count-graphemes',
        describe: '自定义函数用于计算字形；设置后，将绕过原生的 maxlength/minlength 约束。 组件使用 Intl.Segmenter（Chrome 87+、Firefox 125+、Safari 14.1+）进行正确的字素聚类；旧版浏览器回退到使用 Array.from() 进行码点迭代。（自 2.13.7 版本）',
        type: '(value: string) => number',
        link: 'https://beaver-ui.yearrow.com/component/input#input-attributes'
    }
];
const event: any[] = [
    {
        key: '@blur',
        describe: '当选择器的输入框失去焦点时触发',
        type: '(event: FocusEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/input#input-events'
    },
    {
        key: '@focus',
        describe: '当选择器的输入框获得焦点时触发',
        type: '(event: FocusEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/input#input-events'
    },
    {
        key: '@change',
        describe: '仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发',
        type: '(value: string | number, evt?: Event) => void',
        link: 'https://beaver-ui.yearrow.com/component/input#input-events'
    },
    {
        key: '@input',
        describe: '在 Input 值改变时触发',
        type: '(value: string | number) => void',
        link: 'https://beaver-ui.yearrow.com/component/input#input-events'
    },
    {
        key: '@clear',
        describe: '在点击由 clearable 属性生成的清空按钮时触发',
        type: '(evt?: MouseEvent) => void (After version 2.13.4, the evt parameter can be received)',
        link: 'https://beaver-ui.yearrow.com/component/input#input-events'
    },
    {
        key: '@keydown',
        describe: '按下键时触发',
        type: '(event: KeyboardEvent | Event) => void',
        link: 'https://beaver-ui.yearrow.com/component/input#input-events'
    },
    {
        key: '@mouseleave',
        describe: '当鼠标离开输入元素时触发',
        type: '(event: MouseEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/input#input-events'
    },
    {
        key: '@mouseenter',
        describe: '当鼠标进入输入元素时触发',
        type: '(event: MouseEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/input#input-events'
    },
    {
        key: '@compositionstart',
        describe: '输入法输入开始时触发',
        type: '(event: CompositionEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/input#input-events'
    },
    {
        key: '@compositionupdate',
        describe: '输入法输入改变时触发',
        type: '(event: CompositionEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/input#input-events'
    },
    {
        key: '@compositionend',
        describe: '输入法输入完成时触发',
        type: '(event: CompositionEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/input#input-events'
    }
];
const slot: any[] = [
    {
        key: 'prefix',
        describe: '输入框头部内容，只对非 type="textarea" 有效',
        link: 'https://beaver-ui.yearrow.com/component/input#input-slots'
    },
    {
        key: 'suffix',
        describe: '输入框尾部内容，只对非 type="textarea" 有效',
        link: 'https://beaver-ui.yearrow.com/component/input#input-slots'
    },
    {
        key: 'prepend',
        describe: '输入框前置内容，只对非 type="textarea" 有效',
        link: 'https://beaver-ui.yearrow.com/component/input#input-slots'
    },
    {
        key: 'append',
        describe: '输入框后置内容，只对非 type="textarea" 有效',
        link: 'https://beaver-ui.yearrow.com/component/input#input-slots'
    },
    {
        key: 'password-icon',
        describe: '作为输入密码图标的内容，仅在 show-password 为 true 时生效。 作用域变量为 { visible: boolean }（自 2.13.6 版本）',
        link: 'https://beaver-ui.yearrow.com/component/input#input-slots'
    }
];

export default {
    key: 'b-input',
    attr,
    event,
    slot
};
