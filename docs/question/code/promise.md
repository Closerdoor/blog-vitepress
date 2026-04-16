---
title: Promise 原理
author: Closerdoor
date: '2023-05-10'
---

## promise 1.0
```js
function myPromise(excutor) {
  let self = this;
  self.status = 'pending';
  self.value = null;
  self.reason = null;

  self.onFulfilledCallbacks = []
  self.onRejectedCallbacks = []

  function resolve(value) {
    if (self.status === 'pending') {
      self.value = value;
      self.status = 'fulfilled'
      self.onFulfilledCallbacks.forEach(fn => fn(value))
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.reason = reason;
      self.status = 'rejected'
      self.onRejectedCallbacks.forEach(fn => fn(reason))
    }
  }
  try {
    excutor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}
myPromise.prototype.then = function (onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (data) {
    resolve(data)
  }
  onRejected = typeof onRejected === 'function' ? onRejected : function (err) {
    throw err
  }
  let self = this;
  if (self.status === 'pending') {
    self.onFulfilledCallbacks.push(onFulfilled)
    self.onRejectedCallbacks.push(onRejected)
  }
  
}
let p = new myPromise((resolve, reject) => {
  console.log('进入promise')
  setTimeout(() => {
    resolve(11)
  }, 2000)
})
p.then((data) => {
  console.log(data)
})
```

## promise 2.0
```js
function myPromise(excutor) {
  let self = this;
  self.status = 'pending';
  self.value = null;
  self.reason = null;

  self.onFulfilledCallbacks = []
  self.onRejectedCallbacks = []

  function resolve(value) {
    if (self.status === 'pending') {
      self.value = value;
      self.status = 'fulfilled'
      self.onFulfilledCallbacks.forEach(fn => fn(value))
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.reason = reason;
      self.status = 'rejected'
      self.onRejectedCallbacks.forEach(fn => fn(reason))
    }
  }
  //初始化的时候执行一次
  try {
    excutor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}
myPromise.prototype.then = function (onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (data) {
    resolve(data)
  }
  onRejected = typeof onRejected === 'function' ? onRejected : function (err) {
    throw err
  }
  let self = this;

  if (self.status === 'fulfilled') {
    return new myPromise((resolve, reject) => {
      try {
        //如果传进来的是一个promise，继续.then，否则调用resolve
        let x = onFulfilled(self.value)
        x instanceof myPromise ? x.then(resolve, reject) : resolve(x)
      } catch (error) {
        reject(error)
      }
    })
  }
  if (self.status === 'rejected') {
    return new myPromise((resolve, reject) => {
      try {
        //如果传进来的是一个promise，继续.then，否则调用resolve
        let x = onRejected(self.reason)
        x instanceof myPromise ? x.then(resolve, reject) : reject(x)
      } catch (error) {
        reject(error)
      }
    })
  }
  if (self.status === 'pending') {
    return new myPromise((resolve, reject) => {
      self.onFulfilledCallbacks.push(() => {
        let x = onFulfilled(self.value);
        x instanceof myPromise ? x.then(resolve, reject) : resolve(x);
      })
      self.onRejectedCallbacks.push(() => {
        let x = onRejected(self.reason)
        x instanceof myPromise ? x.then(resolve, reject) : reject(x)
      })
    })
  }
}
myPromise.prototype.catch = function (fn) {
  return this.then(null, fn)
}
```
