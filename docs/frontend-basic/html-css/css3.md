---
title: CSS3 常用能力
author: Closerdoor
date: '2021-12-12'
---

## 圆角

```css
border-radius: 8px;
```

## 阴影

```css
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
```

## 渐变

```css
background-image: linear-gradient(to right, #4f46e5, #06b6d4);
background-image: radial-gradient(circle, #fff, #ddd);
```

## CSS 变量

```css
:root {
  --brand-color: #4f46e5;
}

.button {
  background: var(--brand-color, #333);
}
```

## transform

```css
transform: translateX(20px) rotate(10deg) scale(1.1);
transform-origin: center;
```

## transition

```css
transition: all 0.3s ease;
```

## animation

```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.box {
  animation: fade-in 0.4s ease;
}
```

## 视口单位

- `vw`：视口宽度百分比。
- `vh`：视口高度百分比。
- `vmin`：较小的一边。
- `vmax`：较大的一边。

## 注意事项

- 动画优先使用 `transform` 和 `opacity`，通常性能更稳定。
- 阴影和模糊效果成本较高，不宜滥用。

## 总结

CSS3 让样式从静态排版走向动态表现，但核心仍是克制使用、服务交互。
