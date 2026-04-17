---
title: 环形进度条
date: '2026-04-17'
description: 使用 SVG 实现可控、可复用的圆形进度条。
---

## 适用场景

环形进度条适合展示百分比、完成度或配额使用情况，例如：

- 上传进度
- 学习完成度
- 仪表盘型统计卡片

相比纯 CSS 方案，SVG 更适合精确控制圆弧长度、圆角和动画。

## 基本思路

核心做法是画两条圆弧：

- 一条做底轨。
- 一条做当前进度。

进度弧线通过 `stroke-dasharray` 和 `stroke-dashoffset` 控制显示长度。

## 最小示例

```html
<div class="progress-ring">
  <svg viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="46" class="ring-track"></circle>
    <circle cx="50" cy="50" r="46" class="ring-progress"></circle>
  </svg>
  <span class="ring-text">72%</span>
</div>
```

```css
.progress-ring {
  position: relative;
  width: 120px;
  height: 120px;
}

.progress-ring svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.ring-track,
.ring-progress {
  fill: none;
  stroke-width: 8;
}

.ring-track {
  stroke: #e5e7eb;
}

.ring-progress {
  stroke: #ef4444;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.3s ease;
}

.ring-text {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: 18px;
  font-weight: 600;
}
```

```js
const progress = 72;
const radius = 46;
const circumference = 2 * Math.PI * radius;
const offset = circumference * (1 - progress / 100);

const circle = document.querySelector('.ring-progress');
circle.setAttribute('stroke-dasharray', circumference);
circle.setAttribute('stroke-dashoffset', offset);
```

## 关键点

- `viewBox="0 0 100 100"` 用来统一内部坐标系，缩放时更稳定。
- 通过 `transform: rotate(-90deg)` 把起点从右侧转到顶部，更符合进度条直觉。
- 半径要扣掉描边宽度，避免边缘被裁切。

## 如果想用 `path`

原始笔记里使用了 `path` 和 `A` 指令画圆弧，这种方式也可行，优点是：

- 可以只画部分圆弧。
- 可以更灵活控制起止角度。

但如果只是标准环形进度条，`circle` 写法通常更简单。

## 总结

环形进度条的本质不是“画圆”，而是把圆周长度映射成可控的描边长度。对常规百分比场景，SVG 是最稳妥的方案。
