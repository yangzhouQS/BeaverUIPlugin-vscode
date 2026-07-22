"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'model-value',
        describe: '选中项绑定值',
        type: 'string / number / array',
        default: '—'
    },
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'string / number / array',
        default: '—'
    },
    {
        key: 'options',
        describe: '选项的数据源，value 和 label 可以通过 CascaderProps 自定义.',
        type: 'array',
        default: '—'
    },
    {
        key: 'props',
        describe: '配置选项, 请参阅下面 CascaderProps 表。',
        type: 'object',
        default: '—'
    },
    {
        key: 'virtual-scroll',
        describe: '是否为大数据启用虚拟滚动',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'item-size',
        describe: '虚拟滚动的节点高度 (px)',
        type: 'number',
        default: '34'
    },
    {
        key: 'height',
        describe: '虚拟滚动的菜单高度 (px)',
        type: 'number',
        default: '204'
    }
];
const event = [
    {
        key: '@change',
        describe: '当选中节点变化时触发。类型: Function。',
        type: 'function'
    },
    {
        key: '@update:modelValue',
        describe: '当绑定值变化时触发的事件',
        type: 'function'
    },
    {
        key: '@expand-change',
        describe: '当展开节点发生变化时触发。类型: Function。',
        type: 'function'
    },
    {
        key: '@close',
        describe: '面板的关闭事件，提供给 Cascader 以便做更好的判断。类型: Function。',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/cascader.html#cascaderpanel-%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/cascader.html#cascaderpanel-%E4%BA%8B%E4%BB%B6';
});
exports.default = {
    key: 'el-cascader-panel',
    attr,
    event
};
//# sourceMappingURL=el-cascader-panel.js.map