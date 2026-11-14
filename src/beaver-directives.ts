// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集（loading / auto-tip / highlight-query 页）+ v-infinite-scroll 手工条目
// 重新生成：node scripts/generate-data.mjs

export const directives = [
    {
        "key": "target",
        "describe": "Loading 需要覆盖的 DOM 节点。 可传入一个 DOM 对象或字符串； 若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点",
        "type": "string / HTMLElement",
        "default": "document.body",
        "link": "https://beaver-ui.yearrow.com/component/loading"
    },
    {
        "key": "body",
        "describe": "同 v-loading 指令中的 body 修饰符",
        "type": "boolean",
        "default": "false",
        "link": "https://beaver-ui.yearrow.com/component/loading"
    },
    {
        "key": "fullscreen",
        "describe": "同 v-loading 指令中的 fullscreen 修饰符",
        "type": "boolean",
        "default": "true",
        "link": "https://beaver-ui.yearrow.com/component/loading"
    },
    {
        "key": "lock",
        "describe": "同 v-loading 指令中的 lock 修饰符",
        "type": "boolean",
        "default": "false",
        "link": "https://beaver-ui.yearrow.com/component/loading"
    },
    {
        "key": "text",
        "describe": "显示在加载图标下方的加载文案",
        "type": "string / VNode / VNode[]",
        "link": "https://beaver-ui.yearrow.com/component/loading"
    },
    {
        "key": "spinner",
        "describe": "自定义加载图标类名",
        "type": "string",
        "link": "https://beaver-ui.yearrow.com/component/loading"
    },
    {
        "key": "background",
        "describe": "遮罩背景色",
        "type": "string",
        "link": "https://beaver-ui.yearrow.com/component/loading"
    },
    {
        "key": "customClass",
        "describe": "Loading 的自定义类名",
        "type": "string",
        "link": "https://beaver-ui.yearrow.com/component/loading"
    },
    {
        "key": "svg",
        "describe": "自定义 SVG 元素覆盖默认加载器",
        "type": "string",
        "link": "https://beaver-ui.yearrow.com/component/loading"
    },
    {
        "key": "svgViewBox",
        "describe": "设置用于加载 svg 元素的 viewBox 属性",
        "type": "string",
        "link": "https://beaver-ui.yearrow.com/component/loading"
    },
    {
        "key": "beforeClose",
        "describe": "Loading 关闭之前执行的函数。 如果此函数返回 false ，关闭过程将被中止。 反之，loading 将被关闭。",
        "type": "() => boolean",
        "link": "https://beaver-ui.yearrow.com/component/loading"
    },
    {
        "key": "closed",
        "describe": "Loading 完全关闭后触发的函数",
        "type": "() => void",
        "link": "https://beaver-ui.yearrow.com/component/loading"
    },
    {
        "key": "v-loading",
        "describe": "是否显示动画",
        "type": "boolean / LoadingOptions",
        "link": "https://beaver-ui.yearrow.com/component/loading"
    },
    {
        "key": "element-loading-text",
        "describe": "显示在加载图标下方的加载文案",
        "type": "string",
        "link": "https://beaver-ui.yearrow.com/component/loading"
    },
    {
        "key": "element-loading-spinner",
        "describe": "自定义加载图标",
        "type": "string",
        "link": "https://beaver-ui.yearrow.com/component/loading"
    },
    {
        "key": "element-loading-svg",
        "describe": "自定义加载图标 (与 element-loading-spinner 相同)",
        "type": "string",
        "link": "https://beaver-ui.yearrow.com/component/loading"
    },
    {
        "key": "element-loading-svg-view-box",
        "describe": "设置用于加载 svg 元素的 viewBox 属性",
        "type": "string",
        "link": "https://beaver-ui.yearrow.com/component/loading"
    },
    {
        "key": "element-loading-background",
        "describe": "背景遮罩的颜色",
        "type": "string",
        "link": "https://beaver-ui.yearrow.com/component/loading"
    },
    {
        "key": "element-loading-custom-class",
        "describe": "loading 的自定义类名",
        "type": "string",
        "link": "https://beaver-ui.yearrow.com/component/loading"
    },
    {
        "key": "v-auto-tip",
        "describe": "启用溢出提示，传入 false 禁用",
        "type": "boolean",
        "link": "https://beaver-ui.yearrow.com/component/auto-tip"
    },
    {
        "key": "always",
        "describe": "文字未超长时是否也显示提示",
        "type": "boolean",
        "default": "false",
        "link": "https://beaver-ui.yearrow.com/component/auto-tip"
    },
    {
        "key": "content",
        "describe": "自定义提示内容，支持字符串或 VNode，未设置时取元素文本",
        "type": "string / VNode / ^[VNode[]]",
        "link": "https://beaver-ui.yearrow.com/component/auto-tip"
    },
    {
        "key": "effect",
        "describe": "提示主题",
        "type": "'dark' | 'light'",
        "default": "dark",
        "values": [
            "dark",
            "light"
        ],
        "link": "https://beaver-ui.yearrow.com/component/auto-tip"
    },
    {
        "key": "placement",
        "describe": "弹出位置，同 Tooltip",
        "type": "'top' | 'top-start' | 'bottom' | ...",
        "default": "top",
        "values": [
            "top",
            "top-start",
            "bottom"
        ],
        "link": "https://beaver-ui.yearrow.com/component/auto-tip"
    },
    {
        "key": "popperClass",
        "describe": "弹出层自定义类名，指令固定追加 b-auto-tip 标记类",
        "type": "string",
        "link": "https://beaver-ui.yearrow.com/component/auto-tip"
    },
    {
        "key": "v-highlight-query",
        "describe": "关键词字符串或配置对象，空串/空白表示禁用",
        "type": "string / HighlightQueryOptions",
        "link": "https://beaver-ui.yearrow.com/component/highlight-query"
    },
    {
        "key": "query",
        "describe": "检索关键词",
        "type": "string",
        "link": "https://beaver-ui.yearrow.com/component/highlight-query"
    },
    {
        "key": "className",
        "describe": "高亮节点类名",
        "type": "string",
        "default": "b-hl-query-node",
        "link": "https://beaver-ui.yearrow.com/component/highlight-query"
    },
    {
        "key": "caseSensitive",
        "describe": "是否区分大小写",
        "type": "boolean",
        "default": "false",
        "link": "https://beaver-ui.yearrow.com/component/highlight-query"
    },
    {
        "key": "v-infinite-scroll",
        "describe": "Infinite Scroll 无限滚动指令，滚动至底部时加载更多数据",
        "type": "function"
    },
    {
        "key": "infinite-scroll-disabled",
        "describe": "是否禁用无限滚动",
        "type": "boolean",
        "default": "false"
    },
    {
        "key": "infinite-scroll-delay",
        "describe": "节流延迟（毫秒）",
        "type": "number",
        "default": "200"
    },
    {
        "key": "infinite-scroll-distance",
        "describe": "触发加载的距离阈值（像素）",
        "type": "number",
        "default": "0"
    },
    {
        "key": "infinite-scroll-immediate",
        "describe": "是否立即执行加载方法，以防初始状态下内容撑不满容器",
        "type": "boolean",
        "default": "true"
    }
];
