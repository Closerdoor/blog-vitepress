---
title: CSS 书写规范
author: Closerdoor
date: '2021-12-12'
---

## 命名建议

- 语义优先，如 `header`、`nav`、`sidebar`、`footer`
- 状态类统一前缀，如 `is-active`、`is-disabled`
- 避免拼音、缩写混杂和无意义命名

## 书写顺序

推荐按以下顺序组织属性：

1. 布局与定位
2. 盒模型
3. 文本与视觉
4. 动画与其他

示例：

```css
.card {
  position: relative;
  display: flex;
  width: 320px;
  padding: 16px;
  border: 1px solid #eee;
  background: #fff;
  color: #333;
  transition: box-shadow 0.2s ease;
}
```

## 注释

只在结构、约束或易误解处补充简短注释，不写无信息量注释。

## 伪类顺序

链接样式建议按 `:link`、`:visited`、`:hover`、`:active` 顺序声明。

## 总结

规范的目标不是形式统一本身，而是降低协作与维护成本。
