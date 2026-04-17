---
title: 表格
author: Closerdoor
date: '2021-12-12'
---

## 基本结构

```html
<table>
  <caption>成绩单</caption>
  <thead>
    <tr>
      <th>姓名</th>
      <th>分数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tom</td>
      <td>90</td>
    </tr>
  </tbody>
</table>
```

## 合并单元格

- `rowspan`：跨行
- `colspan`：跨列

## 常用样式

```css
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  border: 1px solid #ddd;
}
```

## 注意事项

- 旧式的 `align`、`bgcolor`、`cellpadding`、`cellspacing` 更适合改用 CSS。
- 数据表格应优先保留原生语义，不要全部用 `div` 模拟。

## 总结

表格最适合呈现规则二维数据，关键是语义结构和可读性。
