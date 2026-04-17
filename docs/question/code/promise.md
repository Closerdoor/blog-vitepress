---
title: Promise 原理
date: '2023-05-10'
category: question
description: Promise 状态流转、链式调用与最小实现思路。
---

## 面试回答框架

### 核心特性
- 三种状态：`pending`、`fulfilled`、`rejected`。
- 状态一旦确定不可再次变更。
- `then` 返回新 Promise，因此可以链式调用。
- 错误会沿链路冒泡，可由 `catch` 统一处理。

### 实现关键点
- 构造时立即执行执行器函数。
- 在 `pending` 状态下缓存成功与失败回调。
- 状态变更后批量执行对应回调。
- `then` 需要处理普通值和 Promise 返回值。

## 最小实现

```js
function MyPromise(executor) {
  this.status = 'pending'
  this.value = undefined
  this.reason = undefined
  this.onFulfilledCallbacks = []
  this.onRejectedCallbacks = []

  const resolve = (value) => {
    if (this.status !== 'pending') return
    this.status = 'fulfilled'
    this.value = value
    this.onFulfilledCallbacks.forEach((fn) => fn(value))
  }

  const reject = (reason) => {
    if (this.status !== 'pending') return
    this.status = 'rejected'
    this.reason = reason
    this.onRejectedCallbacks.forEach((fn) => fn(reason))
  }

  try {
    executor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  if (this.status === 'fulfilled') {
    onFulfilled && onFulfilled(this.value)
  }

  if (this.status === 'rejected') {
    onRejected && onRejected(this.reason)
  }

  if (this.status === 'pending') {
    onFulfilled && this.onFulfilledCallbacks.push(onFulfilled)
    onRejected && this.onRejectedCallbacks.push(onRejected)
  }
}
```

## 高频追问

- `Promise.then` 的回调会进入微任务队列。
- `async/await` 本质上是 Promise 的语法糖。
- `Promise.all` 适合并发聚合，任何一个失败都会整体失败。
