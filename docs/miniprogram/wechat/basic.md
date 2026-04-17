---
title: 微信小程序基础
date: '2026-04-17'
description: 目录结构、模板语法、数据绑定、事件和组件通信。
---

## 默认文件与作用

一个基础小程序项目里，最常先接触的是这些文件：

- `app.json`：全局配置。
- `app.js`：应用级逻辑。
- `app.wxss`：全局样式。
- `pages/*`：页面目录。

`app.json` 里最常用的几个字段：

- `pages`：声明所有页面路径。
- `window`：全局窗口样式。
- `tabBar`：底部导航配置。

## 常见基础标签

- `view`：类似容器块级元素。
- `text`：文本节点。
- `image`：图片。
- `swiper`：轮播容器。

要注意一些组件自带默认尺寸，例如：

- `swiper` 默认宽度 `100%`，高度约 `150px`。
- `image` 默认尺寸通常不是你最终想要的，实际项目里一般会主动指定样式。

## 模板语法

小程序模板使用 `{{}}` 输出数据。

```html
<view>{{ num }}</view>
```

### 列表渲染

数组渲染：

```html
<view wx:for="{{list}}" wx:for-item="item" wx:for-index="index" wx:key="id">
  {{index}} - {{item.name}}
</view>
```

对象渲染：

```html
<view wx:for="{{info}}" wx:for-item="value" wx:for-index="key" wx:key="key">
  {{key}}: {{value}}
</view>
```

### `block`

`block` 只是逻辑占位，不会渲染成真实节点。

```html
<block wx:for="{{list}}" wx:key="id">
  <view>{{item.name}}</view>
</block>
```

## 数据绑定

页面数据通过 `data` 定义，通过 `this.setData()` 更新。

```js
Page({
  data: {
    num: 0,
  },

  handleInput(e) {
    this.setData({
      num: e.detail.value,
    });
  },
});
```

```html
<input bindinput="handleInput" />
<view>{{ num }}</view>
```

几个基本点：

- 直接改 `this.data.xxx` 不会自动更新视图。
- 视图更新要走 `setData`。
- 输入组件的值通常从 `e.detail.value` 里取。

## 事件与传参

点击事件通常用 `bindtap`。

```html
<button bindtap="handleClick" data-operation="{{1}}">+</button>
<button bindtap="handleClick" data-operation="{{-1}}">-</button>
<view>{{ num }}</view>
```

```js
Page({
  data: {
    num: 0,
  },

  handleClick(e) {
    const { operation } = e.currentTarget.dataset;

    this.setData({
      num: this.data.num + operation,
    });
  },
});
```

这里的重点是：

- 事件名写函数名，不直接在模板里调用。
- 自定义参数通过 `data-*` 传递。
- 事件里从 `e.currentTarget.dataset` 读取。

## 使用 Less

如果本地开发习惯用 Less，可以把编译输出改成 `wxss`：

```json
{
  "less.compile": {
    "outExt": ".wxss"
  }
}
```

这只是编辑器层面的编译辅助，不是小程序框架本身的语法能力。

## 自定义组件

### 子组件

```js
Component({
  properties: {
    tabs: {
      type: Array,
      value: [],
    },
  },

  methods: {
    handleClick(e) {
      const { index } = e.currentTarget.dataset;
      this.triggerEvent('itemChange', { index });
    },
  },
});
```

```html
<view class="tabs-title">
  <view
    wx:for="{{tabs}}"
    wx:key="id"
    class="title-item {{item.isActive ? 'active' : ''}}"
    bindtap="handleClick"
    data-index="{{index}}"
  >
    {{item.name}}
  </view>
</view>
```

### 父组件使用

```html
<Tabs tabs="{{tabs}}" binditemChange="parentChange" />
```

```js
Page({
  data: {
    tabs: [],
  },

  parentChange(e) {
    const { index } = e.detail;
    const tabs = this.data.tabs.map((item, currentIndex) => ({
      ...item,
      isActive: currentIndex === index,
    }));

    this.setData({ tabs });
  },
});
```

组件通信的基本规则：

- 父传子用 `properties`。
- 子传父用 `triggerEvent`。

## 全局分享配置思路

如果多个页面都需要统一分享文案，可以在 `App` 里监听路由变化，再给当前页面补充 `onShareAppMessage`。

这种做法的核心目标是统一出口，但实际项目里也要注意：

- 不要覆盖页面自己的个性化分享逻辑。
- 页面级分享配置优先级要明确。

## 总结

小程序基础的重点并不多：页面配置、模板绑定、事件传参、`setData` 更新视图、组件间通信。把这几个点打通后，大部分业务页面就能顺利展开。
