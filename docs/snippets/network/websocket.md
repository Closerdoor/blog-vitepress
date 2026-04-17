---
title: WebSocket 封装
date: '2021-12-12'
---

## 适用场景

需要统一处理连接、重连、心跳和消息解析时，封装成可复用实例。

## 最小示例

```js
class WSocket {
  constructor({
    url,
    retry = Infinity,
    reconnectDelay = 3000,
    pingInterval = 20000,
    pingMessage = '{"code":"PING"}',
  }) {
    if (!url) throw new Error('websocket url is required');

    this.url = url;
    this.retry = retry;
    this.reconnectDelay = reconnectDelay;
    this.pingInterval = pingInterval;
    this.pingMessage = pingMessage;

    this.socket = null;
    this.retryCount = 0;
    this.closedByUser = false;
    this.reconnectTimer = null;
    this.heartbeatTimer = null;

    this.onopen = () => {};
    this.onmessage = () => {};
    this.onerror = () => {};
    this.onclose = () => {};

    this.connect();
  }

  connect() {
    this.socket = new WebSocket(this.url);

    this.socket.onopen = () => {
      this.retryCount = 0;
      this.startHeartbeat();
      this.onopen();
    };

    this.socket.onmessage = (event) => {
      this.startHeartbeat();

      let data = event.data;
      try {
        data = JSON.parse(event.data);
      } catch {
        // 非 JSON 消息直接透传
      }

      this.onmessage(data);
    };

    this.socket.onerror = (error) => {
      this.onerror(error);
      this.socket.close();
    };

    this.socket.onclose = (event) => {
      this.stopHeartbeat();
      this.onclose(event);

      if (!this.closedByUser) {
        this.scheduleReconnect();
      }
    };
  }

  send(data) {
    if (this.socket?.readyState !== WebSocket.OPEN) return;
    this.socket.send(typeof data === 'string' ? data : JSON.stringify(data));
  }

  close() {
    this.closedByUser = true;
    window.clearTimeout(this.reconnectTimer);
    this.stopHeartbeat();
    this.socket?.close();
  }

  scheduleReconnect() {
    if (this.retryCount >= this.retry) return;

    this.retryCount += 1;
    window.clearTimeout(this.reconnectTimer);
    this.reconnectTimer = window.setTimeout(() => this.connect(), this.reconnectDelay);
  }

  startHeartbeat() {
    this.stopHeartbeat();
    this.heartbeatTimer = window.setTimeout(() => {
      this.send(this.pingMessage);
      this.startHeartbeat();
    }, this.pingInterval);
  }

  stopHeartbeat() {
    window.clearTimeout(this.heartbeatTimer);
  }
}

const ws = new WSocket({
  url: 'wss://example.com/ws?token=demo-token',
});

ws.onopen = () => ws.send({ code: 'READY' });
ws.onmessage = (data) => console.log('收到消息:', data);
```

## 说明

- 浏览器端常用的是应用层心跳，不是底层 WebSocket ping/pong。
- 如果页面销毁后不再需要连接，记得主动调用 `close()`。

## WebSocket、SSE、Socket.IO

- `WebSocket`：全双工，适合聊天室、协同编辑、游戏等双向实时通信。
- `SSE`：服务端单向推送，适合通知流、日志流、报价流等场景。
- `Socket.IO`：不是原生 WebSocket API，而是更高层的实时通信库，内置重连、房间等能力。

## Socket.IO 最小示例

### 服务端

```js
const Koa = require('koa');
const server = require('http').createServer(new Koa().callback());
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  socket.emit('getData', { ok: true });
  socket.on('addData', (payload) => {
    socket.broadcast.emit('getData', payload);
  });
});
```

### 客户端

```html
<script src="/socket.io/socket.io.js"></script>
<script>
  const socket = io();
  socket.emit('addData', { text: 'hello' });
  socket.on('getData', (data) => console.log(data));
</script>
```
