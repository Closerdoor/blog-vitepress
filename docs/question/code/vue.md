---
title: Vue 响应式原理
date: '2023-05-10'
category: question
description: Vue2 与 Vue3 响应式实现的面试速记。
---

## 面试回答框架

### Vue2
- 核心手段是 `Object.defineProperty`。
- 初始化时递归劫持已有属性，读取时收集依赖，修改时通知更新。
- 局限在于：新增属性、删除属性、数组索引和长度变化需要额外处理。

### Vue3
- 核心手段是 `Proxy`。
- 代理整个对象，天然支持属性新增、删除和更多数据类型。
- 依赖收集与触发更新仍然是核心，只是拦截能力更完整。

### 面试高频追问
- 响应式不等于双向绑定；响应式是数据变化可追踪，双向绑定是视图与数据同步。
- `computed` 本质上是带缓存的派生状态。
- `watch` 适合副作用处理，`computed` 适合基于状态计算结果。

## 最小示例

### Vue2 风格
```js
function defineReactive(obj, key, update) {
  let value = obj[key]

  Object.defineProperty(obj, key, {
    get() {
      return value
    },
    set(newValue) {
      value = newValue
      update(newValue)
    }
  })
}

const state = { count: 0 }
defineReactive(state, 'count', (value) => {
  console.log('视图更新:', value)
})

state.count = 1
```

### Vue3 风格
```js
function reactive(target, update) {
  return new Proxy(target, {
    get(obj, key) {
      return obj[key]
    },
    set(obj, key, value) {
      obj[key] = value
      update(key, value)
      return true
    }
  })
}

const state = reactive({ count: 0 }, (key, value) => {
  console.log(`${key} 更新为`, value)
})

state.count = 1
```

## 一句话总结

Vue2 更像“逐个属性劫持”，Vue3 更像“整对象代理”，后者能力更完整、维护成本更低。
