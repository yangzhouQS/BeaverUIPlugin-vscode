"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'value',
        describe: '数字内容。',
        type: 'number',
        default: '0'
    },
    {
        key: 'decimal-separator',
        describe: '设置小数点符号。',
        type: 'string',
        default: '.'
    },
    {
        key: 'formatter',
        describe: '自定义数字格式化。',
        type: 'function',
        default: '—'
    },
    {
        key: 'group-separator',
        describe: '设置千分位标识符。',
        type: 'string',
        default: ','
    },
    {
        key: 'precision',
        describe: '数字精度。',
        type: 'number',
        default: '0'
    },
    {
        key: 'prefix',
        describe: '设置数字的前缀。',
        type: 'string',
        default: '—'
    },
    {
        key: 'suffix',
        describe: '设置数字的后缀。',
        type: 'string',
        default: '—'
    },
    {
        key: 'title',
        describe: '数字标题。',
        type: 'string',
        default: '—'
    },
    {
        key: 'value-style',
        describe: '数字样式。',
        type: 'string / object',
        default: '—'
    }
];
const event = [];
const slot = [
    {
        key: 'prefix',
        describe: '输入框头部内容 / 前缀内容'
    },
    {
        key: 'suffix',
        describe: '输入框尾部内容 / 后缀内容'
    },
    {
        key: 'title',
        describe: '标题内容'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/statistic.html#statistic-%E5%B1%9E%E6%80%A7';
});
slot.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/statistic.html#%E6%8F%92%E6%A7%BD';
});
exports.default = {
    key: 'el-statistic',
    attr,
    event,
    slot
};
//# sourceMappingURL=el-statistic.js.map