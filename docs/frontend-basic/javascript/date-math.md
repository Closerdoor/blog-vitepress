---
title: Date 与 Math
author: Closerdoor
date: '2021-12-12'
---

## Math

### 常用属性与方法

```js
Math.PI;
Math.random();
Math.floor(1.9); // 1
Math.ceil(1.1); // 2
Math.round(1.5); // 2
Math.abs(-3); // 3
Math.max(1, 2, 3); // 3
Math.min(1, 2, 3); // 1
Math.pow(2, 3); // 8
Math.sqrt(9); // 3
```

## Date

### 创建时间对象

```js
const now = new Date();
const fromTimestamp = new Date(1710000000000);
const fromString = new Date('2026-04-17T10:00:00+08:00');
```

### 常用方法

```js
const date = new Date();

date.getFullYear();
date.getMonth(); // 0 到 11
date.getDate();
date.getHours();
date.getMinutes();
date.getSeconds();
date.getTime();
```

## 格式化示例

```js
function formatDateTime(timestamp) {
  const date = new Date(timestamp);
  const pad = (value) => String(value).padStart(2, '0');

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}
```

## 获取月份天数

```js
function getDaysOfMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

getDaysOfMonth(2026, 2); // 28
```

## 注意事项

- `getMonth()` 从 `0` 开始。
- 生产环境中，复杂时区和格式化需求更适合 `Intl.DateTimeFormat` 或成熟日期库。
- `Math.random()` 不能用于安全场景。

## 总结

`Math` 解决计算，`Date` 处理时间。真正容易出错的通常不是 API 本身，而是边界值、时区和格式约定。
