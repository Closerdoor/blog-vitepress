---
title: touch 事件
author: Closerdoor
date: '2021-12-12'
---

## touch
- touchstart 手指触摸屏幕时触发，即使已经有手指在屏幕上也会触发。
- touchmove 手指在屏幕滑动时触发。
- touchend 手指从屏幕时移开时触发。
### event
```
touches   屏幕上所有手指列表 
targetTouches   在当前DOM标签上手指的列表
changedTouches   涉及当前事件的手指的列表
//event属性
clientX      触摸目标在浏览器中的x坐标 
clientY      触摸目标在浏览器中的y坐标
identifier    标识触摸的唯一ID。  从0开始给手指编号 ... 
pageX      触摸目标在当前DOM中的x坐标
pageY      触摸目标在当前DOM中的y坐标
screenX      触摸目标在屏幕中的x坐标
screenY      触摸目标在屏幕中的y坐标
target      触摸的DOM节点目标。
```
```js
window.addEventListener('touchstart', function (e) {
  console.log(e.targetTouches)
  wrap.innerHTML = ''
  event_touches = e.targetTouches;
})

window.addEventListener('touchmove', function (e) {
  event_touches = e.targetTouches;
})

window.addEventListener('touchend', function (e) {
  for (let key in e.changedTouches) {
    if (key != 'length' && key != 'item') {
      wrap.innerHTML += `第${key}个 ${e.changedTouches[key].identifier}`
    }

  }
})
```

## 第三方移动端手势库
### zepto 
### 百度touchjs
