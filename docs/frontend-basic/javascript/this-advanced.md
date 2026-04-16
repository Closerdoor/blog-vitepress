---
title: this
author: Closerdoor
date: '2021-12-12'
---

## call apply
调用一个对象的一个方法，以另一个对象替换当前对象
`function.call(obj,...arg)`
```js
Array.prototype.slice.call();
Object.prototype.toString.call();
//例子 
//可以让伪数组(nodeList、arguments)使用数组的方法，注意无法直接对DOM节点进行修改
const liArr = [].map.call(aLi, function (item) {
  return Number(item.innerText) + 10;
})
//计算所有的参数和
const res = [].reduce.call(arguments, function (acc, curr) {
  return acc + curr;
})
const args = [].slice.call(arguments, 0);
//借用Object原型上的toString方法来验证下对象是否是数组
function isArray(object){
  return Object.prototype.toString.call(object) == '[object Array]';
}
```
### apply
apply和call基本相同，call从第二个参数开始要跟参数列表，而apply接收一个参数数组
```js
// 合并2个数组 arr.concat(otherArr)
arr.push.apply(arr, otherArr); 
//获取数组中最大项
Math.max.apply(null, [1,2,3]); // 3
```
## bind
函数.bind(绑定对象,参数) 返回一个新函数
新函数内部的this永远指向 绑定对象 新函数永远持有bind参数

和call apply的区别在于 不是主动执行函数的时候进行this的偏转 
而是在函数声明或者赋值的时候绑定bind

函数被bind后，即使使用call或apply，内部this仍然指向bind绑定对象
```js
//可以用在setInterval中的匿名函数，使它绑定this
const OUA = {
  age: 4,
  add: function () {
    console.log(this)
    setInterval(function () {
      console.log(this.age);
    }.bind(this), 400);
  }
}
```

### bind偏函数
**固定一个函数的一些参数，然后产生另一个更小元的函数**。主要用于数学领域，部分算法会拥有预设的初始参数，当次方法被调用时，预设参数会在前面，传递进去的参数在后面

### 题目
实现函数 callIt，调用之后满足如下条件
1、返回的结果为调用 fn 之后的结果
2、fn 的调用参数为 callIt 的第一个参数之后的全部参数

```js
//answer1
function callIt(fn) {
  let arg = [].slice.call(arguments,1)
  return fn.apply(this,arg)
}

callIt(function(a,b){return a+b},2,3)  //5
```