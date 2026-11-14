// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/switch.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '绑定值，必须等于 active-value 或 inactive-value，默认为 Boolean 类型',
        type: 'boolean / string / number',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'loading',
        describe: '是否显示加载中',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'size',
        describe: 'switch 的大小',
        type: '\'\' | \'large\' | \'default\' | \'small\'',
        default: '\'\'',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'width',
        describe: 'switch 的宽度',
        type: 'number / string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'inline-prompt',
        describe: '无论图标或文本是否显示在点内，只会呈现文本的第一个字符',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'active-icon',
        describe: 'switch 状态为 on 时所显示图标，设置此项会忽略 active-text',
        type: 'string / Component',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'inactive-icon',
        describe: 'switch 状态为 off 时所显示图标，设置此项会忽略 inactive-text',
        type: 'string / Component',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'active-action-icon',
        describe: 'on 状态下显示的图标组件',
        type: 'string / Component',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'inactive-action-icon',
        describe: 'off 状态下显示的图标组件',
        type: 'string / Component',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'active-text',
        describe: 'switch 打开时的文字描述',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'inactive-text',
        describe: 'switch 的状态为 off 时的文字描述',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'active-value',
        describe: 'switch 状态为 on 时的值',
        type: 'boolean / string / number',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'inactive-value',
        describe: 'switch的状态为 off 时的值',
        type: 'boolean / string / number',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'name',
        describe: 'switch 对应的 name 属性',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'validate-event',
        describe: '是否触发表单验证',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'before-change',
        describe: 'switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换',
        type: '() => Promise<boolean> | boolean',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'id',
        describe: 'input 的 id',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'tabindex',
        describe: 'input 的 tabindex',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'aria-label',
        describe: '等价于原生 input aria-label 属性（自 a11y 版本）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'active-color',
        describe: '当在 on 状态时的背景颜色(推荐使用 CSS var --b-switch-on-color )（自 deprecated 版本）【已废弃】',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'inactive-color',
        describe: 'off 状态时的背景颜色(推荐使用 CSS var --b-switch-off-color )（自 deprecated 版本）【已废弃】',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'border-color',
        describe: '开关的边框颜色 ( 推荐使用 CSS var --b-switch-border-color )（自 deprecated 版本）【已废弃】',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    },
    {
        key: 'label ^(a11y)',
        describe: '等价于原生 input aria-label 属性（自 deprecated 版本）【已废弃】',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: 'switch 状态发生变化时的回调函数',
        type: '(val: boolean | string | number) => void',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-events'
    }
];
const slot: any[] = [
    {
        key: 'active-action',
        describe: '自定义 active 行为',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-slots'
    },
    {
        key: 'inactive-action',
        describe: '自定义 inactive 行为',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-slots'
    },
    {
        key: 'active',
        describe: '自定义 on 状态的内容（自 2.13.0 版本）',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-slots'
    },
    {
        key: 'inactive',
        describe: '自定义 off 状态的内容（自 2.13.0 版本）',
        link: 'https://beaver-ui.yearrow.com/component/switch#switch-slots'
    }
];

export default {
    key: 'b-switch',
    attr,
    event,
    slot
};
