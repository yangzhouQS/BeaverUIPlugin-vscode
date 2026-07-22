"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'layout',
        describe: '分割面板布局方向',
        type: 'enum',
        default: 'horizontal'
    },
    {
        key: 'lazy',
        describe: '是否启用懒加载模式',
        type: 'boolean',
        default: 'false'
    }
];
const event = [
    {
        key: '@resize-start',
        describe: '开始调整面板大小时触发，index 为拖拽条索引',
        type: 'function'
    },
    {
        key: '@resize',
        describe: '调整面板大小过程中触发，index 为拖拽条索引',
        type: 'function'
    },
    {
        key: '@resize-end',
        describe: '面板大小调整结束时触发，index 为拖拽条索引',
        type: 'function'
    },
    {
        key: '@collapse',
        describe: '面板折叠时触发，index 为拖拽条索引，2.10.3版本开始支持',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/splitter.html#splitter-%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/splitter.html#splitter-%E4%BA%8B%E4%BB%B6';
});
exports.default = {
    key: 'el-splitter',
    attr,
    event
};
//# sourceMappingURL=el-splitter.js.map