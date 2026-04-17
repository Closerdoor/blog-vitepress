---
title: CSS 面试整理
date: '2023-05-02'
category: question
description: CSS 高频面试题精简提纲。
---

## 盒模型

- `content-box`：宽高只包含内容区。
- `border-box`：宽高包含内容、内边距和边框。
- 实际开发通常统一使用 `border-box`，更便于布局控制。

## BFC

- BFC 是块级格式化上下文，可理解为独立布局区域。
- 常见触发方式：`overflow: hidden`、`display: inline-block`、`position: absolute/fixed`。
- 常见作用：清除浮动、避免外边距重叠、隔离布局影响。

## 两栏布局

- 左侧固定，右侧自适应，首选 `flex`。

```css
.layout {
  display: flex;
}

.left {
  width: 240px;
}

.right {
  flex: 1;
}
```

## 三栏布局

- 圣杯布局和双飞翼布局是经典方案。
- 现代项目优先使用 `flex` 或 `grid`，代码更直观、维护成本更低。

## 水平垂直居中

- 单元素场景优先使用 `flex`。

```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 面试补充点

- 说明老方案是为了兼容历史环境，现代方案优先 `flex/grid`。
- 回答布局题时，顺手说明兼容性、可维护性和语义性。
