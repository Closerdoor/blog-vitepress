---
title: JavaScript 模块化
author: Closerdoor
date: '2023-04-07'
---

模块化的核心目标是隔离作用域、管理依赖并提升代码复用性。前端和 Node.js 常见的模块体系主要包括 AMD、CMD、CommonJS 与 ES Module。

## 模块体系对比

| 体系 | 典型场景 | 导入方式 | 特点 |
| :-- | :-- | :-- | :-- |
| AMD | 早期浏览器 | `define` / `require` | 依赖前置，适合浏览器异步加载 |
| CMD | 早期浏览器 | `define` / `require` | 依赖就近，代表实现是 Sea.js |
| CommonJS | Node.js | `require()` | 同步加载，生态成熟 |
| ES Module | 现代浏览器、Node.js、构建工具 | `import` / `export` | 官方标准，静态分析友好 |

## AMD

代表工具是 RequireJS。

```js
define('test', ['jquery', 'mycode'], function ($, mycode) {
  return {
    run() {
      mycode.init()
      $('.wrap').show()
    },
  }
})
```

## CMD

代表工具是 Sea.js。

```js
define(function (require, exports, module) {
  const $ = require('jquery')

  module.exports = {
    add(a, b) {
      return a + b
    },
  }
})
```

## CommonJS

Node.js 传统模块方案，文件即模块。

```js
const math = require('./math')

module.exports = {
  sum(a, b) {
    return a + b
  },
}
```

要点：

- 使用 `require()` 导入。
- 使用 `module.exports` 或 `exports` 导出。
- 加载是同步的，适合本地文件系统环境。

模块解析通常会依次尝试文件、目录下的 `package.json`、目录下的 `index.js`。

## ES Module

现代 JavaScript 标准模块方案。

```js
import { sum } from './math.js'

export function total(list) {
  return list.reduce((acc, item) => acc + item, 0)
}
```

要点：

- 使用 `import` / `export`。
- 支持静态分析、Tree Shaking 与顶层 `await`。
- Node.js 中可通过 `"type": "module"` 或 `.mjs` 启用。

## 选择建议

- 新项目优先使用 ES Module。
- Node.js 旧项目仍可继续使用 CommonJS。
- AMD 与 CMD 主要用于维护历史项目，新增项目通常不再采用。
