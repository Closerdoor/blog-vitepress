---
title: Input 输入框样式处理
author: Closerdoor
date: '2021-12-12'
---

本文整理输入框常见的样式处理，包括去除数字输入框箭头和自定义占位符样式。

## 去掉 `type="number"` 的上下箭头

```css
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}
```

## 设置 `placeholder` 样式

现代浏览器通常可直接使用标准伪元素：

```css
input::placeholder {
  color: #999;
}
```

如果项目需要兼容旧浏览器，再补充旧前缀写法。
