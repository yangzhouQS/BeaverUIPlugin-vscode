const attr = [
    {
        key: 'value',
        describe: '目标时间',
        type: 'number / Dayjs',
        default: '—'
    },
    {
        key: 'format',
        describe: '格式化倒计时',
        type: 'string',
        default: 'HH:mm:ss'
    },
    {
        key: 'prefix',
        describe: '设置倒计时前缀',
        type: 'string',
        default: '—'
    },
    {
        key: 'suffix',
        describe: '设置倒计时的后缀',
        type: 'string',
        default: '—'
    },
    {
        key: 'title',
        describe: '倒计时标题',
        type: 'string',
        default: '—'
    },
    {
        key: 'value-style',
        describe: '倒计时值的样式',
        type: 'string / object',
        default: '—'
    }
];

const event: any = [
    {
        key: '@change',
        describe: '时间差改变事件',
        type: 'function'
    },
    {
        key: '@finish',
        describe: '倒计时结束事件',
        type: 'function'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/statistic.html#countdown-%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/statistic.html#countdown-%E4%BA%8B%E4%BB%B6';
});

export default {
    key: 'el-countdown',
    attr,
    event
};
