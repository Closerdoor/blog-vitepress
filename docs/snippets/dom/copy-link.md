---
title: 复制链接
date: '2021-12-12'
---

## 适用场景

点击按钮复制当前页面链接或任意文本。

## 最小示例

```html
<button id="copy-link">复制链接</button>

<script>
  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();

      const copied = document.execCommand('copy');
      textarea.remove();
      return copied;
    }
  }

  document.getElementById('copy-link').addEventListener('click', async () => {
    const ok = await copyText(window.location.href);
    console.log(ok ? '复制成功' : '复制失败');
  });
</script>
```

## 说明

- `navigator.clipboard` 需要 HTTPS 或 `localhost`。
- 旧浏览器可退回 `execCommand('copy')`，但不建议作为长期方案。
