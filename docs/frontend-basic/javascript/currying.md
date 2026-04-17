---
title: 柯里化函数
author: Closerdoor
date: '2022-06-13'
---

## 是什么

柯里化是把一个接收多个参数的函数，拆成一系列每次接收部分参数的函数。

## 用途

- 复用部分参数。
- 生成更具体的业务函数。
- 与函数组合、管道调用配合使用。

## 示例

```js
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

curryAdd(1)(2)(3); // 6
```

## 通用实现

```js
function curry(fn, ...args) {
  return (...rest) => {
    const allArgs = [...args, ...rest];

    if (allArgs.length >= fn.length) {
      return fn(...allArgs);
    }

    return curry(fn, ...allArgs);
  };
}

function sum(a, b, c) {
  return a + b + c;
}

curry(sum)(1)(2)(3); // 6
```

## pipe

```js
function pipe(...fns) {
  return (value) => fns.reduce((acc, fn) => fn(acc), value);
}
```

## 注意事项

- 柯里化适合参数稳定、复用频繁的场景。
- 过度使用会让代码调用链过长，反而降低可读性。

## 总结

柯里化的价值不在“写得更函数式”，而在于提前固定上下文，降低重复传参。
