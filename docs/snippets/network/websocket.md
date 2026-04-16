---
title: 封装websocket
author: Closerdoor
date: '2021-12-12'
---

## websocket
```js
class WSocket {
  constructor(config) {
    if (!config.url) {
      throw new Error('websocket url is invalid')
    }
    this.reconnectTimer = null;
    this.pingTimer = null;
    this.pongTimer = null;
    this.isAlive = false;
    this.lockReconnect = false;
    this.forbidReconnect = false; //是否手动关闭ws，调用close()
    this.count = 0;
    this.options = {
      url: '',
      retry: 10,
      pingTimeout: 20000,
      pongTimeout: 15000,
      reconnectTimeout: 5000,
      pingMsg: `{"code":"PING"}`,
    }
    this.ws = null; // websocket实例
    //自定义事件，会在websocket实例中执行
    this.onopen = () => {};
    this.onclose = () => {};
    this.onerror = () => {};
    this.onmessage = () => {};
    this.onreconnect = () => {};
    this.reconnectFailed = () => {};

    Object.keys(config).forEach(key => {
      this.options[key] = config[key]
    })

    this.createWebSocket()
  }
  createWebSocket() {
    try {
      this.ws = new WebSocket(this.options.url);
      this.initEvent();
    } catch (e) {
      this.reconnect();
      throw e;
    }
  }
  initEvent() {
    this.ws.onopen = (e) => {
      console.info('websocket was opened')
      this.isAlive = true;
      this.heartBeat()
      this.onopen();
    }

    this.ws.onclose = (e) => {
      this.isAlive = false
      console.log('websocket was closed', `WebSocket onclose 连接状态： ${ws.readyState}` + 'websocket 断开: ' + e.code + ' ' + e.reason + ' ' + e.wasClean);
      this.reconnect();
      this.onclose()
    }

    this.ws.onerror = (e) => {
      this.isAlive = false
      console.log('发生异常了', `WebSocket onerror 连接状态： ${ws.readyState}`);
      this.onerror(e);
      this.reconnect();
    }

    this.ws.onmessage = ({
      data
    }) => {
      this.count = 0;
      const res = data.indexOf('{') > -1 ? JSON.parse(data) : data
      this.onmessage(res)
      this.heartBeat();
    }
  }
  send(data) {
    if (!this.isAlive) return
    // const text = typeof data === 'string' ? data : JSON.stringify(data)
    this.ws.send(data)
  }
  close() {
    // 如果手动关闭连接，不再重连
    this.forbidReconnect = true;
    //重置所有定时器
    this.pingTimer && clearTimeout(this.pingTimer);
    this.pongTimer && clearTimeout(this.pongTimer);
    this.reconnectTimer && clearTimeout(this.reconnectTimer);
    //断开websocket
    this.ws.close();
  }
  //重连
  reconnect() {
    if (this.lockReconnect || this.forbidReconnect) return;
    this.lockReconnect = true;
    this.onreconnect();
    this.reconnectTimer && clearTimeout(this.reconnectTimer);
    this.reconnectTimer = setTimeout(() => {
      this.lockReconnect = false;
      if (this.count < this.options.retry) {
        this.count++;
        this.createWebSocket();
      } else { //达到最大重连次数，重连失败
        this.count = 0;
        this.reconnectFailed();
      }
    }, this.options.reconnectTimeout)
  }
  //开始心跳
  heartBeat() {
    //重置心跳
    this.pingTimer && clearTimeout(this.pingTimer);
    this.pongTimer && clearTimeout(this.pongTimer);
    //发送一个心跳消息，后端收到后，返回一个心跳消息，并进行重置
    this.pingTimer = setTimeout(() => {
      this.ws.send(this.options.pingMsg);
      //如果超过一定时间未重置，说明后端已断开
      this.pongTimer = setTimeout(() => {
        this.ws.close();
      }, this.options.pongTimeout)
    }, this.options.pingTimeout)
  }
}
```
## 使用
```js
const createImWebSocket = function () {
  let url = process.env.VUE_APP_WS_IM;
  if (localStorage.getItem('AccessToken')) {
    url = `${process.env.VUE_APP_WS_IM}?token=${encodeURIComponent(
      localStorage.getItem('AccessToken').slice(7)
    )}`
  }
  let myWS = new WSocket({
    url:url
  });
  myWS.onopen = function () {
    myWS.send(`{"code":"${MessageInfoType.MSG_READY}"}`);
  }; 
  myWS.onclose = function () {}
  myWS.onerror = function (error) {}
  myWS.onmessage = function (data) {
    //处理data
  }
  myWS.onreconnect = function () {}
  myWS.reconnectFailed = function () {}
}
```