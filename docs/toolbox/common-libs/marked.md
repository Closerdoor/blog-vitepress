---
title: Marked 与 highlight.js
author: Closerdoor
date: '2021-12-12'
---

`marked` 用于将 Markdown 转换为 HTML，`highlight.js` 常用于代码高亮，两者经常配合使用。

## 安装

```bash
npm install marked highlight.js
```

## 基本示例

```js
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/dark.css'

marked.setOptions({
  highlight(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value
    }

    return hljs.highlightAuto(code).value
  },
})

const markdown = '# Marked\n\n```js\nconsole.log(1)\n```'
document.getElementById('content').innerHTML = marked.parse(markdown)
```

## 注意事项

- 将 Markdown 转为 HTML 后直接插入页面时，需要考虑 XSS 风险。
- 如果内容来源不可信，建议配合 HTML 清洗库使用。
- `highlight.js` 主题样式可按项目风格替换。
