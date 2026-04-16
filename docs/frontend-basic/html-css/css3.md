---
title: CSS3
author: Closerdoor
date: '2021-12-12'
---

## border-radius (圆角)
```css
border-radius:左上角 右上角 右下角 左下角;
border-radius:左上角 右上角+左下角 右下角;
border-radius:左上角+右下角 右上角+左下角;
```

##  border-image 边框图片
语法
```css
border-image: source | slice | width | outset | repeat/initial/inherit;
border-image: url(border.png) 30 round;
```
| 值                  | 描述                                                         |
| :------------------ | :----------------------------------------------------------- |
| border-image-source | 用于指定要用于绘制边框的图像的位置 路径                      |
| border-image-slice  | 图像边界向内偏移                                             |
| border-image-width  | 图像边界的宽度                                               |
| border-image-outset | 用于指定在边框外部绘制 border-image-area 的量                |
| border-image-repeat | 用于设置图像边界是否应重复(repeat)、拉伸(stretch)或铺满(round)。 |

## border-shadow 盒子阴影
```css
box-shadow: h-shadow v-shadow blur spread color inset;
box-shadow: x偏移量 y偏移量 模糊半径 扩展半径 阴影颜色 阴影模式(默认为外阴影,设为inset变成内阴影)
box-shadow: 10px 10px 20px 25px #ccc inset;
```

## 渐变（Gradients）
- **线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向**
- **径向渐变（Radial Gradients）- 由它们的中心定义**
### 线性渐变（Linear Gradients）
```css
/* 默认从上到下 */
background-image: linear-gradient(#e66465, #9198e5);
/* 从左到右 */
background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); 
/* 左上到右下 */
background-image: linear-gradient(to bottom right, red, yellow);
/* 任意角度 */
background-image: linear-gradient(-90deg, red, yellow);
/* 重复渐变 */
background-image: repeating-linear-gradient(red, yellow 10%, green 20%);
```
### 径向渐变（Radial Gradients）
```css
/* shape 形状  circle(圆形) 或 ellipse(椭圆形) 默认值为 ellipse 椭圆 */
background-image: radial-gradient(shape, size at position, start-color, ..., last-color);
/* 分配比例 */
background-image: radial-gradient(red 5%, yellow 15%, green 60%);
```

## transform 2D变化
对内联元素无效
```css
transform: translate(20px,30px) rotate(30deg) scale(3,4) skew(20deg,30deg)(倾斜);
transform-origin: x-axis y-axis z-axis;
```

## transition 过渡
```
transition: property duration timing-function delay;
property 过渡的属性名称 width left 等数值型或 color颜色
duration 过渡需要的时间 s ms
timing-function 过渡速度曲线 linear(匀速)|ease(默认)|ease-in|ease-out|ease-in-out
delay 延时时长 m ms
默认样式
`transition:all 0s ease 0s;`
```

## amimation 帧动画
```css
/* 定义一个动画 */
@keyframes animateName {
  0% {
    properties: value;
  }
  100% {
    properties: value;
  }
}
/* 使用动画 */
.selector {
  animation:<animation-name> || <animation-duration> || <animation-timing-function> || <animation-delay> || <animation-iteration-count> || <animation-direction>;
  animation: 名称 | 持续时间(默认0) | 速度曲线(默认ease) | 延迟(s) | 循环次数(默认1，可设为infinite) | 方向(默认normal，设为alternate表示循环)
  /* 单独属性-动画的播放状态:running播放，paused停止播放 */
  animation-play-state: running(默认) | paused;
}
/* 例: */
animation: revolution 14s linear infinite alternate;
```
