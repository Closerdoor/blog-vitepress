---
title: drag和drop
author: Closerdoor
date: '2022-07-01'
---

## drag 拖拽事件 drop 拖放事件
默认链接`<a></a>`和图片`<img>`是可拖动的，其它标签加上`draggable`属性后变成可拖动元素。
```js
//拖动目标触发
ondragstart // 用户开始拖动元素时触发
ondrag // 元素正在拖动时触发
ondragend // 用户完成元素拖动后触发
//释放目标触发
ondragenter // 当被鼠标拖动的对象进入其容器范围内时触发此事件
ondragover // 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
ondragleave // 当被鼠标拖动的对象离开其容器范围内时触发此事件
ondrop // 在一个拖动过程中，释放鼠标键时触发此事件
```
### 拖拽文件上传
文件在e.dataTransfer.files[0]中
```js
Node.addEventListener('dragover',function (e) {
  //阻止浏览器打开文件
  e.preventDefault();
})
//拖拽上传
Node.addEventListener('drop',function (e) {
  //阻止浏览器打开文件
  e.preventDefault();
  let file = e.dataTransfer.files[0];
  //此file格式同input type=file
})
```