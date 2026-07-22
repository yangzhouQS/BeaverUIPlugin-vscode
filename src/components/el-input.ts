const attr = [
    {
        key: 'type',
        describe: '类型',
        type: 'enum',
        default: 'text'
    },
    {
        key: 'model-value',
        describe: '绑定值',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '绑定值',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'model-modifiers',
        describe: 'v-model 修饰符，参考 Vue 修饰符',
        type: 'object',
        default: '—'
    },
    {
        key: 'maxlength',
        describe: '最大输入长度',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'minlength',
        describe: '原生属性，最小输入长度',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'show-word-limit',
        describe: '是否显示输入字数统计',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'word-limit-position',
        describe: '字数统计的位置，仅当 show-word-limit 为 true 时生效',
        type: 'enum',
        default: 'inside'
    },
    {
        key: 'placeholder',
        describe: '输入框占位文本',
        type: 'string',
        default: '—'
    },
    {
        key: 'clearable',
        describe: '是否可清空',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'clear-icon',
        describe: '自定义清除图标',
        type: 'string / Component',
        default: 'CircleClose'
    },
    {
        key: 'formatter',
        describe: '指定输入值的格式（仅当 type 为 text 时生效）',
        type: 'function',
        default: '—'
    },
    {
        key: 'parser',
        describe: '指定从格式化后的输入中提取的值（仅当 type 为 text 时生效）',
        type: 'function',
        default: '—'
    },
    {
        key: 'show-password',
        describe: '是否显示切换密码图标',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'disabled',
        describe: '是否禁用输入框',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'size',
        describe: '输入框尺寸，只在 type 不为 textarea 时有效',
        type: 'enum',
        default: '—'
    },
    {
        key: 'prefix-icon',
        describe: '输入框前缀图标',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'suffix-icon',
        describe: '输入框后缀图标',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'rows',
        describe: '输入框行数，仅 type 为 textarea 时有效',
        type: 'number',
        default: '2'
    },
    {
        key: 'autosize',
        describe: 'textarea 高度是否自适应，仅 type 为 textarea 时生效',
        type: 'boolean / object',
        default: 'false'
    },
    {
        key: 'autocomplete',
        describe: '原生 autocomplete 属性',
        type: 'string',
        default: 'off'
    },
    {
        key: 'name',
        describe: '原生 name 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'readonly',
        describe: '是否只读',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'max',
        describe: '原生 max 属性',
        type: '—',
        default: '—'
    },
    {
        key: 'min',
        describe: '原生 min 属性',
        type: '—',
        default: '—'
    },
    {
        key: 'step',
        describe: '原生 step 属性',
        type: '—',
        default: '—'
    },
    {
        key: 'resize',
        describe: '控制是否能被用户缩放',
        type: 'enum',
        default: '—'
    },
    {
        key: 'autofocus',
        describe: '原生 autofocus 属性',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'form',
        describe: '原生 form 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'aria-label',
        describe: '原生 aria-label 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'tabindex',
        describe: '输入框的 tabindex',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'validate-event',
        describe: '输入时是否触发表单的校验',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'input-style',
        describe: '输入框的样式',
        type: 'string / object',
        default: '{}'
    },
    {
        key: 'label',
        describe: '等价于原生 aria-label 属性，已废弃',
        type: 'string',
        default: '—'
    },
    {
        key: 'inputmode',
        describe: '原生 inputmode 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'count-graphemes',
        describe: '自定义函数用于计算字形；设置后将绕过原生 maxlength/minlength 约束',
        type: 'function',
        default: '—'
    }
];

const event = [
    {
        key: '@blur',
        describe: '当输入框失去焦点时触发',
        type: 'function'
    },
    {
        key: '@change',
        describe: '当输入框失去焦点或用户按下回车且输入值变化时触发',
        type: 'function'
    },
    {
        key: '@clear',
        describe: '当点击清除按钮时触发',
        type: 'function'
    },
    {
        key: '@compositionend',
        describe: '输入法输入结束时触发（原生 DOM 事件）',
        type: 'function'
    },
    {
        key: '@compositionstart',
        describe: '输入法输入开始时触发（原生 DOM 事件）',
        type: 'function'
    },
    {
        key: '@compositionupdate',
        describe: '输入法输入期间触发（原生 DOM 事件）',
        type: 'function'
    },
    {
        key: '@focus',
        describe: '当输入框获得焦点时触发',
        type: 'function'
    },
    {
        key: '@input',
        describe: '在输入框中输入时触发',
        type: 'function'
    },
    {
        key: '@keydown',
        describe: '键盘按键被按下时触发（原生 DOM 事件）',
        type: 'function'
    },
    {
        key: '@keyup',
        describe: '键盘按键被释放时触发（原生 DOM 事件）',
        type: 'function'
    },
    {
        key: '@mouseenter',
        describe: '鼠标移入输入框时触发（原生 DOM 事件）',
        type: 'function'
    },
    {
        key: '@mouseleave',
        describe: '鼠标移出输入框时触发（原生 DOM 事件）',
        type: 'function'
    },
    {
        key: '@paste',
        describe: '粘贴内容到输入框时触发（原生 DOM 事件）',
        type: 'function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/input.html#attributes';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/input.html#events';
});

export default {
    key: 'el-input',
    attr,
    event
};
