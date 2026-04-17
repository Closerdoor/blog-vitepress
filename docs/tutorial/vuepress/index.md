---
title: VuePress 博客搭建
date: '2022-06-24'
category: tutorial
description: 从初始化到首页配置的 VuePress 实操教程。
---

## 适用场景

- 需要快速搭建文档站或个人博客。
- 内容以 Markdown 为主，希望默认主题开箱即用。

## 初始化步骤

### 1. 安装依赖
```bash
npm install -D vuepress@1
```

### 2. 准备目录
```text
docs/
  README.md
  .vuepress/
    config.js
```

### 3. 添加脚本
```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

## 首页配置

在 `docs/README.md` 中写入 frontmatter：

```md
---
home: true
lang: zh-CN
heroText: 我的博客
heroImage: /logo.jpg
actionText: 开始阅读
actionLink: /question/
features:
  - title: 笔记
    details: 记录常用知识点与经验。
  - title: 项目
    details: 沉淀项目方案与复盘。
footer: Copyright © 2022-present
---
```

## 本地运行

```bash
npm run docs:dev
```

## 构建发布

```bash
npm run docs:build
```

## 常见问题

- 静态资源默认放在 `docs/.vuepress/public`。
- 首页按钮路径默认可省略 `README.md`。
- 如果只是写内容站，先用默认主题即可，避免一开始过度定制。
