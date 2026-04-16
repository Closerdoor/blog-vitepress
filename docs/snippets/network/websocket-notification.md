---
title: websocket消息通知
author: Closerdoor
date: '2021-12-12'
---

## websocket实现消息推送
封装 websocket.js
```js
function newWS(callback) {//callback为传入的回调函数
    //websocket相关
    var lockReconnect = false; //避免重复连接
    var wsUrl = Configs.websocketUrl;//websocket接口地址
    var ws;
    var tt;
    //创建websocket连接
    function createWebSocket() {
        try {
            ws = new WebSocket(wsUrl);
            initWS();
        } catch (e) {
            console.log('catch');
            reconnect(wsUrl);
        }
    }
    //websocket回调函数
    function initWS() {
        ws.onclose = function (e) {
            console.log('链接关闭', `WebSocket onclose 连接状态： ${ws.readyState}`);
            console.log('websocket 断开: ' + e.code + ' ' + e.reason + ' ' + e.wasClean)
            reconnect(wsUrl);
        };
        ws.onerror = function () {
            console.log('发生异常了', `WebSocket onerror 连接状态： ${ws.readyState}`);
            reconnect(wsUrl);
        };
        ws.onopen = function () {
            //心跳检测重置
            heartCheck.start();
        };
        ws.onmessage = function (res) {
            //拿到任何消息都说明当前连接是正常的
            console.log('接收到消息', res.data);
            callback(res.data)//利用回调函数来处理返回的数据
            heartCheck.start();
        }
    }
    //重新建立连接
    function reconnect(url) {
        if (lockReconnect) {
            return;
        };
        lockReconnect = true;
        //没连接上会一直重连，设置延迟避免请求过多
        tt && clearTimeout(tt);
        tt = setTimeout(function () {
            createWebSocket(url);
            lockReconnect = false;
        }, 4000);
    }
    //心跳检测
    var heartCheck = {
        timeout: 30000,
        timeoutObj: null,
        serverTimeoutObj: null,
        start: function () {
            // console.log('start');
            var _this = this;
            this.timeoutObj && clearTimeout(this.timeoutObj);
            this.serverTimeoutObj && clearTimeout(this.serverTimeoutObj);
            this.timeoutObj = setTimeout(function () {
                //这里发送一个心跳，后端收到后，返回一个心跳消息，
                // console.log('开始发送心跳');
                ws.send("Don't leave me");
                _this.serverTimeoutObj = setTimeout(function () {
                    console.log(ws);
                    ws.close();
                    // createWebSocket();
                }, _this.timeout);
            }, this.timeout)
        }
    }
    createWebSocket(wsUrl);
}

export default {
    newWS
}
```
页面中使用
```js
//引入工具库
import websocket from "../lib/websocket.js";
let WS:any = websocket

WS.newWS(function(data:any){
    if(data && WS.isJSON(data)){
        //对数据进行处理
    }
})
```