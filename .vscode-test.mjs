import { defineConfig } from '@vscode/test-cli';

export default defineConfig({
    files: 'out/test/**/*.test.js',
    mocha: {
        // 集成测试需等待插件激活，默认 2s 不够
        timeout: 10000,
    },
});
