---
title: HTTP Content-Disposition
author: Closerdoor
date: '2021-12-12'
---

`Content-Disposition` 用于控制响应内容是在浏览器中直接打开，还是作为附件下载。

## 创建最简单的 HTTP 服务

```js
import http from 'node:http'

http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('hello world')
}).listen(3000)
```

常见对象：

- `req`：请求对象，可读取 URL、方法、请求头。
- `res`：响应对象，可设置状态码、响应头和响应体。

## 基本语义

- `inline`：浏览器可直接展示时，通常会尝试在页面内打开。
- `attachment`：提示浏览器下载文件。

常见写法：

```http
Content-Disposition: inline
Content-Disposition: attachment; filename="report.pdf"
Content-Disposition: attachment; filename*=UTF-8''%E6%8A%A5%E8%A1%A8.pdf
```

其中：

- `filename` 适合普通 ASCII 文件名。
- `filename*` 支持 UTF-8 编码，适合中文等非 ASCII 文件名。

## Node.js 示例

```js
import http from 'node:http'

http.createServer((req, res) => {
  const buffer = Buffer.from('example file')

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/octet-stream')
  res.setHeader(
    'Content-Disposition',
    "attachment; filename=\"report.txt\"; filename*=UTF-8''report.txt"
  )
  res.setHeader('Content-Length', buffer.length)
  res.end(buffer)
}).listen(3000)
```

## 使用建议

- 下载文件时，通常同时设置 `Content-Type` 与 `Content-Disposition`。
- 文件名包含中文时，优先补充 `filename*`。
- 若希望浏览器直接预览 PDF、图片等类型，可尝试使用 `inline`。
