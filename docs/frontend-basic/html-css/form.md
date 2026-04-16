---
title: 表单
author: Closerdoor
date: '2021-12-12'
---

## label
是个inline标签。  
for 属性规定 label 与id值一致的表单元素绑定。
```html
<label for="male">Male</label>
<input type="radio" name="sex" id="male" value="male">
```
## input控件常用属性
| 常用属性    | 属性值       | 描述                              |
| ----------- | ------------ | --------------------------------- |
| type        | 见下表       | 控制input的类型                   |
| name        | 自定义       | 控件名称 作为提交数据时的 key     |
| value       | 自定义或输入 | input控件中的默认或用户输入的文本 |
| size        | 正整数       | input在页面中的显示宽度           |
| checked     | checked      | 定义选择控件默认被选中的项        |
| maxlength   | 正整数       | 规定控件容许输入的最大字符数      |
| required    | required     | 必填                              |
| readonly    | readonly     | 内容只读                          |
| placeholder | 文本         | 用户输入提示文本                  |
| multiple    | multiple     | 文件上传可选多文件                |
## textarea
```html
<textarea cols="每行中的字符数" rows="显示的行数">
  文本内容
</textarea>
```
`resize:auto(默认) | none(不能调整尺寸) | both(可调整宽高) | horizontal(可调整宽度) | vertical(可调整高度);`

### textarea的DOM操作
```js
//e.preventDefault() 会阻止input的默认行为，包括单选框和多选框，
//阻止默认行为后，点击单选框，无法选中它，但是checked值会变成true
node.addEventListener('input',function(e){
  console.log(this.innerText); //获取不到
  console.log(this.innerHTML); //获取初始的内容值
  console.log(this.value); //获取动态内容值
  //innerText可以给textarea赋值 但是无法获取
  e.target.innerText = '1234'
})
```
