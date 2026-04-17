---
title: Generator 生成器
date: '2023-06-10'
---

## 适用场景

按需生成序列，避免一次性创建大数组或提前执行全部逻辑。

## 最小示例

```js
function* range(start, end) {
  for (let i = start; i <= end; i += 1) {
    yield i;
  }
}

const gen = range(1, 3);

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

## 说明

- `yield` 会暂停函数执行，并返回当前值。
- `next(value)` 会把参数传回上一个 `yield` 表达式。
- 组合多个生成器时使用 `yield*`。
