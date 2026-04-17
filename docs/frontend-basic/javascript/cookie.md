---
title: Cookie
author: Closerdoor
date: '2022-06-13'
---

## 是什么

Cookie 是浏览器与服务器之间的一种小型键值存储，常用于会话标识、登录态和少量配置数据。

## 核心概念

- Cookie 会随同源请求自动发送给服务端。
- 单条容量通常较小，不能替代本地大容量存储。
- 作用范围由 `domain`、`path`、过期时间等属性决定。

## 常见属性

- `Expires` 或 `Max-Age`：过期时间。
- `Path`：生效路径。
- `Domain`：生效域。
- `Secure`：仅在 HTTPS 下发送。
- `HttpOnly`：前端 JavaScript 不能读取。
- `SameSite`：控制跨站请求是否携带。

## 基本用法

```js
document.cookie = `theme=dark; Max-Age=86400; Path=/`;
console.log(document.cookie);
```

## 简单封装

```js
function setCookie(name, value, maxAge) {
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/`;
}

function getCookie(name) {
  const target = `${encodeURIComponent(name)}=`;

  return document.cookie
    .split('; ')
    .find((item) => item.startsWith(target))
    ?.slice(target.length);
}

function removeCookie(name) {
  document.cookie = `${encodeURIComponent(name)}=; Max-Age=0; Path=/`;
}
```

## 注意事项

- 登录态 Cookie 通常应设置 `HttpOnly`、`Secure`、合适的 `SameSite`。
- 前端可读的 Cookie 不适合存放敏感信息。
- 业务数据优先考虑 `localStorage`、`sessionStorage` 或 IndexedDB。

## 总结

Cookie 的重点在于“会跟请求一起发送”，因此它更偏向会话与认证，而不是一般前端缓存。
