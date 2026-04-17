---
title: Meta 标签
author: Closerdoor
date: '2021-12-12'
---

## 是什么

`meta` 用于描述页面元信息，虽然不会直接显示在页面中，但会影响浏览器解析、搜索引擎抓取和分享预览。

## 常用标签

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="页面描述">
<meta name="keywords" content="前端, JavaScript, CSS">
<meta name="author" content="Closerdoor">
<meta name="robots" content="index,follow">
```

## http-equiv

少数场景可通过 `http-equiv` 模拟部分响应头，但现代项目里常规控制更适合直接在服务端配置。

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="refresh" content="5;url=/login">
```

## viewport

移动端最常见：

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

## 使用建议

- `charset` 尽量放在前面。
- 页面描述应简洁准确，避免堆砌关键词。
- 缓存、Cookie 等行为不要依赖 `meta` 兜底，优先服务端控制。

## 总结

`meta` 的价值在于页面元信息声明，最常用的是编码、视口、描述与搜索策略。
