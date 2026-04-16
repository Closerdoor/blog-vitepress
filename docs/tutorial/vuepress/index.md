---
title: VuePress 博客搭建
author: Closerdoor
date: '2022-06-24'
---

## 介绍vuepress如何使用

### 首页
默认主题提供了一个首页(HomePage)，即根目录docs结构中的README.md，首页是可选的，对于 VuePress 中默认主题的首页，可以进行如下配置
```
---
home: true
lang: zh-CN
heroText: A  Personal Blog
heroImage: /logo.jpg
actionText: 开始 →
actionLink: /interview/
features:
- title: A Blog
  details: 专注写作前端博客，记录日常所得。
- title: For Me
  details: 故九万里，则风斯在下矣，而后乃今培风；背负青天，而莫之夭阏者，而后乃今将图南。
- title: For Interview
  details: 广州，已入坑ღ( ´･ᴗ･` )比心
footer: Copyright © 2019-present Wangtunan
---
```
以上配置的具体含义
```
home:true：标记此页面是否为首页
lang:zh-CN：表示本页面的语言为zh-CN(简体中文)
heroText: 首页的标题内容
heroImage: 首页的标题图片，其中全路径为docs/.vuepress/public/logo.jpg，默认去public目录下找静态资源
actionText: 首页跳转按钮的内容
actionLink: 首页跳转按钮挑战的路径，其中全路径为docs/interview/readme.md，默认readme命名的文件可以省略不写链接的后面内容，省略后的链接如上
features: 表明首页的特征，固定的格式为title + details，以三栏流式布局的方式展示
footer: 为底部内容，与普通的网页一样，我们可以在footer里面写版权信息
```
