---
title: 图片懒加载
author: Closerdoor
date: '2023-05-10'
---

```html
<img src="./img/loading.jpg" data-src="./img/1.jpg" alt="" />
<img src="./img/loading.jpg" data-src="./img/2.jpg" alt="" />
<img src="./img/loading.jpg" data-src="./img/3.jpg" alt="" />
<img src="./img/loading.jpg" data-src="./img/4.jpg" alt="" />
<img src="./img/loading.jpg" data-src="./img/5.jpg" alt="" />
<img src="./img/loading.jpg" data-src="./img/6.jpg" alt="" />
<img src="./img/loading.jpg" data-src="./img/7.jpg" alt="" />
<img src="./img/loading.jpg" data-src="./img/8.jpg" alt="" />
<img src="./img/loading.jpg" data-src="./img/9.jpg" alt="" />
<script>
  let num = document.getElementsByTagName('img').length
  let img = document.getElementsByTagName('img')
  let n = 0;
  lazyLoad()
  window.onscroll = lazyLoad;
  function lazyLoad() {
    let viewportHeight = document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    for (let i = n; i < num; i++) {
      if(img[i].offsetTop < viewportHeight + scrollTop){
        let currSrc = img[i].getAttribute('src')
        if(currSrc === './img/loading.jpg'){
          img[i].src = img[i].getAttribute('data-src')
        }
        n = i+1
      }
    }
  }
</script>
```
