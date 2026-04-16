---
title: 柯里化函数
author: Closerdoor
date: '2022-06-13'
---

## 柯里化
柯里化是将一个多参数函数转换成多个单参数函数，也就是将一个 n 元函数转换成 n 个一元函数。
```js
function currying(fn) {
  let args = [].slice.call(arguments,1);
  let inlay =  function() {
    if(arguments.length === 0) {
      return fn.apply(this, args)
    }
    args.push.apply(args, arguments)
    return inlay
  }
  return inlay
}

let result = currying(fn);
```
## 通道函数pipe
将一系列方法自由组合，生成一个执行函数，再将传入的参数按照方法的顺序执行。
```js
let data = thing;
let fn1 = function() {};
let fn2 = function() {};
let fn3 = function() {};
function pipe() {
  let args = [].slice.call(arguments);
  return function(data){
    return args.reduce((acc,curr)=> {
      acc = curr(acc);
      return acc;
    },data)
  }
}
```