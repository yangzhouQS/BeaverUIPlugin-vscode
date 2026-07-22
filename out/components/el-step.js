"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'title',
        describe: '标题',
        type: 'string',
        default: '\'\''
    },
    {
        key: 'description',
        describe: '描述文案',
        type: 'string',
        default: '\'\''
    },
    {
        key: 'icon',
        describe: 'Step 组件的自定义图标。也支持 slot 方式写入',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'status',
        describe: '设置当前步骤的状态，不设置则根据 steps 确定状态',
        type: 'enum',
        default: '\'\'',
        values: ['wait', 'process', 'finish', 'error', 'success']
    }
];
const event = [];
const slot = [
    {
        key: 'icon',
        describe: '图标内容'
    },
    {
        key: 'title',
        describe: '标题内容'
    },
    {
        key: 'description',
        describe: 'step description'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/steps.html#step-%E5%B1%9E%E6%80%A7';
});
slot.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/steps.html#%E6%8F%92%E6%A7%BD';
});
exports.default = {
    key: 'el-step',
    attr,
    event,
    slot
};
//# sourceMappingURL=el-step.js.map