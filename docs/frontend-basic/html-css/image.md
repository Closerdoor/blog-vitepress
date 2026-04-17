---
title: img
author: Closerdoor
date: '2022-06-24'
---

## 基本写法

```html
<img src="/logo.png" alt="站点 Logo" width="200" height="80">
```

## 核心属性

- `src`
- `alt`
- `width`
- `height`

## 布局注意点

`img` 默认是替换元素，常见表现类似行内元素，底部可能出现基线空隙。

```css
img {
  display: block;
  max-width: 100%;
  height: auto;
}
```

## 加载与失败处理

```js
const img = document.querySelector('img');

img.onload = () => {
  console.log('loaded');
};

img.onerror = () => {
  img.onerror = null;
  img.src = '/fallback.png';
};
```

## 注意事项

- `alt` 既影响可访问性，也影响图片加载失败时的降级体验。
- 明确声明宽高有助于减少布局抖动。

## 总结

图片使用的关键是：可访问、可降级、少抖动。
