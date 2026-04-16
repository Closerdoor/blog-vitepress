---
title: 常用css
author: Closerdoor
date: '2021-12-12'
---

## css引入方式
### 行内(内联样式)
`<p style=""></p>`
### 内部样式
语法中，style标签一般位于head标签中title标签之后，也可以把他放在HTML文档的任何地方。  
type="text/CSS"  在html5中可以省略
```html
<style type="text/CSS"></style>
```
### 外部样式 
link 是个单标签  
语法中，link标签需要放在head头部标签中，并且必须指定link标签的三个属性，具体如下：
```
href：定义所链接外部样式表文件的URL，可以是相对路径，也可以是绝对路径。
type：定义所链接文档的类型，在这里需要指定为“text/CSS”，表示链接的外部文件为CSS样式表。
rel：定义当前文档与被链接文档之间的关系，在这里需要指定为“stylesheet”，表示被链接的文档是一个样式表文件。
```
```html
<head>
  <link href="./url"  rel="stylesheet" type="text/css"> />
</head>
```

## css的继承
子元素可以继承父元素的样式（text-，font-，line-这些元素开头的都可以继承，以及color属性）
### 可继承的属性
字体和文本
```
font-family、font-weight、font-size、font-style、font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写 字体的字母与其余文本相比，其字体尺寸更小。
​ font-stretch：对当前的 font-family 进行伸缩变形。所有主流浏览器都不支持。
​ font-size-adjust：为某个元素规定一个 aspect 值，这样就可以保持首选字体的 x-height。
2、文本系列属性
text-indent：文本缩进
text-align：文本水平对齐
line-height：行高
word-spacing：增加或减少单词间的空白（即字间隔）
letter-spacing：增加或减少字符间的空白（字符间距）
text-transform：控制文本大小写
direction：规定文本的书写方向
color：文本颜色 a元素除外
3、visibility
4、cursor
```
## display
元素的默认display为inline
### 行内元素 inline
常见的行内元素有`<a>、<strong>、<b>、<em>、<i>、<del>、<s>、<ins>、<u>、<span>`等，其中`<span>`标签最典型的行内元素。  
行内元素的特点：
（1）和相邻行内元素在一行上。  
（2）高、宽无效，对margin仅设置左右方向有效，上下无效；padding设置上下左右都有效，即会撑大空间。border有效，背景色有效。行高有效
（3）默认宽度就是它本身内容的宽度。  
（4）行内元素只能容纳文本或则其他行内元素。（a特殊,a里面不能放a）
```
在行内元素中有几个特殊的标签——<img />、<input />、<td> 这些标签虽然可以设置宽度高度 但是在现代浏览器内特性默认展示模式为 行内(inline) 元素
```  
### 块元素 block
常见的块元素有`<h1>~<h6>、<p>、<div>、<ul>、<ol>、<li>`等，其中`<div>`标签是最典型的块元素。  
块级元素的特点：  
（1）总是从新行开始  
（2）高度，行高、外边距以及内边距都可以控制。  
（3）宽度默认是容器的100%  
（4）可以容纳内联元素和其他块元素。  
只有文字才能组成段落,因 p里面不能放块级元素，同理还有这些标签h1,h2,h3,h4,h5,h6,dt，他们都是文字类块级标签，里面不能放其他块级元素。
### 行内块元素 inline-block
行内块元素的特点：  
（1）和相邻行内元素（行内块）在一行上,但是之间会有空白缝隙。  
（2）默认宽度就是它本身内容的宽度。  
（3）高度，行高、外边距以及内边距都可以控制。  

## 标准盒与怪异盒
box-sizing: content-box(默认) | boder-box;

## 伪类选择器
### 链接伪类选择器

- :link      /* 未访问的链接 */
- :visited   /* 已访问的链接 */
- :hover     /* 鼠标移动到链接上 */
- :active    /* 选定的链接 */

  注意写的时候，他们的顺序尽量不要颠倒  按照  lvha 的顺序。   love   hate  爱上了讨厌 记忆法    或者   lv 包包 非常 hao 

```css
a {   /* a是标签选择器  所有的链接 */
  font-weight: 700;
  font-size: 16px;
  color: gray;
}
a:hover {   /* :hover 是链接伪类选择器 鼠标经过 */
  color: red; /*  鼠标经过的时候，由原来的 灰色 变成了红色 */
}
```

## 文本溢出隐藏
```
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
``` 
### white-space:自动换行
`white-space:normal(默认，会自动换行) | nowrap;`
| 值       | 描述                                                           |
| -------- | -------------------------------------------------------------- |
| normal   | 默认。空白会被浏览器忽略。                                     |
| pre      | 空白会被浏览器保留。其行为方式类似 HTML 中的 `<pre>` 标签。      |
| nowrap   | 文本不会换行，文本会在在同一行上继续，直到遇到 `<br>` 标签为止。 |
| pre-wrap | 保留空白符序列，但是正常地进行换行。                           |
| pre-line | 合并空白符序列，但是保留换行符。                               |
| inherit  | 规定应该从父元素继承 white-space 属性的值。                    |
###  text-overflow 文字溢出
| 值                   | 描述                                 |
| -------------------- | ------------------------------------ |
| clip                 | 修剪文本。                           |
| ellipsis             | 显示省略符号来代表被修剪的文本。     |
| *string*             | 使用给定的字符串来代表被修剪的文本。 |
| text-overflow : clip | ellipsis                             |
设置或检索是否使用一个省略标记（...）标示对象内文本的溢出
* clip : 　不显示省略标记（...），而是简单的裁切 
* ellipsis : 　当对象内文本溢出时显示省略标记（...）
注意一定要首先强制一行内显示，再次和overflow属性  搭配使用
### 多行文本超出隐藏
```
display: -webkit-box; /*  -webkit-inline-box; 行内元素*/
-webkit-box-orient: vertical;
-webkit-line-clamp: 3; /* 控制在第几行的结尾进行显示 ...*/
overflow: hidden;
/*高度 宽度必须规定好 不然...之后一行 也会展示出来*/
```

## 透明度
opacity: value(0.0~1.0) | inherit;
IE8 以及以下浏览器 需要写为`filter: Alpha(opacity=50); 0-100`

## css选择器
### 属性选择器
^=表示以...开头，$=表示以...结尾，*=表示包含...  
```css
/* 获取到 拥有 该属性的元素 */
div[class^='font'] { /*  class^=font 表示 font 开始位置就行了 */
    color: pink;
}
div[class$='footer'] { /*  class$=footer 表示 footer 结束位置就行了 */
    color: skyblue;
}
div[class*='tao'] { /* class*=tao  *=  表示tao 在任意位置都可以 */
    color: green;
}
```
### 伪元素选择器
选择器的css权重相当于一个class
```css
/* 首字特殊样式 */
p::first-letter {
  font-size: 20px;
  color: hotpink;
}
/* 首行特殊样式 */
p::first-line {
  color: skyblue;
}
p::selection {
  /* font-size: 50px; */
  color: orange;
}
```
在div内部的开始位置和结束位创建一个元素，该元素为行内元素，且必须要结合content属性使用。
```css
div::before {
  content:"开始";
}
div::after {
  content:"结束";
}
```
