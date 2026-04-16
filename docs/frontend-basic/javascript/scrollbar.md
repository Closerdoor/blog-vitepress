---
title: 滚动条相关
author: Closerdoor
date: '2021-12-12'
---
## 页面滚动位置
```
window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft

//兼容处理

```
## mousewheel事件
```js
document.addEventListener("mousewheel",function(e) {
  e.preventDefault && e.preventDefault()
  //e.wheelDelta,返回的值，均为 120 的倍数，即：幅度大小 = 返回的值 / 120。
  if(e.wheelDelta > 0){
    console.log('向上滚动')
  }else{
    console.log('向下滚动')
  }
})
```

## scrollIntoView