---
title: 移动端尺寸介绍
author: Closerdoor
date: '2021-12-12'
---

## 尺寸
> 显示设备的物理尺寸(屏幕对角线长度) 单位 "英寸" 
`1英寸 = 2.54 厘米`
## 分辨率

## 像素
像素可以作为图片或电子屏幕的最小组成单位。

`CSS`布局中使用的`px`单位像素是一个相对单位, 我们称之为`逻辑像素` 。

手机 显示器 等物理设备上的 像素点 我们称之为 `物理像素`
###  屏幕分辨率(物理像素)
屏幕分辨率指的是一个屏幕具体由多少个`物理像素`点组成
`iPhone XS Max` 和 `iPhone SE`的分辨率分别为`2688 x 1242`和`1136 x 640`。这表示手机分别在垂直和水平上所具有的像素点数。
###  图像分辨率(逻辑像素)
> `图片分辨率`其实是指图片含有的`像素数`，比如一张图片的分辨率为`800 x 400`。这表示图片分别在垂直和水平上所具有的像素点数为`800`和`400`。

## 设备独立像素
不同设备在界面上显示元素的大小是多少，即chrome浏览器手机模式下显示的尺寸。
比如`iPhone X`显示的尺寸是`375x812`。实际`iPhone X`的分辨率会比这高很多

##  设备像素比 DPR
设备像素比`device pixel ratio`简称`dpr`，即物理像素和设备独立像素的比值。
```html
<script>
//获取`dpr`
window.devicePixelRatio; //3 
</script>
<style>
/* css中区分dpr */
@media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2){ 
	/*适配IPhone 两倍屏*/
}
</style>
```
## 视口适配 meta viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
```
### 布局视口 layout viewport
`document.documentElement.clientWidth / clientHeight`来获取布局视口大小。
当没有进行meta标签设置时，移动端默认布局视口为980px。
### 视觉视口 visual viewport
视觉视口默认等于当前浏览器的窗口大小
`window.innerWidth / innerHeight`来获取视觉视口大小
### 理想视口 ideal viewport
`screen.width / height`来获取理想视口大小


