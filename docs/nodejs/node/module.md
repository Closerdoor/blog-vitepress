---
title: 模块化
author: Closerdoor
date: '2023-04-07'
---

## AMD(require.js)
用法
```js
//name表示定义的模块名字，depend表示该模块需要依赖的模块名
define(name,[depend],function(){
  return
})
//test模块需要jquery和mycode模块的支持
define('test',['jquery','mycode'],function(jq,my){
  return
})

require.config({
  baseUrl:'/',//默认路径
  paths: {//模块别名：模块路径(注意路径最后不用加.js)
    "jquery": "modules/jquery-1.12.1",
    "demo": "./app/demo",
  }
})
```
```js
//简单实现require()函数
function require(path, callback) {
  let script = document.createElement('script');
  script.src = path;

  // xhtml1.0 DTD下 scirpt的async属性值必须是async
  script.async = 'async';
  document.body.appendChild(script);
  script.onload = function() {
    callback && callback();
  }
};
```
## CMD(sea.js)
用法
```js
seajs.config({
  // base:"./",
  alias: {
    "jquery": './js/jquery-1.12.1',
  }
});
seajs.use(['jquery', './app/cmd'], function ($, c) {
  console.log(c.add(1, 2), $)
  $('.wrap').css({
    backgroundColor: 'red'
  })
})
//单独的js文件
define(function(require,exports,module) {
  //需要用到其它模块的时候，用require引入
  var $ = require('jquery');
  //exports是一个对象，为该模块的默认导出项
  //exports.a = 123
  module.exports = {
    add: function(a,b) {
      return a + b;
    }
  }
})
```
## commonJS
文件就是模块，模块就是文件
1、导入模块 require(文件路径)
2、模块声明 每个js文件都是模块
3、模块导出暴露模块 module.exports = {}

`CommonJS`规范加载模块是同步的，也就是说，加载完成才执行后面的操作。`Node.js`主要用于服务器编程，模块都是存在本地硬盘中，加载比较快，所以`Node.js`采用`CommonJS`规范。

`CommonJS`规范分为三部分：`module`(模块标识)、`require`(模块引用)、`exports`(模块定义)。 `module`变量在每个模块内部，就代表当前模块； `exports`属性是对外的接口，用于导出当前模块的方法或变量；`require()`用来加载外部模块，读取并执行js文件，返回该模块的`exports`对象。
## ES6 Module
import/export