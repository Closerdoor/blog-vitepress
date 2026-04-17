---
title: 浮动与定位
author: Closerdoor
date: '2021-12-12'
---

## float

```css
float: left;
float: right;
```

浮动已不再是主流布局方案，但仍会在图文环绕和旧项目中出现。

## 清除浮动

推荐使用 clearfix：

```css
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
```

## position

```css
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;
```

## 常见规则

- `absolute` 通常相对最近的非 `static` 祖先定位。
- `fixed` 相对视口定位。
- `sticky` 适合吸顶等场景，但需要满足滚动容器条件。

## z-index

- 只对已定位元素或特定布局上下文生效。
- 同一层叠上下文内数值越大越靠上。

## 总结

今天的页面布局以 `flex` 和 `grid` 为主，浮动与定位更多承担补充角色。
