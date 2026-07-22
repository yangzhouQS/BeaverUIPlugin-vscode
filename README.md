<p align="center">
  <img width="300px" src="https://user-images.githubusercontent.com/10731096/95823103-9ce15780-0d5f-11eb-8010-1bd1b5910d4f.png">
</p>

<p align="center">
    <img src="https://img.shields.io/badge/Discord-%23000?style=flat-square&logo=discord&logoColor=%235865F2">
    <img src="https://img.shields.io/badge/vscode-%23000?style=flat-square&logo=visualstudio&logoColor=%23007ACC">
    <img src="https://img.shields.io/badge/noxussj2-%23000?style=flat-square&logo=wechat&logoColor=%2307C160">
</p>

# Element Plus Snippets

🚀 Element Plus Snippets 是一个为 Element Plus 组件库提供代码提示的 VSCode 插件，帮助你快速开发 Vue 组件，提高编码效率。另外提供博主的学习笔记：https://note.noxussj.top/?s=ep

插件数据已与 **Element Plus 2.14.3**（当前最新版）官方文档同步，覆盖全部 **108 个组件** 的属性与事件提示，以及 **81 个代码片段模板**。

## ✨ 插件特性

-   支持 `Element Plus ⚡` 组件代码片段：为每个组件提供代码片段提示。

-   属性与事件提示：在组件中输入空格或 @ 符号，提供相关的属性或事件提示。

-   枚举值提示：在 `type="` 等枚举属性的引号内，自动给出 `primary`、`success` 等可选值。

-   插槽提示：在组件标签中输入 `#` 或 `slot="` 时，提供插槽名提示。

-   指令提示：任意标签内均可提示 `v-loading`、`v-infinite-scroll` 等官方指令及其配套属性。

-   Hover 文档：鼠标悬停在组件标签名、属性、事件或插槽名上，即可查看中文说明、类型、默认值与官方文档链接。

-   智能属性前缀：字符串类型属性直接插入 `key="value"`，非字符串类型自动插入 `:key="value"`（即 `v-bind` 简写），`v-model` 与 `v-` 指令自动识别。

-   详尽的悬浮文档：每条提示都附带中文描述、类型、默认值、可选值以及官方文档链接。

-   API 文档快速跳转：支持快速跳转到对应的组件 API 文档，查阅官方文档更方便。

-   与官方同步：组件属性、事件数据基于 Element Plus 2.14.3 官方 `web-types` 与中文文档校对，包含 `el-splitter`、`el-input-otp`、`el-avatar-group` 等新组件。

-   兼容多种文件类型：原生支持 `html` 与 `vue` 两种语言模式（`.vue` 文件无需额外配置）。

-   使用前必须要检查 Visual Code 的版本号是否大于 `1.46.0`

<br />

## 📦 安装插件

**方式一：应用市场安装（推荐）**

在 VSCode 扩展市场中搜索 `Element Plus`，选择发布者为 `noxussj` 的插件进行安装。

**方式二：VSIX 手动安装**

下载仓库中的 `.vsix` 安装包，然后在扩展面板右上角选择 `从 VSIX 安装...`。

<br />

## 🔧 使用说明

### 组件代码片段提示

✅ 例如在 `.vue` 文件中输入 `el-` 时就会出现一系列 `Element Plus` 组件的代码提示，选中后自动展开为完整的组件模板。

<img src="https://note.noxussj.top/element-plus/1.png">

<br />

### 属性提示

✅ 在组件标签中输入 `空格`、或者手动触发属性提示。

-   字符串类型属性会插入 `size="value"` 形式。
-   非字符串类型（boolean、number、array、object 等）会自动带上 `:` 前缀，即插入 `:span="6"` 形式。
-   绑定值属性会插入 `v-model="value"` 形式。

<img src="https://note.noxussj.top/element-plus/2.png">

<br />

### 事件提示

✅ 在组件标签中输入 `@` 触发事件提示，例如 `@change`、`@click`，选中后插入 `change="handler"` 形式。

<img src="https://note.noxussj.top/element-plus/3.png">

<br />

### 枚举值提示

✅ 对于 `type`、`size`、`effect` 等枚举类属性，在引号内会自动给出可选值，例如输入 `<el-button type="` 后会提示 `primary`、`success`、`warning`、`danger`、`info` 等候选。

<br />

### 插槽提示

✅ 在组件标签中输入 `#`（或编写 `slot="`）时，会给出该组件支持的插槽名，例如 `<el-input #` 会提示 `prefix`、`suffix`、`prepend`、`append`。

<br />

### 指令提示

✅ 在任意标签（包括原生标签和组件标签）中输入空格后，均可提示官方指令：`v-loading`、`v-infinite-scroll` 以及 `element-loading-*`、`infinite-scroll-*` 配套属性。

<br />

### Hover 文档

✅ 鼠标悬停在组件标签名、属性、事件或插槽名上，即可查看对应的中文文档卡片，内容包括：

-   **描述**：属性的中文说明（含版本信息，如 `2.13.0版本开始支持`）。
-   **类型**：如 `string`、`boolean`、`enum`、`string / Component`。
-   **默认值**：属性的默认值。
-   **可选值**：枚举属性的全部候选值。
-   **文档链接**：点击可直接跳转到 Element Plus 官方中文文档对应章节。

<br />

## 📌 支持的组件

以下是本插件支持的 `Element Plus` 组件代码片段。除下表列出的代码片段外，**全部 108 个组件（含 `el-table-column`、`el-option`、`el-form-item`、`el-menu-item` 等子组件）均支持属性 & 事件提示**。

### Basic 基础组件

| 序号 |       触发代码       | 组件名称                   | 符号 |
| :--- | :------------------: | :------------------------- | :--- |
| 1    |     `el-button`      | Button 按钮                | ⚡   |
| 2    |  `el-button-group`   | Button Group 按钮组        | ⚡   |
| 3    |    `el-container`    | Container 布局容器         | ⚡   |
| 4    |      `el-icon`       | Icon 图标                  | ⚡   |
| 5    |       `el-row`       | Row 布局                   | ⚡   |
| 6    |       `el-col`       | Col 布局                   | ⚡   |
| 7    |      `el-link`       | Link 链接                  | ⚡   |
| 8    |      `el-text`       | Text 文本                  | ⚡   |
| 9    |    `el-scrollbar`    | Scrollbar 滚动条           | ⚡   |
| 10   |      `el-space`      | Space 间距                 | ⚡   |
| 11   | `el-config-provider` | Config Provider 全局配置 🆕 | ⚡   |

### Form 表单组件

| 序号 |         触发代码         | 组件名称                             | 符号 |
| :--- | :----------------------: | :----------------------------------- | :--- |
| 1    |     `el-autocomplete`    | Autocomplete 自动补全输入框          | ⚡   |
| 2    |       `el-cascader`      | Cascader 级联选择器                  | ⚡   |
| 3    |   `el-cascader-panel`    | Cascader Panel 级联面板              | ⚡   |
| 4    |       `el-checkbox`      | Checkbox 多选框                      | ⚡   |
| 5    |   `el-checkbox-group`    | Checkbox Group 多选框组              | ⚡   |
| 6    |  `el-checkbox-button` 🆕 | Checkbox Button 按钮样式多选框       | ⚡   |
| 7    |     `el-color-picker`    | ColorPicker 颜色选择器               | ⚡   |
| 8    | `el-color-picker-panel` 🆕 | ColorPicker Panel 颜色选择器面板   | ⚡   |
| 9    |     `el-date-picker`     | Date Picker 日期选择器               | ⚡   |
| 10   |  `el-date-picker-panel` 🆕 | Date Picker Panel 日期选择器面板   | ⚡   |
| 11   |         `el-form`        | Form 表单                            | ⚡   |
| 12   |      `el-form-item`      | Form Item 表单项                     | ⚡   |
| 13   |        `el-input`        | Input 输入框                         | ⚡   |
| 14   |    `el-input-number`     | Input Number 数字输入框              | ⚡   |
| 15   |      `el-input-tag`      | InputTag 标签输入框                  | ⚡   |
| 16   |      `el-input-otp` 🆕   | Input OTP 一次性密码输入框           | ⚡   |
| 17   |       `el-mention`       | Mention 提及                         | ⚡   |
| 18   |        `el-radio`        | Radio 单选框                         | ⚡   |
| 19   |        `el-rate`         | Rate 评分                            | ⚡   |
| 20   |        `el-select`       | Select 选择器                        | ⚡   |
| 21   |      `el-select-v2`      | Virtualized Select 虚拟化选择器      | ⚡   |
| 22   |        `el-slider`       | Slider 滑块                          | ⚡   |
| 23   |        `el-switch`       | Switch 开关                          | ⚡   |
| 24   |     `el-time-picker`     | TimePicker 时间选择器                | ⚡   |
| 25   |     `el-time-select`     | TimeSelect 时间选择                  | ⚡   |
| 26   |       `el-transfer`      | Transfer 穿梭框                      | ⚡   |
| 27   |     `el-tree-select`     | TreeSelect 树形选择                  | ⚡   |
| 28   |        `el-upload`       | Upload 上传                          | ⚡   |

### Data 数据展示

| 序号 |       触发代码      | 组件名称                     | 符号 |
| :--- | :-----------------: | :--------------------------- | :--- |
| 1    |     `el-avatar`     | Avatar 头像                  | ⚡   |
| 2    |  `el-avatar-group` 🆕 | Avatar Group 头像组        | ⚡   |
| 3    |     `el-badge`      | Badge 徽章                   | ⚡   |
| 4    |    `el-calendar`    | Calendar 日历                | ⚡   |
| 5    |      `el-card`      | Card 卡片                    | ⚡   |
| 6    |    `el-carousel`    | Carousel 走马灯              | ⚡   |
| 7    |    `el-collapse`    | Collapse 折叠面板            | ⚡   |
| 8    |  `el-descriptions`  | Descriptions 描述列表        | ⚡   |
| 9    |     `el-empty`      | Empty 空状态                 | ⚡   |
| 10   |     `el-image`      | Image 图片                   | ⚡   |
| 11   |   `el-pagination`   | Pagination 分页              | ⚡   |
| 12   |    `el-progress`    | Progress 进度条              | ⚡   |
| 13   |     `el-result`     | Result 结果                  | ⚡   |
| 14   |    `el-skeleton`    | Skeleton 骨架屏              | ⚡   |
| 15   |     `el-table`      | Table 表格                   | ⚡   |
| 16   |   `el-table-v2`     | Virtualized Table 虚拟化表格 | ⚡   |
| 17   |      `el-tag`       | Tag 标签                     | ⚡   |
| 18   |    `el-timeline`    | Timeline 时间线              | ⚡   |
| 19   |      `el-tour`      | Tour 漫游式引导              | ⚡   |
| 20   |      `el-tree`      | Tree 树形控件                | ⚡   |
| 21   |    `el-tree-v2`     | Tree V2 虚拟化树形控件       | ⚡   |
| 22   |   `el-statistic`    | Statistic 统计组件           | ⚡   |
| 23   |    `el-countdown` 🆕 | Countdown 倒计时            | ⚡   |
| 24   |   `el-segmented`    | Segmented 分段控制器         | ⚡   |

### Navigation 导航

| 序号 |     触发代码     | 组件名称          | 符号 |
| :--- | :--------------: | :---------------- | :--- |
| 1    |    `el-affix`    | Affix 固钉        | ⚡   |
| 2    |   `el-anchor`    | Anchor 锚点       | ⚡   |
| 3    |   `el-backtop`   | Backtop 回到顶部  | ⚡   |
| 4    | `el-breadcrumb`  | Breadcrumb 面包屑 | ⚡   |
| 5    |  `el-dropdown`   | Dropdown 下拉菜单 | ⚡   |
| 6    |    `el-menu`     | Menu 菜单         | ⚡   |
| 7    | `el-page-header` | Page Header 页头  | ⚡   |
| 8    |    `el-steps`    | Steps 步骤条      | ⚡   |
| 9    |    `el-tabs`     | Tabs 标签页       | ⚡   |

### Feedback 反馈组件

| 序号 |    触发代码     | 组件名称              | 符号 |
| :--- | :-------------: | :-------------------- | :--- |
| 1    |   `el-alert`    | Alert 提示            | ⚡   |
| 2    |   `el-dialog`   | Dialog 对话框         | ⚡   |
| 3    |   `el-drawer`   | Drawer 抽屉           | ⚡   |
| 4    | `el-popconfirm` | Popconfirm 气泡确认框 | ⚡   |
| 5    |  `el-popover`   | Popover 弹出框        | ⚡   |
| 6    |  `el-tooltip`   | Tooltip 文字提示      | ⚡   |

### Others 其他

| 序号 |    触发代码    | 组件名称            | 符号 |
| :--- | :------------: | :------------------ | :--- |
| 1    |  `el-divider`  | Divider 分割线      | ⚡   |
| 2    | `el-watermark` | Watermark 水印      | ⚡   |
| 3    |  `el-splitter` 🆕 | Splitter 分割面板 | ⚡   |

> 🆕 表示本次按 Element Plus 最新版新增的组件。除表格外，以下子组件同样支持完整的属性 & 事件提示：`el-header`、`el-aside`、`el-main`、`el-footer`、`el-option`、`el-option-group`、`el-radio-group`、`el-radio-button`、`el-check-tag`、`el-collapse-item`、`el-descriptions-item`、`el-image-viewer`、`el-skeleton-item`、`el-table-column`、`el-timeline-item`、`el-tour-step`、`el-breadcrumb-item`、`el-dropdown-menu`、`el-dropdown-item`、`el-menu-item`、`el-menu-item-group`、`el-sub-menu`、`el-step`、`el-tab-pane`、`el-anchor-link`、`el-splitter-panel` 等。

<br />

## ❓ 常见问题

**1. 为什么没有提示？**

请确认当前文件的语言模式为 `html` 或 `vue`（查看 VSCode 右下角的语言模式标识）。`.vue` 文件建议安装 [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 插件，本插件与其完全兼容。

**2. 事件提示没有触发？**

事件提示需要在组件标签内输入 `@` 符号触发，例如 `<el-button @`。属性提示通过 `空格` 触发，插槽提示通过 `#` 触发，枚举值提示在引号 `"` 内自动触发。

**3. 支持哪些 Element Plus 版本？**

提示数据基于 Element Plus `2.14.3` 官方文档整理，带有版本标记的属性（如 `2.13.0版本开始支持`）会在描述中注明，低版本项目使用时请注意甄别。

<br />
