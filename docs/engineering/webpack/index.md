---
title: Webpack 笔记
author: Closerdoor
date: '2026-04-16'
---

`Webpack` 是经典的前端打包工具，适合管理模块依赖、静态资源处理和构建流程定制。

## 核心概念

- `entry`：入口文件。
- `output`：构建产物输出位置。
- `loader`：处理非 JavaScript 资源。
- `plugin`：扩展构建能力。
- `mode`：常见为 `development` 和 `production`。

## 最小配置示例

```js
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
}
```

## 开发服务器

```bash
npm install -D webpack-dev-server
```

```json
{
  "scripts": {
    "dev": "webpack serve --open --port 8888"
  }
}
```

## 常见 loader

- `style-loader`、`css-loader`：处理 CSS。
- `less-loader`、`sass-loader`：处理预处理器。
- `babel-loader`：转换较新的 JavaScript 语法。
- 资源模块或历史上的 `url-loader` / `file-loader`：处理图片和字体。

## 常见 plugin

`html-webpack-plugin` 常用来基于模板生成最终 HTML：

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
```

## 常见使用场景

- 打包多模块前端项目。
- 处理 CSS、图片、字体等静态资源。
- 配置代码分割、缓存与压缩优化。

## 使用建议

- 复杂项目优先拆分公共配置与环境配置。
- 新项目是否选择 Webpack，应结合团队历史资产与构建链路决定。
