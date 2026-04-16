---
title: 状态码
author: Closerdoor
date: '2021-12-12'
---

## 状态码(Status Code)
有时候会出现 Status Code: 200 OK (from disk cache)，证明该请求是从浏览器缓存中获取
解决方法：在url后增加时间戳
```js
seturl("/rest/public/shoppings/searchAll?time="+new Date().getTime())
```