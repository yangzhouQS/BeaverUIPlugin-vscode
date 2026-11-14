// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/checkbox.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'string / number / boolean',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-attributes'
    },
    {
        key: 'value',
        describe: '选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）',
        type: 'string / number / boolean / object',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-attributes'
    },
    {
        key: 'label',
        describe: '选中状态的值，只有在绑定对象类型为 array 时有效。 如果没有 value， label则作为value使用',
        type: 'string / number / boolean / object',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-attributes'
    },
    {
        key: 'true-value',
        describe: '选中时的值',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-attributes'
    },
    {
        key: 'false-value',
        describe: '没有选中时的值',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-attributes'
    },
    {
        key: 'border',
        describe: '是否显示边框',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-attributes'
    },
    {
        key: 'size',
        describe: 'Checkbox 的尺寸',
        type: '\'large\' | \'default\' | \'small\'',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-attributes'
    },
    {
        key: 'name',
        describe: '原生 name 属性',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-attributes'
    },
    {
        key: 'checked',
        describe: '当前是否勾选',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-attributes'
    },
    {
        key: 'indeterminate',
        describe: '设置不确定状态，仅负责样式控制',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-attributes'
    },
    {
        key: 'validate-event',
        describe: '输入时是否触发表单的校验',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-attributes'
    },
    {
        key: 'tabindex',
        describe: '输入框的 tabindex',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-attributes'
    },
    {
        key: 'id',
        describe: 'input id',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-attributes'
    },
    {
        key: 'aria-controls',
        describe: '与 aria-control一致, 当 indeterminate为 true时生效（自 a11y 版本）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-attributes'
    },
    {
        key: 'aria-label',
        describe: '原生 aria-label属性（自 a11y 版本）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-attributes'
    },
    {
        key: 'true-label',
        describe: '选中时的值（自 deprecated 版本）【已废弃】',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-attributes'
    },
    {
        key: 'false-label',
        describe: '没有选中时的值（自 deprecated 版本）【已废弃】',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-attributes'
    },
    {
        key: 'controls ^(a11y)',
        describe: '和 aria-control一致。当 indeterminate 为 true 时生效（自 deprecated 版本）【已废弃】',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '当绑定值变化时触发的事件',
        type: '(value: string | number | boolean) => void',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/checkbox#checkbox-slots'
    }
];

export default {
    key: 'b-checkbox',
    attr,
    event,
    slot
};
