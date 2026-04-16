---
title: 滚动条追踪动画
author: Closerdoor
date: '2021-12-12'
---

## 使用animate.css，监听滚动条到指定的位置
html
```html
<!-- 给class加上animate动画样式，并且给div加上overflow-y:scroll;height:100% -->
<div ref="box" class="animate__animated animate__fadeIn" style="overflow-y:scroll;height:100%;"></div>
```
js
```js
//通过$refs获取dom元素
const box = ref(null)
let dom = box.value
//监听这个dom的scroll事件
dom.addEventListener('scroll', handleScroll, false)
const handleScroll = ()=>{
    // 打印出监听滚动的组件滚动距离
    var scrollTop = dom.scrollTop;
    console.log(scrollTop);
}
```
