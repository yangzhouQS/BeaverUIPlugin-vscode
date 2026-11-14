// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/image.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'src',
        describe: '图片源地址，同原生属性一致',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/image#image-attributes'
    },
    {
        key: 'fit',
        describe: '确定图片如何适应容器框，同原生 object-fit',
        type: '\'\' | \'fill\' | \'contain\' | \'cover\' | \'none\' | \'scale-down\'',
        default: '\'\'',
        values: [
            'fill',
            'contain',
            'cover',
            'none',
            'scale-down'
        ],
        link: 'https://beaver-ui.yearrow.com/component/image#image-attributes'
    },
    {
        key: 'hide-on-click-modal',
        describe: '当开启 preview 功能时，是否可以通过点击遮罩层关闭 preview',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/image#image-attributes'
    },
    {
        key: 'loading',
        describe: '浏览器加载图像的策略，和 浏览器原生能力一致',
        type: '\'eager\' | \'lazy\'',
        values: [
            'eager',
            'lazy'
        ],
        link: 'https://beaver-ui.yearrow.com/component/image#image-attributes'
    },
    {
        key: 'lazy',
        describe: '是否使用懒加载',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/image#image-attributes'
    },
    {
        key: 'scroll-container',
        describe: '开启懒加载功能后，监听 scroll 事件的容器 默认情况下，开启懒加载功能后，监听 scroll 事件的容器',
        type: 'string / HTMLElement',
        link: 'https://beaver-ui.yearrow.com/component/image#image-attributes'
    },
    {
        key: 'alt',
        describe: '原生属性 alt',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/image#image-attributes'
    },
    {
        key: 'referrerpolicy',
        describe: '原生属性 referrerPolicy。',
        type: 'string',
        link: 'https://beaver-ui.yearrow.com/component/image#image-attributes'
    },
    {
        key: 'crossorigin',
        describe: '原生属性 crossorigin',
        type: '\'\' | \'anonymous\' | \'use-credentials\'',
        values: [
            'anonymous',
            'use-credentials'
        ],
        link: 'https://beaver-ui.yearrow.com/component/image#image-attributes'
    },
    {
        key: 'preview-src-list',
        describe: '开启图片预览功能',
        type: 'string[]',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/image#image-attributes'
    },
    {
        key: 'z-index',
        describe: '设置图片预览的 z-index',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/image#image-attributes'
    },
    {
        key: 'initial-index',
        describe: '初始预览图像索引，小于 url-list 的长度',
        type: 'number',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/image#image-attributes'
    },
    {
        key: 'close-on-press-escape',
        describe: '是否可以通过按下 ESC 关闭 Image Viewer',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/image#image-attributes'
    },
    {
        key: 'preview-teleported',
        describe: 'image-viewer 是否插入至 body 元素上。 嵌套的父元素属性会发生修改时应该将此属性设置为 true',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/image#image-attributes'
    },
    {
        key: 'infinite',
        describe: '是否可以无限循环预览',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/image#image-attributes'
    },
    {
        key: 'zoom-rate',
        describe: '图像查看器缩放事件的缩放速率。',
        type: 'number',
        default: '1.2',
        link: 'https://beaver-ui.yearrow.com/component/image#image-attributes'
    },
    {
        key: 'scale',
        describe: '预览图像缩放。',
        type: 'number',
        default: '1',
        link: 'https://beaver-ui.yearrow.com/component/image#image-attributes'
    },
    {
        key: 'min-scale',
        describe: '图像查看器缩放事件的最小缩放比例',
        type: 'number',
        default: '0.2',
        link: 'https://beaver-ui.yearrow.com/component/image#image-attributes'
    },
    {
        key: 'max-scale',
        describe: '图像查看器缩放事件的最大缩放比例',
        type: 'number',
        default: '7',
        link: 'https://beaver-ui.yearrow.com/component/image#image-attributes'
    },
    {
        key: 'show-progress',
        describe: '是否在预览图片时显示进度条',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/image#image-attributes'
    }
];
const event: any[] = [
    {
        key: '@load',
        describe: '图片加载成功触发',
        type: '(e: Event) => void',
        link: 'https://beaver-ui.yearrow.com/component/image#image-events'
    },
    {
        key: '@error',
        describe: '图片加载失败触发',
        type: '(e: Event) => void',
        link: 'https://beaver-ui.yearrow.com/component/image#image-events'
    },
    {
        key: '@switch',
        describe: '切换图像时触发。',
        type: '(index: number) => void',
        link: 'https://beaver-ui.yearrow.com/component/image#image-events'
    },
    {
        key: '@close',
        describe: '当点击 X 按钮或者在 hide-on-click-modal 为 true 时点击遮罩层时触发',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/image#image-events'
    },
    {
        key: '@show',
        describe: '当 Viewer 显示时触发',
        type: '() => void',
        link: 'https://beaver-ui.yearrow.com/component/image#image-events'
    }
];
const slot: any[] = [
    {
        key: 'placeholder',
        describe: '当图像尚未加载时，自定义的占位符内容',
        type: '-',
        link: 'https://beaver-ui.yearrow.com/component/image#image-slots'
    },
    {
        key: 'error',
        describe: '自定义图像加载失败的内容',
        type: '-',
        link: 'https://beaver-ui.yearrow.com/component/image#image-slots'
    },
    {
        key: '\\[image viewer slots\\](#image-viewer-slots)',
        describe: '当你允许大的图像预览时，可以使用图像预览的插槽。',
        type: '-',
        link: 'https://beaver-ui.yearrow.com/component/image#image-slots'
    }
];

export default {
    key: 'b-image',
    attr,
    event,
    slot
};
