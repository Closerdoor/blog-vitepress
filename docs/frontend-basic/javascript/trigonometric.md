---
title: Math 中的三角函数计算
author: Closerdoor
date: '2022-06-28'
---

## 角度与弧度

JavaScript 中 `Math.sin`、`Math.cos`、`Math.tan` 的参数都要求传入弧度。

换算公式：

```js
const rad = (deg) => deg * Math.PI / 180;
const deg = (rad) => rad * 180 / Math.PI;
```

## 基本用法

```js
Math.sin(rad(30));
Math.cos(rad(60));
Math.tan(rad(45));
```

由于浮点精度问题，结果可能是 `0.499999999...`，这是正常现象。

## 计算两点夹角

通常用 `Math.atan2`：

```js
function getAngle(x1, y1, x2, y2) {
  const radian = Math.atan2(y2 - y1, x2 - x1);
  return deg(radian);
}
```

## 应用场景

- 旋转动画
- 拖拽方向计算
- Canvas / SVG 绘图
- 地图与坐标计算

## 总结

三角函数最容易错的地方只有两个：角度弧度混用，以及浮点误差。
