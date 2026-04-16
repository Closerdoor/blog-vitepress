---
title: 内置模块与node模块使用
author: Closerdoor
date: '2024-04-29'
---

## 内置模块
部分内置模块无法在ES module中使用，如`__filename`和`__dirname`.如要使用，可通过其它方法：
```js
// __dirname is not defined in ES module scope
import { fileURLToPath } from 'url';
import path from 'path';
// import.meta.url 获得文件系统下的文件url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

## 模块化使用
在 Node.js 环境中默认使用的是 CommonJS 规范。需要使用 require 语句进行导入。import 是 ES6 中的模块化写法，CommonJS 模块与 ES6 模块不兼容。  
```js
const xlsx = require('node-xlsx')
```
如果要使用 import 语句。
1. 在 package.json 中设置字段 “type”:“module”  
或  
2. 使用 .mjs 的扩展名。(Node.js v13.2开始支持ES6模块。要求ES6模块采用.mjs)
