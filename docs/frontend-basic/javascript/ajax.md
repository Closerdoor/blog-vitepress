---
title: AJAX 与现代请求方式
author: Closerdoor
date: '2021-12-12'
---

## 基本概念

AJAX 指浏览器在不整页刷新的前提下与服务端交换数据。现代项目中更常用 `fetch` 或 `axios`，但理解 `XMLHttpRequest` 仍然有助于排查网络问题。

## 核心概念

- 异步请求不会阻塞页面渲染。
- 请求结果通常通过回调、`Promise` 或 `async/await` 处理。
- 常见数据格式包括 `JSON`、文本和二进制内容。

浏览器原生 AJAX 还受同源策略限制：协议、域名、端口三者都相同才算同源。

## 原生 XHR

```js
function request({ method = 'GET', url, data }) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const upperMethod = method.toUpperCase();

    let finalUrl = url;
    let body = null;

    if (upperMethod === 'GET' && data) {
      const params = new URLSearchParams(data).toString();
      finalUrl += (url.includes('?') ? '&' : '?') + params;
    } else if (data) {
      body = JSON.stringify(data);
    }

    xhr.open(upperMethod, finalUrl, true);

    if (body) {
      xhr.setRequestHeader('Content-Type', 'application/json');
    }

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;

      if (xhr.status >= 200 && xhr.status < 300) {
        const contentType = xhr.getResponseHeader('Content-Type') || '';
        if (contentType.includes('application/json')) {
          resolve(JSON.parse(xhr.responseText));
          return;
        }
        resolve(xhr.responseText);
        return;
      }

      reject(new Error(`Request failed: ${xhr.status}`));
    };

    xhr.send(body);
  });
}
```

## Fetch

```js
async function loadUser() {
  const response = await fetch('/api/user');

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}
```

## Axios

```js
import axios from 'axios';

async function loadUser() {
  const { data } = await axios.get('/api/user');
  return data;
}
```

## async/await

`async/await` 只是对 `Promise` 的语法简化，异常仍然要通过 `try...catch` 处理。

```js
async function submitForm(payload) {
  try {
    const data = await request({
      method: 'POST',
      url: '/api/form',
      data: payload,
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

## 跨域

常见方案：

- 服务端设置 CORS 响应头。
- 开发环境使用代理转发。
- JSONP 只适用于 `GET`，现在很少新用。

### JSONP 原理

JSONP 利用的是 `script` 标签可以跨域加载脚本的特性，本质不是 XHR。

```html
<script>
  function handleData(data) {
    console.log(data);
  }
</script>
<script src="https://example.com/api?callback=handleData"></script>
```

## 注意事项

- 请求体与 `Content-Type` 要匹配。
- `fetch` 在 HTTP 4xx/5xx 时不会自动抛错，需要手动判断 `response.ok`。
- 前端跨域本质上是浏览器安全限制，最终仍需服务端配合。

## 总结

XHR 是基础，`fetch` 是浏览器原生现代方案，`axios` 更适合统一拦截、超时和业务封装。
