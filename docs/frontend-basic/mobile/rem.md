---
title: rem 适配
author: Closerdoor
date: '2021-12-12'
---

## 基本概念

`rem` 以根元素 `font-size` 为基准，常用于移动端按屏宽缩放布局。

## 核心思路

通过脚本或构建工具根据视口宽度动态设置 `html` 的字体大小，页面中的尺寸再使用 `rem` 表达。

## 示例

```js
function setRootFontSize() {
  const width = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = `${width / 10}px`;
}

setRootFontSize();
window.addEventListener('resize', setRootFontSize);
```

```css
.card {
  width: 3.2rem;
  padding: 0.24rem;
}
```

## 注意事项

- 现在很多项目更倾向直接使用 `vw`、弹性布局和设计稿转换工具。
- `rem` 方案在超宽屏上通常需要设置最大宽度。

## 总结

`rem` 适配的本质是把绝对尺寸换成“相对根字号”的比例系统。
