---
title: 瀑布流布局
date: '2026-04-17'
description: 用绝对定位实现一个简单的图片瀑布流布局。
---

## 适用场景

瀑布流适合高度不固定、但宽度相对稳定的卡片列表，例如：

- 图片流
- 作品流
- 素材流

核心思路很简单：每次把新卡片放到“当前最矮的那一列”。

## 布局思路

1. 容器使用相对定位。
2. 卡片使用绝对定位。
3. 记录每一列当前累计高度。
4. 插入新卡片时，找到最小高度列并放进去。
5. 窗口变化后重新计算列数并重排。

## 最小实现

```html
<div id="masonry"></div>
```

```css
#masonry {
  position: relative;
  margin: 24px auto;
}

#masonry img {
  position: absolute;
  display: block;
}
```

```js
const container = document.getElementById('masonry');
const columnWidth = 200;
const gap = 10;
let columnCount = 0;
let leftList = [];
let topList = [];

function getMinColumnIndex() {
  let minIndex = 0;

  for (let i = 1; i < topList.length; i += 1) {
    if (topList[i] < topList[minIndex]) {
      minIndex = i;
    }
  }

  return minIndex;
}

function resetColumns() {
  columnCount = Math.floor(window.innerWidth / (columnWidth + gap));
  columnCount = Math.max(3, Math.min(columnCount, 6));

  leftList = [];
  topList = [];

  for (let i = 0; i < columnCount; i += 1) {
    leftList.push(i * (columnWidth + gap));
    topList.push(0);
  }

  container.style.width = `${columnCount * (columnWidth + gap) - gap}px`;
}

function placeCard(img) {
  const index = getMinColumnIndex();

  img.style.left = `${leftList[index]}px`;
  img.style.top = `${topList[index]}px`;

  topList[index] += img.height + gap;
  container.style.height = `${Math.max(...topList)}px`;
}

function appendImages(list) {
  list.forEach((item) => {
    const img = new Image();
    img.src = item.src;
    img.width = columnWidth;

    img.onload = () => {
      img.height = (columnWidth / item.width) * item.height;
      container.appendChild(img);
      placeCard(img);
    };
  });
}

function relayout() {
  resetColumns();

  [...container.querySelectorAll('img')].forEach((img) => {
    placeCard(img);
  });
}

resetColumns();

appendImages([
  { src: '/images/demo-1.jpg', width: 640, height: 960 },
  { src: '/images/demo-2.jpg', width: 640, height: 420 },
  { src: '/images/demo-3.jpg', width: 640, height: 800 },
]);

window.addEventListener('resize', relayout);
```

## 滚动加载的判断方式

如果要做无限加载，常见做法是监听滚动：

```js
window.addEventListener('scroll', () => {
  const viewportBottom = window.scrollY + window.innerHeight;
  const minTop = Math.min(...topList) + container.offsetTop;

  if (minTop < viewportBottom) {
    // 继续请求下一页数据
  }
});
```

## 注意事项

- 图片高度必须在加载完成后再参与布局。
- 绝对定位实现简单，但对可访问性和文档流不够友好。
- 现代项目也可以优先考虑 CSS 多列布局或瀑布流相关方案，但 JS 计算布局更可控。

## 总结

瀑布流的核心不在“动画”，而在列高管理。只要维护好每一列当前高度，布局逻辑本身并不复杂。
