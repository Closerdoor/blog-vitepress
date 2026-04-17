---
title: 滚动条相关
author: Closerdoor
date: '2021-12-12'
---

## 页面滚动位置

```js
const top = window.pageYOffset || document.documentElement.scrollTop;
const left = window.pageXOffset || document.documentElement.scrollLeft;
```

现代浏览器通常直接使用 `window.pageYOffset`、`window.scrollY` 即可。

## 监听滚动

```js
window.addEventListener('scroll', () => {
  console.log(window.scrollY);
});
```

## wheel 事件

`mousewheel` 已不推荐，优先使用标准的 `wheel`。

```js
document.addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    console.log('向下滚动');
  } else {
    console.log('向上滚动');
  }
});
```

## scrollIntoView

```js
element.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
});
```

## 注意事项

- 滚动监听中应避免高频复杂计算，必要时做节流。
- 禁用默认滚动前要确认不会影响可访问性和触控体验。

## 总结

滚动相关 API 主要解决三类问题：读位置、监听变化、控制滚动。
