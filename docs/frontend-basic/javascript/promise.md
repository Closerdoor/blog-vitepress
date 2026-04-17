---
title: Promise
author: Closerdoor
date: '2022-06-23'
---

## 是什么

`Promise` 用于表示异步操作的最终结果，状态只有三种：`pending`、`fulfilled`、`rejected`。

## 基本用法

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('done');
  }, 1000);
});

p.then((value) => {
  console.log(value);
});
```

`Promise` 的直接价值是把多层异步回调改成可组合的链式流程，减少回调地狱。

## 错误处理

```js
fetch('/api/user')
  .then((response) => response.json())
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('finished');
  });
```

## 常用静态方法

```js
Promise.resolve(1);
Promise.reject(new Error('fail'));
Promise.all([p1, p2]);
Promise.allSettled([p1, p2]);
Promise.race([p1, p2]);
Promise.any([p1, p2]);
```

## `then` 返回值规则

- 返回普通值：会传给下一个 `then`。
- 返回 Promise：下一个 `then` 会等待它完成。
- 抛出异常：会进入后续 `catch`。

```js
Promise.resolve(1)
  .then((value) => value + 1)
  .then((value) => Promise.resolve(value + 1))
  .then((value) => console.log(value)); // 3
```

## 与 async/await 的关系

`async/await` 基于 `Promise`，只是把链式写法改成了更接近同步流程的形式。

## 注意事项

- `then` 默认返回新 `Promise`。
- 在 `then` 中抛错会进入后续 `catch`。
- `Promise.all` 只要有一个失败就会整体失败。

## 总结

Promise 的重点不是语法，而是状态流转、链式返回和值传播规则。
