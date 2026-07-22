export const markdownString = (item: any, label: string = '属性') => {
    let result = `## ${item.key} ${label}\n`;

    if (item.describe) {
        result += `**描述**: ${item.describe}\n\n`;
    }

    if (item.type) {
        result += `**类型**: \`${item.type}\`\n\n`;
    }

    if (item.default) {
        result += `**默认值**: \`${item.default}\`\n\n`;
    }

    if (item.values && item.values.length) {
        result += `**可选值**: ${item.values.map((x: string) => `\`${x}\``).join(' / ')}\n\n`;
    }

    if (item.link) {
        result += `**文档链接**: ${item.link}\n\n`;
    }

    return result + '<br />\n';
};
