---
title: 自定义滚动条样式
author: Closerdoor
date: '2021-12-12'
---

WebKit 内核浏览器支持通过伪元素自定义滚动条样式，适合中后台或定制化界面。

## 示例

```css
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(144, 147, 153, 0.3);
  border-radius: 3px;
  transition: background-color 0.3s;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(144, 147, 153, 0.5);
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}
```

## 说明

- 以上方案主要对 Chromium、Safari 等 WebKit/Blink 内核浏览器生效。
- Firefox 需使用 `scrollbar-width`、`scrollbar-color` 等独立属性。
- 全局样式引入前，应确认是否符合产品视觉规范。
