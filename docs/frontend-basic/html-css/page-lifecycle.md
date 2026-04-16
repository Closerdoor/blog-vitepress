---
title: 页面生命周期
author: Closerdoor
date: '2022-06-14'
---

## 页面 生命周期事件
```
window.onbeforeunload  //页面跳转之前执行
window.onunload //用户离开页面时触发
window.onload //页面完成加载时执行
window.onpagehide //页面隐藏的时候执行
window.onpageshow //页面显示的时候执行
```
### beforeunload————页面跳转之前执行
a链接跳转(当前页面跳转)
```js
window.onbeforeunload = function () {
  localStorage.setItem('beforeunload', 'check');
  // return false;
}
```
### pagehide————页面隐藏时执行
```js
window.onpagehide = function () {
  localStorage.setItem('pagehide', 'check')
}
```
### unload————用户离开页面时触发
```js
window.onunload = function () {
  localStorage.setItem('unload', 'check')
}
```
### pageshow————页面显示时执行
```js
window.onpageshow = function () {
  localStorage.setItem('pageshow', 'check')
}
```
### load————页面完成加载时执行
```js
window.onload = function () {
  localStorage.setItem('load', 'check')
}
```
## 页面可见性
```js
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState == 'hidden') {
    document.title = '页面不可见';
  } else {
    document.title = '页面可见';
  }
});
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    document.title = '页面不可见';
  }
  else {
    document.title = '页面可见';
  }
});
```
## 页面聚焦
```js
window.onblur = function () {
  document.title = "页面失去焦点";
}

window.onfocus = function () {
  document.title = "页面聚焦";
}
```

## 网络状态
```js
window.addEventListener('online',function(){
	console.log('联网');
},false)
window.addEventListener('offline',function(){
	console.log('断网');
},false)
```

## 实际
有时候，开发者需要知道，用户正在离开页面。常用的方法是监听下面三个事件`pagehide`,`beforeunload`,`unload`。但是，这些事件在手机上可能不会触发，页面就直接关闭了。因为手机系统可以将一个进程直接转入后台，然后杀死。
- 用户点击了一条系统通知，切换到另一个 App。
- 用户进入任务切换窗口，切换到另一个 App。
- 用户点击了 Home 按钮，切换回主屏幕。
- 操作系统自动切换到另一个 App（比如，收到一个电话）。
上面这些情况，都会导致手机将浏览器进程切换到后台，然后为了节省资源，可能就会杀死浏览器进程。

### document.visibilityState
不管手机或桌面电脑，所有情况下，这个 API 都会监听到页面的可见性发生变化。
```
hidden：页面彻底不可见 // 浏览器最小化 || 浏览器没有最小化，但是当前页面切换成了背景页 || 浏览器将要卸载（unload）页面 || 操作系统触发锁屏屏幕。
visible：页面至少一部分可见。
prerender：页面即将或正在渲染，处于不可见状态。
```
这个新的 API 的意义在于，通过监听网页的可见性，可以预判网页的卸载，还可以用来节省资源，减缓电能的消耗。比如，一旦用户不看网页，下面这些网页行为都是可以暂停的。
> - 对服务器的轮询
> - 网页动画
> - 正在播放的音频或视频
```js
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState == 'hidden') {
        document.title = '页面不可见';
    } else {
        document.title = '页面可见';
    }
});
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '页面不可见';
    }
    else {
        document.title = '页面可见';
    }
});
```