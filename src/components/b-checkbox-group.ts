// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/checkbox.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '绑定值',
        type: 'string[] | number[]',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxgroup-attributes'
    },
    {
        key: 'size',
        describe: '多选框组尺寸',
        type: '\'large\' | \'default\' | \'small\'',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxgroup-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxgroup-attributes'
    },
    {
        key: 'min',
        describe: '可被勾选的 checkbox 的最小数量',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxgroup-attributes'
    },
    {
        key: 'max',
        describe: '可被勾选的 checkbox 的最大数量',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxgroup-attributes'
    },
    {
        key: 'aria-label',
        describe: '原生 aria-label属性（自 a11y 版本）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxgroup-attributes'
    },
    {
        key: 'text-color',
        describe: '当按钮为活跃状态时的字体颜色',
        type: 'string',
        default: '#ffffff',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxgroup-attributes'
    },
    {
        key: 'fill',
        describe: '当按钮为活跃状态时的边框和背景颜色',
        type: 'string',
        default: '#409eff',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxgroup-attributes'
    },
    {
        key: 'tag',
        describe: '复选框组元素标签',
        type: 'string',
        default: 'div',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxgroup-attributes'
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxgroup-attributes'
    },
    {
        key: 'label ^(a11y)',
        describe: '原生 aria-label属性（自 deprecated 版本）【已废弃】',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxgroup-attributes'
    },
    {
        key: 'options',
        describe: '选项的数据源， value 的 key 和 label 和 disabled可以通过 props自定义.',
        type: 'Array<{[key: string]: any}>',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxgroup-attributes'
    },
    {
        key: 'props',
        describe: 'options 的配置',
        type: '{ value?: string, label?: string, disabled?: string}',
        default: '{value: \'value\', label: \'label\', disabled: \'disabled\'}',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxgroup-attributes'
    },
    {
        key: 'type',
        describe: '用于渲染选项的组件类型（例如 \'button\'）',
        type: '\'checkbox\' | \'button\'',
        default: '\'checkbox\'',
        values: [
            'checkbox',
            'button'
        ],
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxgroup-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '当绑定值变化时触发的事件',
        type: '(value: string[] | number[]) => void',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxgroup-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkboxgroup-slots'
    }
];

export default {
    key: 'b-checkbox-group',
    attr,
    event,
    slot
};
