// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/tree-v2.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'data',
        describe: '展示数据',
        type: 'Array<{[key: string]: any}>',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'empty-text',
        describe: '内容为空的时候展示的文本',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'props',
        describe: '配置选项，具体看下表',
        type: 'object',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'highlight-current',
        describe: '是否高亮当前选中节点',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'expand-on-click-node',
        describe: '是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'check-on-click-node',
        describe: '是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'check-on-click-leaf',
        describe: '点击叶节点(最后一个子节点)时是否检查或取消节点',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'default-expanded-keys',
        describe: '默认展开的节点的 key 的数组',
        type: 'Array<string | number>',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'show-checkbox',
        describe: '节点是否可被选择',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'check-strictly',
        describe: '在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'default-checked-keys',
        describe: '默认勾选的节点的 key 的数组',
        type: 'Array<string | number>',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'current-node-key',
        describe: '当前选中的节点',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'filter-method',
        describe: '对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示， 返回 false 则表示这个节点会被隐藏',
        type: '(query: string, data: TreeNodeData, node: TreeNode) => boolean',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'indent',
        describe: '相邻级节点间的水平缩进，单位为像素',
        type: 'number',
        default: '16',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'icon',
        describe: '自定义树节点图标组件',
        type: 'string / Component',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'item-size',
        describe: '自定义树节点的高度',
        type: 'number',
        default: '26',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'scrollbar-always-on',
        describe: '总是显示滚动条',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'height',
        describe: 'tree 的高度',
        type: 'number',
        default: '200',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'value',
        describe: '每个树节点用来作为唯一标识的属性，在整棵树中应该是唯一的',
        type: 'string',
        default: 'id',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'label',
        describe: '指定节点标签为节点对象的某个属性值',
        type: 'string',
        default: 'label',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'children',
        describe: '指定子树为节点对象的某个属性值',
        type: 'string',
        default: 'children',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'disabled',
        describe: '指定节点选择框是否禁用为节点对象的某个属性值',
        type: 'string',
        default: 'disabled',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    },
    {
        key: 'class',
        describe: '自定义节点类名',
        type: 'string / (data: TreeNodeData, node: TreeNode) => string | {[key: string]: boolean}',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-attributes'
    }
];
const event: any[] = [
    {
        key: '@node-click',
        describe: '当节点被点击的时候触发',
        type: '(data: TreeNodeData, node: TreeNode, e: MouseEvent)',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-events'
    },
    {
        key: '@node-drop',
        describe: '拖放到节点时触发器',
        type: '(data: TreeNodeData, node: TreeNode, e: DragEvent)',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-events'
    },
    {
        key: '@node-contextmenu',
        describe: '当某一节点被鼠标右键点击时会触发该事件',
        type: '(e: Event, data: TreeNodeData, node: TreeNode)',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-events'
    },
    {
        key: '@check-change',
        describe: '当复选框被点击的时候触发',
        type: '(data: TreeNodeData, checked: boolean)',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-events'
    },
    {
        key: '@check',
        describe: '点击节点复选框之后触发',
        type: '(data: TreeNodeData, info: { checkedKeys: TreeKey[],checkedNodes: TreeData, halfCheckedKeys: TreeKey[], halfCheckedNodes: TreeData,})',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-events'
    },
    {
        key: '@current-change',
        describe: '当前选中节点变化时触发的事件',
        type: '(data: TreeNodeData, node: TreeNode)',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-events'
    },
    {
        key: '@node-expand',
        describe: '节点被展开时触发的事件',
        type: '(data: TreeNodeData, node: TreeNode)',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-events'
    },
    {
        key: '@node-collapse',
        describe: '节点被关闭时触发的事件',
        type: '(data: TreeNodeData, node: TreeNode)',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义树节点的内容。',
        type: '{ node: TreeNode, data: TreeNodeData }',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-slots'
    },
    {
        key: 'empty',
        describe: '当数据为空时自定义的内容',
        type: '—',
        link: 'https://beaver-ui.yearrow.com/component/tree-v2#treev2-slots'
    }
];

export default {
    key: 'b-tree-v2',
    attr,
    event,
    slot
};
