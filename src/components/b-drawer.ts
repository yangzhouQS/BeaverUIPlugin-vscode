// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/drawer.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '是否显示 Drawer',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'append-to-body',
        describe: 'Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'append-to',
        describe: '挂载到哪个 DOM 元素 将覆盖 append-to-body',
        type: 'CSSSelector / HTMLElement',
        default: 'body',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'lock-scroll',
        describe: '是否在 Drawer 出现时将 body 滚动锁定',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'before-close',
        describe: '关闭前的回调，会暂停 Drawer 的关闭',
        type: '(done: (cancel?: boolean) => void) => void(done 是个 function type 接受一个 boolean 参数, 执行 done 使用 true 参数或不提供参数将会终止关闭)',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'close-on-click-modal',
        describe: '是否可以通过点击 modal 关闭 Drawer',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'close-on-press-escape',
        describe: '是否可以通过按下 ESC 关闭 Drawer',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'open-delay',
        describe: 'Drawer 打开的延时时间，单位毫秒',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'close-delay',
        describe: 'Drawer 关闭的延时时间，单位毫秒',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'destroy-on-close',
        describe: '控制是否在关闭 Drawer 之后将子元素全部销毁',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'modal',
        describe: '是否需要遮罩层',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'modal-penetrable',
        describe: '是否允许穿透遮罩层。 modal 属性必须为 false。',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'direction',
        describe: 'Drawer 打开的方向',
        type: '\'rtl\' | \'ltr\' | \'ttb\' | \'btt\'',
        default: 'rtl',
        values: [
            'rtl',
            'ltr',
            'ttb',
            'btt'
        ],
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'resizable',
        describe: '为抽屉启用可调整大小的功能',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'show-close',
        describe: '是否显示关闭按钮',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'size',
        describe: 'Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 \'x%\', 否则便会以 number 类型解释',
        type: 'number / string',
        default: '30%',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'title',
        describe: 'Drawer 的标题，也可通过具名 slot （见下表）传入',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'with-header',
        describe: '控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'modal-class',
        describe: '遮罩层的自定义类名',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'header-class',
        describe: 'header 部分的自定义 class 名',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'body-class',
        describe: 'body 部分的自定义 class 名',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'footer-class',
        describe: 'footer 部分的自定义 class 名',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'z-index',
        describe: '设置 z-index',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'header-aria-level',
        describe: 'header 的 aria-level 属性（自 a11y 版本）',
        type: 'string',
        default: '2',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    },
    {
        key: 'custom-class',
        describe: 'Drawer 的自定义类名（自 deprecated 版本）【已废弃】',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-attributes'
    }
];
const event: any[] = [
    {
        key: '@open',
        describe: 'Drawer 打开的回调',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-events'
    },
    {
        key: '@opened',
        describe: 'Drawer 打开动画结束时的回调',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-events'
    },
    {
        key: '@close',
        describe: 'Drawer 关闭的回调',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-events'
    },
    {
        key: '@closed',
        describe: 'Drawer 关闭动画结束时的回调',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-events'
    },
    {
        key: '@open-auto-focus',
        describe: '输入焦点聚焦在 Drawer 内容时的回调',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-events'
    },
    {
        key: '@close-auto-focus',
        describe: '输入焦点从 Drawer 内容失焦时的回调',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-events'
    },
    {
        key: '@resize-start',
        describe: '当开始调整大小时触发（当启用 resizable 时）',
        type: '(evt: MouseEvent, size: number) => void',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-events'
    },
    {
        key: '@resize',
        describe: '调整大小时触发（启用 resizable 时）',
        type: '(evt: MouseEvent, size: number) => void',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-events'
    },
    {
        key: '@resize-end',
        describe: '当调整大小结束时触发（当启用 resizable 时）',
        type: '(evt: MouseEvent, size: number) => void',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: 'Drawer 的内容',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-slots'
    },
    {
        key: 'header',
        describe: 'Drawer 标题的内容；会替换标题部分，但不会移除关闭按钮。',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-slots'
    },
    {
        key: 'footer',
        describe: 'Drawer 页脚部分',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-slots'
    },
    {
        key: 'title',
        describe: '与 header 作用相同 请使用 header（自 deprecated 版本）【已废弃】',
        link: 'https://beaver-ui.yearrow.com/component/drawer#drawer-slots'
    }
];

export default {
    key: 'b-drawer',
    attr,
    event,
    slot
};
