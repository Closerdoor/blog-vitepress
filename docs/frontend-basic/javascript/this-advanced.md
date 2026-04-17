---
title: this 进阶
author: Closerdoor
date: '2021-12-12'
---

## call 与 apply

两者都可以显式指定函数执行时的 `this`。

```js
function greet(city) {
  return `${this.name} from ${city}`;
}

greet.call({ name: 'Tom' }, 'Beijing');
greet.apply({ name: 'Tom' }, ['Beijing']);
```

区别：

- `call` 按参数列表传参。
- `apply` 传入参数数组。

## 借用方法

```js
function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}

function toArray() {
  return Array.prototype.slice.call(arguments);
}
```

## bind

`bind` 不会立即执行，而是返回一个绑定好 `this` 的新函数。

```js
const user = {
  name: 'Tom',
  print() {
    setTimeout(function () {
      console.log(this.name);
    }.bind(this), 100);
  },
};
```

在事件回调里，如果要把方法中的 `this` 固定到实例对象，`bind` 很常见：

```js
class View {
  constructor(button) {
    this.name = 'view';
    button.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick() {
    console.log(this.name);
  }
}
```

## 注意事项

- 已被 `bind` 过的函数，后续再用 `call` / `apply` 不能改掉其绑定结果。
- 箭头函数没有自己的 `this`，通常不需要再配合 `bind`。

## 总结

`call`、`apply`、`bind` 的本质都是控制函数执行上下文，只是触发时机不同。
