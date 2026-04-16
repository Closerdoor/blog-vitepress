---
title: 解构赋值
author: Closerdoor
date: '2022-06-14'
---

## 数组解构
```js
let [a, b, ...arr1] = [1, 2, 3, 4, 5];
let [, , , num,] = [1, 2, 3, 4, 5];
[a = 10, b = 20] = arr; //a的默认值设置为10 b默认值20 
//b  arr[1] undefined  默认值只对实际值是 undefined的时候生效

[a, b] = [b, a];
[c, b, d, a] = [a, b, c, d];

//数组本质上也是一种对象
let arr = [1, 2, 3, 4, 5];
let { 0: first, [arr.length - 1]: last } = arr;
```
## 对象解构
```js
let x = { y: 22, z: true };
// x对象中的y属性转移给变量 w z转移给o
let { y: w, z: o } = x;
//没有声明指令let时，需要用()使其变成独立语句
({ x, y } = { x: 1, y: 2 });
//解构中也可以有变量
const metadata = {
  title: 'Scratchpad',
  url: '/en-US/docs/Tools/Scratchpad',
};
let key = 'title';
let { [key]: englishTitle } = metadata;
```

## 函数解构赋值
```js
function format({
  productName: name = '真皮扫地机器人'
} = {}) {
  return name;
}

console.log(format());
```