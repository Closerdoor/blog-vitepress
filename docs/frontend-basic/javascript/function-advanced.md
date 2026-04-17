---
title: 函数进阶
author: Closerdoor
date: '2022-06-14'
---

## function.name

函数对象有 `name` 属性，可用于调试和日志输出。

```js
function foo() {}
const bar = function () {};

console.log(foo.name); // foo
console.log(bar.name); // bar
console.log((new Function()).name); // anonymous
console.log(foo.bind(null).name); // bound foo
```

## 构造函数与 new

`new` 调用函数时会完成几件事：

- 创建一个新对象。
- 让新对象的原型指向构造函数的 `prototype`。
- 以新对象作为 `this` 执行构造函数。
- 默认返回该对象。

```js
function User(name) {
  this.name = name;
}

const user = new User('Tom');
```

## 箭头函数与普通函数

- 箭头函数没有自己的 `this`。
- 箭头函数不能作为构造函数。
- 箭头函数没有 `arguments`，可用剩余参数替代。

```js
const sum = (...args) => args.reduce((acc, item) => acc + item, 0);
```

## 默认参数

```js
function createUser(name = 'guest', age = 18) {
  return { name, age };
}
```

## 立即执行函数

立即执行函数常用于隔离作用域，避免变量污染。

```js
(() => {
  const local = 'only here';
  console.log(local);
})();
```

## 注意事项

- 需要动态 `this` 时不要用箭头函数。
- 需要实例化对象时使用普通函数或 `class`。

## 总结

函数进阶的重点不是语法数量，而是明确函数的调用方式、返回值和 `this` 绑定规则。
