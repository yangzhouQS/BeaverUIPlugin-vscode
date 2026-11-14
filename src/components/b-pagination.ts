// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/pagination.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'size',
        describe: '分页大小',
        type: '\'large\' | \'default\' | \'small\'',
        default: '\'default\'',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'background',
        describe: '是否为分页按钮添加背景色',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'page-size',
        describe: '每页显示条目个数',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'default-page-size',
        describe: '每页默认的条目个数，不设置时默认为10',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'total',
        describe: '总条目数',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'page-count',
        describe: '总页数， total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'pager-count',
        describe: '设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠',
        type: '5 | 7 | 9 | 11 | 13 | 15 | 17 | 19 | 21',
        default: '7',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'current-page',
        describe: '当前页数',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'default-current-page',
        describe: '当前页数的默认初始值，不设置时默认为 1',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'layout',
        describe: '组件布局，子组件名用逗号分隔',
        type: 'string (consists of sizes, prev, pager, next, jumper, ->, total, slot)',
        default: 'prev, pager, next, jumper, ->, total',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'page-sizes',
        describe: '每页显示个数选择器的选项设置',
        type: 'number[]',
        default: '[10, 20, 30, 40, 50, 100]',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'append-size-to',
        describe: '下拉框挂载到哪个 DOM 元素',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'popper-class',
        describe: '每页显示个数选择器的下拉框类名',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'popper-style',
        describe: '每页显示个数选择器的下拉框样式',
        type: 'string / object',
        default: 'aaa',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'prev-text',
        describe: '替代图标显示的上一页文字',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'prev-icon',
        describe: '上一页的图标， 比 prev-text 优先级更高',
        type: 'string / Component',
        default: 'ArrowLeft',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'next-text',
        describe: '替代图标显示的下一页文字',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'next-icon',
        describe: '下一页的图标， 比 next-text 优先级更低',
        type: 'string / Component',
        default: 'ArrowRight',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用分页',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'teleported',
        describe: '是否将下拉菜单teleport至 body',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'hide-on-single-page',
        describe: '只有一页时是否隐藏',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    },
    {
        key: 'small',
        describe: '是否使用小型分页样式（自 deprecated 版本）【已废弃】',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-attributes'
    }
];
const event: any[] = [
    {
        key: '@size-change',
        describe: 'page-size 改变时触发',
        type: '(value: number) => void',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-events'
    },
    {
        key: '@current-change',
        describe: 'current-page 改变时触发',
        type: '(value: number) => void',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-events'
    },
    {
        key: '@change',
        describe: 'current-page 或 page-size 更改时触发',
        type: '(currentPage: number, pageSize: number) => void',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-events'
    },
    {
        key: '@prev-click',
        describe: '用户点击上一页按钮改变当前页时触发',
        type: '(value: number) => void',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-events'
    },
    {
        key: '@next-click',
        describe: '用户点击下一页按钮改变当前页时触发',
        type: '(value: number) => void',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义内容 设置文案，需要在 layout 中列出 slot',
        link: 'https://beaver-ui.yearrow.com/component/pagination#pagination-slots'
    }
];

export default {
    key: 'b-pagination',
    attr,
    event,
    slot
};
