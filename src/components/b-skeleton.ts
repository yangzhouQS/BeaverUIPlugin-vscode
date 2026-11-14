// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/skeleton.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'animated',
        describe: '是否使用动画',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/skeleton#skeleton-attributes'
    },
    {
        key: 'count',
        describe: '渲染多少个 template, 建议使用尽可能小的数字',
        type: 'number',
        default: '1',
        link: 'https://beaver-ui.yearrow.com/component/skeleton#skeleton-attributes'
    },
    {
        key: 'loading',
        describe: '是否显示加载结束后的 DOM 结构',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/skeleton#skeleton-attributes'
    },
    {
        key: 'rows',
        describe: '骨架屏段落数量',
        type: 'number',
        default: '3',
        link: 'https://beaver-ui.yearrow.com/component/skeleton#skeleton-attributes'
    },
    {
        key: 'throttle',
        describe: '渲染延迟（以毫秒为单位） 数字代表延迟显示, 也可以设置为延迟隐藏, 例如 { leading: 500, trailing: 500 } 当需要控制初始加载值时，您可以设置 { initVal: true }',
        type: 'number / { leading?: number, trailing?: number, initVal?: boolean }',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/skeleton#skeleton-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '真正渲染的DOM',
        link: 'https://beaver-ui.yearrow.com/component/skeleton#skeleton-slots'
    },
    {
        key: 'template',
        describe: '渲染 skeleton 模板的内容',
        link: 'https://beaver-ui.yearrow.com/component/skeleton#skeleton-slots'
    }
];

export default {
    key: 'b-skeleton',
    attr,
    event,
    slot
};
