const attr = [
    {
        key: 'icon',
        describe: '设置 Avatar 的图标类型，具体参考 Icon 组件。',
        type: 'string / Component',
        default: '—'
    },
    {
        key: 'size',
        describe: 'Avatar 大小。',
        type: 'number / enum',
        default: '—',
        values: ['large', 'default', 'small']
    },
    {
        key: 'shape',
        describe: 'Avatar 形状。',
        type: 'enum',
        default: '—',
        values: ['circle', 'square']
    },
    {
        key: 'src',
        describe: 'Avatar 图片的源地址。',
        type: 'string',
        default: '—'
    },
    {
        key: 'src-set',
        describe: '图片 Avatar 的原生 srcset 属性。',
        type: 'string',
        default: '—'
    },
    {
        key: 'alt',
        describe: '图片 Avatar 的原生 alt 属性。',
        type: 'string',
        default: '—'
    },
    {
        key: 'fit',
        describe: '当展示类型为图片的时候，设置图片如何适应容器。',
        type: 'enum',
        default: 'cover',
        values: ['fill', 'contain', 'cover', 'none', 'scale-down']
    }
];
const event = [
    {
        key: '@error',
        describe: '图片加载失败时触发',
        type: 'function'
    }
];
const slot = [
    {
        key: 'default',
        describe: '自定义默认内容'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/avatar.html#avatar-%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/avatar.html#avatar-%E4%BA%8B%E4%BB%B6';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/avatar.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-avatar',
    attr,
    event,
    slot
};
