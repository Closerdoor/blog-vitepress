---
title: 对象方法
author: Closerdoor
date: '2021-12-12'
---
## 对象
### 遍历对象 for...in
```js
for(var key in obj) {
  console.log(key + "==" + obj[key]);
}
```
### 删除对象属性
```js
delete obj.name;
```
## 对象方法汇总
```js
Object.is(val1, val2) // 判断两个值是否为同一个值 | 返回true/false
Object.freeze(obj) // 冻结一个对象 | 返回该对象
Object.assign(target, ...sources) //归并对象 | 返回target对象
Object.keys(obj) // 返回由key组成的字符串数组
obj.hasOwnProperty(propname) // 返回true/false
```
### Object.is()  判断两个值是否为**同一个值**
```js
Object.is(value1, value2);  return true/false
// Object.is() 方法判断两个值是否为同一个值。如果满足以下条件则两个值相等:
都是 undefined
都是 null
都是 true 或 false
都是相同长度的字符串且相同字符按相同顺序排列
都是相同对象（意味着每个对象有同一个引用）
都是数字且
都是 +0
都是 -0
都是 NaN
或都是非零而且非 NaN 且为同一个值
与== 运算不同。  == 运算符在判断相等前对两边的变量(如果它们不是同一类型) 进行强制转换 (这种行为的结果会将 "" == false 判断为 true), 而 Object.is不会强制转换两边的值。

与=== 运算也不相同。 === 运算符 (也包括 == 运算符) 将数字 -0 和 +0 视为相等 ，而将Number.NaN 与NaN视为不相等.
```
### Object.freeze() 冻结一个对象

### Object.assign(target, ...sources)  返回target对象

### Object.keys(obj) 返回由key组成的字符串数组

### obj.hasOwnProperty(propname)
查找一个对象是否有某个属性，不会去查找它的原型链。如果有返回true，反之返回false。 