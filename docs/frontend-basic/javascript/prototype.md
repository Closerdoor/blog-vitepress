---
title: 原型与原型链
author: Closerdoor
date: '2022-06-14'
---

## 是什么

JavaScript 对象通过原型关联形成查找链路，这条链就是原型链。

## 核心概念

- 函数有 `prototype` 属性。
- 实例对象可通过内部原型关联到构造函数的 `prototype`。
- 属性查找会先找自身，再沿原型链向上查找。

## 基本关系

```js
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  return `Hi, ${this.name}`;
};

const user = new User('Tom');

Object.getPrototypeOf(user) === User.prototype; // true
user.sayHi(); // Hi, Tom
```

## constructor

默认情况下，原型对象上存在 `constructor`，通常指回构造函数本身。

```js
user.constructor === User; // true
```

## `instanceof`

```js
user instanceof User; // true
user instanceof Object; // true
```

它的本质是沿着原型链查找某个构造函数的 `prototype` 是否出现过。

## 继承写法

推荐使用 `Object.create` 建立原型关系：

```js
function Animal() {}
function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
```

## 注意事项

- 不建议依赖 `__proto__` 做生产代码操作，优先使用标准 API。
- 原型上放方法通常没问题，但不要放会被实例共享且可变的引用类型数据。

## 总结

原型链解决的是对象之间的共享与查找问题，是理解继承、实例方法和 `instanceof` 的基础。
