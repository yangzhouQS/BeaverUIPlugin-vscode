// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/anchor.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'title',
        describe: '链接的文本内容',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/anchor#anchorlink-attributes'
    },
    {
        key: 'href',
        describe: '链接的地址。',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/anchor#anchorlink-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '链接的内容',
        link: 'https://beaver-ui.yearrow.com/component/anchor#anchorlink-slots'
    },
    {
        key: 'sub-link',
        describe: '子链接的槽位',
        link: 'https://beaver-ui.yearrow.com/component/anchor#anchorlink-slots'
    }
];

export default {
    key: 'b-anchor-link',
    attr,
    event,
    slot
};
