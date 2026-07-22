# Change Log

All notable changes to the "element-plus" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [2.1.0]

### Added

- 组件数据全量同步至 Element Plus `2.14.3`：覆盖全部 108 个组件（含子组件）的属性与事件提示
- 新增 14 个组件：`el-config-provider`、`el-watermark`、`el-splitter`、`el-splitter-panel`、`el-input-otp`、`el-avatar-group`、`el-checkbox-button`、`el-color-picker-panel`、`el-date-picker-panel`、`el-dropdown-menu`、`el-dropdown-item`、`el-menu-item`、`el-main`、`el-timeline`，并补充 `el-countdown` 的注册
- 新增枚举值提示：在 `type="` 等枚举属性引号内自动给出可选值（如 `primary`、`success`）
- 新增插槽提示：组件标签内输入 `#` 或 `slot="` 时给出插槽名
- 新增官方指令提示：`v-loading`、`v-infinite-scroll` 及其配套属性，任意标签内可用
- 新增 Hover 文档：悬停在组件标签名、属性、事件或插槽名上即可查看中文说明、类型、默认值与官方文档链接
- 新增 8 个代码片段：Config Provider、Checkbox Button、ColorPicker Panel、Date Picker Panel、Input OTP、Avatar Group、Countdown、Splitter
- 补全提示的悬浮文档中新增「可选值」说明
- 新增覆盖提示逻辑与 Hover 逻辑的单元测试

### Fixed

- 修复属性提示排序错乱问题（`sortText` 字典序导致 "10" 排在 "2" 前）
- 修复 `el-countdown` 属性数据错误（原误用了 `el-statistic` 的数据）
- 修复 `el-anchor` 文档链接错误指向 `el-affix` 页面的问题
- 修复 `el-upload` 属性名笔误（`action-required` → `action`）

### Changed

- 补全与 Hover 同时支持 `html` 和 `vue` 两种语言模式，移除了对 `.vue` 文件的强制语言重定义（不再与 Vue - Official / Volar 冲突）
- 移除无效的 `completionItemProvider` 贡献点与残留的 `extension.helloWorld`、`onStartupFinished` 激活事件
- 组件列表提升为模块级常量，避免每次触发提示时重复构建

## [2.0.4]

- Initial release
