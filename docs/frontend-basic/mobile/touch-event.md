---
title: Touch 事件
author: Closerdoor
date: '2021-12-12'
---

## 常见事件

- `touchstart`
- `touchmove`
- `touchend`
- `touchcancel`

## 事件对象

- `touches`：当前屏幕上的所有触点。
- `targetTouches`：当前目标元素上的触点。
- `changedTouches`：本次事件变化的触点。

单个触点常见属性：

- `clientX`、`clientY`
- `pageX`、`pageY`
- `screenX`、`screenY`
- `identifier`

## 示例

```js
window.addEventListener('touchstart', (event) => {
  const touch = event.changedTouches[0];
  console.log(touch.clientX, touch.clientY);
});
```

## 使用建议

- 新项目可优先关注 Pointer Events，统一鼠标、触摸和手写笔输入。
- 阻止默认行为前要确认不会破坏页面滚动和手势体验。

## 总结

Touch 事件适合移动端交互处理，但在现代项目中应同时关注 Pointer Events 的兼容与统一输入模型。
