// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/dialog.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'v-model',
        describe: '是否显示 Dialog',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'title',
        describe: 'Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'width',
        describe: '对话框的宽度，默认值为 50%',
        type: 'string / number',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'fullscreen',
        describe: '是否为全屏 Dialog',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'top',
        describe: 'dialog CSS 中的 margin-top 值，默认为 15vh',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'modal',
        describe: '是否需要遮罩层',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'modal-penetrable',
        describe: '是否允许穿透遮罩层。 modal 属性必须为 false。',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'modal-class',
        describe: '遮罩的自定义类名',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'header-class',
        describe: 'header 部分的自定义 class 名',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'body-class',
        describe: 'body 部分的自定义 class 名',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'footer-class',
        describe: 'footer 部分的自定义 class 名',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'append-to-body',
        describe: 'Dialog 自身是否插入至 body 元素上。 嵌套的 Dialog 必须指定该属性并赋值为 true',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'append-to',
        describe: 'Dialog 挂载到哪个 DOM 元素 将覆盖 append-to-body',
        type: 'CSSSelector / HTMLElement',
        default: 'body',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'lock-scroll',
        describe: '是否在 Dialog 出现时将 body 滚动锁定',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'open-delay',
        describe: 'dialog 打开的延时时间，单位毫秒',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'close-delay',
        describe: 'dialog 关闭的延时时间，单位毫秒',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'close-on-click-modal',
        describe: '是否可以通过点击 modal 关闭 Dialog',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'close-on-press-escape',
        describe: '是否可以通过按下 ESC 关闭 Dialog',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'show-close',
        describe: '是否显示关闭按钮',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'before-close',
        describe: '关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候.',
        type: '(done: DoneFn) => void',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'draggable',
        describe: '为 Dialog 启用可拖拽功能',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'overflow',
        describe: '拖动范围可以超出可视区',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'center',
        describe: '是否让 Dialog 的 header 和 footer 部分居中排列',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'align-center',
        describe: '是否水平垂直对齐对话框',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'destroy-on-close',
        describe: '当关闭 Dialog 时，销毁其中的元素',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'close-icon',
        describe: '自定义关闭图标，默认 Close',
        type: 'string / Component',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'z-index',
        describe: '和原生的 CSS 的 z-index 相同，改变 z 轴的顺序',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'header-aria-level',
        describe: 'header 的 aria-level 属性（自 a11y 版本）',
        type: 'string',
        default: '2',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'transition',
        describe: '对话框动画的自定义过渡配置。 可以是一个字符串（过渡名称），也可以是一个包含 Vue 过渡属性的对象。',
        type: 'string / TransitionProps',
        default: 'dialog-fade',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    },
    {
        key: 'custom-class',
        describe: 'Dialog 的自定义类名（自 deprecated 版本）【已废弃】',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-attributes'
    }
];
const event: any[] = [
    {
        key: '@open',
        describe: 'Dialog 打开的回调',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-events'
    },
    {
        key: '@opened',
        describe: 'Dialog 打开动画结束时的回调',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-events'
    },
    {
        key: '@close',
        describe: 'Dialog 关闭的回调',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-events'
    },
    {
        key: '@closed',
        describe: 'Dialog 关闭动画结束时的回调',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-events'
    },
    {
        key: '@open-auto-focus',
        describe: '输入焦点聚焦在 Dialog 内容时的回调',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-events'
    },
    {
        key: '@close-auto-focus',
        describe: '输入焦点从 Dialog 内容失焦时的回调',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-events'
    }
];
const slot: any[] = [
    {
        key: 'default',
        describe: '对话框的默认内容',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-slots'
    },
    {
        key: 'header',
        describe: '对话框标题的内容；会替换标题部分，但不会移除关闭按钮。',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-slots'
    },
    {
        key: 'footer',
        describe: 'Dialog 按钮操作区的内容',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-slots'
    },
    {
        key: 'title',
        describe: '与 header 作用相同 请使用 header（自 deprecated 版本）【已废弃】',
        link: 'https://beaver-ui.yearrow.com/component/dialog#dialog-slots'
    }
];

export default {
    key: 'b-dialog',
    attr,
    event,
    slot
};
