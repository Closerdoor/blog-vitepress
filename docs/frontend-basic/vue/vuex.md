---
title: Vuex
author: Closerdoor
date: '2026-04-17'
---

## 基本概念

Vuex 是 Vue 生态中的集中式状态管理方案，常见于 Vue 2 项目和部分旧版 Vue 3 项目。

## 基本结构

```js
const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    add(state) {
      state.count += 1;
    },
    addN(state, step) {
      state.count += step;
    },
  },
  actions: {
    addAsync(context) {
      setTimeout(() => {
        context.commit('add');
      }, 1000);
    },
  },
  getters: {
    showNum(state) {
      return `count: ${state.count}`;
    },
  },
});
```

## 四个核心概念

- `state`：共享状态源。
- `mutations`：同步修改状态。
- `actions`：处理异步逻辑，再提交给 `mutations`。
- `getters`：基于状态派生新数据。

## 组件中使用

```js
this.$store.state.count;
this.$store.commit('addN', 5);
this.$store.dispatch('addAsync');
this.$store.getters.showNum;
```

也常配合辅助函数：

```js
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
```

## 说明

- `mutations` 不要写异步逻辑。
- 新的 Vue 3 项目通常更偏向使用 Pinia。
- 面试或维护老项目时，仍然需要清楚 Vuex 的数据流。
