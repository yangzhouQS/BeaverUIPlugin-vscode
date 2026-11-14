// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/anchor.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'container',
        describe: '滚动的容器',
        type: 'string \\| HTMLElement \\| Window',
        link: 'https://beaver-ui.yearrow.com/component/anchor#anchor-attributes'
    },
    {
        key: 'offset',
        describe: '设置锚点滚动的偏移量',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/anchor#anchor-attributes'
    },
    {
        key: 'bound',
        describe: '触发锚点的元素的位置偏移量',
        type: 'number',
        default: '15',
        link: 'https://beaver-ui.yearrow.com/component/anchor#anchor-attributes'
    },
    {
        key: 'duration',
        describe: '设置容器滚动持续时间，单位为毫秒',
        type: 'number',
        default: '300',
        link: 'https://beaver-ui.yearrow.com/component/anchor#anchor-attributes'
    },
    {
        key: 'marker',
        describe: '是否显示标记',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/anchor#anchor-attributes'
    },
    {
        key: 'type',
        describe: '设置锚点类型',
        type: '\'default\' | \'underline\'',
        default: 'default',
        values: [
            'default',
            'underline'
        ],
        link: 'https://beaver-ui.yearrow.com/component/anchor#anchor-attributes'
    },
    {
        key: 'direction',
        describe: '设置锚点方向',
        type: '\'vertical\' | \'horizontal\'',
        default: 'vertical',
        values: [
            'vertical',
            'horizontal'
        ],
        link: 'https://beaver-ui.yearrow.com/component/anchor#anchor-attributes'
    },
    {
        key: 'select-scroll-top',
        describe: '滚动时，链接是否选中位于顶部',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/anchor#anchor-attributes'
    }
];
const event: any[] = [
    {
        key: '@change',
        describe: 'step 改变时的回调',
        type: '(href: string) => void',
        link: 'https://beaver-ui.yearrow.com/component/anchor#anchor-events'
    },
    {
        key: '@click',
        describe: '当用户点击链接时触发',
        type: '(e: MouseEvent, href?: string) => void',
        link: 'https://beaver-ui.yearrow.com/component/anchor#anchor-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: 'AnchorLink 组件列表',
        link: 'https://beaver-ui.yearrow.com/component/anchor#anchor-slots'
    }
];

export default {
    key: 'b-anchor',
    attr,
    event,
    slot
};
