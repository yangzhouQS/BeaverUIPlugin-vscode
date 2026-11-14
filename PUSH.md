# 发布管理

- 市场管理页：https://marketplace.visualstudio.com/manage/publishers/yearrow
- 打包：`npx @vscode/vsce package`（产出 beaver-ui-<version>.vsix）
- 发布：`npx @vscode/vsce publish`（需 yearrow 发布者 PAT）
- 数据对齐：更新 `data/` 下数据集快照后执行 `npm run generate`，再走打包发布流程
