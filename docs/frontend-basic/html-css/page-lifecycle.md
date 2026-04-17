---
title: 页面生命周期
author: Closerdoor
date: '2022-06-14'
---

## 常见事件

- `load`
- `beforeunload`
- `pagehide`
- `pageshow`
- `visibilitychange`
- `focus`
- `blur`

## 示例

```js
window.addEventListener('load', () => {
  console.log('page loaded');
});

window.addEventListener('pagehide', () => {
  console.log('page hidden');
});
```

## 页面可见性

```js
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('hidden');
  } else {
    console.log('visible');
  }
});
```

## 网络状态

```js
window.addEventListener('online', () => console.log('online'));
window.addEventListener('offline', () => console.log('offline'));
```

## 实践建议

- 页面离开前的数据上报优先考虑 `navigator.sendBeacon()`。
- 页面切后台时可暂停轮询、动画和媒体播放，减少资源消耗。

## 总结

页面生命周期关注的不是事件数量，而是知道什么时候初始化、暂停、恢复和清理资源。
