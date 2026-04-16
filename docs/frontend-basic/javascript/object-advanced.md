---
title: 对象高级
author: Closerdoor
date: '2022-06-14'
---

## 方法汇总
```js
Object.valueOf();
Object.toString();
Object.toLocaleString();
Object.assign();
Object.create();//创建一个空对象，空对象的__proto__为第一个参数，可用来继承原型。是浅拷贝，改变了第一个参数后，值也会相应改变
Object.keys(obj)//把对象的所有属性名称(不包括```不可枚举```)组成一个数组
Object.getOwnPropertyNames(obj)//返回一个由对象的所有自身属性的属性名（包括不可枚举属性(length)但不包括Symbol值作为名称的属性）组成的数组。
Object.is(a,b)
Object.getPrototypeOf(obj);// Object.getPrototypeOf(obj) === Object.prototype
[[prototype]].isPrototypeOf(obj)
Object.getOwnPropertyDescriptor(obj, key)
Object.getOwnPropertyDescriptors(obj)
obj.hasOwnProperty(key)
Object.freeze(obj)//冻结对象(冻结后不可修改)
Object.isFrozen(obj)
Object.seal(obj);
Object.isSealed(obj)
Object.entries(obj)
Object.fromEntries(arr)
Object.preventExtensions(obj)//让obj对象不可扩展 不能新增属性 只能对已有属性进行操作
Object.isExtensible(obj)//对象是否可扩展 
```
## Object.assign(targetObj,...argObj)
方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
```js
let res = Object.assign(obj1,obj2)
res === obj1
```
## Object.is()  ===
判断两个值是否是一个值
## Object.getOwnPropertyNames(obj)
方法返回一个由指定对象的所有自身属性的属性名（包括```不可枚举``属性但不包括Symbol值作为名称的属性）组成的数组。
## Object.getPrototypeOf(obj)
方法返回指定对象的原型（内部[[Prototype]]属性的值）。
## Object.getOwnPropertyDescriptor(obj, '__proto__')
获取对象obj自身属性中某个属性的描述
```js
let obj = { name: 123 }
Object.getOwnPropertyDescriptor(obj, 'name')
{
  configurable: true, // 是否可配置
  enumerable: true, // 是否可枚举
  value: 123, // 值
  writable: true // 是否可写入
}
let arr = [1, 2, 3, 4];
let descriptorOfArr = Object.getOwnPropertyDescriptor(arr, 'length');
{
  configurable: false,
  enumerable: false,
  value: 4,
  writable: true
}
```
### Object.getOwnPropertyDescriptors(obj)
获取对象中所有属性的描述
## obj.hasOwnProperty(key)和in
判断一个属性是否在obj内
obj.hasOwnProperty(key)  只判断该对象是否含有自身属性
key in obj  可查找到原型链上的属性
```js
function Dog(name = '小明') {
  this.name = name;
}
Dog.prototype.age = 13;
let obj = new Dog()
console.log(obj.hasOwnProperty('name')) // true
console.log(obj.hasOwnProperty('age')) // false
console.log('name' in obj) // true
console.log('age' in obj) // true
console.log('__proto__' in obj) // true
```
## isPrototypeOf
构造函数.原型.isPrototypeOf(实例对象)
实例对象的__proto__是否是这个构造函数的原型
```js
Array.prototype.isPrototypeOf(arr)
```

## Object.isSealed(obj)
检测一个对象是否密封
```js

```
## 整理一下对象方法 valueOf toString 

## 题目
### hasOwnProperty
```js
[!!Array.hasOwnProperty , Array.hasOwnProperty(toString),[1,2,3] instanceof Object, typeof [1,2,3] === Array]
// [true, false, true, false]
```