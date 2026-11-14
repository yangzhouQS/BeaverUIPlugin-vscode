// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/divider.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '受控折叠状态，true 表示折叠；不传时进入非受控模式',
        type: 'boolean',
        link: 'https://beaver-ui.yearrow.com/component/divider#divider-attributes'
    },
    {
        key: 'foldable',
        describe: '开启折叠能力；不开启时组件为纯展示分割线，行为与基础用法完全一致',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/divider#divider-attributes'
    },
    {
        key: 'title',
        describe: '内容区标题文本，default 插槽优先',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/divider#divider-attributes'
    },
    {
        key: 'default-expand',
        describe: '非受控模式的初始展开状态',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/divider#divider-attributes'
    },
    {
        key: 'direction',
        describe: '设置分割线方向',
        type: '\'horizontal\' | \'vertical\'',
        default: 'horizontal',
        values: [
            'horizontal',
            'vertical'
        ],
        link: 'https://beaver-ui.yearrow.com/component/divider#divider-attributes'
    },
    {
        key: 'border-style',
        describe: '设置分隔符样式',
        type: '\'none\' | \'solid\' | \'hidden\' | \'dashed\' | ... css/border-style',
        default: 'solid',
        values: [
            'none',
            'solid',
            'hidden',
            'dashed'
        ],
        link: 'https://beaver-ui.yearrow.com/component/divider#divider-attributes'
    },
    {
        key: 'content-position',
        describe: '自定义分隔线内容的位置',
        type: '\'left\' | \'right\' | \'center\'',
        default: 'center',
        values: [
            'left',
            'right',
            'center'
        ],
        link: 'https://beaver-ui.yearrow.com/component/divider#divider-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '折叠状态变化时触发（受控 / 非受控均触发）',
        link: 'https://beaver-ui.yearrow.com/component/divider#divider-events'
    },
    {
        key: '@update:modelValue',
        describe: 'v-model 值变化时触发',
        link: 'https://beaver-ui.yearrow.com/component/divider#divider-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '分割线内容；开启折叠后内容区整体为切换热区',
        link: 'https://beaver-ui.yearrow.com/component/divider#divider-slots'
    }
];

export default {
    key: 'b-divider',
    attr,
    event,
    slot
};
