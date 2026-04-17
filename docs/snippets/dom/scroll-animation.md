---
title: 滚动触发动画
date: '2021-12-12'
---

## 适用场景

元素进入可视区域时再播放动画，适合列表、卡片分段展示。

## 最小示例

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css"
/>

<section class="js-reveal">区块 1</section>
<section class="js-reveal">区块 2</section>

<script>
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  document
    .querySelectorAll('.js-reveal')
    .forEach((element) => observer.observe(element));
</script>
```

## 说明

- 相比手动监听 `scroll`，`IntersectionObserver` 更省性能。
- 如果是容器滚动，给观察器补充 `root` 即可。
