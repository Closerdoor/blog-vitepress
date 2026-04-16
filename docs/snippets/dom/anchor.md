---
title: 锚点跳转
author: Closerdoor
date: '2021-12-12'
---

## 锚点跳转
### 原生a链接
```html
<a href="#idName"></a>
<div id="idName"></div>
```
### js实现锚点跳转
`node.scrollIntoView()`
```
// 如果为true，元素的顶端将和其所在滚动区的可视区域的顶端对齐。
// 如果为false，元素的底端将和其所在滚动区的可视区域的底端对齐。
document.querySelector('#需要定位的ID').scrollIntoView(true)

```
