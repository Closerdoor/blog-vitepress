---
title: HTML5 新特性与新标签
author: Closerdoor
date: '2022-07-01'
---

## 语义化标签

- `header`
- `nav`
- `main`
- `section`
- `aside`
- `article`
- `footer`

## 常见全局属性

| 属性 | 说明 |
| --- | --- |
| `contenteditable` | 内容可编辑 |
| `data-*` | 自定义数据 |
| `hidden` | 隐藏元素 |
| `draggable` | 可拖拽 |
| `spellcheck` | 拼写检查 |
| `translate` | 是否参与翻译 |

## 常见新标签

- `canvas`
- `audio`
- `video`
- `datalist`
- `mark`
- `meter`
- `progress`
- `time`

## 表单新增能力

常见输入类型：

```html
<input type="date">
<input type="email">
<input type="number">
<input type="range">
<input type="color">
```

## 新增 DOM API

```js
node.after();
node.before();
node.remove();
node.replaceWith();
node.append();
node.prepend();
```

## 注意事项

- `dropzone` 等属性实际使用较少，不宜作为常规方案。
- 老旧浏览器兼容需求下降后，HTML5 新标签已基本可以直接使用。

## 总结

HTML5 最重要的变化不是“新增很多标签”，而是更好的语义、媒体和交互能力。
