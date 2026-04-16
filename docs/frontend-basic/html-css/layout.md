---
title: 浮动和定位
author: Closerdoor
date: '2021-12-12'
---

## 浮动 float
`float: none(默认) | left | right | inherit ;`
浮动的元素会在父级的content内部排列(不会超过padding)  
浮动会把元素变成`display: block;`

### 清除浮动
* 给浮动元素的兄弟元素加clear属性
`clear: left | right | both ;`
> 在浮动元素末尾添加一个空的标签例如 <div style=”clear:both”></div>，或则其他标签br等亦可。

* 父元素设置 overflow
给父级添加： `overflow为 hidden|auto|scroll`  都可以实现。  
`overflow: visible(默认) | hidden | scroll | auto | inherit ;`
| 值      | 描述                                                     |
| :------ | :------------------------------------------------------- |
| visible | 默认值。内容不会被修剪，会呈现在元素框之外。             |
| hidden  | 内容会被修剪，并且其余内容是不可见的。                   |
| scroll  | 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。 |
| auto    | 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。 |
| inherit | 规定应该从父元素继承 overflow 属性的值。                 |
* 使用after伪元素清除浮动
1.  
```css
 .clearfix:after {
  content: ""; 
  display: block; 
  height: 0; 
  clear: both; 
  visibility: hidden;  
}   
 .clearfix {
  *zoom: 1;
}   /* IE6、7 专有 */
```
2.  使用before和after双伪元素清除浮动
```css
.clearfix:before,.clearfix:after { 
  content:"";
  display:table;  
}
.clearfix:after {
 clear:both;
}
.clearfix {
  *zoom:1;
}
```
3. 进阶版
```css
.clearfix{
	zoom:1;
}
.clearfix:after,.clearfix:before{
    content:"";
    display:table;
}
.clearfix:after{
    clear:both;
    visibility:hidden;
    font-size:0;
    height:0;
}
```
## 定位 position
`position: static(默认) | relative | absolute | fixed ;`
绝对定位的父级可以是 relative | absolute | fixed

### z-index
1. z-index的默认属性值是0，取值越大，定位元素在层叠元素中越居上。
2. 如果取值相同，则根据书写顺序，后来居上。
3. 后面数字一定不能加单位。
4. 只有相对定位，绝对定位，固定定位有此属性，其余标准流，浮动，静态定位都无此属性，亦不可指定此属性。

