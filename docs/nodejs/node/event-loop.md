---
title: EventLoop
author: Closerdoor
date: '2023-04-11'
---

## EventLoop
Event Loop是一个程序结构，用于等待和发送消息和事件。
在程序中有两个线程：一个负责程序本身的运行，称为"主线程"；另一个负责主线程与其他进程（主要是各种I/O操作）的通信，被称为"Event Loop线程"（可译为"消息线程"）。

### 宏队列和微队列
**宏队列，macrotask，也叫tasks。** 包括：

- setTimeout
- setInterval
- setImmediate (Node独有)
- requestAnimationFrame (浏览器独有)
- I/O => ajax DOM操作
- UI rendering (浏览器独有)

**微队列，microtask，也叫jobs。** 包括：

- process.nextTick (Node独有)
- Promise
- Object.observe
- MutationObserver

（注：这里只针对浏览器和NodeJS）

### 浏览器 EventLoop 执行模型
· 调用栈Stack
· 宏任务队列macrotask
· 微任务队列microtask

1、执行全局script同步代码，同步代码中有一些是同步语句，有一些是异步语句(如setTimeout);
2、全局代码执行完毕后，调用栈清空;
3、从微任务队列microtask中取出队首的回调任务，放入Stack中执行，执行完后microtask queue长度减1
4、继续执行microtask queue中的任务，直至全部执行完毕。**在这个过程中，如果产生新的microtask，则加入队列末尾，也会在这个周期执行**;
5、microtask queue中的任务执行完毕后，此时microtask queue队列为空，调用栈Stack也为空;
6、宏任务队列macrotask queue中队首任务，放入Stack中执行
7、循环3-7...

## Nodejs中的 EventLoop 机制
node11之前一套体系，11之后和浏览器模型一致
### Node任务队列方法
::: tip
[process.nextTick](http://nodejs.org/docs/latest/api/process.html#process_process_nexttick_callback)和[setImmediate](http://nodejs.org/docs/latest/api/timers.html#timers_setimmediate_callback_arg)。
:::
process.nextTick方法可以在当前"执行栈"的尾部----下一次Event Loop（主线程读取"任务队列"）之前----触发回调函数。也就是说，它指定的任务总是发生在所有异步任务之前。setImmediate方法则是在当前"任务队列"的尾部添加事件，也就是说，它指定的任务总是在下一次Event Loop时执行，这与setTimeout(fn, 0)很像。
```js
process.nextTick(function A() {
  console.log(1);
  process.nextTick(function B(){console.log(2);});
});

setTimeout(function timeout() {
  console.log('TIMEOUT FIRED');
}, 0)
// 1
// 2
// TIMEOUT FIRED

setImmediate(function A() {
  console.log(1);
   setImmediate(function B(){console.log(2);});
 });
 
 setTimeout(function timeout() {
   console.log('TIMEOUT FIRED');
 }, 0);
```