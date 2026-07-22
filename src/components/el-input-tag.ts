const attr = [
    {
        key: 'model-value',
        describe: '绑定值',
        type: 'array',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '绑定值',
        type: 'array',
        default: '—'
    },
    {
        key: 'max',
        describe: '可添加标签的最大数量',
        type: 'number',
        default: '—'
    },
    {
        key: 'tag-type',
        describe: '标签类型',
        type: 'enum',
        default: 'info'
    },
    {
        key: 'tag-effect',
        describe: '标签效果',
        type: 'enum',
        default: 'light'
    },
    {
        key: 'effect',
        describe: 'tooltip 主题，内置主题：dark / light',
        type: 'string',
        default: 'light'
    },
    {
        key: 'trigger',
        describe: '触发输入标签的按键',
        type: 'enum',
        default: 'Enter'
    },
    {
        key: 'draggable',
        describe: '是否可以拖动标签',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'delimiter',
        describe: '在匹配分隔符时添加标签，2.9.9 版本支持',
        type: 'string / regex',
        default: '—'
    },
    {
        key: 'size',
        describe: '输入框尺寸',
        type: 'enum',
        default: '—'
    },
    {
        key: 'collapse-tags',
        describe: '多选时是否将选中值按文字的形式展示，2.11.0 版本支持',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'collapse-tags-tooltip',
        describe: '当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签，需配合 collapse-tags，2.11.0 版本支持',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'save-on-blur',
        describe: '当输入失去焦点时是否保存输入值 (2.9.7及以上版本)',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'clearable',
        describe: '是否显示清除按钮',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'clear-icon',
        describe: '自定义清除图标，2.11.0 版本支持',
        type: 'string / Component',
        default: 'CircleClose'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'readonly',
        describe: '等价于原生 readonly 属性',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'autofocus',
        describe: '等价于原生 autofocus 属性',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'id',
        describe: '等价于原生 input id 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'tabindex',
        describe: '等价于原生 tabindex 属性',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'max-collapse-tags',
        describe: '需要显示的 Tag 的最大数量，需配合 collapse-tags，2.11.0 版本支持',
        type: 'number',
        default: '1'
    },
    {
        key: 'maxlength',
        describe: '等价于原生 maxlength 属性',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'minlength',
        describe: '等价于原生 minlength 属性',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'placeholder',
        describe: '输入框占位文本',
        type: 'string',
        default: '—'
    },
    {
        key: 'autocomplete',
        describe: '等价于原生 autocomplete 属性',
        type: 'string',
        default: 'off'
    },
    {
        key: 'aria-label',
        describe: '等价于原生 aria-label 属性',
        type: 'string',
        default: '—'
    }
];

const event = [
    {
        key: '@change',
        describe: '绑定值变化时触发的事件',
        type: 'function'
    },
    {
        key: '@input',
        describe: '在 Input 值改变时触发',
        type: 'function'
    },
    {
        key: '@add-tag',
        describe: 'tag 被添加时触发',
        type: 'function'
    },
    {
        key: '@remove-tag',
        describe: 'tag 被移除时触发',
        type: 'function'
    },
    {
        key: '@drag-tag',
        describe: 'tag 被拖动时触发',
        type: 'function'
    },
    {
        key: '@focus',
        describe: '在 Input 获得焦点时触发',
        type: 'function'
    },
    {
        key: '@blur',
        describe: '在 Input 失去焦点时触发',
        type: 'function'
    },
    {
        key: '@clear',
        describe: '点击清除图标时触发',
        type: 'function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/input-tag.html#%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/input-tag.html#%E4%BA%8B%E4%BB%B6';
});

export default {
    key: 'el-input-tag',
    attr,
    event
};
