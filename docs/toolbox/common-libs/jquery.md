---
title: jQuery 常用操作
author: Closerdoor
date: '2022-06-24'
---

`jQuery` 主要用于维护传统前端项目。本文按选择器、节点操作、属性样式、事件和动画整理常用 API。

## 版本说明

- `1.x`：兼容旧版 IE。
- `2.x`：移除旧 IE 兼容代码。
- `3.x`：面向现代浏览器，不再支持 IE8。

## 获取节点

```js
$(this).index()
$(this).eq(0)
$(this).children('p')
$(this).parent()
$(this).parents('p')
$(this).siblings('span')
$(this).next('.active')
$(this).nextAll('.active')
$(this).prev('.active')
$(this).prevAll('.active')
$(this).find('.active')
$(this).filter('.active')
$(this).not('.active')
```

## 节点增删改

```js
$list.append($item)
$item.appendTo($list)
$list.prepend($item)
$item.prependTo($list)

$target.after($node)
$target.before($node)
$node.insertAfter($target)
$node.insertBefore($target)

$node.wrap('<div class="wrapper"></div>')
$node.unwrap()
$nodes.wrapAll('<section></section>')
$node.wrapInner('<span></span>')

$old.replaceWith($new)
$new.replaceAll('.target')

$node.empty()
$node.remove()
$node.detach()
$node.clone(true)
```

## 属性与样式

```js
$node.addClass('active').removeClass('active')
$node.toggleClass('active')
$node.hasClass('active')

$node.attr('alt')
$node.attr('alt', 'demo')
$node.attr({ alt: 'demo', src: 'images/example.png' })
$node.removeAttr('alt')

$input.val()
$input.val('new value')
$node.text()
$node.html()

$node.css('color', 'red')
$node.offset()
$node.position()
$(document).scrollTop()

$node.width()
$node.innerWidth()
$node.outerWidth()
$node.outerWidth(true)
```

说明：

- `attr()` 适合操作 HTML 属性。
- `prop()` 更适合操作 `checked`、`disabled`、`selected` 等 DOM 属性。

## 事件处理

```js
$(document).ready(function () {
  $('.box').on('click', function () {
    console.log('clicked')
  })
})

$('.list').on('click', '.item', function () {
  console.log($(this).text())
})

$('.box').one('mouseenter', function () {
  console.log('run once')
})
```

## 动画

```js
$node.show()
$node.hide()
$node.toggle()

$node.slideDown()
$node.slideUp()
$node.slideToggle()

$node.fadeIn()
$node.fadeOut()
$node.fadeTo(300, 0.5)
$node.fadeToggle()

$node.stop(true, true)
$node.animate(
  {
    width: '90%',
    height: '100%',
    fontSize: '2rem',
  },
  1000
)
```

## 使用建议

- 新项目通常不再引入 `jQuery`。
- 历史项目维护时，优先保持 API 风格一致，避免混入过多原生 DOM 和框架式写法。
