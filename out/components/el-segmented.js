"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '绑定值，可用于 v-model。',
        type: 'string / number / boolean',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '绑定值，可用于 v-model。',
        type: 'string / number / boolean',
        default: '—'
    },
    {
        key: 'options',
        describe: '选项的数据。',
        type: 'array',
        default: '[]'
    },
    {
        key: 'props',
        describe: '选项的配置，见下表',
        type: 'object',
        default: '—'
    },
    {
        key: 'size',
        describe: '组件大小。',
        type: 'enum',
        default: '\'\'',
        values: ['large', 'default', 'small']
    },
    {
        key: 'block',
        describe: '是否撑满父元素宽度。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'disabled',
        describe: '是否禁用。',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证。',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'name',
        describe: '原生 name 属性。',
        type: 'string',
        default: '—'
    },
    {
        key: 'id',
        describe: '原生 id 属性。',
        type: 'string',
        default: '—'
    },
    {
        key: 'aria-label',
        describe: '原生 aria-label 属性（无障碍）。',
        type: 'string',
        default: '—'
    },
    {
        key: 'direction',
        describe: '展示的方向，版本 2.8.7 引入。',
        type: 'enum',
        default: 'horizontal',
        values: ['horizontal', 'vertical']
    }
];
const event = [
    {
        key: '@change',
        describe: '当所选值更改时触发，参数是当前选中的值',
        type: 'function'
    }
];
const slot = [
    {
        key: 'default',
        describe: '自定义默认内容'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/segmented.html#segmented-%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/segmented.html#segmented-%E4%BA%8B%E4%BB%B6';
});
slot.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/segmented.html#%E6%8F%92%E6%A7%BD';
});
exports.default = {
    key: 'el-segmented',
    attr,
    event,
    slot
};
//# sourceMappingURL=el-segmented.js.map