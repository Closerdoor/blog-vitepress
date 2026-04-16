---
title: 点击复制链接
author: Closerdoor
date: '2021-12-12'
---

## 插件[clipboard.js](https://www.npmjs.com/package/clipboard)
安装
```
npm run clipboard
```
使用
```js
//引入组件
import Clipboard from "clipboard";
//html
<n-icon class="copy" 
:data-clipboard-text="appList.projectStoreLocation" style="vertical-align: middle;" @click="copyCode">
    <copy-icon />
</n-icon>
//js
const copyCode = () => {
    let clipboard = new Clipboard(".copy");
    clipboard.on("success", (e) => {
    message.success("复制成功,快去浏览器访问看看吧");
    // 释放内存
    clipboard.destroy();
    });
    clipboard.on("error", (e) => {
    // 不支持复制
    message.error("该浏览器不支持一键复制");
    // 释放内存
    clipboard.destroy();
    });
};
```

## 原生方法实现
html
```html
<div class="copy">
    链接： <input type="text" readonly data-bind="value:$root.wechatLink">
    <button id="cardList" class="button_solid_blue_big" >复制链接</button>
</div>
```
js
```js
document.getElementById('cardList').addEventListener('click', function bindCopy(e:any) {
    let dom:any = document.createElement('textarea');
    dom.style.fontSize = '12pt';
    dom.style.border = '0';
    dom.style.padding = '0';
    dom.style.margin = '0';
    dom.style.position = 'absolute';
    dom.style['left'] = '-9999px';
    var yPosition = window.pageYOffset || document.documentElement.scrollTop;
    dom.style.top = yPosition + 'px';
    dom.setAttribute('readonly', '');
    dom.value = '请输入要复制的内容';
    document.body.appendChild(dom);
    dom.select();
    dom.setSelectionRange(0, dom.value.length);
    document.execCommand('copy');
    document.removeEventListener('click', bindCopy);
    if(document.execCommand('copy')){
        console.log('复制成功')
    }
})
```