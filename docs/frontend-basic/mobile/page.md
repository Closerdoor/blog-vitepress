---
title: 移动端适配方案
author: Closerdoor
date: '2021-12-12'
---

## rem方案 flexible.js
`https://github.com/amfe/lib-flexible`
```js
//通过监控页面布局视口宽度来设置html的font-size
//一般设置成布局视口的1/10
window.addEventListener('resize', flexiable);
window.addEventListener('pageshow', function (e) {
  if (e.persisted) {
    flexiable()
  }
})
function flexiable(){
  let html = document.documentElement;
  html.style.fontSize = html.clientWidth / 10;
}
```
## vh、vw方案
- `vw(Viewport's width)`：`1vw`等于视觉视口的`1%`
- `vh(Viewport's height)` :`1vh` 为视觉视口高度的`1%`
- `vmin` :  `vw` 和 `vh` 中的较小值
- `vmax` : 选取 `vw` 和 `vh` 中的较大值
  
缺陷:
- `px`转换成`vw`不一定能完全整除，因此有一定的像素差。
- 比如当容器使用`vw`，`margin`采用`px`时，很容易造成整体宽度超过`100vw`，从而影响布局效果。当然我们也是可以避免的，例如使用`padding`代替`margin`，结合`calc()`函数使用等等...

## 优化方案 rem和vh/vw结合 纯css实现