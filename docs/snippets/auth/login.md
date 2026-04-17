---
title: 登录与注册
date: '2021-12-12'
---

## 适用场景

前端通过账号密码完成注册、登录，并保存访问令牌。

## 最小示例

```js
const API_BASE = '/api';

async function request(path, body) {
  const response = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`请求失败: ${response.status}`);
  }

  return response.json();
}

export async function register(payload) {
  return request('/register', payload);
}

export async function login(payload) {
  const data = await request('/login', payload);
  localStorage.setItem('token', data.token);
  return data;
}

// 用法
await register({ username: 'demo', password: '123456' });
await login({ username: 'demo', password: '123456' });
```

## 说明

- 登录成功后只缓存必要字段，敏感信息不要落盘。
- 生产环境通常还需要刷新令牌、退出登录和过期处理。
