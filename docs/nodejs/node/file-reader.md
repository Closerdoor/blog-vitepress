---
title: fileReader
author: Closerdoor
date: '2022-06-24'
---

## fileReader
```js
//<input class="file" type="file">
let fileNode = document.querySelector('.file');
fileNode.addEventListener('change',function(e){
  console.log(e)
  let f = this.files[0];
  let fileReader = new FileReader();
  let total;
  fileReader.readAsArrayBuffer(file); //文件转化为 Base64
  fileReader.onloadstart = function (e) {
    total = e.total;
    /* 
      total: 文件总大小
      loaded: 已加载大小
    */
  }
  fileReader.onprogress = function (e) {
    //加载中持续触发
    console.log(e.loaded)
    progress.value = e.loaded / total * 100;
  }
})
```
### 属性
- [`FileReader.error`](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/error) 只读
  一个[`DOMException`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMException)，表示在读取文件时发生的错误 。
- [`FileReader.readyState`](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/readyState) 只读
  表示`FileReader`状态的数字。取值如下：常量名值描述`EMPTY``0`还没有加载任何数据.`LOADING``1`数据正在被加载.`DONE``2`已完成全部的读取请求.
- [`FileReader.result`](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/result) 只读
  文件的内容。该属性仅在读取操作完成后才有效，数据的格式取决于使用哪个方法来启动读取操作。
### 事件
```
FileReader.onabort //处理`abort`事件。该事件在读取操作被中断时触发。
FileReader.onerror //处理`error`事件。该事件在读取操作发生错误时触发。
FileReader.onload //处理`load`事件。该事件在读取操作完成时触发。
FileReader.onloadstart //处理`loadstart`事件。该事件在读取操作开始时触发。
FileReader.onloadend //处理`loadend`事件。该事件在读取操作结束时（要么成功，要么失败）触发。
FileReader.onprogress //处理`progress`事件。该事件在读取[`Blob`](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)时触发。
```
### 方法
```
FileReader.abort() //中止读取操作。在返回时，`readyState`属性为`DONE`。
FileReader.readAsArrayBuffer() //开始读取指定的 Blob中的内容, 一旦完成, result 属性中保存的将是被读取文件的 ArrayBuffer 数据对象.
FileReader.readAsBinaryString() //开始读取指定的Blob中的内容。一旦完成，`result`属性中将包含所读取文件的原始二进制数据。
FileReader.readAsDataURL() //开始读取指定的[`Blob`](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)中的内容。一旦完成，`result`属性中将包含一个`data:` URL格式的Base64字符串以表示所读取文件的内容。
FileReader.readAsText() //开始读取指定的[`Blob`](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)中的内容。一旦完成，`result`属性中将包含一个字符串以表示所读取的文件内容。
```