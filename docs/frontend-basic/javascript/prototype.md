---
title: 原型prototype
author: Closerdoor
date: '2022-06-14'
---

## prototype
什么是原型和原型链
每一个引用类型(对象)都有一个隐式属性__proto__(是个对象),在new实例化的时候,添加到实例对象的隐式属性,指向相应构造函数的原型

每个函数有一个属性叫prototype(原型，是个对象)。Array.prototype,Object.prototype
prototype 原型是一个对象，对象上有一个默认属性constructor，constructor指向函数本身
`Function.constructor === Function.prototype.constructor === Function`
prototype上还有一个默认属性__proto__，指向相应构造函数的原型(Object.prototype)
`obj.__proto__ = Object.prototype = Object.getPrototypeOf(obj)`
### 构造函数

### 任何函数都是 Function 的实例
`Function.prototype === Object.__proto__`
`Object.getPrototypeOf(Array) === Function.prototype`
### 所有的prototype都是一个对象，而对象都是Object的实例
`Object.prototype.isPrototypeOf(Function) === true`
`Object.prototype.isPrototypeOf(Object) === true`
### 实例对象
实例对象 = new 构造函数
__proto__属性，new实例化的时候添加到实例对象的隐式属性，是一个对象
__proto__指向实例对象构造函数的原型,即 实例对象.__proto__ = function.prototype

### 题目
```js
[!!Array.hasOwnProperty , Array.hasOwnProperty(toString),[1,2,3] instanceof Object, typeof [1,2,3] === Array]
// [true, false, true, false]
[Function.prototype === Object.__proto__ ,Object.prototype.isPrototypeOf(Function)]
```
## constructor 
constructor prototype中的this指向谁? 实例对象
实例对象.constructor 就是构造函数原型上的constructor(实例对象.constructor === Function.prototype.constructor)
`f.constructor === fn.prototype.constructor === fn`
##
建立一个构造函数，每次实例化时统计次数
```js
function Animal() {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
Animal.prototype.list = [];
Animal.prototype.init = function() {
  this.list.push(this)
}
Animal.prototype.calc = function() {
  console.log(this.list.length)
}
```

## 继承
### js经典组合继承
1.继承构造函数(constructor)
父类的构造函数在子类中call执行 传参
2.继承原型
Children.prototype = new Parent();
Children.prototype.constructor = Children;
或
Children.prototype.__proto__ = Parent.prototype;
缺点：父类构造函数的引用属性会共享
```js
function Animal(){
  this.children = [1,2,3,4,5]
}
function Pig(){

}
Pig.prototype = new Animal();
Pig.prototype.constructor = Pig;
let pig1 = new Pig();
let pig2 = new Pig();
//通过这种方式继承，由于执行了new Animal()，则pig1和pig2的原型上都会有Animal自身的children属性，当修改了其中一个时，另一个也会发生变化
```

### 寄生式继承
```js
function inheritPrototype(childFn,parentFn) {
  function Temp() {}
  Temp.prototype = parentFn.prototype
  let obj = new Temp();
  obj.constructor = childFn;
  childFn.prototype = obj;
}
```
### Object.create实现类式继承
```js
function ChildFn(){
  ParentFn.call(this)
}
//方式一
ChildFn.prototype.__proto__ = ParentFn.prototype
//方式二
ChildFn.prototype = new ParentFn();
ChildFn.prototype.constructor = ChildFn;
//方式三
ChildFn.prototype = Object.create(ParentFn.prototype);
ChildFn.prototype.constructor = ChildFn;
//方式四
function Temp(){}
Temp.prototype = ParentFn.prototype;
ChildFn.prototype = new Temp();
ChildFn.prototype.constructor = ChildFn;
```