---
title: AJAX
author: Closerdoor
date: '2021-12-12'
---

## AJAX = 异步 JavaScript 和 XML。是一种用于创建快速动态网页的技术。

通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

## 异步编程和Promise

异步编程的结果出现顺序是不一定的，如果要让他们以一定得顺序处理得到结果，可以通过嵌套的方式，则先得到外层结果，再得到内层结果，但是多次嵌套会形成"回调地狱"，影响代码可读性，所以Promise应运而生。

```js
var flag=true;
var p=new Promise(function(resolve, reject){
    setTimeout(function(){
        if(flag){
            resolve("正常运行");
        }else{
            reject("系统出错");
        }
    },1500);
});
//p.then中有2个函数，分别获得resolve的结果和reject的结果
p.then(function(data){
    console.log(data);
},function(info){
    console.log(info);
});
var change =function(){
    flag=!flag;
    console.log(data);
    console.log(info);
}
```

## 接口请求调用方式

### 1、原生ajax(封装)
```js
obj={method,url,data,success}
//data = {
  uname:'jack',
  age:18
}
//把data对象转换成字符串拼接形式 key1=value1&key2=value2
function queryString(data){
  var str=''
  for(var key in data){
    str += key + '=' + data[key] + &
  }
  return str.substring(0,str.length - 1)
}
//大一统ajax
function ajax(obj){
  var xhr=null
  try{
    xhr=new XMLHttpRequest()
  }catch(error){
    xhr=new ActiveXObject("Microsoft.XMLHTTP")
  }
  if(obj.method == 'get' && obj.data){
    obj.url+=?
    obj.url+=queryString(obj.data)
    obj.data = null
  }
  xhr.open(obj.method,obj.url)
  if(obj.method=== 'post' && obj.data){
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
  }
  xhr.onreadystatechange = function(){
    if(xhr.readyState ==4 && xhr.status ==200){
      var type = xhr.getReponseHeader('Content-Type')
      //是否为json
      if(type.indexOf('json') != -1){
        obj.success(JSON.parse(xhr.respongText))
      }
      //是否为xml
      else if(type.indexOf('xml')!=-1){
        obj.success(xhr.responseXML)
      }
      //普通字符串
      else{
        obj.success(xhr.responseText)
      }
    }
  }
  xhr.send(obj.data)
}
```
### 2、基于jQuery的ajax

### 3、fetch
基本用法
```js
fetch('http://localhost:3000/abc').then(data=>{
  return data.text()；//data.text()是一个Promise实例对象
}).then(ret=>{
  console.log(ret)；//注意这里ret才是最终得到的数据
})；
```

### 4、axios

基本用法
```js
axios.get('/adata')
.then(res=>{
  console.log(res.data)//data属性名称是固定的，用于获取后台响应的数据
])
```
### 补充:async/await

主要是简化了Promise的then()操作。await后面必须跟一个Promise实例对象

## 跨域

方式：

1、cors:cross origin resource sharing

后端：委托php文件允许访问，进行以下设置

header('Access-Control-Allow-Origin:*')
2、JSONP

### JSONP

通过约定，访问跨域服务器上数据的方法。

这种约定其实就是一个函数定义，并且具备数据参数的定义，由跨域服务器的脚本或动态生成的脚本调用并且传递数据参数。该函数称之为“跨域回调函数”。

* 利用的是script标签的src属性支持跨域访问
* script标签的后面写上需要请求的页面发送了一个方法的名字到服务器
* 服务器接收到名字之后拼接一个方法的调用在参数中传入了需要给浏览器的数据
* 返回给浏览器。浏览器把他当做js解析

```js
//前端-注意回调函数必须在请求标签之前
<script>
function doSomething(data){
  console.1og(data);
}
</script>
<script src="http://192,168.70,78/2017-8-17/12, JSONP/backData
.php?ca1lback=dosomething">
</script>
//后端-php
<?php
//doSomething
$methodName=$_GET['ca11back']；
//拼接一个函数调用的字符串dosomething()，把数据放到函数形参里
echo $methodName.'({"name"："jack"，"friend"："tony"})；
?>
```
