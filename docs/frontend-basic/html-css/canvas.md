---
title: Canvas
author: Closerdoor
date: '2022-07-07'
---

## 是什么

`canvas` 是基于脚本绘制图形的位图画布，适合做图表、动画、游戏和可视化。

## 初始化

```html
<canvas id="canvas" width="300" height="150"></canvas>
```

```js
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
```

## 常用绘制

### 矩形

```js
ctx.fillRect(20, 20, 120, 60);
ctx.strokeRect(20, 20, 120, 60);
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

### 路径

```js
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(100, 100);
ctx.closePath();
ctx.stroke();
```

### 文本

```js
ctx.font = '24px sans-serif';
ctx.fillText('Hello', 20, 40);
```

### 圆形

```js
ctx.beginPath();
ctx.arc(100, 100, 30, 0, Math.PI * 2);
ctx.fill();
```

## 绘制图片

```js
const image = new Image();
image.src = '/logo.png';
image.onload = () => {
  ctx.drawImage(image, 0, 0, 100, 100);
};
```

## 动画

优先使用 `requestAnimationFrame`：

```js
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(render);
}

render();
```

## 注意事项

- `canvas` 是位图，缩放后可能失真。
- 高清屏绘制时通常要结合 `devicePixelRatio` 做适配。

## 总结

Canvas 更像低级绘图接口，控制力强，但需要手动管理绘制和刷新。
