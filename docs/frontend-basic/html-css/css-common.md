---
title: 常用 CSS
author: Closerdoor
date: '2021-12-12'
---


## margin和padding
### **外边距合并**
当上下相邻的两个块元素相遇时，如果上面的元素有下外边距margin-bottom，下面的元素有上外边距margin-top，则他们之间的垂直间距不是margin-bottom与margin-top之和，而是两者中的较大者。这种现象被称为相邻块元素垂直外边距的合并
### 嵌套块元素垂直外边距的合并
两个嵌套关系的块元素，如果父元素没有上内边距及边框，则父元素的上外边距会与子元素的上外边距发生合并，合并后的外边距为两者中的较大者，即使父元素的上外边距为0，也会发生合并。
解决方案：  
1. 可以为父元素定义1像素的上边框或上内边距。
2. 可以为父元素添加overflow:hidden。
## 字体 font
### font-size
字号大小，一般用px和em
### font-family
> font-family属性用于设置字体。网页中常用的字体有宋体、微软雅黑、黑体等，例如将网页中所有段落文本的字体设置为微软雅黑，可以使用如下CSS样式代码：

> p{ font-family:"微软雅黑";}

> 可以同时指定多个字体，中间以逗号隔开，表示如果浏览器不支持第一个字体，则会尝试下一个，直到找到合适的字体。
### font-weight
font-weight属性用于定义字体的粗细，其可用属性值：normal、bold、bolder、lighter、100~900（100的整数倍）。
数字 400 等价于 normal，而 700 等价于 bold。
### font-style
font-style属性用于定义字体风格，如设置斜体、倾斜或正常字体，其可用属性值如下：  
**normal**：默认值，浏览器会显示标准的字体样式。  
**italic**：浏览器会显示斜体的字体样式。  
**oblique**：浏览器会显示倾斜的字体样式。  
### font 复合写法
```
font: font-style font-weight font-size/line-height font-family;
font:italic 700 12px/20px '宋体';
```
### color
十六进制，如#FF0000，#FF6600，#29D794等。实际工作中，十六进制是最常用的定义颜色的方式。  
RGB代码，如红色可以表示为rgb(255,0,0)或rgb(100%,0%,0%)。
### line-height
ine-height属性用于设置行间距，单位有三种，分别为像素px，相对值em和百分比%  
一般情况下，行距比字号大7 8像素左右就可以了。
### vertical-align
`vertical-align : baseline |top |middle |bottom |sub;`
vertical-align 不影响块级元素中的内容对齐，它只针对于 行内元素或者行内块元素，特别是行内块元素， **通常用来控制图片/表单与文字的对齐**。  
 默认的图片会和文字基线对齐。
### text-align
left：左对齐（默认值）  
right：右对齐
center：居中对齐
### text-indent
text-indent属性用于设置首行文本的缩进，其属性值可为不同单位的数值、em字符宽度的倍数、或相对于浏览器窗口宽度的百分比%，允许使用负值, 建议使用em作为设置单位。  
1em 就是一个字的宽度   如果是汉字的段落， 1em 就是一个汉字的宽度
`一般:text-indent: 2em;`
### text-decoration
| 值           | 描述                                          |
| ------------ | --------------------------------------------- |
| none         | 默认。定义标准的文本。                        |
| underline    | 定义文本下的一条线。下划线 也是我们链接自带的 |
| overline     | 定义文本上的一条线。                          |
| line-through | 定义穿过文本下的一条线。                      |


## border 
复合写法:border : border-width || border-style || border-color ;
### border-width
边框厚度
### border-style
```
none：没有边框即忽略所有边框的宽度（默认值）
solid：边框为单实线(最为常用的)
dashed：边框为虚线  
dotted：边框为点线
double：边框为双实线
```
### border-color

## table
### 表格的细线边框
table{ border-collapse:collapse; }  collapse 单词是合并的意思  
border-collapse:collapse; 表示相邻边框合并在一起。

## background 
复合写法：
```
书写格式
background: ~color ~image ~repeat ~attachment ~position/~size;
默认值
background: transparent none repeat scroll 0% 0%;
```
### background-color
默认值为transparent 表示透明
### background-image
`background-image : none(默认) | url (url) `
`background-image:url(./img.png)`
### background-repeat
```
background-repeat : repeat(默认) | no-repeat | repeat-x | repeat-y ;
```
### background-size
`background-size: length|percentage|cover|contain;`
### background-position
```
background-position : length || length
length : 　百分数 | 由浮点数字和单位标识符组成的长度值。请参阅长度单位 
background-position : position || position 
position : 　top | center | bottom | left | center | right ;
```
### background-attachment
`background-attachment : scroll(默认) | fixed `  
scroll : 　背景图像是随对象内容滚动  
fixed : 　背景图像固定 
### background-origin
`background-origin: padding-box|border-box|content-box;`
背景图像定位区域的坐标零点
### background-clip
`background-clip: border-box(默认)|padding-box|content-box;`
背景图像绘制区域
