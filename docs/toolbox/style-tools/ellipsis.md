---
title: 文本超出换行
author: Closerdoor
date: '2021-12-12'
---
## 单行文本的溢出
单行文本的溢出显示省略号用text-overflow:ellipsis属性来，需要加宽度width属来兼容部分浏览。 
```css
div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```
## 多行文本溢出显示省略号 
```css
div {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
```