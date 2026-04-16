---
title: img
author: Closerdoor
date: '2022-06-24'
---

## img
`<img src="" alt="" width="" height="" >`
img是无内容标签。  
img标签是行内元素,它默认会对其父级盒子的基线，此时底部会有一小段空白区域，可通过设置vertical-align: middle;来居中对齐。 
`vertical-align : baseline(默认) |top |middle |bottom;  `  
img有4要素，src,alt,width,height
alt表示图片描述，用于seo优化和图片加载失败后的显示.  
width和height会变成Attributes Style，层级低于img
```css
img {
    width: 360px;
    height: auto;
}
img[Attributes Style] {
    width: 751px;
    aspect-ratio: auto 751 / 377;
    height: 377px;
}
```
### img加载成功回调 onload
```js
<img src="logo.png" onload="callback(this)" >

let dom = document.querySelector('img')
img.onload = function(){}
```
### img加载失败处理 onerror
```js
<img src="logo.png" onerror="errHandle(this)" >

function errHandle (imgDiv) {
  imgDiv.src = 'errorTip.png'; 
}
```
onerror 可能造成死循环
```js
function errHandle (imgDiv) {
  imgDiv.src = 'errorTip.png'; 
  imgDiv.onerror = null; // 避免请求失败后不断请求
}
<img src="images/logo.png" onerror="javascript:this.src='errorTip.png';this.οnerrοr=null">`
```
