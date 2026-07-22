"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'label',
        describe: '标签文本。',
        type: 'string',
        default: '\'\''
    },
    {
        key: 'span',
        describe: '列的数量。',
        type: 'number',
        default: '1'
    },
    {
        key: 'rowspan',
        describe: '单元格应该跨越的行数。自 2.8.1 版本起支持。',
        type: 'number',
        default: '1'
    },
    {
        key: 'width',
        describe: '列的宽度，不同行相同列的宽度按最大值设定（如无 border，宽度包含标签与内容）。',
        type: 'string / number',
        default: '\'\''
    },
    {
        key: 'min-width',
        describe: '列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列（如无 border，宽度包含标签与内容）。',
        type: 'string / number',
        default: '\'\''
    },
    {
        key: 'label-width',
        describe: '列标签宽，如果未设置，它将与列宽度相同。比 Descriptions 的 label-width 优先级高。自 2.8.8 版本起支持。',
        type: 'string / number',
        default: '—'
    },
    {
        key: 'align',
        describe: '列的内容对齐方式（如无 border，对标签和内容均生效）。',
        type: 'enum',
        default: 'left',
        values: ['left', 'center', 'right']
    },
    {
        key: 'label-align',
        describe: '列的标签对齐方式，若不设置该项，则使用内容的对齐方式（如无 border，请使用 align 参数）。',
        type: 'enum',
        default: '—',
        values: ['left', 'center', 'right']
    },
    {
        key: 'class-name',
        describe: '列的内容自定义类名。',
        type: 'string',
        default: '\'\''
    },
    {
        key: 'label-class-name',
        describe: '列标签自定义类名。',
        type: 'string',
        default: '\'\''
    }
];
const event = [];
const slot = [
    {
        key: 'default',
        describe: '自定义默认内容'
    },
    {
        key: 'label',
        describe: '标签内容'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/descriptions.html#descriptionsitem-%E5%B1%9E%E6%80%A7';
});
slot.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/descriptions.html#%E6%8F%92%E6%A7%BD';
});
exports.default = {
    key: 'el-descriptions-item',
    attr,
    event,
    slot
};
//# sourceMappingURL=el-descriptions-item.js.map