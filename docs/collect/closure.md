---
title: 闭包
author: Closerdoor
date: '2021-12-12'
---

## 概念：闭包是一个函数，当一个函数可以访问另一个函数的局部变量就形成了闭包。

它的原理是浏览器在编译函数过程中，临时在函数执行上下文的变量环境中临时创建的一个叫 closure (函数名)的临时对象，对象的内容保存在堆内存里。

外部函数的一些被内部函数引用的变量，即使是基本数据类型的，也不会保存在栈内存里，而是保存在堆内存里，并且在函数的变量或者词法环境里创造一个叫 closure 的指针去指向它，整个函数执行结束，ESA 指针下移，栈内存被回收。但是 closure 指针虽然被回收了，内部函数的变量环境还保存着这个堆内存的指针，因此闭包变量不会被回收。

嵌套的内部函数，在执行之前会进行预编译。预编译的过程，会自动扫描一遍所有含有 var、function 这些声明关键字的代码，并对这些代码进行所谓的变量提升，对未声明的变量进行变量环境查找，如果发现变量存在于上一个函数预编译生成的变量环境或者词法环境里，那就会将上一个环境的变量栈里面的这些变量提取出来专门生成一个 closure，生成闭包。

## 闭包的优缺点

优点：可以延伸变量的作用范围

缺点：变量常驻在内存中，会占用资源，叫做内存泄漏

解决方法：在页面解构的时候取消内容（IE浏览器支持）
```js
window.onunload=function() {
  oDiv.onclick=null;
  oDiv=null;
}
```
## 例题
实现函数 makeClosures，调用之后满足如下条件：

1、返回一个函数数组 result，长度与 arr 相同;
2、运行 `result` 中第 `i` 个函数，即 `result[i]()`，结果与 `fn(arr[i])` 相同.

### 方法一
```js
function makeClosures(arr, fn) {
  var result = [];
     arr.forEach(function(e){
         result.push(function(num){
             return function(){
                 return fn(num);
             };
         }(e));
     });
     return result;
 }
```
### 方法二：匿名函数
```js
function makeClosures(arr, fn) {
    var funcs = [];
    for(var i=0; i<arr.length; ++i){
        (function(v){
            funcs[v] = function(){
                return fn.call(null,arr[v]);
            }
        })(i);
    }
    return funcs;
}
```
### 方法三：使用ES5的bind方法
```js
function makeClosures(arr, fn) {
    var result = new Array();
    for(var i=0;i<arr.length;i++){
        result[i] = fn.bind(null,arr[i]);
    }
    return result;
}
```
