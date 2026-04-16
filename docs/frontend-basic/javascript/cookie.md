---
title: cookie
author: Closerdoor
date: '2022-06-13'
---

## cookie
用于存储 web 页面的用户信息，主要用于保存登陆信息。

当浏览器从服务器上请求 web 页面时， 属于该页面的 cookie 会被添加到该请求中。服务端通过这种方式来获取用户的信息。
### **特点:**

* 可以设置过期时间
* 最大可以存储4KB(不同的浏览器存放大小不一样)
* 每一个域名下面最多可以存储50条数据(不同的浏览器存放的个数不一样)
### **内容:**

主要包括：名字、值、过期时间、路径和域。路径与域一起构成cookie的作用范围。

如果不在浏览器中设置过期时间，cookie被保存在内存中，生命周期随浏览器的关闭而结束，这种cookie简称会话cookie。如果在浏览器中设置了cookie的过期时间，cookie被保存在硬盘中，关闭浏览器后，cookie数据仍然存在，直到过期时间结束才消失。
### **格式：**
`name=value;[expires=data];[path=path];[domain=somewhere.com];[secure]`
//expires:过期时间，后面必须填写日期对象【注】系统会自动清除过期的cookie
//path:限制访问路径。如果不设置，默认是加载当前.html文件的路径【注】设置的cookie路径和加载当前文件的路径必须一致，如果不一致，cookie访问失败
//domain:限制访问域名。如果不设置，默认是加载当前.html文件的服务器域名/ip
//secure:如果设置，设置cookie时，可以通过http/https协议加载文件设置。设置了这个字段以后，只能设置https协议加载cookie
如何使用：
需要自己封装cookie方法，这里我们使用jQuery Cookie 插件演示用cookie保存购物车数据
### 使用
```js
//通过`document.cookie`来获取当前网站下的cookie，得到一个字符串，包含了当前网站下所有的cookie。把所有的cookie通过一个`分号`+`空格`的形式串联起来
document.cookie
//存储cookie
let oDate = new Date().toGMTString();//转换为日期字符串
let oDate = new Date().toUTCString();//转换为日期字符串
let content = encodeURI('man\n你好');//中文要先进行转码
document.cookie = `name=${content}; expires=${oDate}`;
```
### 封装
```js
function setCookie(obj, time) {
  for(key in obj) {
    let d = new Date();
    d.setDate(d.getDate() + time)
    document.cookie = `${key}=${obj[key]}; expires=${d.toUTCString()}`
  }
}
function getCookie() {
  let cookie = document.cookie;
  let cookieArr = cookie.match(/[^=;\s]+=([^=;]+)(?:;?)/g)
  let argData = {};
  for(let key of arguments) {
    argData[key] = 1;
  }
  return cookieArr.reduce((acc,curr)=>{
    let tempStr = curr.replace(';','');
    let tempArr = tempStr.split('=');
    if(tempArr[0] && argData[tempArr[0]]) {
      acc[tempArr[0]] = tempArr[1];
    }
    return acc;
  },{})
}
getCookie('name','age')
function removeCookie() {
  for(key in arguments) {
    let json = {};
    json[arguments[key]] = null;
    setCookie(json,-1)
  }
}
removeCookie('name')
```