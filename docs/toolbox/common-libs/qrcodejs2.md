---
title: qrcodejs2 生成二维码
author: Closerdoor
date: '2021-12-12'
---

`qrcodejs2` 可在前端直接将文本或 URL 渲染为二维码。

## 安装

```bash
npm install qrcodejs2
```

## 基本示例

```js
import QRCode from 'qrcodejs2'
```

```html
<div id="qrcode"></div>
```

```js
function createCode(text) {
  const container = document.getElementById('qrcode')
  container.innerHTML = ''

  return new QRCode(container, {
    text,
    width: 200,
    height: 200,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  })
}

createCode('https://example.com')
```

## 说明

- 重新生成二维码前，建议先清空容器内容。
- 容错级别越高，二维码越稳定，但可承载的数据量会下降。
