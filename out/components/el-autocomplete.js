"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '选中项绑定值',
        type: 'string',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'string',
        default: '—'
    },
    {
        key: 'placeholder',
        describe: '占位文本',
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
        key: 'disabled',
        describe: '自动补全组件是否被禁用',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'value-key',
        describe: '输入建议对象中用于显示的键名',
        type: 'string',
        default: 'value'
    },
    {
        key: 'debounce',
        describe: '获取输入建议的防抖延时，单位为毫秒',
        type: 'number',
        default: '300'
    },
    {
        key: 'placement',
        describe: '菜单弹出位置',
        type: 'enum',
        default: 'bottom-start',
        values: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end']
    },
    {
        key: 'fetch-suggestions',
        describe: '获取输入建议的方法，仅当数据 resolve 时通过 callback(data:[]) 返回',
        type: 'Array / Function',
        default: '—'
    },
    {
        key: 'trigger-on-focus',
        describe: '是否在输入框获取焦点时显示建议',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'select-when-unmatched',
        describe: '在输入没有匹配建议时，按下回车是否触发 select 事件',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'name',
        describe: '等价于原生 input name 属性',
        type: 'string',
        default: '—'
    },
    {
        key: 'aria-label',
        describe: '原生 aria-label 属性 (2.7.2+)',
        type: 'string',
        default: '—'
    },
    {
        key: 'hide-loading',
        describe: '是否隐藏远程加载时的加载图标',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'popper-class',
        describe: '下拉列表的类名',
        type: 'string / object',
        default: '\'\''
    },
    {
        key: 'popper-style',
        describe: '下拉列表的样式',
        type: 'string / object',
        default: '—'
    },
    {
        key: 'popper-options',
        describe: 'popper.js 参数',
        type: 'object',
        default: '{}'
    },
    {
        key: 'show-arrow',
        describe: '下拉菜单是否带有箭头',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'teleported',
        describe: '是否将下拉列表元素插入 append-to 指向的元素下',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'append-to',
        describe: '下拉框挂载到哪个 DOM 元素',
        type: 'string / object',
        default: '—'
    },
    {
        key: 'highlight-first-item',
        describe: '是否默认高亮远程搜索结果的第一项',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'fit-input-width',
        describe: '下拉框的宽度是否与输入框相同',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'popper-append-to-body',
        describe: '是否将下拉列表插入至 body 元素。 在下拉列表的定位出现问题时，可将该属性设置为 false（已废弃）',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'loop-navigation',
        describe: '键盘导航是否从末尾循环到开头',
        type: 'boolean',
        default: 'true'
    }
];
const event = [
    {
        key: '@blur',
        describe: '当选择器的输入框失去焦点时触发',
        type: 'function'
    },
    {
        key: '@focus',
        describe: '当选择器的输入框获得焦点时触发',
        type: 'function'
    },
    {
        key: '@input',
        describe: '在 Input 值改变时触发',
        type: 'function'
    },
    {
        key: '@clear',
        describe: '在点击由 clearable 属性生成的清空按钮时触发',
        type: 'function'
    },
    {
        key: '@select',
        describe: '点击选中建议项时触发',
        type: 'function'
    },
    {
        key: '@change',
        describe: '在 Input 值改变时触发',
        type: 'function'
    }
];
const slot = [
    {
        key: 'default',
        describe: '自定义默认内容'
    },
    {
        key: 'header',
        describe: '头部内容'
    },
    {
        key: 'footer',
        describe: '底部内容'
    },
    {
        key: 'prefix',
        describe: '输入框头部内容 / 前缀内容'
    },
    {
        key: 'suffix',
        describe: '输入框尾部内容 / 后缀内容'
    },
    {
        key: 'prepend',
        describe: '输入框前置内容'
    },
    {
        key: 'append',
        describe: '输入框后置内容'
    },
    {
        key: 'loading',
        describe: 'override loading content'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/autocomplete.html#autocomplete-%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/autocomplete.html#autocomplete-%E4%BA%8B%E4%BB%B6';
});
slot.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/autocomplete.html#%E6%8F%92%E6%A7%BD';
});
exports.default = {
    key: 'el-autocomplete',
    attr,
    event,
    slot
};
//# sourceMappingURL=el-autocomplete.js.map