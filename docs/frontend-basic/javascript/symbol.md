---
title: Symbol
author: Closerdoor
date: '2022-06-23'
---

## 基本概念

`Symbol` 是一种原始类型，用于创建唯一值，常用于对象的私有键或元编程协议。

## 基本用法

```js
const id = Symbol('id');
const user = {
  [id]: 1001,
};
```

## 特点

- 每个 `Symbol()` 返回值都唯一。
- 不能与字符串自动相加。
- 作为对象键时，不会被普通 `for...in` 遍历到。

## 全局注册表

```js
const a = Symbol.for('token');
const b = Symbol.for('token');

a === b; // true
```

## 常见场景

- 定义不会冲突的对象属性。
- 使用内置符号扩展对象行为，如 `Symbol.iterator`。

## 示例

```js
const iterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
  },
};
```

## 总结

`Symbol` 的核心价值是“唯一性”，适合解决属性名冲突和协议扩展问题。
