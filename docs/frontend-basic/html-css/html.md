---
title: HTML 基础
author: Closerdoor
date: '2021-12-12'
---

## 基本文档结构

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body></body>
</html>
```

## head

`head` 用于放置页面元信息：

- `meta`
- `title`
- `link`
- `script`

## `DOCTYPE`

`<!doctype html>` 用于告诉浏览器当前文档按 HTML5 标准模式解析。

## body

`body` 是页面可见内容区域。

## 常见文本标签

- `h1` 到 `h6`
- `p`
- `strong`、`em`
- `del`、`ins`
- `span`

## 链接与列表

```html
<a href="/about" target="_blank">About</a>

<ul>
  <li>Item</li>
</ul>
```

## 元素显示类型

- 行内元素：`a`、`span`、`strong`、`img`。
- 块级元素：`div`、`p`、`ul`、`li`、`h1` 到 `h6`。
- `inline-block`：既可同行显示，也可设置宽高。

## `src` 与 `href`

- `src` 会把资源本身引入当前标签位置，如 `script`、`img`。
- `href` 用于建立当前文档与目标资源的关联，如 `link`、`a`。

## 转义字符

| 字符 | 转义 |
| --- | --- |
| `<` | `&lt;` |
| `>` | `&gt;` |
| `&` | `&amp;` |
| 空格 | `&nbsp;` |

## 注意事项

- 页面语言应设置 `lang`。
- 标题层级应有语义，不要只为了样式使用标题标签。

## 总结

HTML 的关键不是标签数量，而是结构语义和可访问性。
