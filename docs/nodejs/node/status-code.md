---
title: HTTP 状态码与浏览器缓存
author: Closerdoor
date: '2021-12-12'
---

开发过程中常见的 `200 OK (from disk cache)` 并不表示服务端重新处理了请求，而是说明浏览器直接命中了本地缓存。

## 常见状态码

- `200 OK`：请求成功。
- `304 Not Modified`：资源未修改，可继续使用缓存。
- `404 Not Found`：资源不存在。
- `500 Internal Server Error`：服务端内部错误。

## `from disk cache` 是什么

当开发者工具中看到 `200 OK (from disk cache)` 或 `200 OK (from memory cache)` 时，通常表示：

- 浏览器直接使用了本地缓存副本。
- 这不是一次完整的网络响应。
- 常见于静态资源，如脚本、样式、图片。

## 如何避免缓存干扰

### 方式一：资源带版本号

```js
const url = `/rest/public/shoppings/searchAll?t=${Date.now()}`
setUrl(url)
```

### 方式二：服务端配置缓存策略

- 通过 `Cache-Control` 控制缓存时长。
- 通过 `ETag` / `Last-Modified` 实现协商缓存。

## 实践建议

- 开发环境出现缓存问题时，可优先关闭浏览器缓存或增加临时版本参数。
- 生产环境不要简单依赖时间戳，静态资源更适合使用构建产物指纹或显式版本号。
