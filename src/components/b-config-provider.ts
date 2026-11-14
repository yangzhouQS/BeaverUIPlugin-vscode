// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/config-provider.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'locale',
        describe: '翻译文本对象',
        type: '{name: string, el: TranslatePair} languages',
        default: 'en',
        link: 'https://beaver-ui.yearrow.com/component/config-provider#config-provider-attributes'
    },
    {
        key: 'size',
        describe: '全局组件大小',
        type: '\'large\' | \'default\' | \'small\'',
        default: 'default',
        values: [
            'large',
            'default',
            'small'
        ],
        link: 'https://beaver-ui.yearrow.com/component/config-provider#config-provider-attributes'
    },
    {
        key: 'zIndex',
        describe: '全局初始化 zIndex 的值',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/config-provider#config-provider-attributes'
    },
    {
        key: 'namespace',
        describe: '全局组件类名称前缀 (需要配合 $namespace 使用)',
        type: 'string',
        default: 'el',
        link: 'https://beaver-ui.yearrow.com/component/config-provider#config-provider-attributes'
    },
    {
        key: 'button',
        describe: '按钮相关配置，详见下表',
        type: '{autoInsertSpace?: boolean, type?: string, plain?: boolean, text?: boolean, round?: boolean, dashed?: boolean}',
        default: '详见下表',
        link: 'https://beaver-ui.yearrow.com/component/config-provider#config-provider-attributes'
    },
    {
        key: 'link',
        describe: '链接相关的配置， 见下表',
        type: '{type?: string, underline?: boolean | string}',
        default: '详见下表',
        link: 'https://beaver-ui.yearrow.com/component/config-provider#config-provider-attributes'
    },
    {
        key: 'dialog',
        describe: 'dialog 相关的配置， 见下表',
        type: '{alignCenter?: boolean, draggable?: boolean, overflow?: boolean, transition?: DialogTransition}',
        default: '详见下表',
        link: 'https://beaver-ui.yearrow.com/component/config-provider#config-provider-attributes'
    },
    {
        key: 'message',
        describe: '消息相关配置， 详见下表',
        type: '{max?: number}',
        default: '详见下表',
        link: 'https://beaver-ui.yearrow.com/component/config-provider#config-provider-attributes'
    },
    {
        key: 'experimental-features',
        describe: '将要添加的实验阶段的功能，所有功能都是默认设置为 false',
        type: 'object',
        link: 'https://beaver-ui.yearrow.com/component/config-provider#config-provider-attributes'
    },
    {
        key: 'empty-values',
        describe: '输入类组件空值',
        type: 'array',
        link: 'https://beaver-ui.yearrow.com/component/config-provider#config-provider-attributes'
    },
    {
        key: 'value-on-clear',
        describe: '输入类组件清空值',
        type: 'string / number / boolean / Function',
        link: 'https://beaver-ui.yearrow.com/component/config-provider#config-provider-attributes'
    },
    {
        key: 'type',
        describe: '类型',
        type: '\'primary\' | \'success\' | \'warning\' | \'danger\' | \'info\' | \'default\'',
        default: 'default',
        values: [
            'primary',
            'success',
            'warning',
            'danger',
            'info',
            'default'
        ],
        link: 'https://beaver-ui.yearrow.com/component/config-provider#config-provider-attributes'
    },
    {
        key: 'underline',
        describe: '控制下划线是否出现',
        type: '\'always\' | \'hover\' | \'never\' | boolean',
        default: 'hover',
        values: [
            'always',
            'hover',
            'never'
        ],
        link: 'https://beaver-ui.yearrow.com/component/config-provider#config-provider-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        type: 'config: 提供全局配置（从顶部继承）',
        link: 'https://beaver-ui.yearrow.com/component/config-provider#config-provider-slots'
    }
];

export default {
    key: 'b-config-provider',
    attr,
    event,
    slot
};
