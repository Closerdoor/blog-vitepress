---
title: Vue 面试整理
date: '2023-05-02'
category: question
description: Vue 高频面试题精简提纲。
---

## Vue2 与 Vue3 区别

- 组合式 API 更适合逻辑复用和大型项目组织。
- 响应式从 `Object.defineProperty` 升级为 `Proxy`。
- TypeScript 适配更友好。
- 运行时和编译时优化更明显，体积与性能表现更好。

## 响应式原理

- Vue2：通过数据劫持和依赖收集实现更新。
- Vue3：通过代理拦截 `get`、`set` 等操作实现追踪与触发。
- 核心始终是“依赖收集 + 变更通知”。

## 组件通信

- 父传子：`props`。
- 子传父：`emit`。
- 跨层级：`provide` / `inject`。
- 状态共享：Pinia 或 Vuex。
- 事件总线只适合小范围临时场景，不适合长期维护。

## `nextTick`

- Vue 会将 DOM 更新合并为异步批处理。
- `nextTick` 用于在 DOM 更新完成后执行回调。
- 常用于读取最新 DOM 状态或调用依赖真实节点的逻辑。

## 生命周期

- `created`：适合做早期数据初始化。
- `mounted`：适合做 DOM 相关操作。
- `beforeUnmount` / `unmounted`：适合清理定时器、监听器和外部实例。

## `diff` 过程

- 先比较同层节点，避免跨层级暴力对比。
- 通过 `key` 提升列表更新的稳定性和准确性。
- Vue3 在静态提升、Block tree 等方面做了更多优化。

## 面试回答建议

- 先说结论，再说原理，最后给一个实际场景。
- 不要把“响应式”“双向绑定”“虚拟 DOM”混成一件事。
