---
title: NPM 基础
author: Closerdoor
date: '2026-04-17'
---

## 基本概念

NPM 全称 `Node Package Manager`，是 Node.js 默认的包管理工具。

## 常用命令

```bash
npm -v
npm install
npm install axios
npm install -D vite
npm install -g typescript
npm update <package>
npm root
npm root -g
```

## 依赖类型

- `dependencies`：生产环境依赖。
- `devDependencies`：开发环境依赖。

```bash
npm install axios
npm install -D eslint
```

## `package.json`

项目依赖、脚本和元信息通常都记录在 `package.json` 中。

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}
```

## 镜像与源

```bash
npm config list
npm config set registry https://registry.npmmirror.com/
```

如果需要发布自己的包，再切回官方源更稳妥。

## 使用建议

- 优先在项目内安装依赖，减少全局环境差异。
- 提交项目时不要把 `node_modules` 一起提交到 Git。
- 安装工具链时，先区分是否真的需要全局命令。
