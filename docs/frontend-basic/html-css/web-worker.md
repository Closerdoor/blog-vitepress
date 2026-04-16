---
title: 多线程与通知
author: Closerdoor
date: '2022-06-24'
---

## worker
### 主线程内容 work.html
```js
//遵守同源政策的url
let worker = new Worker('worker.js');
//向 Worker 线程发送消息。
worker.postMessage('Hello World');
worker.postMessage({method: 'echo', args: ['Work']});

worker.onmessage = function (event) {
  console.log('主线程接收的消息' + event.data);
  doSomething();
}
function doSomething() {
  // 执行任务
  worker.postMessage('Work done!');
}

worker.terminate()//完成任务后,终止 Worker 线程。
```
### 子线程内容 worker.js
> - self.name： Worker 的名字。该属性只读，由构造函数指定。
> - self.onmessage：指定`message`事件的监听函数。
> - self.onmessageerror：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。
> - self.close()：关闭 Worker 线程。
> - self.postMessage()：向产生这个 Worker 线程发送消息。
> - self.importScripts()：加载 JS 脚本。

```js
//加载脚本
importScripts('script1.js', 'script2.js');
self.addEventListener('message', function (e) {
  //向主线程发送消息
  self.postMessage('You said: ' + e.data);

  self.close();//关闭线程
}, false);
```
## 同页面web worker
### 方式一
```html
<script id="worker" type="app/worker">
  addEventListener('message',(e)=>{
    console.log(e)
    console.log(self)
    self.postMessage(e.data.age * 2)
  })
</script>
<script>
  let n = document.querySelector('#worker')
  console.log(n)
  console.log(n.innerHTML)
  console.log(n.innerText)
  console.log(n.textContent)
  let blob = new Blob([n.textContent]);
  let url = URL.createObjectURL(blob)
  let worker = new Worker(url);
  worker.postMessage({name:123,age:18})
  worker.onmessage = function(event) {
    console.log('主线程接收到的数据',event)
  }
</script>
```
### 方式二
```js
  let blob = new Blob([`(${f.toString()})()`]);
  let url = URL.createObjectURL(blob)
  let worker = new Worker(url);
  worker.postMessage({name:123,age:18})
  worker.onmessage = function(event) {
    console.log('主线程接收到的数据',event)
  }
  function f() {
    addEventListener('message',(e)=>{
      console.log(e)
      console.log(self)
      self.postMessage(e.data.age * 2)
    })
  }
```

## 通知 Notification
```html
<button id="1">请求通知权限</button>
<button id="2">发送通知</button>
<script>
const btn1 = document.getElementById('1')
const btn2 = document.getElementById('2')
console.log(btn1,btn2)
btn1.addEventListener('click',function(e) {
  Notification.requestPermission()
})
btn2.addEventListener('click',function(e) {
  let note = new Notification('新通知',{
    dir: 'rtl', //文字的方向； auto（自动）, ltr（从左到右）, rtl（从右到左）
    lan:'zh-CN',
    body:'你好,你中了500w大奖,请来欢乐豆大厅兑换',
    // icon: img  一个图片的URL，将被用于显示通知的图标。
    // tag: 赋予通知一个ID，以便在必要的时候对通知进行刷新、替换或移除。
  })
  note.onshow = function () {
    console.log('通知')
  }
  note.onclick = function () {
    console.log('用户点击了通知');
  }

  note.onclose = function () {
    console.log('用户关闭了通知')
  }
})
</script>
```