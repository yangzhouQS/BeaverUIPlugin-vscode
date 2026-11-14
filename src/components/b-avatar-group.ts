// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/avatar.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'size',
        describe: '控制头像组中的头像大小',
        type: 'number / \'large\' | \'default\' | \'small\'',
        values: [
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/avatar#avatargroup-attributes'
    },
    {
        key: 'shape',
        describe: '控制头像组中的头像形状',
        type: '\'circle\' | \'square\'',
        values: [
            'circle',
            'square'
        ],
        link: 'https://beaver-ui.yearrow.com/component/avatar#avatargroup-attributes'
    },
    {
        key: 'collapse-avatars',
        describe: '是否折叠头像',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/avatar#avatargroup-attributes'
    },
    {
        key: 'collapse-avatars-tooltip',
        describe: '是否在鼠标悬停折叠头像的文字时显示所有折叠头像。 若要使用此功能， collapse-avatars 必须为 true',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/avatar#avatargroup-attributes'
    },
    {
        key: 'max-collapse-avatars',
        describe: '需要显示的头像的最大数量 若要使用此功能， collapse-avatars 必须为 true',
        type: 'number',
        default: '1',
        link: 'https://beaver-ui.yearrow.com/component/avatar#avatargroup-attributes'
    },
    {
        key: 'effect',
        describe: 'tooltip 主题，内置了 dark / light 两种',
        type: '\'dark\' | \'light\' / string',
        default: 'light',
        link: 'https://beaver-ui.yearrow.com/component/avatar#avatargroup-attributes'
    },
    {
        key: 'placement',
        describe: 'tooltip 的位置',
        type: '\'top\' | \'top-start\' | \'top-end\' | \'bottom\' | \'bottom-start\' | \'bottom-end\' | \'left\' | \'left-start\' | \'left-end\' | \'right\' | \'right-start\' | \'right-end\'',
        default: 'top',
        values: [
            'top',
            'top-start',
            'top-end',
            'bottom',
            'bottom-start',
            'bottom-end',
            'left',
            'left-start',
            'left-end',
            'right',
            'right-start',
            'right-end'
        ],
        link: 'https://beaver-ui.yearrow.com/component/avatar#avatargroup-attributes'
    },
    {
        key: 'popper-class',
        describe: 'tooltip 的自定义类名',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/avatar#avatargroup-attributes'
    },
    {
        key: 'popper-style',
        describe: 'tooltip 的自定义样式',
        type: 'string / object',
        link: 'https://beaver-ui.yearrow.com/component/avatar#avatargroup-attributes'
    },
    {
        key: 'collapse-class',
        describe: 'collapse-avatar 的自定义类名',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/avatar#avatargroup-attributes'
    },
    {
        key: 'collapse-style',
        describe: 'collapse-avatar 的自定义样式',
        type: 'string / object',
        link: 'https://beaver-ui.yearrow.com/component/avatar#avatargroup-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [];

export default {
    key: 'b-avatar-group',
    attr,
    event,
    slot
};
