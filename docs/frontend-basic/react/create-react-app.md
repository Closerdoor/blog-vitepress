---
title: Create React App
author: Closerdoor
date: '2022-06-14'
---

## 工具定位

Create React App 曾是 React 官方推荐的脚手架，但现在已不再是新项目首选。当前更常见的是 Vite、Next.js 或框架官方方案。

## 基本创建方式

```bash
npx create-react-app my-app
```

## 历史常见依赖

```bash
npm install redux react-redux react-router-dom axios
```

## 当前建议

- 练习基础 React：优先用 Vite。
- 需要 SSR、路由、服务端能力：优先看 Next.js。
- 维护旧项目：继续理解 CRA 的目录结构和构建链即可。

## 注意事项

- CRA 启动慢、构建链较重。
- 旧文档中常见的 React 16、React Router 4、Ant Design 3 配套版本已经明显过时。

## 总结

CRA 现在更适合作为历史项目知识，而不是新项目标准方案。
