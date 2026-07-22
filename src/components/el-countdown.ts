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
const event = [
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
const slot = [
    {
        key: 'prefix',
        describe: '输入框头部内容 / 前缀内容'
    },
    {
        key: 'suffix',
        describe: '输入框尾部内容 / 后缀内容'
    },
    {
        key: 'title',
        describe: '标题内容'
    }
];

attr.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/statistic.html#countdown-%E5%B1%9E%E6%80%A7';
});

event.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/statistic.html#countdown-%E4%BA%8B%E4%BB%B6';
});

slot.forEach((x: any) => {
    x.link = 'https://element-plus.org/zh-CN/component/statistic.html#%E6%8F%92%E6%A7%BD';
});

export default {
    key: 'el-countdown',
    attr,
    event,
    slot
};
