---
title: 常用 CSS
author: Closerdoor
date: '2021-12-12'
---

## CSS 引入方式

### 行内样式

```html
<p style="color: red;">text</p>
```

### 内部样式

```html
<style>
  p {
    color: red;
  }
</style>
```

### 外部样式

```html
<link rel="stylesheet" href="./index.css">
```

## 继承

常见可继承属性主要集中在文本与字体：

- `color`
- `font-*`
- `line-height`
- `text-align`

## display

### inline

不独占一行，宽高通常不直接生效。

### block

独占一行，宽高、边距更容易控制。

### inline-block

同行显示，同时支持宽高设置。

## 默认样式重置

```css
* {
  margin: 0;
  padding: 0;
}

img {
  display: block;
}

button {
  outline: none;
}
```

## 盒模型

```css
box-sizing: content-box;
box-sizing: border-box;
```

项目中更常见的是统一使用 `border-box`。

## 链接伪类

```css
a:link {}
a:visited {}
a:hover {}
a:active {}
```

## 文本溢出省略

```css
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

## 选择器优先级

从高到低通常可以记为：`!important` > 行内样式 > `id` > `class`/属性/伪类 > 标签 > 通配符。

## 响应式图片

```css
img {
  max-width: 100%;
  height: auto;
}
```

## 总结

CSS 基础首先要掌握四件事：引入方式、继承、盒模型和文档流。
