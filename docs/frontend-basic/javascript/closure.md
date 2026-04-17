---
title: 闭包
author: Closerdoor
date: '2023-04-12'
---

## 是什么

闭包指函数在其定义时的词法作用域中运行，即使外层函数已经执行结束，内部函数仍然可以访问外层变量。

## 核心概念

- 闭包依赖词法作用域，而不是调用位置。
- 常用于封装私有状态、函数工厂、事件回调。
- 使用不当会让不再需要的数据被持续引用。

## 示例

```js
function createCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
```

## 题目解析

```js
function Foo() {
  let i = 0;
  return function () {
    console.log(i++);
  };
}

const f1 = Foo();
const f2 = Foo();

f1();
f1();
f2();
// 0 1 0
```

原因：`f1` 和 `f2` 分别持有不同的词法环境，内部的 `i` 互不影响。

## 注意事项

- 循环里创建回调时要注意变量捕获，可优先使用 `let`。
- 闭包本身不是性能问题，问题通常来自无意保留大量对象引用。

## 循环中的经典问题

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// 3 3 3

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// 0 1 2
```

`let` 为每次循环创建了新的块级绑定，因此更适合这类场景。

## 总结

闭包的本质是“函数 + 被保留的作用域”。理解这一点后，事件处理、模块封装和异步回调都会更容易理解。
