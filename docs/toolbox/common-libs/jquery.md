---
title: jquery
author: Closerdoor
date: '2022-06-24'
---

## 引入使用
`https://www.bootcdn.cn/`
```
https://www.bootcdn.cn/jquery/1.12.1/
jquery 
v1 兼容到ie6
v2 过滤阶段
v3 不兼容IE8  全面支持移动端
```

### 常用语法
```js
$(this).index() //获取下标

```
### 获取节点
```js
$(this).eq(0);
$(this).children('p');//获取对应$对象所有节点的所有子元素
$(this).parent('p');
$(this).parents('p');
$(this).siblings('span');//获取除了自身之外的同层级同父元素的兄弟元素 
$(this).next('.active');
$(this).nextAll('.active');
$(this).prev('.active');
$(this).prevAll('.active');
$(this).find('.active');
$(this).filter('.active');
$(this).not('.active');
```
### 增删节点
```js
append(content|fn) a.append(b) 将b添加到a里面 添加到内容的最后
appendTo(content)  a.appendTo(b) 将a添加到b里面 添加到内容的最后
prepend(content|fn) a.prepend(b) 讲b添加到a里面添加到内容的最前
prependTo(content) a.prependTo(b) 将a添加到b里面 添加到内容的最前

外部插入
after(content|fn)  a.after(b) 将b插到a的后面一位 成为a的.next()
before(content|fn)  a.after(b) 将b插到a的前面一位 成为a的.prev()
insertAfter(content) a.insertAfter(b) 将a查到b后面一位
insertBefore(content) a.insertBefore(b) 将a查到b前面面一位

包裹
wrap(html|ele|fn) a.wrap(b) 用b包裹a 
unwrap() 剔除wrap包裹元素
wrapAll(html|ele)  As.wrapAll(b); 所有的a 都用b 统一包裹
wrapInner(html|ele|fn)  a.wrapInner(b); 用b包裹a里面的文本内容 innerText内容

替换
replaceWith(content|fn) a.replace(b) 用b替换a
replaceAll(selector) a.replace(b) 用a替换b
删除
empty() 清除所有内容包括子元素
remove([expr]) 删除自身
detach([expr])
复制
clone([Even[,deepEven]]) 参数true代表克隆节点同时克隆节点事件Event
```
### 属性与样式
```js
$(this).addClass('active').removeClass('active');
$(this).toggleClass('active');
$(this).hasClass('active'); //返回true || false
$(this).attr('alt')); 
$(this).attr('alt', 'hahaha'));
$(this).attr({ 'alt': 'iiii', 'src': 'images/re1.png' }));
//attr() prop()
//attr 操作标签自定义属性 和 非功能文本属性  attr可以读取和设置
//prop 操作标签默认属性 和 默认功能属性   prop只能获取

//removeAttr 更灵活 可以删除标签上任何属性(属性名+属性值)
//removeProp 更保守 标签自身属性不会删除 只会设置值为undefined

val() //.value  传参 设置   不传参 获取
text() //innerText 传参 设置  不传参 获取
html() //innerHTML   传参 设置   不传参 获取

$(this).css()
$(this).offset() //参考原点是document文档左上角
$(this).offset().left  || $(this).offset().top 
$(this).offset({left:10,top:20})
$(this).position() //参考原点是定位父级左上角 只能获取 不能设置
$(document).scrollTop()

$(this).width() //获取宽度 content
$(this).height()
$(this).innerWidth() //获取内部宽度 padding + content
$(this).innerHeight()
$(this).outerWidth() //获取外部宽度 padding + content + border
$(this).outerWidth(true) //获取外部宽度 padding + content + border + margin
$(this).outerHeight()
```

### 事件方法
```js
$(this).ready()
$(this).focus()
$(this).click()
$(this).hover()
//on('事件名称','委托选择器',事件句柄) 
//off('事件名称')
//one 执行一次自动解绑(嵌套监听闭包环境,单次注销)
$('.box').on('click',this.function(){})
```
### 动画
```js
$(this).show() //display:block
$(this).hide() //display:none
$(this).toggle() //

$(this).sliderDown() //向下展开
$(this).slideUp() //向上收起
$(this).slideToggle() //上下展开收起切换

$(this).fadeIn()//opacity
$(this).fadeOut()//
$(this).fadeTo(speed,opacity) //指定透明度的 fadeIn
$(this).fadeToggle()//

$(this).stop()
$(this).stop(true)

$(this).animate({ 
  width: "90%",
  height: "100%", 
  fontSize: "10em", 
  borderWidth: 10
}, 1000,'easein' )
```