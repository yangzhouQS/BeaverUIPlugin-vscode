// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/tabs.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'label',
        describe: '选项卡标题',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tab-pane-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tab-pane-attributes'
    },
    {
        key: 'name',
        describe: '与选项卡绑定值 value 对应的标识符，表示选项卡别名。默认值是tab面板的序列号，如第一个 tab 是 0',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tab-pane-attributes'
    },
    {
        key: 'closable',
        describe: '标签是否可关闭',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tab-pane-attributes'
    },
    {
        key: 'lazy',
        describe: '标签是否延迟渲染',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tab-pane-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: 'Tab-pane 的内容',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tab-pane-slots'
    },
    {
        key: 'label',
        describe: 'Tab-pane 的标题内容',
        link: 'https://beaver-ui.yearrow.com/component/tabs#tab-pane-slots'
    }
];

export default {
    key: 'b-tab-pane',
    attr,
    event,
    slot
};
