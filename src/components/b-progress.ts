// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/progress.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'percentage',
        describe: 'percentage（自 required 版本）',
        type: '(0-100)',
        default: '0',
        link: 'https://beaver-ui.yearrow.com/component/progress#progress-attributes'
    },
    {
        key: 'type',
        describe: '进度条类型',
        type: '\'line\' | \'circle\' | \'dashboard\'',
        default: 'line',
        values: [
            'line',
            'circle',
            'dashboard'
        ],
        link: 'https://beaver-ui.yearrow.com/component/progress#progress-attributes'
    },
    {
        key: 'stroke-width',
        describe: '进度条的宽度',
        type: 'number',
        default: '6',
        link: 'https://beaver-ui.yearrow.com/component/progress#progress-attributes'
    },
    {
        key: 'text-inside',
        describe: '进度条显示文字内置在进度条内（仅 type 为 \'line\' 时可用）',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/progress#progress-attributes'
    },
    {
        key: 'status',
        describe: '进度条当前状态',
        type: '\'success\' | \'exception\' | \'warning\'',
        values: [
            'success',
            'exception',
            'warning'
        ],
        link: 'https://beaver-ui.yearrow.com/component/progress#progress-attributes'
    },
    {
        key: 'indeterminate',
        describe: '是否为动画进度条',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/progress#progress-attributes'
    },
    {
        key: 'duration',
        describe: '控制动画进度条速度和条纹进度条流动速度',
        type: 'number',
        default: '3',
        link: 'https://beaver-ui.yearrow.com/component/progress#progress-attributes'
    },
    {
        key: 'color',
        describe: '进度条背景色 （会覆盖 status 状态颜色）',
        type: 'string / (percentage: number) => string / { color: string; percentage: number }[]',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/progress#progress-attributes'
    },
    {
        key: 'width',
        describe: '环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）',
        type: 'number',
        default: '126',
        link: 'https://beaver-ui.yearrow.com/component/progress#progress-attributes'
    },
    {
        key: 'show-text',
        describe: '是否显示进度条文字内容',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/progress#progress-attributes'
    },
    {
        key: 'stroke-linecap',
        describe: 'circle/dashboard 类型路径两端的形状',
        type: '\'butt\' | \'round\' | \'square\'',
        default: 'round',
        values: [
            'butt',
            'round',
            'square'
        ],
        link: 'https://beaver-ui.yearrow.com/component/progress#progress-attributes'
    },
    {
        key: 'format',
        describe: '指定进度条文字内容',
        type: '(percentage: number) => string',
        link: 'https://beaver-ui.yearrow.com/component/progress#progress-attributes'
    },
    {
        key: 'striped',
        describe: '在进度条上增加条纹',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/progress#progress-attributes'
    },
    {
        key: 'striped-flow',
        describe: '让进度条上的条纹流动起来',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/progress#progress-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义内容',
        type: '{ percentage: number }',
        link: 'https://beaver-ui.yearrow.com/component/progress#progress-slots'
    }
];

export default {
    key: 'b-progress',
    attr,
    event,
    slot
};
