---
title: 锚点跳转
date: '2021-12-12'
---

## 适用场景

快速跳转到页面内指定区域，适合目录、说明文档和表单定位。

## 最小示例

```html
<a href="#usage">跳到用法</a>
<button id="jump">跳到说明</button>

<section style="height: 800px"></section>

<section id="usage">这里是用法</section>
<section id="notes">这里是说明</section>

<script>
  document.getElementById('jump').addEventListener('click', () => {
    document.getElementById('notes').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
</script>
```

## 说明

- 原生 `<a href="#id">` 适合静态跳转。
- 需要平滑滚动或动态定位时，优先用 `scrollIntoView`。
