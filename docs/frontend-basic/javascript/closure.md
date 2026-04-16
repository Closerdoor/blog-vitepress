---
title: 闭包
author: Closerdoor
date: '2023-04-12'
---

## 闭包

## 题
```js
//执行以下程序，输出结果为
function Foo() {
    var i = 0;
    return function() {
        console.log(i++);
    }
}
var f1 = Foo();
var f2 = Foo();
f1();
f1();
f2();
//0 1 0
```