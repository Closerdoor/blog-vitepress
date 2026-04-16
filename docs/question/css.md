---
title: CSS 面试整理
author: Closerdoor
date: '2023-05-02'
---

### 盒模型
box-sizeing:content-box;
box-sizeing:border-box;



###  BFC
BFC 即块级格式上下文，根据盒模型可知，每个元素都被定义为一个矩形盒子，然而盒子的布局会受到尺寸，定位，盒子的子元素或兄弟元素，视口的尺寸等因素决定，所以这里有一个浏览器计算的过程，计算的规则就是由一个叫做视觉格式化模型的东西所定义的，BFC 就是来自这个概念，它是 CSS 视觉渲染的一部分，用于决定块级盒的布局及浮动相互影响范围的一个区域。

创建 BFC 的方式：
绝对定位元素（position 为 absolute 或 fixed ）。
行内块元素，即 display 为 inline-block 。
overflow 的值不为 visible 。

BFC的特性：

### 实现两栏布局（左侧固定 + 右侧自适应布局）
```html
 <div class="outer"> 
 <div class="left">左侧</div> 
 <div class="right">右侧</div> 
 </div> 复制代码
```
### 实现圣杯布局和双飞翼布局（经典三分栏布局）

### 水平垂直居中多种实现方式
