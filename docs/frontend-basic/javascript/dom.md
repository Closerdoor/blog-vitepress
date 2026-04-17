---
title: DOM
author: Closerdoor
date: '2021-12-12'
---

## 是什么

DOM 是浏览器对 HTML 文档的对象化表示。前端通过它读取、修改和监听页面节点。

## 常见节点类型

```js
Node.ELEMENT_NODE; // 1
Node.TEXT_NODE; // 3
Node.COMMENT_NODE; // 8
Node.DOCUMENT_NODE; // 9
Node.DOCUMENT_FRAGMENT_NODE; // 11
```

也可以直接通过节点实例读取 `nodeType`：

```js
const node = document.querySelector('div');
node.nodeType; // 1
node.firstChild?.nodeType; // 可能是 3
```

## 获取节点

```js
document.getElementById('app');
document.querySelector('.card');
document.querySelectorAll('li');
```

## 常用属性

```js
element.textContent;
element.innerHTML;
element.className;
element.classList.add('active');
element.classList.remove('active');
element.classList.toggle('active');
```

## 属性操作

```js
element.getAttribute('src');
element.setAttribute('data-id', '1001');
element.removeAttribute('disabled');
element.hasAttribute('title');
```

## 样式读取

```js
element.style.width = '200px';
window.getComputedStyle(element).width;
```

## 节点关系

```js
element.parentElement;
element.children;
element.firstElementChild;
element.lastElementChild;
element.nextElementSibling;
element.previousElementSibling;
```

## 创建、插入与删除

```js
const node = document.createElement('p');
node.textContent = 'hello';

document.body.append(node);
node.before(document.createElement('hr'));
node.remove();
```

## 克隆与替换

```js
const newNode = oldNode.cloneNode(true);
oldNode.parentNode.replaceChild(newNode, oldNode);
```

## 事件绑定

```js
element.onclick = () => {};
element.addEventListener('click', (event) => {
  console.log(event.target);
});
```

## 示例

```js
const list = document.querySelector('#list');
const item = document.createElement('li');

item.textContent = '新项';
list.appendChild(item);
```

## 注意事项

- 展示纯文本优先用 `textContent`，避免不必要的 HTML 解析。
- 频繁批量插入可用 `DocumentFragment` 减少重排。
- `innerHTML +=` 会重新解析整段内容，可能丢失已有节点状态。

## 总结

DOM 操作的重点是三件事：选中节点、修改节点、控制渲染成本。
