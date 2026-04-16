---
title: Blob
author: Closerdoor
date: '2022-06-24'
---

## 后端返回Blob数据流处理
```js
//ajax拦截
response => {
  const res = response.data
  if (res instanceof Blob) {
    const str = decodeURI(response.headers['content-disposition'])
    const start = str.indexOf('filename') + 9
    localStorage.setItem('fileName', str.substring(start))
    return res
  }
  if (res.status !== 0) {
    Message({
      message: res.message || 'Error',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(new Error(res.message || 'Error'))
  } else {
    return res
  }
}
//异步返回值处理
http.get(url).then(res => {
  const URL = window.URL || window.webkitURL
  this.downloadUrl && URL.revokeObjectURL(this.downloadUrl)
  this.downloadUrl = URL.createObjectURL(res)
  let a = document.createElement('a')
  a.download = '文件名-' + new Date().getTime() + '.xls'
  a.href = this.downloadUrl
  a.click()
  a = null
})
```

## 文件上传处理
```js
//<input type="file">
input.addEventListener('change', function (e) {
  let file = this.files[0];
})
//blob处理
function careateBolbFile(file) {
  let url = URL.createObjectURL(file);
  return url;
}
function createFileReader(file) {
  let fileReader = new FileReader()
  fileReader.readAsDataURL(file)
  fileReader.onload = function () {
    let src = this.result;
    // console.log(src)
  }
  //读取文件进行中定时触发
  fileReader.onprogress = function (e) {
    // console.log(e.total, e.loaded);
  }
  console.log(fileReader)
}
```