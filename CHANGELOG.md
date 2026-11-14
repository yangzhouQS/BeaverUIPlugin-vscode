# Change Log

All notable changes to the "beaver-ui" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [1.0.0] — Beaver UI（品牌重塑与数据整体对齐）

发布日期：2026-11-14

基于 [Element Plus Snippets](https://github.com/noxussj2/element-plus) v3.0.1（noxussj，MIT）二次开发，插件整体从 Element Plus 生态迁移至 **Beaver UI（`@cs/beaver-ui`）** 生态。

### Added

- **组件数据整体对齐 beaver-ui@1.0.1**：覆盖 **106 个组件标签**（`b-*`，含全部子组件与 table-kit / list-kit 套件），**2275 条** 属性 / 事件 / 插槽数据，全部来自官方文档站数据集自动提取
- **新增 beaver 自研组件支持**：`b-grid` / `b-grid-column` 全能表格、`b-table-only` / `b-table-async` / `b-table-report` / `b-tree-table` / `b-table-edit` 表格套件、`b-list` / `b-list-only` / `b-list-async` / `b-list-report` 列表套件、`b-box` / `b-panel` / `b-flex-box` / `b-flex-line` / `b-tool-bar` / `b-filter-item` / `b-label-extend` / `b-navigation`、`b-search-select` / `b-search-tree-select` / `b-search-tree-panel`、`b-date-range-picker` / `b-date-picker-panel` / `b-color-picker-panel` 等
- **指令提示对齐**：`v-loading`（含 `element-loading-*` 配套属性）、`v-auto-tip`（溢出提示，含 always / content / effect / placement / popper-class）、`v-highlight-query`（关键词高亮）、`v-infinite-scroll`（含 `infinite-scroll-*` 配套属性）
- **枚举属性选择片段**：插入 `type="${1|default,primary,success,...|}"`，Tab 键在候选值间切换
- **布尔属性选择片段**：插入 `:plain="${1|true,false|}"`
- **文档链接切换至 beaver-ui.yearrow.com**：Hover 文档卡片与属性提示均携带官方文档站对应组件页链接
- **数据自动对齐流水线**：`scripts/generate-data.mjs`（数据集 → 组件数据，标签映射基于 `component.ts` 注册表）与 `scripts/generate-snippets.mjs`（上游 snippet 迁移 + 官方示例提取）；组件升级后 `npm run generate` 一键重新对齐
- **离线核对脚本** `scripts/verify.mjs`：stub vscode 模块全量校验数据完整性、补全行为、snippets 一致性与包元数据
- 代码片段合计 **96 条**：上游迁移 64 条（标签与样式引用全部 `el-*` → `b-*`）+ 从官方示例提取 32 条

### Removed

- **移除 17 条已废弃组件的 snippet**（beaver-ui 已移除对应组件）：`el-container` 布局容器族、`el-card`、`el-rate`、`el-statistic` / `el-countdown`、`el-descriptions`、`el-result`、`el-tour`、`el-affix`、`el-splitter`、`el-autocomplete`、`el-table` / `el-table-v2`、`el-page-header`、`el-segmented`、`el-mention`、`el-input-otp`（相关能力由 `b-box` / `b-panel` / `b-grid` / `b-table-*` 等替代）
- 移除未使用的 `vscode-html-languageservice` 依赖

### Changed

- 插件品牌重塑：名称 `element-plus` → `beaver-ui`，发布者 `noxussj` → `yearrow`，图标更换为 beaver 品牌标（官方 logo 渲染）
- repository 指向 `github.com/yangzhouQS/BeaverUIPlugin-vscode`
- 单元测试与集成测试全部切换至 `b-*` 口径（17 + 2 个用例，真实编辑器环境已验证通过）
- 集成测试超时 2s → 10s（等待插件激活）
- `.vscodeignore` 增加 `data/`、`scripts/` 排除（VSIX 体积 314KB）

## [3.0.0]（上游 Element Plus Snippets 最终版本）

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
