---
title: 事件循环
author: Closerdoor
date: '2023-04-11'
---

事件循环（Event Loop）用于协调同步代码、异步回调与渲染或 I/O 执行顺序，是理解 JavaScript 运行时行为的基础。

## 基本概念

- 调用栈（Call Stack）：执行同步代码。
- 宏任务（Macrotask / Task）：如 `setTimeout`、I/O、`setImmediate`。
- 微任务（Microtask / Job）：如 `Promise.then`、`queueMicrotask`、`MutationObserver`。

执行规则可以简化为：

1. 先执行当前调用栈中的同步代码。
2. 调用栈清空后，立即清空当前轮次的微任务队列。
3. 再进入下一轮宏任务。

## 浏览器中的执行顺序

常见示例：

```js
console.log('sync')

setTimeout(() => {
  console.log('timeout')
}, 0)

Promise.resolve().then(() => {
  console.log('promise')
})

console.log('end')

// sync
// end
// promise
// timeout
```

关键点：

- `Promise` 回调属于微任务，优先于下一轮 `setTimeout`。
- 微任务执行过程中新增的微任务，也会在本轮继续执行。

## Node.js 中的差异

Node.js 同样有微任务与宏任务，但事件循环分为多个阶段，例如：

- `timers`
- `poll`
- `check`
- `close callbacks`

其中两个常见 API 需要特别区分：

- `process.nextTick()`：优先级非常高，会在当前阶段结束后优先执行。
- `setImmediate()`：通常在 `check` 阶段执行。

```js
process.nextTick(() => {
  console.log('nextTick')
})

Promise.resolve().then(() => {
  console.log('promise')
})

setTimeout(() => {
  console.log('timeout')
}, 0)

setImmediate(() => {
  console.log('immediate')
})
```

通常可以记住：

- `process.nextTick()` 先于普通微任务。
- 微任务先于下一轮宏任务。
- `setTimeout(fn, 0)` 与 `setImmediate()` 的先后顺序依赖具体上下文，不能简单写死。

## 实践建议

- 需要尽快在当前调用栈之后执行的逻辑，优先考虑微任务。
- 不要滥用 `process.nextTick()`，否则容易造成事件循环饥饿。
- 调试异步顺序问题时，优先确认任务属于同步、微任务还是宏任务。
