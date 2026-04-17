---
title: 对象高级
author: Closerdoor
date: '2022-06-14'
---

## 常用高级方法

```js
Object.create(proto);
Object.getPrototypeOf(obj);
Object.getOwnPropertyNames(obj);
Object.getOwnPropertyDescriptor(obj, 'key');
Object.entries(obj);
Object.fromEntries(list);
Object.seal(obj);
Object.freeze(obj);
Object.preventExtensions(obj);
```

## 原型相关

```js
const proto = { type: 'animal' };
const dog = Object.create(proto);

Object.getPrototypeOf(dog) === proto; // true
```

## 属性描述符

```js
const user = { name: 'Tom' };

Object.getOwnPropertyDescriptor(user, 'name');
```

返回结果通常包含：

- `value`
- `writable`
- `enumerable`
- `configurable`

## hasOwnProperty 与 in

```js
const obj = Object.create({ age: 18 });
obj.name = 'Tom';

obj.hasOwnProperty('name'); // true
'name' in obj; // true
'age' in obj; // true
obj.hasOwnProperty('age'); // false
```

## seal / freeze / preventExtensions

- `preventExtensions`：不能新增属性。
- `seal`：不能新增或删除属性。
- `freeze`：在 `seal` 基础上也不能修改值。

## 总结

对象高级 API 主要解决元编程问题：查看属性结构、控制可变性、操作原型关系。
