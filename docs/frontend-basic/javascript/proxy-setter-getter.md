---
title: 对象数据拦截
author: Closerdoor
date: '2022-07-05'
---

## defineProperty
```js
let temp;
Object.defineProperty(obj, 'key', {
  get() {
    return temp;
  },
  set(value) {
    temp = value;
  }
})
```
## proxy
```js
let proxyObj = new Proxy(obj, {
  get: function (target, attr, receiver) {
    return target[attr];
  },
  set : function(target, attr, value){
    target[attr] = value;
    return true
  }
})
```
## class中的set/get
```js
class MyClass {
  _prop = null;
  constructor() {
    this.prop = null;
  }
  get prop() {
    return this._prop;
  }
  set prop(value) {
    this._prop = value;
  }
}
```