---
title: Web Worker 与通知
author: Closerdoor
date: '2022-06-24'
---

## Web Worker 是什么

Web Worker 允许在独立线程中执行脚本，避免复杂计算阻塞主线程 UI。

## 基本用法

### 主线程

```js
const worker = new Worker('/worker.js');

worker.postMessage({ type: 'start' });

worker.onmessage = (event) => {
  console.log('message from worker:', event.data);
};
```

### Worker 线程

```js
self.onmessage = (event) => {
  self.postMessage({ ok: true, payload: event.data });
};
```

## 可做什么

- 大数据计算
- 数据格式转换
- 图像处理
- 不依赖 DOM 的耗时任务

## 限制

- Worker 不能直接操作 DOM。
- 线程间通信主要依赖 `postMessage`。

## Notification

```js
await Notification.requestPermission();

if (Notification.permission === 'granted') {
  new Notification('新通知', {
    body: '任务已完成',
  });
}
```

## 注意事项

- 通知权限需要用户授权。
- 实际生产中，消息推送往往要结合 Service Worker。

## 总结

Web Worker 解决主线程阻塞，Notification 解决用户提醒，两者经常一起出现在前端能力扩展场景中。
