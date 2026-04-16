---
title: html
author: Closerdoor
date: '2021-12-12'
---

## html
html默认字体大小为16px
**标签默认样式**
```css
//该样式为页面语言，在`<html lang="en">`中设置，告诉浏览器该文件的主要语言
html[Attributes Style] {
    -webkit-locale: "en";
}
//user agent stylesheet
html {
    display: block;
}
```
* head
  
  用来设置网页基本信息的标签 网页的大脑

  * meta 标签

  设置网页信息 charset  设置网页编码集 UTF-8 国际编码 支持中文
  
  keywords name='keywords' content="关键字内容" 让用户可以通过关键字在搜索引擎中找到我们的网页
  
  description name='description ' content="用一句话描述本网页" 让用户可以直观了解网页内容 也是打广告的好地方

  * title标签
  
  设置网页标题
  * 设置网页图标
  `<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">`
  大小为16x16
  * link标签
  `<link rel="stylesheet" href="my-css-file.css">`
  rel="stylesheet"表明这是文档的样式表，而 href包含了样式表文件的路径
    * favicon.ico
    `<link rel="shortcut icon" href="../favicon.ico" >`
    favicon.ico的尺寸有16×16、32×32、48×48
  * script标签
  `<script src="my-js-file.js"></script>`
* body
  
  网页主题内容展示区域 所有的基本信息

## head
**标签默认样式**
```css
head { display: none; }
```

## body
**标签默认样式**
```css
body {
    display: block;
    margin: 8px;
}
```

## 转义字符
| 特殊字符 | 描述     | 转义符        |
| -------- | -------- | ------------- |
|          | 空格     | ``` &nbsp;``` |
| <        | 小于号   | ```&lt;```    |
| >        | 大于号   | ```&gt;```    |
| &        | 和号     | ```&amp;```   |
| ￥        | 人民币   | ```&yen;```   |
| ©        | 版权     | ```&copy;```  |
| ®        | 注册商标 | ```&reg;```   |
## 文本格式化标签
### 粗体 b和strong
**标签默认样式**
```css
b, strong {
  font-weight: bold;
}
```
### 斜体 i和em
**标签默认样式**
```css
i, em {
  font-style: italic;
}
```
### 删除线 s和del
**标签默认样式**
```css
s, del {
  text-decoration: line-through;
}
```
### 下划线 u和ins
**标签默认样式**
```css
u, ins {
  text-decoration: underline;
}
```
## h1~h6
h4标签的字体大小为默认大小  
**标签默认样式**
```css
h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
h4 {
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
h5 {
    display: block;
    font-size: 0.83em;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
h6 {
    display: block;
    font-size: 0.67em;
    margin-block-start: 2.33em;
    margin-block-end: 2.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
```
## p
**标签默认样式**
```css
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
```
## a
`<a href="" target=""></a>`  
target默认为_self，还可以设置为_blank,在新页面打开链接  
**标签默认样式**
```css
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
```
## hr
**标签默认样式**
```css
hr {
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
    border-style: inset;
    border-width: 1px;
}
```
## ul li, ol li, dl dt dd
ul和ol列表的主要是不同是自带属性list-style-type，li会继承ul的list-style-type。  
list-style-type属性的默认值为list-style-type:disc;  
ul的默认list-style-type为disc,ol的默认list-style-type为decimal. 
|    值   |  样式               |
| ------- | ------------------- |
|  none	  |  无标记。           |
|  disc	  |  默认。标记是实心圆。|
| circle	| 标记是空心圆。       |
| square	| 标记是实心方块。     |
| decimal	| 标记是数字。         |

**标签默认样式**
```css
ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
//Inherited from ul
ul {
    list-style-type: disc;
}

ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}

dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
dt {
    display: block;
}
dd {
    display: block;
    margin-inline-start: 40px;
}
```
## span
**标签默认样式**
```css

```
文本尽量都要用文本类标签包裹 不要直接裸露在无意义的div里

## div
**标签默认样式**
```css
div {
    display: block;
}
```
