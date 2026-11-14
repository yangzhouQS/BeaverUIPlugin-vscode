// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/scrollbar.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'height',
        describe: '滚动条高度',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/scrollbar#scrollbar-attributes'
    },
    {
        key: 'max-height',
        describe: '滚动条最大高度',
        type: 'string / number',
        link: 'https://beaver-ui.yearrow.com/component/scrollbar#scrollbar-attributes'
    },
    {
        key: 'native',
        describe: '是否使用原生滚动条样式',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/scrollbar#scrollbar-attributes'
    },
    {
        key: 'wrap-style',
        describe: '包裹容器的自定义样式',
        type: 'string / CSSSProperties | CSSSProperties[] | string[]',
        link: 'https://beaver-ui.yearrow.com/component/scrollbar#scrollbar-attributes'
    },
    {
        key: 'wrap-class',
        describe: '包裹容器的自定义类名',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/scrollbar#scrollbar-attributes'
    },
    {
        key: 'view-style',
        describe: '视图的自定义样式',
        type: 'string / CSSSProperties | CSSSProperties[] | string[]',
        link: 'https://beaver-ui.yearrow.com/component/scrollbar#scrollbar-attributes'
    },
    {
        key: 'view-class',
        describe: '视图的自定义类名',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/scrollbar#scrollbar-attributes'
    },
    {
        key: 'noresize',
        describe: '不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/scrollbar#scrollbar-attributes'
    },
    {
        key: 'tag',
        describe: '视图的元素标签',
        type: 'string',
        default: 'div',
        link: 'https://beaver-ui.yearrow.com/component/scrollbar#scrollbar-attributes'
    },
    {
        key: 'always',
        describe: '滚动条总是显示',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/scrollbar#scrollbar-attributes'
    },
    {
        key: 'min-size',
        describe: '滚动条最小尺寸',
        type: 'number',
        default: '20',
        link: 'https://beaver-ui.yearrow.com/component/scrollbar#scrollbar-attributes'
    },
    {
        key: 'id',
        describe: '视图ID',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/scrollbar#scrollbar-attributes'
    },
    {
        key: 'role',
        describe: '视图的角色（自 a11y 版本）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/scrollbar#scrollbar-attributes'
    },
    {
        key: 'aria-label',
        describe: '视图的 aria-label（自 a11y 版本）',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/scrollbar#scrollbar-attributes'
    },
    {
        key: 'aria-orientation',
        describe: '视图的 aria-orientation（自 a11y 版本）',
        type: '\'horizontal\' | \'vertical\'',
        values: [
            'horizontal',
            'vertical'
        ],
        link: 'https://beaver-ui.yearrow.com/component/scrollbar#scrollbar-attributes'
    },
    {
        key: 'tabindex',
        describe: '容器的tabindex',
        type: 'number / string',
        link: 'https://beaver-ui.yearrow.com/component/scrollbar#scrollbar-attributes'
    },
    {
        key: 'distance',
        describe: '触发到达底部事件的距离（像素）',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/scrollbar#scrollbar-attributes'
    }
];
const event: any[] = [
    {
        key: '@scroll',
        describe: '当触发滚动事件时，返回滚动的距离',
        type: '({ scrollLeft: number, scrollTop: number }) => void',
        link: 'https://beaver-ui.yearrow.com/component/scrollbar#scrollbar-events'
    },
    {
        key: '@end-reached',
        describe: '触发滚动结束时的触发器',
        type: '(direction: \'top\' | \'bottom\' | \'left\' | \'right\') => void',
        link: 'https://beaver-ui.yearrow.com/component/scrollbar#scrollbar-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        link: 'https://beaver-ui.yearrow.com/component/scrollbar#scrollbar-slots'
    }
];

export default {
    key: 'b-scrollbar',
    attr,
    event,
    slot
};
