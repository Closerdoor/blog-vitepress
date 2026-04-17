---
title: 常用 CSS 属性
author: Closerdoor
date: '2021-12-12'
---

## margin 与 padding

### 外边距合并

上下相邻块级元素的垂直外边距可能发生合并，结果取较大值。

常见解决方式：

- 给父元素加 `padding-top` 或边框。
- 触发 BFC，如 `overflow: hidden`。

## font

```css
font: italic 700 14px/1.5 sans-serif;
```

## 文本

```css
text-align: center;
text-indent: 2em;
text-decoration: underline;
line-height: 1.6;
```

## vertical-align

`vertical-align` 主要作用于行内元素和行内块元素，常用于图片、输入框与文本对齐。

## border

```css
border: 1px solid #ddd;
```

## background

```css
background: #fff url('./bg.png') no-repeat center / cover;
```

```css
background-color: #fff;
background-image: url('./bg.png');
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
```

## 表格边框合并

```css
table {
  border-collapse: collapse;
}
```

## 总结

常用 CSS 属性应优先从布局、盒模型、文本和背景四个维度组织记忆。
