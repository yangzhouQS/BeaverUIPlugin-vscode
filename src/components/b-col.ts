// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/layout.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'span',
        describe: '栅格占据的列数',
        type: 'number',
        default: '24',
        link: 'https://beaver-ui.yearrow.com/component/layout#col-attributes'
    },
    {
        key: 'offset',
        describe: '栅格左侧的间隔格数',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/layout#col-attributes'
    },
    {
        key: 'push',
        describe: '栅格向右移动格数',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/layout#col-attributes'
    },
    {
        key: 'pull',
        describe: '栅格向左移动格数',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/layout#col-attributes'
    },
    {
        key: 'xs',
        describe: '<768px 响应式栅格数或者栅格属性对象',
        type: 'number / {span?: number, offset?: number, pull?: number, push?: number}',
        link: 'https://beaver-ui.yearrow.com/component/layout#col-attributes'
    },
    {
        key: 'sm',
        describe: '≥768px 响应式栅格数或者栅格属性对象',
        type: 'number / {span?: number, offset?: number, pull?: number, push?: number}',
        link: 'https://beaver-ui.yearrow.com/component/layout#col-attributes'
    },
    {
        key: 'md',
        describe: '≥992px 响应式栅格数或者栅格属性对象',
        type: 'number / {span?: number, offset?: number, pull?: number, push?: number}',
        link: 'https://beaver-ui.yearrow.com/component/layout#col-attributes'
    },
    {
        key: 'lg',
        describe: '≥1200px 响应式栅格数或者栅格属性对象',
        type: 'number / {span?: number, offset?: number, pull?: number, push?: number}',
        link: 'https://beaver-ui.yearrow.com/component/layout#col-attributes'
    },
    {
        key: 'xl',
        describe: '≥1920px 响应式栅格数或者栅格属性对象',
        type: 'number / {span?: number, offset?: number, pull?: number, push?: number}',
        link: 'https://beaver-ui.yearrow.com/component/layout#col-attributes'
    },
    {
        key: 'tag',
        describe: '自定义元素标签',
        type: 'string',
        default: 'div',
        link: 'https://beaver-ui.yearrow.com/component/layout#col-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/layout#col-slots'
    }
];

export default {
    key: 'b-col',
    attr,
    event,
    slot
};
