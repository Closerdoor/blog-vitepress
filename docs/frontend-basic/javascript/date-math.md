---
title: Date和Math对象
author: Closerdoor
date: '2021-12-12'
---

## Math
### 方法汇总
```
Math.PI						// 圆周率
Math.random()				// 生成随机数
Math.floor()/Math.ceil()	 // 向下取整/向上取整
Math.round()				// 取整，四舍五入
Math.abs()					// 绝对值
Math.max()/Math.min()		 // 求最大和最小值

Math.sin()/Math.cos()		 // 正弦/余弦
Math.power()/Math.sqrt()	 // 求指数次幂/求平方根
```
## Date
### 日期对象
### 日期方法
### 日期实例
```js
//格式化时间 传入时间戳
function formatDateTime(timestamp) {
  if (typeof timestamp === 'string') {
    return timestamp;
  }
  let date = new Date(timestamp);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  let d = date.getDate();
  d = d < 10 ? '0' + d : d;
  let h = date.getHours();
  h = h < 10 ? '0' + h : h;
  let minute = date.getMinutes();
  minute = minute < 10 ? '0' + minute : minute;
  let second = date.getSeconds();
  second = second < 10 ? '0' + second : second;
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
}
//获取不同时间的时间戳进比较
function getLimit(timestamp) {
  if (typeof timestamp === 'string') {
    return timestamp;
  }
  let date = new Date(timestamp);

  let nowDate = new Date();
  let nowStart = new Date(`${nowDate.getFullYear()}/${nowDate.getMonth()}/${nowDate.getDate()}`)
  //今天凌晨的时间戳
  let todayTime = nowStart.getTime();
  // 昨天凌晨的时间戳
  let yesterdayTime = new Date(todayTime - 24 * 60 * 60 * 1000).getTime(); 
  //今年的时间戳
  let thisYear = new Date(`${nowDate.getFullYear()}/01/01`).getTime();
  //去年的时间戳
  let lastYear = new Date(`${nowDate.getFullYear() - 1}/01/01`).getTime();
}
```

### 获取某个月的天数
`new Date(2020, 1, 0).getDate()`