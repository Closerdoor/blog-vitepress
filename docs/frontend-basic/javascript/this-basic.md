---
title: this 基础
author: Closerdoor
date: '2021-12-12'
---

## 绑定规则

`this` 不是函数声明时决定的，而是函数调用时决定的。

## 常见绑定规则

### 默认绑定

普通函数直接调用时，非严格模式下指向全局对象；严格模式下为 `undefined`。

### 隐式绑定

```js
const user = {
  name: 'Tom',
  say() {
    console.log(this.name);
  },
};

user.say();
```

### 显式绑定

通过 `call`、`apply`、`bind` 指定。

### new 绑定

构造函数通过 `new` 调用时，`this` 指向新实例。

## 示例

伪数组借用数组方法：

```js
const list = document.querySelectorAll('li');
const active = document.querySelector('#active');

const index = Array.prototype.indexOf.call(list, active);
```

## 总结

判断 `this` 最直接的方法是看“函数如何被调用”，而不是看“函数写在哪里”。
