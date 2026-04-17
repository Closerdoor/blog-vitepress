---
title: BOM
author: Closerdoor
date: '2021-12-12'
---

## 是什么

BOM 即 Browser Object Model，用于访问浏览器窗口、地址栏、历史记录、屏幕信息等运行环境能力。

## 核心对象

### window

浏览器全局对象，定时器、弹窗、滚动等能力都挂在其上。

```js
window.setTimeout(() => {}, 1000);
window.alert('hello');
window.print();
```

### location

用于读取和修改当前地址。

```js
location.href;
location.origin;
location.pathname;
location.search;
location.reload();
location.replace('/login');
```

### history

```js
history.length;
history.back();
history.forward();
history.go(-1);
```

### navigator

```js
navigator.userAgent;
navigator.language;
navigator.onLine;
navigator.geolocation;
```

### screen

```js
screen.width;
screen.height;
```

## document 与 BOM 的关系

`document` 属于 DOM，但通常通过 `window.document` 访问，因此在学习阶段经常与 BOM 一起出现。

## 常见事件

```js
window.addEventListener('beforeunload', () => {
  localStorage.removeItem('draft');
});

window.addEventListener('storage', () => {
  console.log('storage changed');
});
```

## 注意事项

- `location.replace()` 不会留下当前历史记录。
- `userAgent` 只能作为弱判断，不能作为可靠能力检测。
- 某些窗口控制 API 在现代浏览器中受限，不能假设都能成功执行。

## 总结

BOM 关注的是浏览器环境本身，DOM 关注的是页面结构与节点。
