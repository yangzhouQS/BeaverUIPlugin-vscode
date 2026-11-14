// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/image.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'url-list',
        describe: '用于预览的图片链接列表',
        type: 'string[]',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/image#image-viewer-attributes'
    },
    {
        key: 'z-index',
        describe: '预览时遮罩层的 z-index',
        type: 'number / string',
        link: 'https://beaver-ui.yearrow.com/component/image#image-viewer-attributes'
    },
    {
        key: 'initial-index',
        describe: '初始预览图像索引，小于 url-list 的长度',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/image#image-viewer-attributes'
    },
    {
        key: 'infinite',
        describe: '是否可以无限循环预览',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/image#image-viewer-attributes'
    },
    {
        key: 'hide-on-click-modal',
        describe: '是否可以通过点击遮罩层关闭预览',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/image#image-viewer-attributes'
    },
    {
        key: 'teleported',
        describe: 'image 自身是否插入至 body 元素上。 嵌套的父元素属性会发生修改时应该将此属性设置为 true',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/image#image-viewer-attributes'
    },
    {
        key: 'zoom-rate',
        describe: '图像查看器缩放事件的缩放速率。',
        type: 'number',
        default: '1.2',
        link: 'https://beaver-ui.yearrow.com/component/image#image-viewer-attributes'
    },
    {
        key: 'scale',
        describe: '预览图像缩放。',
        type: 'number',
        default: '1',
        link: 'https://beaver-ui.yearrow.com/component/image#image-viewer-attributes'
    },
    {
        key: 'min-scale',
        describe: '图像查看器缩放事件的最小缩放比例',
        type: 'number',
        default: '0.2',
        link: 'https://beaver-ui.yearrow.com/component/image#image-viewer-attributes'
    },
    {
        key: 'max-scale',
        describe: '图像查看器缩放事件的最大缩放比例',
        type: 'number',
        default: '7',
        link: 'https://beaver-ui.yearrow.com/component/image#image-viewer-attributes'
    },
    {
        key: 'close-on-press-escape',
        describe: '是否可以通过按下 ESC 关闭 Image Viewer',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/image#image-viewer-attributes'
    },
    {
        key: 'show-progress',
        describe: '是否显示预览图片的进度条内容',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/image#image-viewer-attributes'
    }
];
const event: any[] = [
    {
        key: '@close',
        describe: '当点击 X 按钮或者在 hide-on-click-modal 为 true 时点击遮罩层时触发',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/image#image-viewer-events'
    },
    {
        key: '@error',
        describe: '图片加载失败触发',
        type: '(e: Event) => void',
        link: 'https://beaver-ui.yearrow.com/component/image#image-viewer-events'
    },
    {
        key: '@switch',
        describe: '切换图像时触发。',
        type: '(index: number) => void',
        link: 'https://beaver-ui.yearrow.com/component/image#image-viewer-events'
    },
    {
        key: '@rotate',
        describe: '旋转图像时触发。',
        type: '(deg: number) => void',
        link: 'https://beaver-ui.yearrow.com/component/image#image-viewer-events'
    }
];
const slot: any[] = [
    {
        key: 'viewer',
        describe: '自定义内容',
        type: '-',
        link: 'https://beaver-ui.yearrow.com/component/image#image-viewer-slots'
    },
    {
        key: 'progress',
        describe: '自定义进度内容 (优先级高于 show-progress prop)',
        type: '{ activeIndex: number, total: number }',
        link: 'https://beaver-ui.yearrow.com/component/image#image-viewer-slots'
    },
    {
        key: 'toolbar',
        describe: '自定义工具栏内容',
        type: '{ actions: (action: ImageViewerAction, options?: ImageViewerActionOptions) => void, prev: () => void, next: () => void, reset: () => void, activeIndex: number, setActiveItem: (index: number) => void }',
        link: 'https://beaver-ui.yearrow.com/component/image#image-viewer-slots'
    },
    {
        key: 'viewer-error',
        describe: '自定义图像加载失败的内容',
        type: '{ activeIndex: number, src: string }',
        link: 'https://beaver-ui.yearrow.com/component/image#image-viewer-slots'
    }
];

export default {
    key: 'b-image-viewer',
    attr,
    event,
    slot
};
