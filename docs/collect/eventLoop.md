---
title: Event Loop 事件循环
date: '2021-12-12'
category: collect
description: JavaScript 事件循环的核心概念整理。
---

## 核心结论

- JavaScript 主线程一次只执行一个任务。
- 同步代码先进入调用栈执行。
- 异步回调会在合适时机进入任务队列，等待调用栈清空后调度执行。

## 关键组成

- 调用栈：执行当前同步任务。
- 宏任务队列：如 `setTimeout`、`setInterval`、I/O、UI 渲染相关任务。
- 微任务队列：如 `Promise.then`、`queueMicrotask`、`MutationObserver`。

## 执行顺序

- 先执行一个宏任务。
- 当前宏任务结束后，立即清空微任务队列。
- 再进入下一轮宏任务。

## 最小示例

```js
console.log(1)

setTimeout(() => {
  console.log(2)
}, 0)

Promise.resolve().then(() => {
  console.log(3)
})

console.log(4)
```

输出顺序：`1 4 3 2`

## 常见误区

- `setTimeout(fn, 0)` 不是立即执行，只是尽快进入下一轮宏任务。
- 微任务不是“比同步更早”，而是“比下一轮宏任务更早”。
