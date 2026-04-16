---
title: swiper
author: Closerdoor
date: '2021-12-12'
---

## swiper@7.4.1
### 安装和引入
`npm install swiper`
```js
//注意查看package.json文件
import "swiper/css/bundle";
import "swiper/bundle";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/thumbs";
import Swiper from "swiper";
```
### 修改箭头的大小和样式
```html
<!-- 如果需要将箭头放在swiper方面，在最外面套一个div并加上相对定位 -->
<div class="swiper-father relative">
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
<script language="javascript"> 
  var mySwiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
</script>
<style type="text/css">
  .swiper{
    --swiper-navigation-color: #00ff33;/* 按钮颜色 */
    --swiper-navigation-size: 30px;/* 按钮大小，设置为0时可自定义样式 */
  }
</style>
```