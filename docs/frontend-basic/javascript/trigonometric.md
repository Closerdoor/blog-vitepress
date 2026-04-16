---
title: Math中的三角函数计算
author: Closerdoor
date: '2022-06-28'
---

## 度(deg)和弧度(angel)
"度"的定义是，两条射线从圆心向圆周射出，形成一个夹角和夹角正对的一段弧。当这段弧长正好等于圆周长的360分之一时，两条射线的夹角的大小为1度。

"弧度"的定义是，两条射线从圆心向圆周射出，形成一个夹角和夹角正对的一段弧。当这段弧长正好等于圆的半径时，两条射线的夹角大小为1弧度。

![An image](/pic_deg.png)
```js
//角度与弧度换算
deg = angel / (2 * Math.PI);
angel = deg * Math.PI / 180;
```
## Math.sin(angel)和Math.cos(angel)
Math.sin()等静态方法，参数为弧度
```js
let sin30 = Math.sin(30 * Math.PI / 180);//0.499999994
let cos60 = Math.cos(60 * Math.PI / 180);//0.500000001
let tan45 = Math.tan(45 * Math.PI / 180);//0.999999999
```

## 计算2点间的角度