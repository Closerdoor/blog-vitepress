---
title: 表单
author: Closerdoor
date: '2021-12-12'
---

## label

`label` 用于提升表单可用性和可访问性。

```html
<label for="male">Male</label>
<input id="male" type="radio" name="sex" value="male">
```

## input 常用属性

| 属性 | 说明 |
| --- | --- |
| `type` | 输入类型 |
| `name` | 提交字段名 |
| `value` | 默认值或当前值 |
| `checked` | 单选/多选默认选中 |
| `maxlength` | 最大长度 |
| `required` | 必填 |
| `readonly` | 只读 |
| `placeholder` | 占位提示 |
| `multiple` | 多文件或多值 |

## `form` 常用属性

- `action`：提交目标地址。
- `method`：提交方式，常见为 `get`、`post`。

```html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input id="name" name="name" type="text" required>
  <button type="submit">提交</button>
</form>
```

## 单选和多选

同一组单选框要共用相同的 `name`：

```html
<label><input type="radio" name="sex" value="male"> 男</label>
<label><input type="radio" name="sex" value="female"> 女</label>
```

## textarea

```html
<textarea rows="4" cols="30"></textarea>
```

```css
textarea {
  resize: vertical;
}
```

## 读取值

```js
textarea.addEventListener('input', (event) => {
  console.log(event.target.value);
});
```

## 注意事项

- 表单值优先通过 `value` 读取，不要用 `innerText`。
- `preventDefault()` 会阻止部分控件默认行为，使用前要确认影响范围。

浏览器原生校验常配合 `required`、`pattern`、`:valid`、`:invalid` 使用。

## 总结

表单开发关注两点：语义绑定和状态读取。
