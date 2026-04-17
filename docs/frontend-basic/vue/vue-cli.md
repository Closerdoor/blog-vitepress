---
title: Vue CLI
author: Closerdoor
date: '2026-04-17'
---

## 创建项目

先安装 CLI：

```bash
npm install -g @vue/cli
```

创建项目：

```bash
vue create my-project
```

常见交互项：

- 选择默认模板或手动选择特性。
- 选择 Babel、Router、Linter 等能力。
- Router 是否使用 history 模式。
- 配置写入 `package.json` 还是独立配置文件。

## 图形化界面

```bash
vue ui
```

适合可视化创建项目、安装插件和执行 `serve` / `build` 任务。

## 本地开发配置

更推荐在项目根目录创建 `vue.config.js`：

```js
module.exports = {
  devServer: {
    open: true,
    port: 8878,
  },
};
```

## 目录结构

- `public`：静态资源。
- `src`：业务源码。
- `src/components`：通用组件。
- `src/views`：页面级组件。
- `src/main.js`：应用入口。
- `App.vue`：根组件。

## 说明

- Vue CLI 适合维护历史项目或需要 Webpack 深度定制的场景。
- 新项目通常更常见的是 Vite，但 Vue CLI 的项目结构和概念仍值得掌握。
