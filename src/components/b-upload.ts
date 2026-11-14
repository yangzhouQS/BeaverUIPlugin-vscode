// 本文件由 scripts/generate-data.mjs 生成，请勿手改。
// 数据来源：beaver-ui@1.0.1 数据集 ← docs-website/component/upload.md
// 重新生成：node scripts/generate-data.mjs
const attr: any[] = [
    {
        key: 'action',
        describe: '请求 URL（自 required 版本）',
        type: 'string',
        default: '#',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'headers',
        describe: '设置上传的请求头部',
        type: 'Headers | Record<string, any>',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'method',
        describe: '设置上传请求方法',
        type: 'string',
        default: 'post',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'multiple',
        describe: '是否支持多选文件',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'data',
        describe: '上传时附带的额外参数 从 v2.3.13 支持 Awaitable 数据，和 Function',
        type: 'Record<string, any> | Awaitable<Record<string, any>> / (rawFile: UploadRawFile) => Awaitable<Record<string, any>>',
        default: '{}',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'name',
        describe: '上传的文件字段名',
        type: 'string',
        default: 'file',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'with-credentials',
        describe: '支持发送 cookie 凭证信息',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'show-file-list',
        describe: '是否显示已上传文件列表',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'drag',
        describe: '是否启用拖拽上传',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'accept',
        describe: '接受上传的文件类型（thumbnail-mode 模式下此参数无效）',
        type: 'string',
        default: '\'\'',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'crossorigin',
        describe: '原生属性 crossorigin',
        type: '\'\' | \'anonymous\' | \'use-credentials\'',
        values: [
            'anonymous',
            'use-credentials'
        ],
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'on-preview',
        describe: '点击文件列表中已上传的文件时的钩子',
        type: '(uploadFile: UploadFile) => void',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'on-remove',
        describe: '文件列表移除文件时的钩子',
        type: '(uploadFile: UploadFile, uploadFiles: UploadFiles) => void',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'on-success',
        describe: '文件上传成功时的钩子',
        type: '(response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'on-error',
        describe: '文件上传失败时的钩子',
        type: '(error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'on-progress',
        describe: '文件上传时的钩子',
        type: '(evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'on-change',
        describe: '文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用',
        type: '(uploadFile: UploadFile, uploadFiles: UploadFiles) => void',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'on-exceed',
        describe: '当超出限制时，执行的钩子函数',
        type: '(files: File[], uploadFiles: UploadUserFile[]) => void',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'before-upload',
        describe: '上传文件之前的钩子，参数为上传的文件， 若返回 false 或者返回 Promise 且被 reject，则停止上传。',
        type: '(rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'before-remove',
        describe: '删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除。',
        type: '(uploadFile: UploadFile, uploadFiles: UploadFiles) => Awaitable<boolean>',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'file-list',
        describe: '默认上传文件',
        type: 'UploadUserFile[]',
        default: '[]',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'list-type',
        describe: '文件列表的类型',
        type: '\'text\' | \'picture\' | \'picture-card\'',
        default: 'text',
        values: [
            'text',
            'picture',
            'picture-card'
        ],
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'auto-upload',
        describe: '是否自动上传文件',
        type: 'boolean',
        default: 'true',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'http-request',
        describe: '覆盖默认的 Xhr 行为，允许自行实现上传文件的请求',
        type: '(options: UploadRequestOptions) => XMLHttpRequest | Promise<unknown>',
        default: '请参考ajaxUpload',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'disabled',
        describe: '是否禁用上传',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'limit',
        describe: '允许上传文件的最大数量',
        type: 'number',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    },
    {
        key: 'directory',
        describe: '是否支持上传文件夹。 启用后，只能选择文件夹；选择文件夹后，文件夹内的文件将被扁平化处理。（自 2.13.1 版本）',
        type: 'boolean',
        default: 'false',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-attributes'
    }
];
const event: any[] = [];
const slot: any[] = [
    {
        key: 'default',
        describe: '自定义默认内容',
        type: '-',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-slots'
    },
    {
        key: 'trigger',
        describe: '触发文件选择框的内容',
        type: '-',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-slots'
    },
    {
        key: 'tip',
        describe: '提示说明文字',
        type: '-',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-slots'
    },
    {
        key: 'file',
        describe: '缩略图模板的内容',
        type: '{ file: UploadFile, index: number }',
        link: 'https://beaver-ui.yearrow.com/component/upload#upload-slots'
    }
];

export default {
    key: 'b-upload',
    attr,
    event,
    slot
};
