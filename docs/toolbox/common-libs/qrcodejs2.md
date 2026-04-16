---
title: 生成二维码
author: Closerdoor
date: '2021-12-12'
---

## 插件[qrcodejs2](https://www.npmjs.com/package/qrcodejs2)

安装
```
npm install qrcodejs2
```
引入
```js
import QRCode from 'qrcodejs2';
```
html
```html
<div id="qrcode"></div>
```
js
```js
const qrcode = new QRCode('qrcode', {
    text:that.orderLink(),
    width: 200, //图像宽度
    height: 200, //图像高度
    colorDark : "#000000", //前景色
    colorLight : "#ffffff", //背景色
    typeNumber:4, 
    correctLevel : QRCode.CorrectLevel.H //容错级别 容错级别有：（1）QRCode.CorrectLevel.L （2）QRCode.CorrectLevel.M （3）QRCode.CorrectLevel.Q （4）QRCode.CorrectLevel.H
})
if (qrcode){
    qrcode.clear();
    createCode();
}
```