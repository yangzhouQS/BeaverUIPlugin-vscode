// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/backtop.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'target',
        describe: '触发滚动的对象',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/backtop#backtop-attributes'
    },
    {
        key: 'visibility-height',
        describe: '滚动高度达到此参数值才出现',
        type: 'number',
        default: '200',
        link: 'https://beaver-ui.yearrow.com/component/backtop#backtop-attributes'
    },
    {
        key: 'right',
        describe: '控制其显示位置，距离页面右边距',
        type: 'number',
        default: '40',
        link: 'https://beaver-ui.yearrow.com/component/backtop#backtop-attributes'
    },
    {
        key: 'bottom',
        describe: '控制其显示位置，距离页面底部距离',
        type: 'number',
        default: '40',
        link: 'https://beaver-ui.yearrow.com/component/backtop#backtop-attributes'
    }
];
const event: any[] = [
    {
        key: '@click',
        describe: '点击按钮触发的事件',
        link: 'https://beaver-ui.yearrow.com/component/backtop#backtop-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/backtop#backtop-slots'
    }
];

export default {
    key: 'b-backtop',
    attr,
    event,
    slot
};
