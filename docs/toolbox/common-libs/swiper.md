---
title: Swiper 使用笔记
author: Closerdoor
date: '2021-12-12'
---

`Swiper` 是常用的触摸滑动组件库，适合轮播图、卡片切换和多端滑动交互。

## 安装

```bash
npm install swiper
```

## 基本引入

```js
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
```

## 带导航按钮的示例

```html
<div class="swiper-wrapper-box">
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
  </div>

  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>
```

```js
const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
```

```css
.swiper-wrapper-box {
  position: relative;
}

.swiper {
  --swiper-navigation-color: #00ff33;
  --swiper-navigation-size: 30px;
}
```

## 说明

- 调整导航按钮大小时，可直接覆盖 `--swiper-navigation-size`。
- 自定义箭头布局时，通常将按钮放在外层并为容器设置 `position: relative`。
