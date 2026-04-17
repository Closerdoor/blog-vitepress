---
title: FileReader
author: Closerdoor
date: '2022-06-24'
---

`FileReader` 用于在浏览器中读取本地文件，常见场景包括图片预览、文本导入和二进制上传前处理。

## 基本示例

```html
<input class="file" type="file" />
<progress class="progress" max="100" value="0"></progress>
```

```js
const fileNode = document.querySelector('.file')
const progressNode = document.querySelector('.progress')

fileNode.addEventListener('change', (event) => {
  const file = event.target.files?.[0]

  if (!file) {
    return
  }

  const reader = new FileReader()

  reader.onload = () => {
    console.log(reader.result)
  }

  reader.onprogress = (e) => {
    if (e.lengthComputable) {
      progressNode.value = (e.loaded / e.total) * 100
    }
  }

  reader.readAsDataURL(file)
})
```

## 常用读取方式

- `readAsText(file)`：读取文本文件。
- `readAsDataURL(file)`：读取为 Base64 Data URL，适合图片预览。
- `readAsArrayBuffer(file)`：读取二进制数据，适合上传、切片或进一步解析。
- `readAsBinaryString(file)`：已废弃，不建议继续使用。

## 常用属性

- `reader.result`：读取结果。
- `reader.error`：读取失败时的异常对象。
- `reader.readyState`：当前状态。
  - `0`：`EMPTY`
  - `1`：`LOADING`
  - `2`：`DONE`

## 常用事件

- `loadstart`：开始读取。
- `progress`：读取中。
- `load`：读取成功。
- `error`：读取失败。
- `abort`：读取被中止。
- `loadend`：读取结束，无论成功或失败都会触发。

## 实践建议

- 预览图片优先使用 `readAsDataURL()`。
- 处理大文件时，优先考虑分片与流式方案，避免一次性读入全部内容。
- 上传完成后如使用了 `URL.createObjectURL()`，记得调用 `URL.revokeObjectURL()` 释放资源。
