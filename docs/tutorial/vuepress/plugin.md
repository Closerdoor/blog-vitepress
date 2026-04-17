---
title: VuePress 插件
date: '2022-06-24'
category: tutorial
description: VuePress 插件安装、注册与排查的实操说明。
---

## 使用流程

### 1. 安装插件
```bash
npm install -D @vuepress/plugin-back-to-top
```

### 2. 注册插件

在 `docs/.vuepress/config.js` 中配置：

```js
module.exports = {
  plugins: ['@vuepress/back-to-top']
}
```

## 常见场景

- 返回顶部。
- 代码复制。
- 图片缩放。
- 搜索增强与评论系统接入。

## 排查方法

- 先确认插件版本是否与 VuePress 主版本匹配。
- 再检查插件名和配置项是否写对。
- 本地重启开发服务，确认配置已生效。

## 实践建议

- 先满足内容发布，再逐步增加插件。
- 插件越多，越要关注构建速度和主题兼容性。
