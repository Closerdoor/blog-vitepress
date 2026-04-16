---
title: JavaScript 面试整理
author: Closerdoor
date: '2023-05-02'
---

## ES6
### promise

### var let const
var
- 声明提升
- 没有局部作用域
- 重复声明，后面的覆盖

## http和https
https加了TLS/SSL

### this
this是在函数调用的时候绑定的JavaScript实例

### 闭包
「函数」和「函数内部能访问到的变量」的总和，就是一个闭包。
作用：
生成局部变量，或者说私有变量
避免变量的污染

### 原型和原型链

### 防抖和节流
```js
//防抖——一定时间内只能执行一次
function debounce(fn,wait) {
  let timer = null;
  return function(...args){
    if(timer) {
      clearTimeOut(timer)
    }
    timer = setTimeOut(()=>{
      fn.apply(this,args)
    },wait)
  }
}
//节流——
function throttle(fn,wait) {
  let timer = null;
  return function(...args){
    if(!timer){
      timer = setTimeOut(()=>{
        fn.apply(this,args)
        timer = null;
      },wait)
    }
  }
}
```
