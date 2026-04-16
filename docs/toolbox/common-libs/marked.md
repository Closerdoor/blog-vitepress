---
title: 数据类型判断
author: Closerdoor
date: '2021-12-12'
---

## 插件[marked](https://www.npmjs.com/package/marked)
安装
```
npm install marked
```
引入和使用
```js
import {marked} from 'marked';
document.getElementById('content').innerHTML = marked.parse('# Marked in the browser\n\nRendered by **marked**.');
```
## 插件[highlight.js](https://highlightjs.org/usage/)
安装
```
npm install highlight.js
```
引入和使用
```js
import hljs from "highlight.js";
//css文件名可修改，具体主题查看官网
import "highlight.js/styles/dark.css";
```
