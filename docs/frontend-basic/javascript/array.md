---
title: 数组方法
author: Closerdoor
date: '2021-12-12'
---

## 数组特性

数组是按索引组织的数据结构，本质上仍然是对象，但在遍历、变更和聚合上有一套专门 API。

## 核心概念

- 稀疏数组存在“空位”，与显式的 `undefined` 不完全相同。
- 部分方法会修改原数组，部分方法返回新数组。
- 排序默认按字符串比较，不适合直接处理数字。

## 常用方法分类

### 创建与复制

```js
Array.from(document.querySelectorAll('li'));
Array.of(1, 2, 3); // [1, 2, 3]

const next = [1, 2].concat([3, 4]);
const copied = [1, 2, 3].slice(0);
```

### 增删

```js
const arr = [1, 2, 3];

arr.push(4); // [1, 2, 3, 4]
arr.pop(); // 删除末尾
arr.shift(); // 删除开头
arr.unshift(0); // 开头插入
```

### 截取与替换

```js
const arr = ['a', 'b', 'c', 'd'];

arr.slice(1, 3); // ['b', 'c']
arr.splice(1, 2, 'x', 'y'); // 原数组变为 ['a', 'x', 'y', 'd']
```

### 查找与判断

```js
const arr = [10, 20, 30];

arr.indexOf(20); // 1
arr.includes(30); // true
arr.find((item) => item > 15); // 20
arr.findIndex((item) => item === 30); // 2
arr.some((item) => item > 25); // true
arr.every((item) => item > 5); // true
Array.isArray(arr); // true
```

### 遍历与聚合

```js
const arr = [1, 2, 3, 4];

arr.map((item) => item * 2); // [2, 4, 6, 8]
arr.filter((item) => item > 2); // [3, 4]
arr.reduce((sum, item) => sum + item, 0); // 10
arr.forEach((item, index) => console.log(item, index));
```

### 排序与拼接

```js
const arr = [1, 20, 3];

arr.join('-'); // '1-20-3'
arr.reverse(); // 修改原数组
arr.sort((a, b) => a - b); // 数字排序
```

## 稀疏数组

```js
const arr = [1, , 3];

arr.length; // 3
arr.forEach((item) => console.log(item)); // 不会遍历空位
arr.map((item) => item); // 保留空位
```

## 排序

```js
const numbers = [10, 2, 30];

numbers.sort((a, b) => a - b); // [2, 10, 30]
```

## 示例

统计字符串中每个字符出现次数：

```js
const result = 'aabcc'.split('').reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});
```

## 注意事项

- `splice` 会修改原数组，`slice` 不会。
- `indexOf(NaN)` 永远返回 `-1`，可改用 `includes`。
- `sort()` 若不传比较函数，结果往往不符合预期。

## 总结

数组 API 的重点不是死记硬背，而是区分“是否改原数组”和“返回什么”。
