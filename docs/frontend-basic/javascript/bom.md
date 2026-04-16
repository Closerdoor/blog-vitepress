---
title: BOM
author: Closerdoor
date: '2021-12-12'
---

## window
bom的核心是window对象。window作为全局对象，全局变量都是window的属性，document对象属于全局window对象的属性分支。
`'document' in window  //true`
```js
//window方法
window.alert()
window.setInterval()
window.prompt();
window.resizeTo(width,height)
window.close(); //关闭当前页面 ctrl+w
window.print(); //调用浏览器打印功能 ctrl+p  
window.blur();
window.moveTo(10, 10)
```
## document
`window.document`
```js
document.lastModified //文档最后一次修改时间
document.referrer //追踪 何处跳转到当前页面 何处跳转到当前页面 从哪个页面跳转过来的
document.title //title标签值 网页标题
document.URL //当前页面的URL地址
document.anchors["anchName"]//返回一个数组，数组中的元素为文档中所有锚元素。
```
## location
`window.location`
```js
//属性
location.host //127.0.0.1:5503 hostName+port = host
location.hostname// 地址 | 域名
location.port //端口
location.origin // http://127.0.0.1:5503 协议头 + host + port
location.href //完整URL路径
//location.href = 'https://www.mi.com/'; //替换当前地址栏文本进行跳转
//href中需要进行编码和解码 encodeURI(str) decodeURI(str)
location.pathname //路径
location.protocol //协议
//方法
location.reload(true | false); //默认为false。为false时从浏览器缓存中重载(f5)，为true时从服务器端重载(ctrl+ f5) 
location.assign("home"); //在host后面拼接 路径
location.replace("http:www.baidu.com")
```
## navigator
`window.navigator`浏览器与操作系统信息
```js
navigator.userAgent //(有用)替代appVersion
navigator.language//(有用)浏览器语言
navigator.taintEnabled //计算机平台号 判断windows linux unix
navigator.appVersion//版本信息(操作系统/浏览器内核/浏览器)
navigator.appCodeName//Mozilla
navigator.connection.effectiveType//用户网络状态
navigator.cookieEnabled//判断浏览器是否开启了cookie
navigator.product //实际内核
```
## screen
`window.screen`用户显示设备信息 (显示器)
```js
screen.width
screen.height
```
## history
`window.history`当前会话的浏览历史
```js
history.length //浏览路径长度
history.back(); //回退键 退回到之前的网页
history.forward(); //前进键 跳转到页面队列中的下一个地址
history.go(-2); //传参跳转到任意一个 页面队列地址  -2 点击两次退格键
```