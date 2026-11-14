// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/cascader.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '选中项绑定值',
        type: 'string/number/string[] | number[] | any',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    },
    {
        key: 'options',
        describe: '选项的数据源， value 和 label 可以通过 CascaderProps 自定义.',
        type: 'CascaderOption[]',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    },
    {
        key: 'props',
        describe: '配置选项, 请参阅下面 CascaderProps 表。',
        type: 'CascaderProps',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    },
    {
        key: 'virtual-scroll',
        describe: '是否为大数据启用虚拟滚动（自 2.14.0 版本）',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    },
    {
        key: 'item-size',
        describe: '虚拟滚动的节点高度 (px)（自 2.14.0 版本）',
        type: 'number',
        default: '34',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    },
    {
        key: 'height',
        describe: '虚拟滚动的菜单高度 (px)（自 2.14.0 版本）',
        type: 'number',
        default: '204',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    },
    {
        key: 'expandTrigger',
        describe: '次级菜单的展开方式',
        type: '\'click\' | \'hover\'',
        default: 'click',
        values: [
            'click',
            'hover'
        ],
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    },
    {
        key: 'multiple',
        describe: '是否多选',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    },
    {
        key: 'checkStrictly',
        describe: '是否严格的遵守父子节点不互相关联',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    },
    {
        key: 'emitPath',
        describe: '在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    },
    {
        key: 'lazy',
        describe: '是否动态加载子节点，需与 lazyLoad 方法结合使用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    },
    {
        key: 'lazyLoad',
        describe: '加载动态数据的方法，仅在 lazy 为 true 时有效 reject 参数在 版本及以上支持。',
        type: '(node: Node, resolve: Resolve, reject: () => void) => void',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    },
    {
        key: 'value',
        describe: '指定选项的值为选项对象的某个属性值',
        type: 'string',
        default: 'value',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    },
    {
        key: 'label',
        describe: '指定选项标签为选项对象的某个属性值',
        type: 'string',
        default: 'label',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    },
    {
        key: 'children',
        describe: '指定选项的子选项为选项对象的某个属性值',
        type: 'string',
        default: 'children',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    },
    {
        key: 'disabled',
        describe: '指定选项的禁用为选项对象的某个属性值',
        type: 'string',
        default: 'disabled',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    },
    {
        key: 'leaf',
        describe: '指定选项的叶子节点的标志位为选项对象的某个属性值',
        type: 'string',
        default: 'leaf',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    },
    {
        key: 'hoverThreshold',
        describe: 'hover 时展开菜单的灵敏度阈值',
        type: 'number',
        default: '500',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    },
    {
        key: 'checkOnClickNode',
        describe: '点击节点时是否选中或取消选中该节点',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    },
    {
        key: 'checkOnClickLeaf',
        describe: '点击叶子节点（最后一级子节点）时，是否选中或取消选中该节点',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    },
    {
        key: 'showPrefix',
        describe: '是否显示单选框或复选框的前缀（图标）',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: '当选中节点变化时触发',
        type: '(value: CascaderValue | undefined) => void',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-events'
    },
    {
        key: '@update:modelValue',
        describe: '当绑定值变化时触发的事件',
        type: '(value: CascaderValue | undefined) => void',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-events'
    },
    {
        key: '@expand-change',
        describe: '当展开节点发生变化时触发',
        type: '(value: CascaderNodePathValue) => void',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-events'
    },
    {
        key: '@close',
        describe: '面板的关闭事件，提供给 Cascader 以便做更好的判断。',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '下级节点的自定义内容，它们分别是当前节点对象和节点数据。',
        type: '{ node: any, data: any }',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-slots'
    },
    {
        key: 'empty',
        describe: '没有数据时面板的内容。',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/cascader#cascaderpanel-slots'
    }
];

export default {
    key: 'b-cascader-panel',
    attr,
    event,
    slot
};
