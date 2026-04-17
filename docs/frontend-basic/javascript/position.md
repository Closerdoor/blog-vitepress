---
title: 坐标与尺寸
author: Closerdoor
date: '2021-12-12'
---

## 鼠标事件坐标

- `clientX`、`clientY`：相对视口左上角。
- `pageX`、`pageY`：相对文档左上角。
- `offsetX`、`offsetY`：相对事件目标内边缘。

```js
document.addEventListener('click', (event) => {
  console.log(event.clientX, event.clientY);
  console.log(event.pageX, event.pageY);
});
```

## 窗口尺寸

```js
window.innerWidth;
window.innerHeight;
document.documentElement.clientWidth;
document.documentElement.clientHeight;
```

## 元素尺寸

### offset 系列

- `offsetWidth`、`offsetHeight`：内容 + `padding` + `border` + 滚动条。
- `offsetLeft`、`offsetTop`：相对 `offsetParent` 的位置。

### client 系列

- `clientWidth`、`clientHeight`：内容 + `padding`，不含边框和滚动条。
- `clientLeft`、`clientTop`：边框厚度。

### scroll 系列

- `scrollTop`、`scrollLeft`：滚动偏移。
- `scrollWidth`、`scrollHeight`：可滚动内容总尺寸。

## getBoundingClientRect

```js
const rect = element.getBoundingClientRect();

console.log(rect.top, rect.left, rect.width, rect.height);
```

该方法返回元素相对视口的位置与尺寸，适合做吸顶、懒加载、碰撞检测等场景。

## 总结

坐标与尺寸相关 API 的关键是先搞清参照系：视口、文档还是元素自身。
