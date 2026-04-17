---
title: 对象数据拦截
author: Closerdoor
date: '2022-07-05'
---

## Object.defineProperty

适合在单个属性上定义 `getter` / `setter`。

```js
const state = {};
let temp;

Object.defineProperty(state, 'count', {
  get() {
    return temp;
  },
  set(value) {
    temp = value;
  },
});
```

## Proxy

`Proxy` 可以拦截整个对象层面的读取、设置、删除等行为。

```js
const target = { count: 0 };

const proxy = new Proxy(target, {
  get(obj, key, receiver) {
    return Reflect.get(obj, key, receiver);
  },
  set(obj, key, value, receiver) {
    console.log('set', key, value);
    return Reflect.set(obj, key, value, receiver);
  },
});
```

## class 中的 getter / setter

```js
class User {
  #name = '';

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value.trim();
  }
}
```

## 使用建议

- 单属性控制可优先考虑 `getter` / `setter`。
- 需要统一拦截对象行为时使用 `Proxy`。
- `Proxy` 更灵活，也更适合响应式系统实现。

## 总结

三者都能做数据访问控制，但粒度不同：属性级用 `defineProperty`，对象级用 `Proxy`，类封装用访问器。
