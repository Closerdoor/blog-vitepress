---
title: JavaScript 面试整理
date: '2023-05-02'
category: question
description: JavaScript 基础高频题精简提纲。
---

## 变量声明

### `var`、`let`、`const` 区别
- `var` 存在变量提升，且没有块级作用域。
- `let` 和 `const` 有块级作用域，存在暂时性死区。
- `const` 不能重新赋值，但引用类型内部值仍可修改。

## `this` 绑定

- 默认绑定：普通函数独立调用时，浏览器中通常指向 `window`。
- 隐式绑定：对象方法调用时指向调用者。
- 显式绑定：`call`、`apply`、`bind` 指定 `this`。
- `new` 绑定：构造函数中的 `this` 指向新实例。
- 箭头函数没有自己的 `this`，取决于定义时外层作用域。

## 闭包

- 闭包是函数与其词法作用域的组合。
- 常见用途：封装私有变量、延长变量生命周期、做函数工厂。
- 风险：不必要的引用会增加内存占用。

## 存储方式区别

- `cookie` 会跟随 HTTP 请求发送到服务端，容量小，适合会话标识等场景。
- `localStorage` 持久化保存，除非主动删除否则不会消失。
- `sessionStorage` 只在当前会话内有效，标签页关闭后清空。

## AJAX 与 JSON

- `XMLHttpRequest` 是浏览器发起异步请求的经典方式。
- JSON 本质是字符串格式的数据交换标准，使用时通常要 `JSON.parse()` 和 `JSON.stringify()`。

## 浏览器定位 API

```js
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
});
```

## 原型与原型链

- 实例通过 `__proto__` 或内部原型链接访问原型对象。
- 构造函数的 `prototype` 用于放共享方法。
- 查找属性时会沿原型链逐级向上，直到 `null`。

## 防抖与节流

### 防抖
- 适合输入搜索、窗口 resize。
- 核心是“只执行最后一次”。

```js
function debounce(fn, wait) {
  let timer = null

  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}
```

### 节流
- 适合滚动监听、拖拽、频繁点击。
- 核心是“固定时间内只执行一次”。

```js
function throttle(fn, wait) {
  let timer = null

  return function (...args) {
    if (timer) return

    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, wait)
  }
}
```

## HTTP 与 HTTPS

- HTTPS = HTTP + TLS/SSL。
- HTTPS 解决数据加密、身份校验和传输完整性问题。
- 代价是握手更复杂，但现代场景下已是默认选择。
