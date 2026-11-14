<p align="center">
  <img width="140px" src="./images/beaver-ui.png">
</p>

# Beaver UI Snippets

🚀 Beaver UI Snippets 是为云阙 PC 端通用组件库 **Beaver UI（`@cs/beaver-ui`）** 提供代码提示的 VSCode 插件，帮助你快速开发 Vue 组件，提高编码效率。

插件数据已与 **Beaver UI 1.0.1** 官方文档同步，覆盖 **106 个组件标签**（含 `b-grid-column`、`b-table-async`、`b-menu-item` 等子组件）的属性 / 事件 / 插槽提示，共 **2275 条 API 数据**、**96 个代码片段模板**、**34 条指令条目**。

> 本插件基于 [Element Plus Snippets](https://github.com/noxussj2/element-plus)（noxussj，MIT）二次开发，数据整体对齐 beaver-ui 生态（JetBrains 侧配套插件为 [BeaverUIPlugin](https://github.com/yangzhouQS/BeaverUIPlugin)）。

<br />

## ✨ 插件特性

-   支持 `Beaver UI ⚡` 组件代码片段：为每个组件提供代码片段提示，输入 `b-` 即可唤起。

-   属性与事件提示：在组件标签中输入空格或 `@` 符号，提供相关的属性或事件提示。

-   枚举值提示：在 `type="` 等枚举属性的引号内，自动给出 `primary`、`success` 等可选值。

-   选择片段插入：枚举属性插入 `type="${1|default,primary,success,...|}"`、布尔属性插入 `:plain="${1|true,false|}"`，Tab 键即可在候选值间切换。

-   插槽提示：在组件标签中输入 `#` 或 `slot="` 时，提供插槽名提示（含 `b-grid`、`b-list-async` 等自研组件插槽）。

-   指令提示：任意标签内均可提示 `v-loading`、`v-auto-tip`、`v-highlight-query`、`v-infinite-scroll` 及配套属性（`element-loading-*` 等）。

-   Hover 文档：鼠标悬停在组件标签名、属性、事件或插槽名上，即可查看中文说明、类型、默认值、可选值与官方文档链接。

-   智能属性前缀：字符串/枚举类型属性直接插入 `key="value"`，其余类型自动插入 `:key="value"`（`v-bind` 简写），`v-model` 与 `v-` 指令自动识别。

-   API 文档快速跳转：文档链接直达 `beaver-ui.yearrow.com` 对应组件页。

-   兼容多种文件类型：原生支持 `html` 与 `vue` 两种语言模式（`.vue` 文件无需额外配置）。

-   使用前必须要检查 Visual Studio Code 的版本号是否大于 `1.46.0`

<br />

## 📦 安装插件

**方式一：VSIX 手动安装**

下载仓库中的 `.vsix` 安装包（如 `beaver-ui-1.0.0.vsix`），然后在扩展面板右上角选择 `从 VSIX 安装...`。

**方式二：源码构建**

```bash
yarn install
npx vsce package
# 产出 beaver-ui-<version>.vsix
```

<br />

## 🔧 使用说明

### 组件代码片段提示

✅ 例如在 `.vue` 文件中输入 `b-` 时就会出现一系列 `Beaver UI` 组件的代码提示，选中后自动展开为完整的组件模板。

<img src="./images/1.png">

<br />

### 属性提示

✅ 在组件标签中输入 `空格`、或者手动触发属性提示。

-   枚举属性会插入带可选值片段的形式，如 `size="${1|large,default,small|}"`。
-   字符串类型属性会插入 `clearable="value"` / `placeholder="value"` 形式。
-   布尔类型会插入 `:plain="${1|true,false|}"` 形式。
-   其余类型（number / object / function 等）自动带上 `:` 前缀，即插入 `:span="6"` 形式。
-   绑定值属性会插入 `v-model="value"` 形式。

<img src="./images/2.png">

<br />

### 事件提示

✅ 在组件标签中输入 `@` 触发事件提示，例如 `@change`、`@select-all`，选中后插入 `change="handler"` 形式。

<img src="./images/3.png">

<br />

### 枚举值提示

✅ 对于 `type`、`size`、`effect` 等枚举类属性，在引号内会自动给出可选值，例如输入 `<b-button type="` 后会提示 `default`、`primary`、`success`、`warning`、`danger`、`info` 等候选。

<br />

### 插槽提示

✅ 在组件标签中输入 `#`（或编写 `slot="`）时，会给出该组件支持的插槽名，例如 `<b-input #` 会提示 `prefix`、`suffix`、`prepend`、`append`。

<br />

### 指令提示

✅ 在任意标签（包括原生标签和组件标签）中输入空格后，均可提示 beaver-ui 指令：`v-loading`（含 `element-loading-*` 配套属性）、`v-auto-tip`（溢出提示）、`v-highlight-query`（关键词高亮）、`v-infinite-scroll`（无限滚动，含 `infinite-scroll-*` 配套属性）。

<br />

### Hover 文档

✅ 鼠标悬停在组件标签名、属性、事件或插槽名上，即可查看对应的中文文档卡片，内容包括：

-   **描述**：属性的中文说明（含版本信息，如 `（自 2.13.3 版本）`）。
-   **类型**：如 `string`、`boolean`、`'large' | 'default' | 'small'`。
-   **默认值**：属性的默认值。
-   **可选值**：枚举属性的全部候选值。
-   **文档链接**：点击可直接跳转到 `beaver-ui.yearrow.com` 对应组件文档章节。

<br />

## 📌 支持的组件

以下是本插件支持的 `Beaver UI` 组件代码片段。除下表列出的代码片段外，**全部 106 个组件标签均支持属性 / 事件 / 插槽 / Hover 提示**（`b-loading`、`b-message`、`b-notification`、`b-message-box` 为函数式调用，不提供标签提示）。

### 数据来源与同步

插件数据由脚本自动生成，可随组件库版本升级重新对齐：

```bash
# 1. 用 beaver-ui-mcp 从文档站重建数据集（自动读取 docs-website + 组件源码）
cd ../beaver-ui-mcp && npm run dataset:build -- --config <指向最新 beaver-ui 的配置>

# 2. 更新本插件 data/ 下的数据集快照与 data/source.json 版本号

# 3. 重新生成组件数据与 snippets
npm run generate
```

| 指标 | 数量 | 来源 |
| :-- | :-: | :-- |
| 组件标签数据 | 106 | 数据集 + `component.ts` 注册表自动映射 |
| API 成员（属性/事件/插槽） | 2275 | 文档站 API 表 |
| 代码片段 | 96 | 上游迁移 64 + 官方示例提取 32 |
| 指令 | 34 | v-loading / v-auto-tip / v-highlight-query / v-infinite-scroll |

### 基础组件

| 序号 | 触发代码 | 组件标签 | 组件名称 | 符号 |
| :-- | :-- | :-- | :-- | :-: |
| 1 | `button` | `b-button` | Button 按钮 | ⚡ |
| 2 | `button-group` | `b-button-group` | ButtonGroup 按钮组 | ⚡ |
| 3 | `divider` | `b-divider` | Divider 分割线（可折叠） | ⚡ |
| 4 | `icon` | `b-icon` | Icon 图标 | ⚡ |
| 5 | `link` | `b-link` | Link 链接 | ⚡ |
| 6 | `scrollbar` | `b-scrollbar` | Scrollbar 滚动条 | ⚡ |
| 7 | `space` | `b-space` | Space 间距 | ⚡ |
| 8 | `text` | `b-text` | Text 文本 | ⚡ |

### 布局组件

| 序号 | 触发代码 | 组件标签 | 组件名称 | 符号 |
| :-- | :-- | :-- | :-- | :-: |
| 1 | `col` | `b-col` | Col 布局列 | ⚡ |
| 2 | `filter-item` | `b-filter-item` | FilterItem 筛选项 | ⚡ |
| 3 | `flex-box` | `b-flex-box` | FlexBox 弹性布局 | ⚡ |
| 4 | `flex-line` | `b-flex-line` | FlexLine 左右分栏 | ⚡ |
| 5 | `row` | `b-row` | Row 布局行 | ⚡ |

### 容器组件

| 序号 | 触发代码 | 组件标签 | 组件名称 | 符号 |
| :-- | :-- | :-- | :-- | :-: |
| 1 | `box` | `b-box` | Box 盒子 | ⚡ |
| 2 | `panel` | `b-panel` | Panel 面板 | ⚡ |
| 3 | `tab-pane` | `b-tab-pane` | TabPane 标签页项 | ⚡ |
| 4 | `tabs` | `b-tabs` | Tabs 标签页 | ⚡ |
| 5 | `tool-bar` | `b-tool-bar` | ToolBar 工具栏 | ⚡ |

### 表单组件

| 序号 | 触发代码 | 组件标签 | 组件名称 | 符号 |
| :-- | :-- | :-- | :-- | :-: |
| 1 | `cascader` | `b-cascader` | Cascader 级联选择器 | ⚡ |
| 2 | `cascader-panel` | `b-cascader-panel` | CascaderPanel 级联面板 | ⚡ |
| 3 | `checkbox` | `b-checkbox` | Checkbox 多选框 | ⚡ |
| 4 | `checkbox-button` | `b-checkbox-button` | CheckboxButton 按钮样式多选框 | ⚡ |
| 5 | `checkbox-group` | `b-checkbox-group` | CheckboxGroup 多选框组 | ⚡ |
| 6 | `color-picker` | `b-color-picker` | ColorPicker 颜色选择器 | ⚡ |
| 7 | `color-picker-panel` | `b-color-picker-panel` | ColorPickerPanel 选色面板 | ⚡ |
| 8 | `date-picker` | `b-date-picker` | DatePicker 日期选择器 | ⚡ |
| 9 | `date-picker-panel` | `b-date-picker-panel` | DatePickerPanel 日期选择器面板 | ⚡ |
| 10 | `date-range-picker` | `b-date-range-picker` | DateRangePicker 报表期间选择器 | ⚡ |
| 11 | `form` | `b-form` | Form 表单 | ⚡ |
| 12 | `form-item` | `b-form-item` | FormItem 表单项 | ⚡ |
| 13 | `input` | `b-input` | Input 输入框 | ⚡ |
| 14 | `input-number` | `b-input-number` | InputNumber 数字输入框 | ⚡ |
| 15 | `input-tag` | `b-input-tag` | InputTag 输入标签 | ⚡ |
| 16 | `option` | `b-option` | Option 选择器选项 | ⚡ |
| 17 | `option-group` | `b-option-group` | OptionGroup 选项分组 | ⚡ |
| 18 | `radio` | `b-radio` | Radio 单选框 | ⚡ |
| 19 | `radio-button` | `b-radio-button` | RadioButton 按钮样式单选框 | ⚡ |
| 20 | `radio-group` | `b-radio-group` | RadioGroup 单选框组 | ⚡ |
| 21 | `search-select` | `b-search-select` | SearchSelect 远程搜索选择 | ⚡ |
| 22 | `search-tree-panel` | `b-search-tree-panel` | SearchTreePanel 搜索树面板 | ⚡ |
| 23 | `search-tree-select` | `b-search-tree-select` | SearchTreeSelect 搜索树选择 | ⚡ |
| 24 | `select` | `b-select` | Select 选择器 | ⚡ |
| 25 | `select-v2` | `b-select-v2` | SelectV2 虚拟化选择器 | ⚡ |
| 26 | `slider` | `b-slider` | Slider 滑块 | ⚡ |
| 27 | `switch` | `b-switch` | Switch 开关 | ⚡ |
| 28 | `time-picker` | `b-time-picker` | TimePicker 时间选择器 | ⚡ |
| 29 | `time-select` | `b-time-select` | TimeSelect 时间选择 | ⚡ |
| 30 | `transfer` | `b-transfer` | Transfer 穿梭框 | ⚡ |
| 31 | `tree-select` | `b-tree-select` | TreeSelect 树形选择 | ⚡ |
| 32 | `upload` | `b-upload` | Upload 上传 | ⚡ |

### 数据展示

| 序号 | 触发代码 | 组件标签 | 组件名称 | 符号 |
| :-- | :-- | :-- | :-- | :-: |
| 1 | `avatar` | `b-avatar` | Avatar 头像 | ⚡ |
| 2 | `avatar-group` | `b-avatar-group` | AvatarGroup 头像组 | ⚡ |
| 3 | `badge` | `b-badge` | Badge 徽章 | ⚡ |
| 4 | `calendar` | `b-calendar` | Calendar 日历 | ⚡ |
| 5 | `carousel` | `b-carousel` | Carousel 走马灯 | ⚡ |
| 6 | `carousel-item` | `b-carousel-item` | CarouselItem 走马灯项 | ⚡ |
| 7 | `check-tag` | `b-check-tag` | CheckTag 可选中标签 | ⚡ |
| 8 | `collapse` | `b-collapse` | Collapse 折叠面板 | ⚡ |
| 9 | `collapse-item` | `b-collapse-item` | CollapseItem 折叠面板项 | ⚡ |
| 10 | `empty` | `b-empty` | Empty 空状态 | ⚡ |
| 11 | `grid` | `b-grid` | Grid 全能表格 | ⚡ |
| 12 | `grid-column` | `b-grid-column` | GridColumn 全能表格列 | ⚡ |
| 13 | `image` | `b-image` | Image 图片（含预览） | ⚡ |
| 14 | `image-viewer` | `b-image-viewer` | ImageViewer 图片查看器 | ⚡ |
| 15 | `label-extend` | `b-label-extend` | LabelExtend 溢出提示文本 | ⚡ |
| 16 | `list` | `b-list` | List 列表（四模式） | ⚡ |
| 17 | `list-async` | `b-list-async` | ListAsync 异步列表 | ⚡ |
| 18 | `list-only` | `b-list-only` | ListOnly 同步列表 | ⚡ |
| 19 | `list-report` | `b-list-report` | ListReport 报表列表 | ⚡ |
| 20 | `pagination` | `b-pagination` | Pagination 分页 | ⚡ |
| 21 | `progress` | `b-progress` | Progress 进度条 | ⚡ |
| 22 | `skeleton` | `b-skeleton` | Skeleton 骨架屏 | ⚡ |
| 23 | `skeleton-item` | `b-skeleton-item` | SkeletonItem 骨架屏项 | ⚡ |
| 24 | `table-async` | `b-table-async` | TableAsync 远程分页表格 | ⚡ |
| 25 | `table-edit` | `b-table-edit` | TableEdit 可编辑表格 | ⚡ |
| 26 | `table-only` | `b-table-only` | TableOnly 传统协议表格 | ⚡ |
| 27 | `table-report` | `b-table-report` | TableReport 报表表格 | ⚡ |
| 28 | `tag` | `b-tag` | Tag 标签 | ⚡ |
| 29 | `timeline` | `b-timeline` | Timeline 时间线 | ⚡ |
| 30 | `timeline-item` | `b-timeline-item` | TimelineItem 时间线项 | ⚡ |
| 31 | `tree` | `b-tree` | Tree 树形控件 | ⚡ |
| 32 | `tree-table` | `b-tree-table` | TreeTable 树表格 | ⚡ |
| 33 | `tree-v2` | `b-tree-v2` | TreeV2 虚拟化树形控件 | ⚡ |

### 导航

| 序号 | 触发代码 | 组件标签 | 组件名称 | 符号 |
| :-- | :-- | :-- | :-- | :-: |
| 1 | `anchor` | `b-anchor` | Anchor 锚点 | ⚡ |
| 2 | `anchor-link` | `b-anchor-link` | AnchorLink 锚点链接 | ⚡ |
| 3 | `backtop` | `b-backtop` | Backtop 回到顶部 | ⚡ |
| 4 | `breadcrumb` | `b-breadcrumb` | Breadcrumb 面包屑 | ⚡ |
| 5 | `breadcrumb-item` | `b-breadcrumb-item` | BreadcrumbItem 面包屑项 | ⚡ |
| 6 | `dropdown` | `b-dropdown` | Dropdown 下拉菜单 | ⚡ |
| 7 | `dropdown-item` | `b-dropdown-item` | DropdownItem 下拉菜单项 | ⚡ |
| 8 | `dropdown-menu` | `b-dropdown-menu` | DropdownMenu 下拉菜单面板 | ⚡ |
| 9 | `menu` | `b-menu` | Menu 导航菜单 | ⚡ |
| 10 | `menu-item` | `b-menu-item` | MenuItem 菜单项 | ⚡ |
| 11 | `menu-item-group` | `b-menu-item-group` | MenuItemGroup 菜单分组 | ⚡ |
| 12 | `navigation` | `b-navigation` | Navigation 页面导航 | ⚡ |
| 13 | `step` | `b-step` | Step 步骤项 | ⚡ |
| 14 | `steps` | `b-steps` | Steps 步骤条 | ⚡ |
| 15 | `sub-menu` | `b-sub-menu` | SubMenu 子菜单 | ⚡ |

### 反馈

| 序号 | 触发代码 | 组件标签 | 组件名称 | 符号 |
| :-- | :-- | :-- | :-- | :-: |
| 1 | `alert` | `b-alert` | Alert 提示 | ⚡ |
| 2 | `dialog` | `b-dialog` | Dialog 对话框 | ⚡ |
| 3 | `drawer` | `b-drawer` | Drawer 抽屉 | ⚡ |
| 4 | `popconfirm` | `b-popconfirm` | Popconfirm 气泡确认框 | ⚡ |
| 5 | `popover` | `b-popover` | Popover 弹出框 | ⚡ |
| 6 | `tooltip` | `b-tooltip` | Tooltip 文字提示 | ⚡ |

### 全局配置

| 序号 | 触发代码 | 组件标签 | 组件名称 | 符号 |
| :-- | :-- | :-- | :-- | :-: |
| 1 | `config-provider` | `b-config-provider` | ConfigProvider 全局配置 | ⚡ |

### 其他

| 序号 | 触发代码 | 组件标签 | 组件名称 | 符号 |
| :-- | :-- | :-- | :-- | :-: |
| 1 | `watermark` | `b-watermark` | Watermark 水印 | ⚡ |

<br />

## 🛠 工程说明

| 路径 | 说明 |
| :-- | :-- |
| `src/extension.ts` | 插件入口：补全 / Hover 提供器（与组件数据解耦） |
| `src/components/` | **生成文件**：每个 `b-*` 标签一个数据文件 + `index.ts` 清单 |
| `src/beaver-directives.ts` | **生成文件**：指令数据（v-loading / v-auto-tip / v-highlight-query / v-infinite-scroll） |
| `snippets/template.code-snippets` | **生成文件**：96 条代码片段 |
| `data/` | 数据集快照（`beaver-ui@1.0.1.json`）与来源配置（`source.json`） |
| `scripts/generate-data.mjs` | 数据集 → 组件数据生成器 |
| `scripts/generate-snippets.mjs` | snippets 重生成器（上游迁移 + demo 提取） |
| `scripts/verify.mjs` | 离线全量核对（stub vscode 模块，`npm run verify`） |
| `src/test/` | 单元测试 + 真实编辑器集成测试（`yarn test`） |

> `src/components/`、`src/beaver-directives.ts`、`snippets/` 均为脚本产物，请勿手改；调整请改生成器或数据源。

<br />

## 📄 License

MIT —— 基于 Element Plus Snippets（noxussj，MIT）二次开发，感谢原作者。
