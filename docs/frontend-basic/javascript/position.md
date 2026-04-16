---
title: 坐标
author: Closerdoor
date: '2021-12-12'
---

## 鼠标触发事件event
clientX clientY 
触发事件时鼠标指针距离window窗口左上角的位置
坐标原点为 window窗口的左上角 

pageX pageY
触发事件时鼠标指针距离docuemnt文档左上角的位置
坐标原点为 document文档的左上角 

clientX和pageX的区别是 文档的窗口可能比window窗口要高，此时会出现滚动条，pageX的定位原点是文档左上角(包括滚动条移动的距离)，而clientX原点永远是可视窗口左上角

offsetX offsetY
元素content内容区域的左上角为原点
以当前事件的目标对象边框内沿(content)左上角为原点，定位x轴坐标
## 浏览器窗口尺寸
浏览器窗口宽度/高度如何获取
window.innerWidth
  浏览器window view宽度 包括浏览器滚动条
window.innerHeight
  浏览器window view高度 包括浏览器滚动条
浏览器可视区域窗口的 width + padding + border + 滚动条,会受到F12的影响
## 元素属性
offsetWidth offsetHeight
元素的实际宽度高度 width/height + padding  + border
包括滚动条

clientWidth clientHeight
元素的宽度高度 不包括边框 不包括滚动条 width/height + padding

边框>滚动条>padding>content

offset系列:获取元素的宽,高,left,top, offsetParent
元素的实际宽度高度 width/height + padding  + border
offsetWidth:元素的宽,有边框
offsetHeight:元素的高,有边框
offsetLeft:元素距离定位父级左边位置的值
offsetTop:元素距离定位父级上面位置的值

scroll系列:卷曲出去的值
scrollLeft:向左卷曲出去的距离
scrollTop:向上卷曲出去的距离
scrollWidth:元素中内容的实际的宽(如果内容很少或者没有内容, 元素自身的宽),没有边框
scrollHeight:元素中内容的实际的高(如果内容很少或者没有内容,元素自身的高),没有边框

client系列:可视区域
clientWidth:可视区域的宽(没有边框),边框内部的宽度
clientHeight:可视区域的高(没有边框),边框内部的高度
clientLeft:左边框的宽度
clientTop:上边框的宽度

## **getBoundingClientRect**
```js
let rect = node.getBoundingClientRect()
rect:{
  width:  元素总宽度(width+padding+border)
  height: 元素总高度(height+padding+border)
  bottom: 底边距离浏览器顶部
  left: 左边距离浏览器左边
  right: 右边距离浏览器左边 right - left = width
  top: 顶部距离浏览器顶部
  x: 元素左上角顶点距离浏览器左上角顶点的坐标X
  y: 元素左上角顶点距离浏览器左上角顶点的坐标Y
}
```