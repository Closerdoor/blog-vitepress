---
title: 扁平/树形结构转换
author: Closerdoor
date: '2021-12-12'
---

## 响应头(Response Header)
服务器向客户端浏览器发送文件时，如果是浏览器支持的文件类型（如.txt、.pdf、.sql、.jpg、.git、.html等），一般会默认使用浏览器打开，直接在浏览器中显示。
# Content-Disposition
格式说明：
content-disposition = “Content-Disposition” “:” disposition-type *( “;” disposition-parm )
字段说明：
Content-Disposition为属性名
disposition-type是文件处理方式，如（attachment为以附件方式下载；inline为在浏览器页面中打开显示）
服务端代码：
```js
response.setHeader("Content-Disposition", "attachment;filename=" + URLEncoder.encode(filename, "utf-8"));
或
response.setHeader("Content-Disposition", "inline");
```
disposition-param为默认保存时的文件名
Content-Disposition 属性是作为对下载文件的一个标识字段。
Content-Disposition属性有两种类型：inline 和 attachment 
* inline ：将文件内容直接显示在页面 
* attachment：弹出对话框让用户下载具体例子：

在页面内打开代码：
```js
File file = new File("rfc1806.txt");  
String filename = file.getName();  
response.setHeader("Content-Type","text/plain");  
response.addHeader("Content-Disposition","inline;filename=" + new String(filename.getBytes(),"utf-8"));  
response.addHeader("Content-Length","" + file.length());  
```
弹出保存框代码：
```js
File file = new File("rfc1806.txt");  
String filename = file.getName();  
response.setHeader("Content-Type","text/plain");  
response.addHeader("Content-Disposition","attachment;filename=" + new String(filename.getBytes(),"utf-8"));  
response.addHeader("Content-Length","" + file.length());
```