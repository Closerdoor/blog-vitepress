---
title: 浏览器存储
author: Closerdoor
date: '2021-12-12'
---

## 常见方案

- `Cookie`
- `localStorage`
- `sessionStorage`

## Cookie

Cookie 主要用于浏览器与服务端之间传递小量状态，常见于登录态和会话标识。

## Web Storage

### localStorage

面向持久化存储，除非手动删除，否则数据会一直保留。

### sessionStorage

面向会话级存储，标签页关闭后通常失效。

## 基本用法

```js
localStorage.setItem('token', 'abc');
localStorage.getItem('token');
localStorage.removeItem('token');
localStorage.clear();
```

## 区别

| 方案 | 生命周期 | 是否随请求发送 | 典型用途 |
| --- | --- | --- | --- |
| Cookie | 可配置 | 是 | 会话、认证 |
| localStorage | 持久 | 否 | 本地缓存、偏好设置 |
| sessionStorage | 会话级 | 否 | 临时页面状态 |

## 注意事项

- Web Storage 只能存字符串，复杂数据要 `JSON.stringify`。
- 不要在本地存储中保存高敏感信息。
- 跨标签页同步需求可结合 `storage` 事件处理。

## 总结

如果数据需要自动参与请求，用 Cookie；如果只是前端本地状态，优先使用 Web Storage。
