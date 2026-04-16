---
title: 新特性与新标签
author: Closerdoor
date: '2022-07-01'
---

## 语义化标签
```
header 
nav 
main 
section 
aside 
article 
footer 
```

## 新增属性(标签全局属性)
| 属性                | 描述                                                   |
| :------------------ | :----------------------------------------------------- |
| contenteditable     | 规定元素内容是否可编辑。                               |
| data-*              | 用于存储页面或应用程序的私有定制数据。                 |
| hidden              | display:none ，优先级很低，相当于标签默认属性        |
| draggable           | 规定元素是否可拖动。                                   |
| dropzone            | 规定在拖动被拖动数据时是否进行复制、移动或链接。       |
| spellcheck          | 规定是否对元素进行拼写和语法检查。                     |
| translate           | 规定是否应该翻译元素内容。                             |
## 新增标签
| ***\*标签\**** | ***\*描述\****                                               |
| -------------- | ------------------------------------------------------------ |
| `<canvas>`    | 标签定义图形，比如图表和其他图像。该标签基于 JavaScript 的绘图 API |
| `<audio>`       | 音频内容 |
| `<video>`       | 视频 |
| `<datalist>`    | 和input配合使用，可编辑select |
| `<mark>`       | 带有记号的文本内容 |
| `<meter>`       | 度量衡。仅用于已知最大和最小值的度量|
| `<progress>`       | 进度条`<progress value="22" max="100"></progress>`|
| `<ruby> <rt> <rp>`      | ruby注释。(中文拼音注释或字符)`<ruby>汉<rt>Hàn</rt><rp>han</rp></ruby>`|
| `<time>`      | 语义化标签，同span，里面放日期或时间`<time datatime="2008-02-14">情人节</time>`|
| `<wbr>`      | 文本换行符，单标签|
### html5新标签兼容处理
`<script src="../js/html5shiv.min.js"></script>`
### meter
`<meter value="3" min="0" max="10">十分之三</meter>`
| 属性    | 值        | 描述                                    |
| :------ | :-------- | :-------------------------------------- |
| form    | *form_id* | 规定 `<meter>` 元素所属的一个或多个表单。 |
| high    | *number*  | 规定被视作高的值的范围。                |
| low     | *number*  | 规定被视作低的值的范围。                |
| max     | *number*  | 规定范围的最大值。                      |
| min     | *number*  | 规定范围的最小值。                      |
| optimum | *number*  | 规定度量的优化值。                      |
| value   | *number*  | 必需。规定度量的当前值。                |
### output
### datalist
```html
<input list="list" type="text">
<datalist id="list">
  <option value="http://www.baidu.com">百度</option>
  <option label="Google" value="http://www.google.com">
  <option label="Microsoft" value="http://www.microsoft.com">
</datalist>
```
## 表单相关
### 表单标签
```html
<input type="range" max="100" min="0" value="10">
<input type="color">
<input type="text">
<input type="password">
<input type="radio">
<input type="checkbox">
<input type="submit">
<input type="button">
<input type="file">
<input type="date">
<input type="datetime">
<input type="datetime-local">
<input type="month">
<input type="week">
<input type="time">
<input type="email">
<input type="number">
<input type="search">
<input type="tel">
<input type="url">
<input type="tel">
```
### 表单属性
| 属性      | 描述                       |
| :-------- | :------------------------- |
| disabled  | 规定输入字段是禁用的       |
| readonly  | 规定输入字段的值无法修改   |
| value     | 规定输入字段的默认值       |
| placeholder| 占位符  |
| autofocus | 获取焦点 |
| max       | 规定允许的最大值           |
| min       | 规定允许的最小值           |
| maxlength | 规定输入字段的最大字符长度 |
| pattern   | 规定用于验证输入字段的模式 |
| required  | 规定输入字段的值是必需的   |
| size      | 规定输入字段中的可见字符数 |
| step      | 规定输入字段的合法数字间隔 |
| autocomplete | 自动完成，用于表单元素，也可用于表单自身 |
| form      | 指定表单项属于哪个form，处理复杂表单时会需要 |
| novalidate| 关闭验证，可用于`<form>`标签 |
| required  | 验证条件，必填项 |
| pattern   | 正则表达式 验证表单 |
| multiple  | 文件上传多选或多个邮箱地址 |
|  accept   | 文件上传中使用 accept 属性，设置接收的类型 accept="image/* |
## 新增DOM API
```
node.after()//在该节点之后插入Node或DOMString
node.before()
node.remove()//删除自己以及所有子节点
node.replaceWith()//将A替换为B A.replaceWith(B)
node.append()//可以追加多个节点和字符串
node.prepend()
ParentNode.replaceChildren(...nodesOrDOMStrings) // 返回 undefined 把父节点内的子节点清空，并换成参数节点
```
### append与appendChild差异
- Node.append()允许追加  DOMString 对象，而 Node.appendChild() 只接受 Node 对象。
- Node.append() 没有返回值，而 Node.appendChild() 返回追加的 Node 对象。
- Node.append() 可以追加多个节点和字符串，而 Node.appendChild() 只能追加一个节点。