---
title: ES Module
author: Closerdoor
date: '2026-04-17'
---

## 基本导出

### 默认导出

```js
const a = 10;
const c = 'hello';

function show() {}

export default {
  a,
  c,
  show,
};
```

```js
import mod from './m1.js';
console.log(mod);
```

### 按需导出

```js
export const a = 10;
export const b = 'root';
```

```js
import { a, b as aliasB } from './m1.js';
```

## 直接执行模块

只想执行模块副作用时，可以只导入文件：

```js
import './init.js';
```

## 特点

- `import` / `export` 是静态结构，便于打包工具做 Tree Shaking。
- 默认导出一个模块只能有一个。
- 按需导出可以有多个。
- 浏览器里使用时，`script` 需要加 `type="module"`。

## 与 CommonJS 的区别

- ES Module 是官方标准。
- CommonJS 用 `require()` / `module.exports`。
- ES Module 更适合现代前端构建和静态分析。
