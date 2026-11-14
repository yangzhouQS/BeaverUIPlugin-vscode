// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/input-tag.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '绑定值',
        type: 'string[]',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'max',
        describe: '可添加标签的最大数量',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
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
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
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
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'effect',
        describe: 'tooltip 主题，内置了 dark / light 两种（自 2.13.2 版本）',
        type: '\'dark\' | \'light\' / string',
        default: 'light',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'trigger',
        describe: '触发输入标签的按键',
        type: '\'Enter\' | \'Space\'',
        default: 'Enter',
        values: [
            'Enter',
            'Space'
        ],
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'draggable',
        describe: '是否可以拖动标签',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'delimiter',
        describe: '在匹配分隔符时添加标签',
        type: 'string / regex',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'size',
        describe: '输入框尺寸',
        type: '\'large\' | \'default\' | \'small\'',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'collapse-tags',
        describe: '多选时是否将选中值按文字的形式展示',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'collapse-tags-tooltip',
        describe: '当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 要使用此功能，collapse-tags的值必须为true',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'save-on-blur',
        describe: '当输入失去焦点时是否保存输入值',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'clearable',
        describe: '是否显示清除按钮',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'clear-icon',
        describe: '自定义清除图标',
        type: 'string / Component',
        default: 'CircleClose',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'readonly',
        describe: '等价于原生 readonly 属性',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'autofocus',
        describe: '等价于原生 autofocus 属性',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'id',
        describe: '等价于原生 input id 属性',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'tabindex',
        describe: '等价于原生 tabindex 属性',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'max-collapse-tags',
        describe: '需要显示的 Tag 的最大数量 要使用此功能，collapse-tags的值必须为true',
        type: 'number',
        default: '1',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'maxlength',
        describe: '等价于原生 maxlength 属性',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'minlength',
        describe: '等价于原生 minlength 属性',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'placeholder',
        describe: '输入框占位文本',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'autocomplete',
        describe: '等价于原生 autocomplete 属性',
        type: 'string',
        default: 'off',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    },
    {
        key: 'aria-label',
        describe: '等价于原生 aria-label 属性（自 a11y 版本）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '绑定值变化时触发的事件',
        type: '(value: string[]) => void',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-events'
    },
    {
        key: '@input',
        describe: '在 Input 值改变时触发',
        type: '(value: string) => void',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-events'
    },
    {
        key: '@add-tag',
        describe: 'tag 被添加时触发',
        type: '(value: string | string []) => void',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-events'
    },
    {
        key: '@remove-tag',
        describe: 'tag 被移除时触发',
        type: '(value: string, index: number) => void',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-events'
    },
    {
        key: '@drag-tag',
        describe: 'tag 被拖动时触发',
        type: '(oldIndex: number, newIndex: number, value: string) => void',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-events'
    },
    {
        key: '@focus',
        describe: '在 Input 获得焦点时触发',
        type: '(event: FocusEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-events'
    },
    {
        key: '@blur',
        describe: '在 Input 失去焦点时触发',
        type: '(event: FocusEvent) => void',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-events'
    },
    {
        key: '@clear',
        describe: '点击清除图标时触发',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-events'
    }
];
const slot: any[] = [
    {
        key: 'tag',
        describe: '作为tag的内容',
        type: '{ value: string, index: number }',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-slots'
    },
    {
        key: 'prefix',
        describe: 'InputTag 头部内容',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-slots'
    },
    {
        key: 'suffix',
        describe: 'InputTag 尾部内容',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/input-tag#input-tag-slots'
    }
];

export default {
    key: 'b-input-tag',
    attr,
    event,
    slot
};
