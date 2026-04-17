---
title: 解构赋值与剩余参数
author: Closerdoor
date: '2022-06-14'
---

## 基本语法

解构赋值用于从数组或对象中快速取值，剩余语法 `...` 用于收集其余成员。

## 数组解构

```js
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1
// second = 2
// rest = [3, 4, 5]
```

支持默认值：

```js
const [a = 10, b = 20] = [1];
// a = 1, b = 20
```

## 对象解构

```js
const user = { name: 'Tom', age: 18 };
const { name, age: userAge } = user;
```

动态属性名也可以参与解构：

```js
const key = 'title';
const article = { title: 'Hello' };
const { [key]: value } = article;
```

## 函数参数解构

```js
function createProduct({ name = '默认商品', price = 0 } = {}) {
  return { name, price };
}
```

## rest 参数

```js
function sum(...numbers) {
  return numbers.reduce((acc, item) => acc + item, 0);
}
```

## 注意事项

- 默认值仅在对应值为 `undefined` 时生效。
- 对象解构是按属性名匹配，不按顺序。
- `rest` 必须放在最后。

## 总结

解构提升的是读取效率与表达力，适合参数对象、返回值拆分和局部数据提取。
