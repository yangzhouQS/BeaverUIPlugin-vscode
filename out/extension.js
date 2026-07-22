"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLinePrefix = getLinePrefix;
exports.provideCompletions = provideCompletions;
exports.provideHoverMarkdown = provideHoverMarkdown;
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const template_1 = require("./utils/template");
const el_row_1 = __importDefault(require("./components/el-row"));
const el_col_1 = __importDefault(require("./components/el-col"));
const el_button_group_1 = __importDefault(require("./components/el-button-group"));
const el_button_1 = __importDefault(require("./components/el-button"));
const el_container_1 = __importDefault(require("./components/el-container"));
const el_header_1 = __importDefault(require("./components/el-header"));
const el_footer_1 = __importDefault(require("./components/el-footer"));
const el_aside_1 = __importDefault(require("./components/el-aside"));
const el_main_1 = __importDefault(require("./components/el-main"));
const el_icon_1 = __importDefault(require("./components/el-icon"));
const el_config_provider_1 = __importDefault(require("./components/el-config-provider"));
const el_link_1 = __importDefault(require("./components/el-link"));
const el_text_1 = __importDefault(require("./components/el-text"));
const el_scrollbar_1 = __importDefault(require("./components/el-scrollbar"));
const el_space_1 = __importDefault(require("./components/el-space"));
const el_autocomplete_1 = __importDefault(require("./components/el-autocomplete"));
const el_cascader_1 = __importDefault(require("./components/el-cascader"));
const el_cascader_panel_1 = __importDefault(require("./components/el-cascader-panel"));
const el_color_picker_panel_1 = __importDefault(require("./components/el-color-picker-panel"));
const el_color_picker_1 = __importDefault(require("./components/el-color-picker"));
const el_checkbox_button_1 = __importDefault(require("./components/el-checkbox-button"));
const el_checkbox_group_1 = __importDefault(require("./components/el-checkbox-group"));
const el_checkbox_1 = __importDefault(require("./components/el-checkbox"));
const el_date_picker_panel_1 = __importDefault(require("./components/el-date-picker-panel"));
const el_date_picker_1 = __importDefault(require("./components/el-date-picker"));
const el_form_item_1 = __importDefault(require("./components/el-form-item"));
const el_form_1 = __importDefault(require("./components/el-form"));
const el_input_otp_1 = __importDefault(require("./components/el-input-otp"));
const el_input_1 = __importDefault(require("./components/el-input"));
const el_input_number_1 = __importDefault(require("./components/el-input-number"));
const el_mention_1 = __importDefault(require("./components/el-mention"));
const el_radio_group_1 = __importDefault(require("./components/el-radio-group"));
const el_radio_button_1 = __importDefault(require("./components/el-radio-button"));
const el_radio_1 = __importDefault(require("./components/el-radio"));
const el_rate_1 = __importDefault(require("./components/el-rate"));
const el_select_1 = __importDefault(require("./components/el-select"));
const el_option_1 = __importDefault(require("./components/el-option"));
const el_option_group_1 = __importDefault(require("./components/el-option-group"));
const el_select_v2_1 = __importDefault(require("./components/el-select-v2"));
const el_slider_1 = __importDefault(require("./components/el-slider"));
const el_switch_1 = __importDefault(require("./components/el-switch"));
const el_time_picker_1 = __importDefault(require("./components/el-time-picker"));
const el_time_select_1 = __importDefault(require("./components/el-time-select"));
const el_transfer_1 = __importDefault(require("./components/el-transfer"));
const el_tree_select_1 = __importDefault(require("./components/el-tree-select"));
const el_upload_1 = __importDefault(require("./components/el-upload"));
const el_avatar_group_1 = __importDefault(require("./components/el-avatar-group"));
const el_avatar_1 = __importDefault(require("./components/el-avatar"));
const el_badge_1 = __importDefault(require("./components/el-badge"));
const el_calendar_1 = __importDefault(require("./components/el-calendar"));
const el_card_1 = __importDefault(require("./components/el-card"));
const el_carousel_1 = __importDefault(require("./components/el-carousel"));
const el_carousel_item_1 = __importDefault(require("./components/el-carousel-item"));
const el_collapse_item_1 = __importDefault(require("./components/el-collapse-item"));
const el_collapse_1 = __importDefault(require("./components/el-collapse"));
const el_descriptions_item_1 = __importDefault(require("./components/el-descriptions-item"));
const el_descriptions_1 = __importDefault(require("./components/el-descriptions"));
const el_empty_1 = __importDefault(require("./components/el-empty"));
const el_image_viewer_1 = __importDefault(require("./components/el-image-viewer"));
const el_image_1 = __importDefault(require("./components/el-image"));
const el_pagination_1 = __importDefault(require("./components/el-pagination"));
const el_progress_1 = __importDefault(require("./components/el-progress"));
const el_result_1 = __importDefault(require("./components/el-result"));
const el_skeleton_item_1 = __importDefault(require("./components/el-skeleton-item"));
const el_skeleton_1 = __importDefault(require("./components/el-skeleton"));
const el_table_column_1 = __importDefault(require("./components/el-table-column"));
const el_table_1 = __importDefault(require("./components/el-table"));
const el_table_v2_1 = __importDefault(require("./components/el-table-v2"));
const el_check_tag_1 = __importDefault(require("./components/el-check-tag"));
const el_tag_1 = __importDefault(require("./components/el-tag"));
const el_timeline_item_1 = __importDefault(require("./components/el-timeline-item"));
const el_timeline_1 = __importDefault(require("./components/el-timeline"));
const el_tour_1 = __importDefault(require("./components/el-tour"));
const el_tour_step_1 = __importDefault(require("./components/el-tour-step"));
const el_tree_1 = __importDefault(require("./components/el-tree"));
const el_tree_v2_1 = __importDefault(require("./components/el-tree-v2"));
const el_statistic_1 = __importDefault(require("./components/el-statistic"));
const el_countdown_1 = __importDefault(require("./components/el-countdown"));
const el_segmented_1 = __importDefault(require("./components/el-segmented"));
const el_affix_1 = __importDefault(require("./components/el-affix"));
const el_breadcrumb_item_1 = __importDefault(require("./components/el-breadcrumb-item"));
const el_breadcrumb_1 = __importDefault(require("./components/el-breadcrumb"));
const el_menu_item_group_1 = __importDefault(require("./components/el-menu-item-group"));
const el_menu_item_1 = __importDefault(require("./components/el-menu-item"));
const el_sub_menu_1 = __importDefault(require("./components/el-sub-menu"));
const el_menu_1 = __importDefault(require("./components/el-menu"));
const el_page_header_1 = __importDefault(require("./components/el-page-header"));
const el_step_1 = __importDefault(require("./components/el-step"));
const el_steps_1 = __importDefault(require("./components/el-steps"));
const el_tab_pane_1 = __importDefault(require("./components/el-tab-pane"));
const el_tabs_1 = __importDefault(require("./components/el-tabs"));
const el_alert_1 = __importDefault(require("./components/el-alert"));
const el_dialog_1 = __importDefault(require("./components/el-dialog"));
const el_drawer_1 = __importDefault(require("./components/el-drawer"));
const el_popconfirm_1 = __importDefault(require("./components/el-popconfirm"));
const el_popover_1 = __importDefault(require("./components/el-popover"));
const el_tooltip_1 = __importDefault(require("./components/el-tooltip"));
const el_divider_1 = __importDefault(require("./components/el-divider"));
const el_backtop_1 = __importDefault(require("./components/el-backtop"));
const el_dropdown_item_1 = __importDefault(require("./components/el-dropdown-item"));
const el_dropdown_menu_1 = __importDefault(require("./components/el-dropdown-menu"));
const el_dropdown_1 = __importDefault(require("./components/el-dropdown"));
const el_input_tag_1 = __importDefault(require("./components/el-input-tag"));
const el_anchor_link_1 = __importDefault(require("./components/el-anchor-link"));
const el_anchor_1 = __importDefault(require("./components/el-anchor"));
const el_watermark_1 = __importDefault(require("./components/el-watermark"));
const el_splitter_panel_1 = __importDefault(require("./components/el-splitter-panel"));
const el_splitter_1 = __importDefault(require("./components/el-splitter"));
/**
 * 定义支持的组件（模块级常量，避免每次触发都重建数组）
 * 注意：名称更长、更具体的组件要排在前面，避免被前缀相同的组件抢先匹配
 */
const components = [
    el_button_group_1.default,
    el_button_1.default,
    el_container_1.default,
    el_header_1.default,
    el_footer_1.default,
    el_aside_1.default,
    el_main_1.default,
    el_icon_1.default,
    el_config_provider_1.default,
    el_link_1.default,
    el_text_1.default,
    el_scrollbar_1.default,
    el_space_1.default,
    el_autocomplete_1.default,
    el_cascader_panel_1.default,
    el_cascader_1.default,
    el_color_picker_panel_1.default,
    el_color_picker_1.default,
    el_checkbox_button_1.default,
    el_checkbox_group_1.default,
    el_checkbox_1.default,
    el_date_picker_panel_1.default,
    el_date_picker_1.default,
    el_form_item_1.default,
    el_form_1.default,
    el_input_number_1.default,
    el_input_tag_1.default,
    el_input_otp_1.default,
    el_input_1.default,
    el_mention_1.default,
    el_radio_group_1.default,
    el_radio_button_1.default,
    el_radio_1.default,
    el_rate_1.default,
    el_select_v2_1.default,
    el_select_1.default,
    el_option_group_1.default,
    el_option_1.default,
    el_collapse_item_1.default,
    el_collapse_1.default,
    el_row_1.default,
    el_col_1.default,
    el_slider_1.default,
    el_switch_1.default,
    el_time_picker_1.default,
    el_time_select_1.default,
    el_transfer_1.default,
    el_tree_select_1.default,
    el_upload_1.default,
    el_avatar_group_1.default,
    el_avatar_1.default,
    el_badge_1.default,
    el_calendar_1.default,
    el_card_1.default,
    el_carousel_item_1.default,
    el_carousel_1.default,
    el_descriptions_item_1.default,
    el_descriptions_1.default,
    el_empty_1.default,
    el_image_viewer_1.default,
    el_image_1.default,
    el_pagination_1.default,
    el_progress_1.default,
    el_result_1.default,
    el_skeleton_item_1.default,
    el_skeleton_1.default,
    el_table_v2_1.default,
    el_table_column_1.default,
    el_table_1.default,
    el_check_tag_1.default,
    el_tag_1.default,
    el_timeline_item_1.default,
    el_timeline_1.default,
    el_tour_step_1.default,
    el_tour_1.default,
    el_tree_1.default,
    el_tree_v2_1.default,
    el_statistic_1.default,
    el_countdown_1.default,
    el_segmented_1.default,
    el_affix_1.default,
    el_anchor_link_1.default,
    el_anchor_1.default,
    el_backtop_1.default,
    el_breadcrumb_item_1.default,
    el_breadcrumb_1.default,
    el_dropdown_item_1.default,
    el_dropdown_menu_1.default,
    el_dropdown_1.default,
    el_menu_item_group_1.default,
    el_menu_item_1.default,
    el_sub_menu_1.default,
    el_menu_1.default,
    el_page_header_1.default,
    el_steps_1.default,
    el_step_1.default,
    el_tab_pane_1.default,
    el_tabs_1.default,
    el_alert_1.default,
    el_dialog_1.default,
    el_drawer_1.default,
    el_popconfirm_1.default,
    el_popover_1.default,
    el_tooltip_1.default,
    el_divider_1.default,
    el_watermark_1.default,
    el_splitter_panel_1.default,
    el_splitter_1.default
];
/**
 * Element Plus 官方指令（可用于任意标签）
 */
const directives = [
    {
        key: 'v-loading',
        describe: 'Loading 加载指令，加载数据时显示加载动画',
        type: 'boolean / object',
        link: 'https://element-plus.org/zh-CN/component/loading.html'
    },
    {
        key: 'element-loading-text',
        describe: '显示在加载图标下方的加载文案',
        type: 'string',
        link: 'https://element-plus.org/zh-CN/component/loading.html'
    },
    {
        key: 'element-loading-spinner',
        describe: '自定义加载图标',
        type: 'string',
        link: 'https://element-plus.org/zh-CN/component/loading.html'
    },
    {
        key: 'element-loading-svg',
        describe: '自定义加载图标（同 element-loading-spinner）',
        type: 'string',
        link: 'https://element-plus.org/zh-CN/component/loading.html'
    },
    {
        key: 'element-loading-svg-view-box',
        describe: '设置加载 svg 元素的 viewBox 属性',
        type: 'string',
        link: 'https://element-plus.org/zh-CN/component/loading.html'
    },
    {
        key: 'element-loading-background',
        describe: '加载遮罩的背景色',
        type: 'string',
        link: 'https://element-plus.org/zh-CN/component/loading.html'
    },
    {
        key: 'element-loading-custom-class',
        describe: '自定义加载类名',
        type: 'string',
        link: 'https://element-plus.org/zh-CN/component/loading.html'
    },
    {
        key: 'v-infinite-scroll',
        describe: 'Infinite Scroll 无限滚动指令，滚动至底部时加载更多数据',
        type: 'function',
        link: 'https://element-plus.org/zh-CN/component/infinite-scroll.html'
    },
    {
        key: 'infinite-scroll-disabled',
        describe: '是否禁用无限滚动',
        type: 'boolean',
        default: 'false',
        link: 'https://element-plus.org/zh-CN/component/infinite-scroll.html'
    },
    {
        key: 'infinite-scroll-delay',
        describe: '节流延迟（毫秒）',
        type: 'number',
        default: '200',
        link: 'https://element-plus.org/zh-CN/component/infinite-scroll.html'
    },
    {
        key: 'infinite-scroll-distance',
        describe: '触发加载的距离阈值（像素）',
        type: 'number',
        default: '0',
        link: 'https://element-plus.org/zh-CN/component/infinite-scroll.html'
    },
    {
        key: 'infinite-scroll-immediate',
        describe: '是否立即执行加载方法，以防初始状态下内容撑不满容器',
        type: 'boolean',
        default: 'true',
        link: 'https://element-plus.org/zh-CN/component/infinite-scroll.html'
    }
];
/**
 * 提取行前缀：截取光标所在行、光标之前最近一个未闭合标签的内容
 */
function getLinePrefix(document, position) {
    const text = document.lineAt(position).text.substring(0, position.character);
    const match = text.match(/<[/]?[a-zA-Z][a-zA-Z0-9-]*[^<>]*$/);
    return match ? match[0] : text;
}
/**
 * 生成属性 / 事件 / 指令的 CompletionItem 列表
 * sortOffset 用于把指令排在组件属性之后
 */
const renderCompletionItems = (data, isEvent = false, sortOffset = 0) => {
    return data.map((item, index) => {
        const key = isEvent ? item.key.replace('@', '') : item.key;
        const instance = new vscode.CompletionItem(`${item.key}⚡`, vscode.CompletionItemKind.Property);
        let insertText = '';
        // 如果是事件，不需要补前缀（@ 已由用户输入）
        if (isEvent) {
            insertText = key;
        }
        // 如果是属性，则要判断补前缀
        if (!isEvent) {
            if (String(item.type).startsWith('string')) {
                insertText = key;
            }
            // 字符串以外，都视为 v-bind
            if (String(item.type).startsWith('string') === false) {
                insertText = ':' + key;
            }
            // 指令和 v-model 系列不需要补前缀
            if (key.startsWith('v-')) {
                insertText = key;
            }
        }
        instance.insertText = new vscode.SnippetString(insertText + '="${1:value}"');
        // 补零排序，避免字典序导致 "10" 排在 "2" 前面
        instance.sortText = String(sortOffset + index).padStart(3, '0');
        instance.documentation = new vscode.MarkdownString((0, template_1.markdownString)(item, isEvent ? '事件' : '属性'));
        return instance;
    });
};
/**
 * 生成属性枚举值的 CompletionItem 列表
 */
const renderValueItems = (component, item) => {
    return item.values.map((value, index) => {
        const instance = new vscode.CompletionItem(`${value}⚡`, vscode.CompletionItemKind.Value);
        instance.insertText = value;
        instance.sortText = String(index).padStart(3, '0');
        instance.detail = `${component.key} 组件 ${item.key} 属性的可选值`;
        instance.documentation = new vscode.MarkdownString((0, template_1.markdownString)(item));
        return instance;
    });
};
/**
 * 生成插槽名的 CompletionItem 列表
 */
const renderSlotItems = (component) => {
    return (component.slot || []).map((item, index) => {
        const instance = new vscode.CompletionItem(`#${item.key}⚡`, vscode.CompletionItemKind.Field);
        instance.insertText = item.key;
        instance.filterText = item.key;
        instance.sortText = String(index).padStart(3, '0');
        instance.documentation = new vscode.MarkdownString((0, template_1.markdownString)(item, '插槽'));
        return instance;
    });
};
/**
 * 根据行前缀计算代码提示，返回 CompletionItem 列表（导出以便单元测试）
 */
function provideCompletions(linePrefix) {
    for (const component of components) {
        // 光标必须处于该组件未闭合的标签内
        const inTag = new RegExp(`<${component.key}(?=[\\s/>]|$)[^<>]*$`, 'i').test(linePrefix);
        if (!inTag) {
            continue;
        }
        // 引号内：属性枚举值 / slot 插槽值提示
        const valueMatch = linePrefix.match(/\s:?([a-zA-Z0-9-]+)="[^"]*$/);
        if (valueMatch) {
            const attrName = valueMatch[1];
            if (attrName === 'slot' && component.slot) {
                return renderSlotItems(component);
            }
            const item = component.attr.find((x) => x.key === attrName);
            if (item && item.values && item.values.length) {
                return renderValueItems(component, item);
            }
            // 引号内不触发属性提示
            return undefined;
        }
        // 输入 @：事件提示
        if (/@$/.test(linePrefix)) {
            return renderCompletionItems(component.event, true);
        }
        // 输入 #：插槽提示
        if (/#$/.test(linePrefix) && component.slot) {
            return renderSlotItems(component);
        }
        // 其余情况：属性提示（附带官方指令，指令排序在组件属性之后）
        return [...renderCompletionItems(component.attr), ...renderCompletionItems(directives, false, 900)];
    }
    // 非组件标签内：仅提示官方指令
    if (/<[a-zA-Z][a-zA-Z0-9-]*(?=[\s/>]|$)[^<>]*$/.test(linePrefix)) {
        return renderCompletionItems(directives);
    }
    return undefined;
}
/**
 * 根据行前缀和悬停单词计算 Hover 文档（导出以便单元测试）
 */
function provideHoverMarkdown(linePrefix, word) {
    for (const component of components) {
        const inTag = new RegExp(`<${component.key}(?=[\\s/>]|$)[^<>]*$`, 'i').test(linePrefix);
        const inCloseTag = new RegExp(`</${component.key}$`, 'i').test(linePrefix);
        if (!inTag && !inCloseTag) {
            continue;
        }
        // 悬停在标签名上
        if (new RegExp(`</?${component.key}$`, 'i').test(linePrefix)) {
            const anyItem = [...component.attr, ...component.event, ...(component.slot || [])][0];
            const link = anyItem && anyItem.link ? anyItem.link.split('#')[0] : 'https://element-plus.org/zh-CN/';
            return new vscode.MarkdownString(`## <${component.key}> 组件\n\n**文档链接**: ${link}\n\n<br />\n`);
        }
        const clean = word.replace(/^[:@#]/, '');
        const attrItem = component.attr.find((x) => x.key === clean);
        if (attrItem) {
            return new vscode.MarkdownString((0, template_1.markdownString)(attrItem, '属性'));
        }
        const eventItem = component.event.find((x) => x.key === '@' + clean);
        if (eventItem) {
            return new vscode.MarkdownString((0, template_1.markdownString)(eventItem, '事件'));
        }
        const slotItem = (component.slot || []).find((x) => x.key === clean);
        if (slotItem) {
            return new vscode.MarkdownString((0, template_1.markdownString)(slotItem, '插槽'));
        }
        return undefined;
    }
    return undefined;
}
function activate(context) {
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(['html', 'vue'], {
        provideCompletionItems(document, position) {
            return provideCompletions(getLinePrefix(document, position));
        }
    }, '@', ' ', '#', '"'), vscode.languages.registerHoverProvider(['html', 'vue'], {
        provideHover(document, position) {
            const range = document.getWordRangeAtPosition(position, /[a-zA-Z0-9-]+/);
            if (!range) {
                return undefined;
            }
            const word = document.getText(range);
            const linePrefix = document.lineAt(position).text.substring(0, range.start.character);
            const markdown = provideHoverMarkdown(linePrefix, word);
            if (!markdown) {
                return undefined;
            }
            return new vscode.Hover(markdown);
        }
    }));
}
function deactivate() { }
//# sourceMappingURL=extension.js.map