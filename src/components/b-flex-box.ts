// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/flex-box.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'is-row',
        describe: '横向排列',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/flex-box#flexbox-attributes'
    },
    {
        key: 'item-num',
        describe: '分区数量',
        type: 'number',
        default: '1',
        link: 'https://beaver-ui.yearrow.com/component/flex-box#flexbox-attributes'
    },
    {
        key: 'item-config',
        describe: '分区配置，按顺序对应各分区（子项详见下方）',
        type: 'FlexBoxItemConfig[]',
        link: 'https://beaver-ui.yearrow.com/component/flex-box#flexbox-attributes'
    },
    {
        key: 'width',
        describe: '容器宽度',
        type: 'string',
        default: '100%',
        link: 'https://beaver-ui.yearrow.com/component/flex-box#flexbox-attributes'
    },
    {
        key: 'height',
        describe: '容器高度',
        type: 'string',
        default: '100%',
        link: 'https://beaver-ui.yearrow.com/component/flex-box#flexbox-attributes'
    }
];
const event: any[] = [
    {
        key: '@resize',
        describe: '拖拽调宽/高结束时触发（可用于持久化用户调整）',
        link: 'https://beaver-ui.yearrow.com/component/flex-box#flexbox-events'
    },
    {
        key: '@fold',
        describe: '点击折叠按钮切换后触发',
        link: 'https://beaver-ui.yearrow.com/component/flex-box#flexbox-events'
    }
];
const slot: any[] = [
    {
        key: 'item-N',
        describe: '分区内容，插槽名与分区 tag 一致',
        link: 'https://beaver-ui.yearrow.com/component/flex-box#flexbox-slots'
    }
];

export default {
    key: 'b-flex-box',
    attr,
    event,
    slot
};
