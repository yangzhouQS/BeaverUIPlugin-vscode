// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/color-picker-panel.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '绑定值',
        link: 'https://beaver-ui.yearrow.com/component/color-picker-panel#colorpickerpanel-attributes'
    },
    {
        key: 'border',
        describe: '颜色选择器面板是否有边框',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/color-picker-panel#colorpickerpanel-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/color-picker-panel#colorpickerpanel-attributes'
    },
    {
        key: 'show-alpha',
        describe: '是否显示 alpha 滑块',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/color-picker-panel#colorpickerpanel-attributes'
    },
    {
        key: 'color-format',
        describe: '写入 v-model 的颜色的格式',
        default: '^[enum]\'hex\' (when show-alpha is false) \\| \'rgb\' (when show-alpha is true)',
        link: 'https://beaver-ui.yearrow.com/component/color-picker-panel#colorpickerpanel-attributes'
    },
    {
        key: 'predefine',
        describe: '预定义颜色',
        link: 'https://beaver-ui.yearrow.com/component/color-picker-panel#colorpickerpanel-attributes'
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/color-picker-panel#colorpickerpanel-attributes'
    },
    {
        key: 'hue-slider-class',
        describe: '类名将会传递给 hue-slider（自 2.13.6 版本）',
        default: ':::',
        link: 'https://beaver-ui.yearrow.com/component/color-picker-panel#colorpickerpanel-attributes'
    },
    {
        key: 'hue-slider-style',
        describe: '样式将会传递给 hue-slider（自 2.13.6 版本）',
        default: ':::',
        link: 'https://beaver-ui.yearrow.com/component/color-picker-panel#colorpickerpanel-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'footer',
        describe: '输入框之后要附加的内容',
        link: 'https://beaver-ui.yearrow.com/component/color-picker-panel#colorpickerpanel-slots'
    }
];

export default {
    key: 'b-color-picker-panel',
    attr,
    event,
    slot
};
