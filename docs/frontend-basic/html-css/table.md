---
title: 表格
author: Closerdoor
date: '2021-12-12'
---

```html
<table>
  <thead>
    <tr>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
    </tr>
  </tbody>
  <tfoot></tfoot>
</table>
```
## 表格属性
`<table align="center" border="0" cellpadding="0" cellspacing="0" width="400"></table>`
| 属性        | 值                               | 描述                                                         |
| :---------- | :------------------------------- | :----------------------------------------------------------- |
| align       | leftcenterright                  | 不赞成使用。请使用样式代替。规定表格相对周围元素的对齐方式。 |
| bgcolor     | *rgb(x,x,x)**#xxxxxx**colorname* | 不赞成使用。请使用样式代替。规定表格的背景颜色。             |
| border      | *px*                             | 规定表格边框的宽度。默认为 border="0" 不赞成使用             |
| cellpadding | px**%*                           | 规定单元边沿与其内容之间的空白。                             |
| cellspacing | px**%*                           | 规定单元格之间的空白。                                       |
| width       | *%**pixels*                      | 规定表格的宽度。                                             |

## 跨行合并：rowspan | 跨列合并：colspan

## 相关css样式
### border-collapse 折叠边框 
* separate 默认值。边框会被分开。不会忽略 border-spacing 和 empty-cells 属性。
* collapse 如果可能，边框会合并为一个单一的边框。会忽略 border-spacing 和 empty-cells 属性。
* inherit 规定应该从父元素继承 border-collapse 属性的值。
### border-spacing 单元格边框距离
当且仅当`border-collapse: separate;`时，可通过它设置设置相邻单元格的边框间的距离。  
```css
table{
  border-collapse:separate;
  /* 横向单元格距离10pxx，纵向单元格距离50px */
  border-spacing:10px 50px;
}
```
## caption 表格标题(html标签)
```
<table>
  <caption>标题内容</caption>
</table>
```
`caption-side: top(默认) | bottom | inherit;`