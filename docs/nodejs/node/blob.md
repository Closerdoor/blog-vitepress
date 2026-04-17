---
title: Blob 与文件下载处理
author: Closerdoor
date: '2022-06-24'
---

`Blob` 常用于浏览器端文件下载、预览与上传前处理。本文整理后端返回二进制文件时的常见处理方式。

## 下载后端返回的 Blob

以 `axios` 为例，请求文件时应显式指定 `responseType: 'blob'`：

```js
import axios from 'axios'

async function downloadFile() {
  const response = await axios.get('/api/export', {
    responseType: 'blob',
  })

  const disposition = response.headers['content-disposition'] || ''
  const match = disposition.match(/filename\*=UTF-8''([^;]+)|filename="?([^";]+)"?/i)
  const filename = decodeURIComponent(
    match?.[1] || match?.[2] || `export-${Date.now()}.xlsx`
  )

  const url = URL.createObjectURL(response.data)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}
```

## 本地文件预览

### 使用 `URL.createObjectURL()`

适合快速预览图片、视频等本地文件：

```js
function createBlobUrl(file) {
  return URL.createObjectURL(file)
}
```

使用结束后应调用 `URL.revokeObjectURL(url)` 释放内存。

### 使用 `FileReader`

适合需要读取为 Base64 文本的场景：

```js
function readFileAsDataURL(file) {
  const reader = new FileReader()

  reader.onload = () => {
    console.log(reader.result)
  }

  reader.onprogress = (e) => {
    console.log(e.loaded, e.total)
  }

  reader.readAsDataURL(file)
}
```

## 文件选择示例

```js
const input = document.querySelector('input[type="file"]')

input.addEventListener('change', (event) => {
  const file = event.target.files?.[0]

  if (!file) {
    return
  }

  const previewUrl = createBlobUrl(file)
  console.log(file.name, previewUrl)
})
```
