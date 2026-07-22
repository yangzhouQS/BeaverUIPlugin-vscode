"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attr = [
    {
        key: 'append-to',
        describe: '挂载到哪个 DOM 元素',
        type: 'string / HTMLElement',
        default: 'body'
    },
    {
        key: 'show-arrow',
        describe: '是否显示箭头',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'placement',
        describe: '引导卡片相对于目标元素的位置，可选值: bottom',
        type: 'enum',
        default: 'bottom'
    },
    {
        key: 'content-style',
        describe: '为 content 自定义样式',
        type: 'object',
        default: '—'
    },
    {
        key: 'mask',
        describe: '是否启用遮罩，可传入对象自定义遮罩样式和填充颜色',
        type: 'boolean / object',
        default: 'true'
    },
    {
        key: 'gap',
        describe: '遮罩和目标之间的透明间距',
        type: 'object',
        default: '—'
    },
    {
        key: 'type',
        describe: '类型，影响底色与文字颜色，可选值: default, primary',
        type: 'enum',
        default: 'default'
    },
    {
        key: 'model-value',
        describe: '控制引导是否打开（v-model 绑定）',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'v-model',
        describe: '控制引导是否打开（v-model 语法糖）',
        type: 'boolean',
        default: 'false'
    },
    {
        key: 'current',
        describe: '当前步骤索引（v-model:current 绑定）',
        type: 'number',
        default: '0'
    },
    {
        key: 'v-model:current',
        describe: '当前步骤索引（v-model 语法糖）',
        type: 'number',
        default: '0'
    },
    {
        key: 'scroll-into-view-options',
        describe: '是否支持当前元素滚动到视窗内，也可传入对象配置滚动行为',
        type: 'boolean / object',
        default: '—'
    },
    {
        key: 'z-index',
        describe: 'Tour 组件的层级',
        type: 'number',
        default: '2001'
    },
    {
        key: 'show-close',
        describe: '是否显示关闭按钮',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'close-icon',
        describe: '自定义关闭图标，默认使用 Close',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'close-on-press-escape',
        describe: '是否可以通过按下 ESC 关闭引导',
        type: 'boolean',
        default: 'true'
    },
    {
        key: 'target-area-clickable',
        describe: '启用蒙层时，目标元素区域是否可以点击',
        type: 'boolean',
        default: 'true'
    }
];
const event = [
    {
        key: '@close',
        describe: '关闭引导时的回调函数',
        type: 'function'
    },
    {
        key: '@finish',
        describe: '引导完成时的回调',
        type: 'function'
    },
    {
        key: '@change',
        describe: '步骤改变时的回调',
        type: 'function'
    }
];
attr.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/tour.html#tour-%E5%B1%9E%E6%80%A7';
});
event.forEach((x) => {
    x.link = 'https://element-plus.org/zh-CN/component/tour.html#tour-%E4%BA%8B%E4%BB%B6';
});
exports.default = {
    key: 'el-tour',
    attr,
    event
};
//# sourceMappingURL=el-tour.js.map