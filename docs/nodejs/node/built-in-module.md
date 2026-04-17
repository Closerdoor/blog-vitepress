---
title: Node.js 内置模块与模块体系
author: Closerdoor
date: '2024-04-29'
---

本文整理 Node.js 中常见的内置模块访问方式，以及 CommonJS 与 ES Module 的基本用法。

## 在 ES Module 中获取 `__filename` 与 `__dirname`

ES Module 默认不提供 `__filename` 和 `__dirname`，可通过 `import.meta.url` 转换：

```js
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
```

## 内置模块导入写法

Node.js 内置模块建议使用 `node:` 前缀，代码语义更清晰：

```js
import fs from 'node:fs'
import http from 'node:http'

const path = require('node:path')
```

## CommonJS 与 ES Module

### CommonJS

- 默认历史模块体系。
- 使用 `require()` 导入，`module.exports` 或 `exports` 导出。
- 适合传统 Node.js 项目。

```js
const xlsx = require('node-xlsx')
```

### ES Module

- 使用 `import` / `export`。
- 启用方式：
  - 在 `package.json` 中声明 `"type": "module"`
  - 或将文件扩展名改为 `.mjs`

```js
import xlsx from 'node-xlsx'
```

## 使用建议

- 新项目优先使用 ES Module。
- 旧项目若大量依赖 CommonJS，保持现状通常更稳妥。
- 混用两种模块体系时，需要特别注意默认导出与动态导入行为。
