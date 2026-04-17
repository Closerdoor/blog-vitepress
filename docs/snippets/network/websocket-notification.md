---
title: WebSocket 消息通知
date: '2021-12-12'
---

## 适用场景

建立轻量通知通道，接收服务端推送，并在断开后自动重连。

## 最小示例

```js
export function createNotificationSocket(url, { onMessage, retryDelay = 3000 } = {}) {
  let socket = null;
  let reconnectTimer = null;
  let closedByUser = false;

  function connect() {
    socket = new WebSocket(url);

    socket.onmessage = (event) => {
      let data = event.data;

      try {
        data = JSON.parse(event.data);
      } catch {
        // 非 JSON 消息直接透传
      }

      onMessage?.(data);
    };

    socket.onclose = () => {
      if (closedByUser) return;
      reconnectTimer = window.setTimeout(connect, retryDelay);
    };

    socket.onerror = () => {
      socket.close();
    };
  }

  connect();

  return {
    send(data) {
      if (socket?.readyState !== WebSocket.OPEN) return;
      socket.send(typeof data === 'string' ? data : JSON.stringify(data));
    },
    close() {
      closedByUser = true;
      window.clearTimeout(reconnectTimer);
      socket?.close();
    },
  };
}

const ws = createNotificationSocket('wss://example.com/notice', {
  onMessage(data) {
    console.log('收到通知:', data);
  },
});
```

## 说明

- 通知类场景优先保证简单和可恢复，不必一开始就做重型封装。
- 如果服务端要求鉴权，连接地址可追加 token 查询参数。
