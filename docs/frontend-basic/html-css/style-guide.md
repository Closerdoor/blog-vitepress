---
title: css书写规范
author: Closerdoor
date: '2021-12-12'
---

## 常用命名
| 头     | header    | 内容     | content     | 尾     | footer | 导航     | nav         |
| ------ | --------- | -------- | ----------- | ------ | ------ | -------- | ----------- |
| 子导航 | subnav    | 栏目     | column      | 主体   | main   | 新闻     | news        |
| 版权   | copyright | 文章列表 | list        | 加入   | joinus | 合作伙伴 | partner     |
| 标志   | logo      | 侧栏     | sidebar     | 横幅   | banner | 状态     | status      |
| 菜单   | menu      | 子菜单   | submenu     | 滚劢   | scroll | 搜索     | search      |
| 标签页 | tab       | 提示信息 | msg         | 小技巧 | tips   | 标题     | title       |
| 指南   | guild     | 服务     | service     | 热点   | hot    | 下载     | download    |
| 注册   | regsiter  | 登录条   | loginbar    | 按钮   | btn    | 投票     | vote        |
| 注释   | note      | 友情链接 | friend-link | 外套   | wrap   | 面包屑   | bread-crumb |
| 当前的 | current   | 购物车   | shop        | 图标   | icon   | 文本     | txt         |
| 容器   | container | wrap     |             |        |        |          |             |

## CSS注释规范
###  文件顶部注释
```css
/*
 * @description: xxxxx 中文说明
 * @author: zhifu.wang
 * @update: zhifu.wang (2012-10-17 18:32)
 */
```
## CSS书写顺序
```
1. 位置属性 display position float overflow z-index list-style clear等可以决定元素渲染位置或层级 以及能够影响其他元素渲染位置或层级的属性
2. 自身属性  width height margin padding border background line-height 等可以影响盒子自身展示的属性
3. 文本属性  color font- text- word- 等作用于文本的样式属性
4. 其他与新增属性 cursor zoom transform box-shadow 等新增属性
```
原理
```
1. 浏览器解读HTML是从上之下单行解析, 如果没有良好的书写顺序, 例如先解析了 width height 那预渲染的时候 就会从默认位置 (当前文档流左上角) 进行渲染
2. 如果后续解析到了 位置属性 浏览器需要擦除之前 渲染好的模型 重新根据 渲染基准点(左上角)位置 和层级 进行重绘, 这样导致浏览器会重复解析同一个元素 造成不必要的重绘
3. 良好的书写顺序是 BAT等一线互联网企业都遵守的CSS书写规范 他可以帮助团队成员协作的时候 迅速排查和后期维护
```
###  链接伪类顺序
`链接的样式请严格按照：a:link-> a:visited-> a:hover-> a:active（LoVeHAte）的顺序添加`