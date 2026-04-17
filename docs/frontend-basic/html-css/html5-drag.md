---
title: Drag 与 Drop
author: Closerdoor
date: '2022-07-01'
---

## 是什么

HTML Drag and Drop API 用于实现拖拽与放置交互。

## 常见事件

### 拖动源

- `dragstart`
- `drag`
- `dragend`

### 放置目标

- `dragenter`
- `dragover`
- `dragleave`
- `drop`

## 文件拖拽上传

```js
dropArea.addEventListener('dragover', (event) => {
  event.preventDefault();
});

dropArea.addEventListener('drop', (event) => {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  console.log(file);
});
```

## 注意事项

- 允许放置必须在 `dragover` 中调用 `preventDefault()`。
- 原生拖拽 API 对移动端支持一般，移动端常需额外方案。

## 总结

拖拽 API 在桌面文件上传场景很实用，但交互细节需要额外打磨。
