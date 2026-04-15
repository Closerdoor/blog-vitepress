---
title: 简历
author: Closerdoor
date: '2023-04-10'
---
<style>
  /* reset */
ol, ul {
    list-style: none;
}
.content p {
  margin: 0;
    padding: 0;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

caption, td, th {
    text-align: left;
    font-weight: 400;
    vertical-align: middle;
}

blockquote, q {
    quotes: none;
}

blockquote:after, blockquote:before, q:after, q:before {
    content: "";
    content: none;
}

a img {
    border: none;
}

elements-of-type(html5-block) {
    display: block;
}

.kill-ie {
  margin: 0;
  padding: 0.5em 0;
  color: #333;
  text-align: center;
  background: #fff8e2;
}

@media screen and (max-width: 1024px) {
  body {
    padding-top: 0;
  }
}
a {
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}
.last-modified {
  position: absolute;
  top: 30px;
  left: 50%;
  width: 1000px;
  transform: translateX(-50%);
  text-align: right;
  font-size: 12px;
  color: #bbb;
  transition: all 0.2s ease-in-out;
  animation: fade 1.6s;
}
@media screen and (max-width: 1024px) {
  .last-modified {
    width: auto;
    top: auto;
    bottom: 10px;
    text-align: left;
    color: #d1d1d1;
  }
}
.content {
  position: relative;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
  margin: 50px auto 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 15px #c0c0c0;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  transform: translate3d(0, 50px, 0);
  animation: fadeUp 2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@media screen and (max-width: 1024px) {
  .content {
    width: 100%;
    margin: 0;
    border-radius: 0;
  }
}
.content-hd {
  padding: 30px 50px;
  color: #fff;
  background-color: #00b38a;
  overflow: hidden;
}
@media screen and (max-width: 720px) {
  .content-hd {
    padding: 25px;
  }
}
.content-hd .title {
  padding-bottom: 5px;
  margin-bottom: 5px;
  border-bottom: 2px solid #00a982;
  font-size: 52px;
  overflow: hidden;
}
.content-hd .name,
.content-hd .job,
.content-hd .info,
.content-hd .contact {
  width: 40%;
}
@media screen and (max-width: 720px) {
  .content-hd .name,
  .content-hd .job,
  .content-hd .info,
  .content-hd .contact {
    width: 100%;
    text-align: center;
  }
}
.content-hd .name,
.content-hd .info {
  float: left;
}
.content-hd .job,
.content-hd .contact {
  float: right;
  text-align: right;
}
.content-hd .name h1 {
  font-family: 'Lucida Grande', 'Hiragino Sans GB', 'Hiragino Sans GB W3', 'Helvetica Neue', Helvetica, 'PingFang SC', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  font-weight: 500;
  letter-spacing: 5px;
  height: 100%;
  font-size: 48px;
  margin-top:0;
  margin-bottom:0;
}
@media screen and (max-width: 720px) {
  .content-hd .name h1 {
    margin-top: 10px;
    letter-spacing: 0;
    line-height: 1.25;
  }
}
.content-hd .name h1 small {
  padding-left: 10px;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0;
}
@media screen and (max-width: 720px) {
  .content-hd .name h1 small {
    display: block;
    padding-left: 0;
    font-size: 20px;
    line-height: 1;
  }
}
.content-hd .job {
  font-weight: 300;
  -webkit-font-smoothing: subpixel-antialiased;
}
@media screen and (max-width: 720px) {
  .content-hd .job {
    text-align: center;
  }
}
.content-hd .job h3 {
  display: inline-block;
  font-size: 24px;
}
@media screen and (max-width: 720px) {
  .content-hd .job h3 {
    margin: 5px auto 0;
    padding: 10px;
    border-top: 1px solid #00a982;
  }
}
.content-hd .job h3 small {
  font-size: 14px;
}
.content-hd .info {
  padding-left: 5px;
  line-height: 30px;
}
.content-hd .info h2 {
  margin: 8px 0 4px;
  font-size: 18px;
}
.content-hd .info h3 {
  font-size: 16px;
}
.content-hd .contact {
  padding-right: 5px;
}
.content-hd .contact ul {
  margin-top: 8px;
}
@media screen and (max-width: 720px) {
  .content-hd .contact ul {
    margin: 16px 0 0;
    text-align: center;
  }
}
.content-hd .contact ul > li {
  height: 23px;
}
@media screen and (max-width: 720px) {
  .content-hd .contact ul > li {
    display: inline-block;
  }
}
.content-hd .contact ul > li > a {
  font-family: 'Lucida Grande', 'Hiragino Sans GB', 'Hiragino Sans GB W3', 'Helvetica Neue', Helvetica, 'PingFang SC', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  font-size: 14px;
  line-height: 23px;
  color: #fff;
}
.content-hd .contact ul > li > a:hover {
  color: #e8e8e8;
}
@media screen and (max-width: 720px) {
  .content-hd .contact ul > li > a .contact-link {
    display: none;
  }
}
.content-hd .contact ul > li > a .iconfont {
  margin-left: 6px;
  vertical-align: middle;
}
@media screen and (max-width: 720px) {
  .content-hd .contact ul > li > a .iconfont {
    font-size: 20px;
  }
}
.content-bd {
  min-height: 200px;
  padding: 18px 30px 50px;
  overflow: hidden;
}
@media screen and (max-width: 720px) {
  .content-bd {
    padding: 15px 10px 50px;
  }
}
.content-bd .content-left,
.content-bd .content-right {
  width: 50%;
}
@media screen and (max-width: 1024px) {
  .content-bd .content-left,
  .content-bd .content-right {
    width: 100%;
  }
}
.content-bd .content-left {
  float: left;
}
.content-bd .content-right {
  float: right;
}
.content-bd section {
  padding: 10px 18px;
  overflow: hidden;
}
.content-bd .section-hd {
  position: relative;
  height: 32px;
  margin: 10px auto 8px;
  overflow: hidden;
}
.content-bd .section-bd {
  overflow: hidden;
}
.content-bd .section-bd + .section-bd {
  margin-top: 2px;
}
.content-bd .section-title-l,
.content-bd .section-title-r {
  display: inline-block;
  position: absolute;
  top: 50%;
  width: 35%;
  height: 0;
  border-top: 1px solid #ededed;
  vertical-align: middle;
}
.content-bd .section-title-l {
  left: 0;
}
.content-bd .section-title-r {
  right: 0;
}
.content-bd .section-title {
  position: relative;
  z-index: 1;
  width: 24%;
  min-width: 100px;
  margin: 0 auto;
  padding: 4px 10px;
  border-radius: 32px;
  font-size: 16px;
  text-align: center;
  background-color: #eee;
}
.content-bd ul.section-list {
  padding: 8px 0 4px;
}
.content-bd ul.section-list > li:last-child .section-content {
  margin-bottom: 0;
}
.content-bd .item-main .item-hd {
  font: inherit;
  padding-top: 10px;
}
.content-bd .item-main .item-bd {
  margin-bottom: 4px;
}
.content-bd .item-main ~ .item {
  padding-left: 1px;
}
.content-bd .item-main ~ .item .item-hd {
  padding-top: 6px;
}
.content-bd .item-main ~ .item .item-bd {
  margin-bottom: 4px;
}
.content-bd .item-main ~ .item:last-child .item-bd {
  margin-bottom: 10px;
}
.content-bd .item-stage {
  color: #666;
  font-size: 13px;
}
.content-bd .item-stage .item-hd {
  padding: 0 0 2px;
}
.content-bd .item-stage .item-hd .item-time {
  font-size: 13px;
}
.content-bd .item-hd {
  position: relative;
  padding: 8px 0 5px;
  font-weight: 500;
  line-height: 22px;
  overflow: hidden;
}
.content-bd .item-hd .iconfont {
  color: #00b38a;
}
.content-bd .item-hd .item-time {
  float: left;
  display: inline-block;
  font-size: 14px;
  width: 135px;
}
@media screen and (max-width: 720px) {
  .content-bd .item-hd .item-time {
    width: 100%;
    margin-bottom: 5px;
  }
}
.content-bd .item-hd .item-more {
  float: right;
  height: 22px;
  line-height: 22px;
  margin-left: 5px;
}
@media screen and (max-width: 720px) {
  .content-bd .item-hd .item-more.btn {
    position: absolute;
    right: 0;
    top: 10px;
    margin-top: 1px;
  }
}
.content-bd .item-hd .item-name {
  float: left;
  display: inline-block;
}
.content-bd .item-hd .item-name {
  font-size:16px;
  line-height:16px;
  margin-top:0;
  margin-bottom:0;
}
.content-bd .item-bd {
  margin-bottom: 6px;
}
.content-bd .section-content {
  line-height: 25px;
  text-align: justify;
  word-break: break-all;
  margin-bottom: 2px;
}
.content-bd .section-content .iconfont {
  color: #00b38a;
}
.content-bd .section-content em {
  display: inline-block;
  font-family: Monaco, Menlo, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  font-size: 13px;
  line-height: 15px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  color: #383838;
  margin: 0 3px;
  padding: 0 4px;
  background-color: #f6f6f6;
}
.content-bd .section-content strong {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  font-size: 13px;
  line-height: 15px;
  font-weight: 500;
  color: #494949;
  margin: 0 3px;
  padding: 0 4px;
  border-bottom: 1px solid #eee;
  box-shadow: inset 0 -8px #eee;
}
.iconfont {
  vertical-align: middle;
}
.iconfont.icon-dot {
  vertical-align: -1px;
}
.btn {
  display: inline-block;
  padding: 0 5px;
  border: 1px solid #00b38a;
  border-radius: 3px;
  font-family: Menlo, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  height: 20px !important;
  font-size: 14px !important;
  line-height: 18px !important;
  margin: 2px 0;
  text-align: center;
  color: #00b38a;
}
.btn:hover {
  color: #fff;
  background-color: #00b38a;
}
.pdf {
  display: inline-block;
  position: fixed;
  z-index: 10;
  bottom: 6px;
  left: 50%;
  margin-left: 520px;
  padding: 0 8px;
  border-radius: 3px;
  font-size: 16px;
  line-height: 26px;
  color: #fff;
  background-color: #00b38a;
  transition: all 0.2s ease-in-out;
  animation: fade 1.6s;
}
@media screen and (max-width: 1246px) {
  .pdf {
    left: auto;
    right: 8px;
    margin-left: 0;
  }
}
@media screen and (max-width: 1024px) {
  footer .footer-link {
    margin-top: 40px;
    margin-bottom: 50px;
  }
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
::-webkit-scrollbar {
  background-color: #f1f1f1;
  overflow: visible;
  width: 3px;
  height: 3px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  background-clip: padding-box;
  min-height: 15px;
  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.07);
}
::-webkit-scrollbar-thumb:vertical:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb:vertical:active {
  background-color: rgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-button {
  height: 0;
  width: 0;
}
::-webkit-scrollbar-track {
  background-clip: padding-box;
  border: solid transparent;
  border-width: 0 0 0 4px;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
::selection {
  background: #d1d1d1;
}
#experience .item-main {
  font-size: 15px;
}
#skill .section-content {
  margin-bottom: 6px;
}

</style>
<div class="content">
  <header class="content-hd">
    <section class="title">
      <div class="name">
        <h1>刘肖一<small></small></h1>
      </div>
      <div class="job">
        <h3>前端开发工程师<small> / 广州</small></h3>
      </div>
    </section>
    <section class="info">
      <h3>男 / 1996.06</h3>
      <h3>本科 / 2年+前端工作经验</h3>
      <h3>中南大学</h3>
    </section>
    <section class="contact">
      <ul>
        <li><span class="contact-link">177****1190</span> </li>
        <li><span class="contact-link">178787622@qq.com</span> </li>
        <li><a href="https://Closerdoor.github.io/blog-vitepress/" target="_blank"><span class="contact-link">https://Closerdoor.github.io/blog-vitepress/</span> </a></li>
        <li><a href="https://github.com/Closerdoor" target="_blank"><span
              class="contact-link">github.com/Closerdoor</span> </a></li>
      </ul>
    </section>
  </header>
  <div class="content-bd">
    <section id="skill">
      <header class="section-hd"><span class="section-title-l"></span>
        <h2 class="section-title">个人能力</h2><span class="section-title-r"></span>
      </header>
      <div class="section-bd">
        <ul class="section-list">
          <li>
            <p class="section-content">
              <strong>2+年</strong>前端开发经验，具备<strong>Web桌面端</strong>、<strong>移动端H5</strong>、<strong>小程序</strong>等项目实战经历。
            </p>
          </li>
          <li>
            <p class="section-content">
              掌握前端开发基本技能，熟悉<strong>W3C标准</strong>、<strong>HTML/CSS/JS</strong>、<strong>UI重构开发</strong>等，领悟网页布局与设计规范，注重系统交互与用户体验。
            </p>
          </li>
          <li>
            <p class="section-content">
              熟练掌握<strong>原生JS</strong>、<strong>ES6+</strong>、了解<strong>TypeScript</strong>，追求代码高质量与可维护性，熟悉<strong>面向对象编程</strong>、<strong>模块化规范</strong>、<strong>设计模式</strong>，理解前端<strong>MVVM架构</strong>模型，对<strong>Vue.js</strong>等技术栈及生态有大量应用。
            </p>
          </li>
          <li>
            <p class="section-content">
              掌握CSS预处理器<strong>Less</strong>、<strong>Sass</strong>、<strong>Stylus</strong>了解构建工具<strong>Webpack</strong><strong>Vite</strong><strong>Gulp</strong>等工具链的配置使用及插件开发经验。
            </p>
          </li>
          <li>
            <p class="section-content">
              了解前后端分离的开发思想，掌握ajax等技术与后台进行数据交互，了解<strong>性能优化</strong>、<strong>前端监控</strong>等技术，并持续关注与学习业内前沿领域。
            </p>
          </li>
          <li>
            <p class="section-content">
              时刻保持<strong>好奇心</strong>，具有<strong>持续学习钻研</strong>与<strong>创新创造</strong>精神，工作积极执行有<strong>责任心</strong>，有良好<strong>沟通协作</strong>、<strong>分析解决问题</strong>、<strong>独立思考思辨</strong>等能力。
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section id="experience">
      <header class="section-hd"><span class="section-title-l"></span>
        <h2 class="section-title">工作经历</h2><span class="section-title-r"></span>
      </header>
      <div class="section-bd">
        <div class="item item-main">
          <header class="item-hd"><span class="item-time">2021.03 ~ 2022.08</span> <a class="btn item-more"
              href="#" target="_blank" title="求职中...">离职</a>
            <h3 class="item-name">广州中睿信息技术有限公司</h3>
          </header>
        </div>
        <div class="item">
          <header class="item-hd">
            <h3 class="item-name"> 港航后台管理系统</h3>
            <div class="item-more"><strong>项目开发</strong></div>
          </header>
          <div class="item-bd">
            <p class="section-content">
              · 使用 vue-element-admin 搭建项目，完成基于 Vue2 框架的项目开发;
            </p>
            <p class="section-content">
              · 使用 Element-UI 实现主要页面，包括搜索、表单页、数据管理、字典管理等功能；
              </p>
            <p class="section-content sub-content">
            · 使用 axios 进行请求获取后台数据并进行页面渲染；
            </p>
            <p class="section-content sub-content">
            · 使用 vue-router 进行页面间的跳转;
            </p>
            <p class="section-content sub-content">
            · 使用Vuex统一管理api接口;
              </p>
            <p class="section-content">
            · 使用Sass预处理技术写css样式。
            </p>
          </div>
        </div>
        <div class="item">
          <header class="item-hd">
            <h3 class="item-name"> 低代码开发平台数据源管理系统</h3>
            <div class="item-more"><strong>项目负责人</strong></div>
          </header>
          <div class="item-bd">
            <p class="section-content">
              · 使用基于 vue3 的框架搭建项目，完成项目开发
            </p>
            <p class="section-content">
              · 使用 Naive-UI 实现主要页面，包括数据展示页面，表单页面等效果；
            </p>
            <p class="section-content">
              · 使用 fetch 进行请求获取后台数据并进行页面渲染；
            </p>
            <p class="section-content">
              · 使用 Echarts 绘制图表、数据报表；
            </p>
          </div>
        </div>
        <div class="item">
          <header class="item-hd">
            <h3 class="item-name"> 跑船平台</h3>
            <div class="item-more"><strong>项目维护</strong></div>
          </header>
          <div class="item-bd">
            <p class="section-content">· 使用knockout框架完成PC货主端、PC管理后台、APP和小程序页面;</p>
            <p class="section-content">· 根据不同的状态码完善订单从下单到支付的整个流程；</p>
            <p class="section-content">· 完成订单支付银行对接相关内容。</p>
          </div>
        </div>
        <div class="item">
          <header class="item-hd">
            <h3 class="item-name"> im聊天插件</h3>
            <div class="item-more"><strong>项目负责人</strong></div>
          </header>
          <div class="item-bd">
            <p class="section-content">· 基于websocket协议开发聊天功能</p>
            <p class="section-content">· 将组件打包并上传到npm以插件形式使用</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</div>
