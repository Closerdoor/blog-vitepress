---
title: 对象去重
author: Closerdoor
date: '2021-12-12'
---

## 对象访问属性方法去重
```js
//  利用对象访问属性的方法，判断对象中是否存在key
let newArr = [{
      key: '01',
      value: '乐乐'
    },{
      key: '02',
      value: '博博'
    },{
      key: '03',
      value: '淘淘'
    },{
      key: '04',
      value: '哈哈'
    },{
      key: '01',
      value: '乐乐'
    }
let obj = {};
for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i].key]) {
    newArr.push(arr[i]);
    obj[arr[i].key] = true;
    }
}
console.log(newArr);
```
## reduce方法去重
```ts
// 利用reduce方法遍历数组,reduce第一个参数是遍历需要执行的函数，第二个参数是item的初始值
let person = [
     {id: 0, name: "小明"},
     {id: 1, name: "小张"},
     {id: 2, name: "小李"},
     {id: 3, name: "小孙"},
     {id: 1, name: "小周"},
     {id: 2, name: "小陈"},   
];

let obj = {};
arr = arr.reduce((item, next) => {
    if (!obj[next.key]) {
    item.push(next);
    obj[next.key] = true;
    }
    return item;
}, []);
console.log(arr);
// (4) [{…}, {…}, {…}, {…}]0: {id: 0, name: "小明"}1: {id: 1, name: "小张"}2: {id: 2, name: "小李"}3: {id: 3, name: "小孙"}length: 4__proto__: Array(0)
```