---
title: Vue 面试整理
author: Closerdoor
date: '2023-05-02'
---

### vue2和vue3的区别
- options API和Composition API
- 双向绑定原理
- 虚拟DOM
### vue2和vue3的自定义指令
### vue双向绑定原理
proxy和Object.defineProperty
虚拟DOM

### 如何实现响应式 
通过发布-订阅模式+双向数据绑定

### 父子组件、兄弟组件间的传值办法
父传子 prop
子传父 emit

跨级组件传值，使用 provide 和 inject
Event Bus
### nexttick
nextTick所指定的回调会在浏览器更新DOM完毕之后再执行
vue更新Dom是异步更新

### vue3的diff算法
虚拟dom，对真实dom对应的信息以js对象储存起来,
调用patch函数
