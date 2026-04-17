---
title: 移动端适配方案
author: Closerdoor
date: '2021-12-12'
---

## 常见方案

### rem

通过设置根字号实现整页比例缩放，适合基于设计稿统一换算的项目。

### vw / vh

- `1vw` 等于视口宽度的 `1%`
- `1vh` 等于视口高度的 `1%`

```css
.banner {
  width: 100vw;
  height: 40vw;
}
```

### 弹性布局

现代移动端页面通常以 `flex`、`grid`、百分比和 `min/max` 约束为主，再少量结合 `vw`。

## 推荐实践

- 必加 `viewport`。
- 优先用弹性布局。
- 文本字号避免纯按屏宽无限缩放。
- 重要区域设置最小宽高和边界约束。

## viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

## 总结

今天的移动端适配更强调组合方案，而不是单押 `rem` 或单押 `vw`。
