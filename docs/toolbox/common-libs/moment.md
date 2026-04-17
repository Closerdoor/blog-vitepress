---
title: Moment.js
author: Closerdoor
date: '2021-12-12'
---

`Moment.js` 是经典的日期时间处理库，适合维护旧项目或快速完成时间格式化需求。

## 安装

```bash
npm install moment
```

## 基本用法

```js
import moment from 'moment'

const now = moment()

console.log(now.format('YYYY-MM-DD HH:mm:ss'))
console.log(now.add(7, 'days').format('YYYY-MM-DD'))
console.log(now.startOf('month').format('YYYY-MM-DD'))
```

## 常见操作

- 格式化：`format()`
- 加减时间：`add()`、`subtract()`
- 起止时间：`startOf()`、`endOf()`
- 比较时间：`isBefore()`、`isAfter()`、`isSame()`

## 使用建议

- `Moment.js` 已进入维护阶段，新项目更推荐 `dayjs`、`date-fns` 或原生 `Intl`。
- 如果项目已广泛使用 `Moment.js`，在没有明显性能或体积压力时可继续维护。
