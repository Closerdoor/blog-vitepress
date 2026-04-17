---
title: 移动端尺寸介绍
author: Closerdoor
date: '2021-12-12'
---

## 核心概念

### 物理像素

设备屏幕上的真实像素点。

### CSS 像素

前端布局中使用的像素单位，属于逻辑像素。

### 设备像素比 DPR

`DPR = 物理像素 / CSS 像素`

```js
window.devicePixelRatio;
```

## 视口

### 布局视口

```js
document.documentElement.clientWidth;
```

### 视觉视口

```js
window.innerWidth;
```

### 理想视口

通常通过 `viewport` 设置让页面宽度贴近设备宽度。

## 常用 viewport 配置

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```

## 注意事项

- 设计稿尺寸、CSS 像素和物理分辨率不是一回事。
- 高清屏图片和 Canvas 通常要考虑 DPR。

## 总结

移动端尺寸问题的本质是区分三套坐标：设备像素、CSS 像素和视口。
