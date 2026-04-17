---
title: 图片懒加载
date: '2023-05-10'
category: question
description: 图片懒加载实现方式与面试要点。
---

## 面试要点

- 懒加载的目标是减少首屏请求和无效下载。
- 优先使用 `IntersectionObserver`，实现简单且性能更好。
- 老环境可退化到滚动监听，但要注意节流。

## 推荐实现

```html
<img data-src="./img/1.jpg" src="./img/loading.jpg" alt="示例图片" />

<script>
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return

      const img = entry.target
      img.src = img.dataset.src
      observer.unobserve(img)
    })
  })

  document.querySelectorAll('img[data-src]').forEach((img) => {
    observer.observe(img)
  })
</script>
```

## 追问方向

- 如何处理加载失败：使用默认图或重试策略。
- 如何避免布局抖动：提前设置宽高或占位容器。
- 如何与图片预加载配合：首屏优先，非首屏延迟加载。
