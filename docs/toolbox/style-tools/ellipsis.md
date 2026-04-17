---
title: 文本省略处理
author: Closerdoor
date: '2021-12-12'
---

文本过长时，常通过省略号控制布局稳定性。单行与多行的实现方式不同。

## 单行省略

```css
.ellipsis-single {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

说明：

- 元素通常需要具备明确宽度，或处于可收缩的布局容器中。

## 多行省略

```css
.ellipsis-multi {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
```

说明：

- `-webkit-line-clamp` 是当前最常见方案。
- 多行省略在不同浏览器中的兼容性略有差异，复杂场景需要结合设计验证。
