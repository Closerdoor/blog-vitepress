---
title: 函数
author: Closerdoor
date: '2022-06-14'
---

## function

### function.name 函数名
```js
//函数名存在 返回函数名
let a = function add() { }
console.log(a.name);

//匿名函数 函数名不存在 返回变量名称
let b = function () { }
console.log(b.name);

//纯粹匿名函数值 name为 '' 空字符串
let arr = [];
for (let i = 0; i < 3; i++) {
  arr.push(function () {
    console.log(i);
  })
}
console.log(arr[0].name); 

//构造函数
(new Function).name // "anonymous"

//bind函数   name => bound + 函数名
function foo() { };
foo.bind({}).name // "bound foo"

//IIFE + bind
(function () { }).bind({}).name // "bound "

//用于判断某个函数是否是bind的产物
function isBoundFunction(funs) {
  // console.log(funs.name);
  return /bound/ig.test(funs.name);
}
```

## 构造函数
任何对象都有自己的构造函数
### new操作符
使用new操作符实例化一个对象的时候
1、