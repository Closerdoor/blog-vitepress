---
title: Vue 响应式原理
author: Closerdoor
date: '2023-05-10'
---

## 手写vue2响应式原理
```html
显示视图1：<div class="box-1"></div>
显示视图2：<div class="box-2"></div>
<script>
//发布——订阅模式
let Dep = {
  clientList: {},
  //添加订阅者
  listen: function (key, fn) {
    (this.clientList[key] || (this.clientList[key] = [])).push(fn)
  },
  //推送方法
  trigger: function () {
    let key = Array.prototype.shift.call(arguments),
      fns = this.clientList[key]
    if (!fns || fns.length === 0) return false;
    for (let i = 0; i < fns.length; i++) {
      fns[i].apply(this, arguments)
    }
  }
}
/**
 * @description: 数据劫持
 * @param {Object} dataObj 对象数据
 * @param {String} datakey 对象中的key值
 * @param {String} id 发布订阅队列中的id(标识符)
 * @param {String} selector DOM css选择器
 */
function datahijack({
  dataObj,
  datakey,
  id,
  selector
}) {
  let newValue = '',
    el = document.querySelector(selector);
  Object.defineProperty(data, datakey, {
    get: function () {
      return newValue;
    },
    set: function (val) {
      newValue = val
      //数据发生变化，执行对应id中存储的推送方法
      Dep.trigger(id, val)
    }
  })
  //添加订阅者
  Dep.listen(id, function (text) {
    el.innerHTML = text
  })
}
let obj = {};
datahijack({
  dataObj: obj,
  datakey: 'one',
  id: 'view-1',
  selector: '.box-1'
})
datahijack({
  dataObj: obj,
  datakey: 'two',
  id: 'view-2',
  selector: '.box-2'
})
obj.one = '迪迦'
obj.two = '泰罗'
</script>
```
## 手写vue3响应式原理
```html
显示视图1：<div class="box-1"></div>
显示视图2：<div class="box-2"></div>
<script>
//发布——订阅模式
let Dep = {
  clientList: {},
  //添加订阅者
  listen: function (key, fn) {
    (this.clientList[key] || (this.clientList[key] = [])).push(fn)
  },
  //推送方法
  trigger: function () {
    let key = Array.prototype.shift.call(arguments),
      fns = this.clientList[key]
    if (!fns || fns.length === 0) return false;
    for (let i = 0; i < fns.length; i++) {
      fns[i].apply(this, arguments)
    }
  }
}
/**
 * @description: 数据劫持
 * @param {Object} dataObj 对象数据
 * @param {String} datakey 对象中的key值
 * @param {String} selector DOM css选择器
 */
function datahijack({
  dataObj,
  ob
}) {
  let p = new Proxy(dataObj, {
    get: function (obj, key) {
      return obj[key]
    },
    //修改与新增
    set: function (obj, key, val) {
      obj[key] = val
      for (let i = 0; i < ob.length; i++) {
        if (key === ob[i].datakey) {
          Dep.trigger(ob[i].datakey, val)
        }
      }

      return true
    }
  })
  //添加订阅者
  for (let i = 0; i < ob.length; i++) {
    Dep.listen(ob[i].datakey, function (text) {
      document.querySelector(ob[i].selector).innerHTML = text
    })
  }

  return p
}
let data = {};
let pData = datahijack({
  dataObj: data,
  ob: [{
    datakey: 'one',
    selector: '.box-1'
  }, {
    datakey: 'two',
    selector: '.box-2'
  }]
})

pData.one = '迪迦'
pData.two = '泰罗'
```
