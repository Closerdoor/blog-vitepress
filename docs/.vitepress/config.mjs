export default {
  lang: 'zh-CN',
  title: 'Javascript 基础补完计划',
  description: 'Javascript基础知识',
  base: '/blog-vitepress/',
  srcDir: '.',
  vite: {
    publicDir: '.vitepress/public'
  },
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  themeConfig: {
    logo: '/favicon.png',
    nav: [
      { text: '主页', link: '/' },
      {
        text: '学习笔记',
        items: [
          { text: 'htmlcss', link: '/note/htmlcss/htmlcss/meta' },
          { text: 'javascript', link: '/note/javascript/javascript/general' },
          { text: 'node', link: '/note/node/http/http' },
          { text: 'git', link: '/note/git/' },
          { text: 'vue', link: '/note/vue/vue3_2' },
          { text: 'react', link: '/note/react/createApp' },
          { text: 'typescript', link: '/note/typescript/basic' },
          { text: '移动端开发', link: '/note/webapp/page' },
          { text: 'webpack', link: '/note/webpack/index' }
        ]
      },
      { text: '工具箱', link: '/tool/Echarts' },
      { text: '代码块', link: '/code/Fragment1' },
      { text: '教程', link: '/tutorial/vuepress/' },
      {
        text: '更多',
        items: [
          { text: '面试用', link: '/question/resume' },
          { text: '待整理', link: '/collect/ajax' },
          { text: 'css样式库', link: '/quickCSS/Input' }
        ]
      },
      {
        text: 'Closerdoor',
        items: [{ text: 'Github', link: 'https://github.com/Closerdoor' }]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Closerdoor/blog-vitepress' }],
    sidebar: {
      '/note/htmlcss/': [
        {
          text: 'htmlcss',
          items: [
            { text: 'meta', link: '/note/htmlcss/htmlcss/meta' },
            { text: 'html', link: '/note/htmlcss/htmlcss/html' },
            { text: 'img', link: '/note/htmlcss/htmlcss/img' },
            { text: 'table表格', link: '/note/htmlcss/htmlcss/table' },
            { text: 'form表单', link: '/note/htmlcss/htmlcss/form' },
            { text: 'css基础', link: '/note/htmlcss/htmlcss/css2' },
            { text: '常用css', link: '/note/htmlcss/htmlcss/css1' },
            { text: 'css3', link: '/note/htmlcss/htmlcss/css3' },
            { text: '浮动和定位', link: '/note/htmlcss/htmlcss/float' },
            { text: 'css书写规范', link: '/note/htmlcss/htmlcss/stand' },
            { text: 'seo', link: '/note/htmlcss/htmlcss/seo' }
          ]
        },
        {
          text: 'html5',
          items: [
            { text: '新特性', link: '/note/htmlcss/html5/newFeature' },
            { text: 'drag', link: '/note/htmlcss/html5/h5drag' },
            { text: 'video', link: '/note/htmlcss/html5/video' },
            { text: 'audio', link: '/note/htmlcss/html5/audio' },
            { text: '页面生命周期', link: '/note/htmlcss/html5/pageCycle' },
            { text: 'canvas', link: '/note/htmlcss/html5/canvas' },
            { text: '多线程与通知', link: '/note/htmlcss/html5/worker' }
          ]
        }
      ],
      '/note/javascript/': [
        {
          text: 'javascript',
          items: [
            { text: '数据类型基础', link: '/note/javascript/javascript/general' },
            { text: 'Array数组方法', link: '/note/javascript/javascript/array' },
            { text: 'String字符串方法', link: '/note/javascript/javascript/string' },
            { text: 'Object对象方法', link: '/note/javascript/javascript/object' },
            { text: 'Date和Math对象', link: '/note/javascript/javascript/date_math' },
            { text: 'Math三角函数', link: '/note/javascript/javascript/math' },
            { text: 'DOM', link: '/note/javascript/javascript/dom' },
            { text: 'BOM', link: '/note/javascript/javascript/bom' },
            { text: 'cookie', link: '/note/javascript/javascript/cookie' },
            { text: '坐标', link: '/note/javascript/javascript/position' },
            { text: '滚动条相关', link: '/note/javascript/javascript/scrollbar' },
            { text: 'this', link: '/note/javascript/javascript/this' },
            { text: '正则表达式', link: '/note/javascript/javascript/RegExp' }
          ]
        },
        {
          text: 'ES6高阶',
          items: [
            { text: 'call、apply、bind', link: '/note/javascript/es6/this' },
            { text: '闭包', link: '/note/javascript/es6/closure' },
            { text: '柯里化函数', link: '/note/javascript/es6/currying' },
            { text: '解构赋值', link: '/note/javascript/es6/rest' },
            { text: 'prototype', link: '/note/javascript/es6/prototype' },
            { text: 'function', link: '/note/javascript/es6/function' },
            { text: '对象高级', link: '/note/javascript/es6/object' },
            { text: 'symbol', link: '/note/javascript/es6/symbol' },
            { text: 'promise', link: '/note/javascript/es6/promise' },
            { text: '对象拦截', link: '/note/javascript/es6/setget' }
          ]
        }
      ],
      '/note/node/': [
        {
          text: 'http协议',
          items: [
            { text: 'http', link: '/note/node/http/http' },
            { text: '状态码', link: '/note/node/http/StatusCode' }
          ]
        },
        {
          text: 'ajax',
          items: [
            { text: 'blob二进制数据流', link: '/note/node/ajax/blob' },
            { text: 'fileReader', link: '/note/node/ajax/fileReader' }
          ]
        },
        {
          text: '其它',
          items: [
            { text: 'module', link: '/note/node/module' },
            { text: 'EventLoop', link: '/note/node/EventLoop' },
            { text: '内置模块与node模块使用', link: '/note/node/builtInModule' }
          ]
        }
      ],
      '/note/git/': [{ text: 'Git', items: [{ text: 'Git 笔记', link: '/note/git/' }] }],
      '/note/vue/': [
        {
          text: 'Vue',
          items: [
            { text: 'vue3.2 setup', link: '/note/vue/vue3_2' },
            { text: 'vue3', link: '/note/vue/vue3' },
            { text: 'vue2', link: '/note/vue/vue2' },
            { text: 'markdown语法模板', link: '/note/vue/Generics' }
          ]
        }
      ],
      '/note/react/': [{ text: 'React', items: [{ text: 'createApp', link: '/note/react/createApp' }] }],
      '/note/typescript/': [{ text: 'Typescript', items: [{ text: 'basic', link: '/note/typescript/basic' }] }],
      '/note/webapp/': [
        {
          text: '移动端开发',
          items: [
            { text: 'page', link: '/note/webapp/page' },
            { text: 'size', link: '/note/webapp/size' },
            { text: 'touchEvent', link: '/note/webapp/touchEvent' },
            { text: 'rem', link: '/note/webapp/rem' }
          ]
        }
      ],
      '/note/webpack/': [{ text: 'Webpack', items: [{ text: 'index', link: '/note/webpack/index' }] }],
      '/tool/': [
        {
          text: '工具箱',
          items: [
            { text: 'Echarts', link: '/tool/Echarts' },
            { text: 'Qrcodejs2', link: '/tool/Qrcodejs2' },
            { text: 'Moment', link: '/tool/Moment' },
            { text: 'marked', link: '/tool/marked' },
            { text: 'swiper', link: '/tool/swiper' },
            { text: 'jquery', link: '/tool/jquery' },
            { text: 'ASCII', link: '/tool/ASCII' }
          ]
        }
      ],
      '/project/': [{ text: '项目', items: [{ text: 'picscope', link: '/project/picscope' }] }],
      '/code/': [
        {
          text: '代码块',
          items: [
            { text: 'Fragment1', link: '/code/Fragment1' },
            { text: 'Fragment2', link: '/code/Fragment2' },
            { text: 'Fragment3', link: '/code/Fragment3' },
            { text: 'Fragment4', link: '/code/Fragment4' },
            { text: 'websocket', link: '/code/websocket' },
            { text: 'Fragment5', link: '/code/Fragment5' },
            { text: 'Fragment6', link: '/code/Fragment6' },
            { text: 'anchor', link: '/code/anchor' },
            { text: 'login', link: '/code/login' },
            { text: 'Generator', link: '/code/Generator' }
          ]
        }
      ],
      '/tutorial/': [
        {
          text: '教程',
          items: [
            { text: 'vuepress搭建博客', link: '/tutorial/vuepress/' },
            { text: 'vuepress插件', link: '/tutorial/vuepress/plugin' }
          ]
        }
      ],
      '/question/': [
        {
          text: '面试与题目',
          items: [
            { text: 'resume', link: '/question/resume' },
            { text: 'project', link: '/question/project' },
            { text: 'html', link: '/question/html' },
            { text: 'css', link: '/question/css' },
            { text: 'js', link: '/question/js' },
            { text: 'vue', link: '/question/vue' },
            { text: '图片懒加载', link: '/question/code/imgLoad' },
            { text: 'vue响应式原理', link: '/question/code/vue' },
            { text: 'promise原理', link: '/question/code/promise' }
          ]
        }
      ],
      '/collect/': [
        {
          text: '待整理',
          items: [
            { text: 'ajax', link: '/collect/ajax' },
            { text: 'closure', link: '/collect/closure' },
            { text: 'eventLoop', link: '/collect/eventLoop' },
            { text: 'storage', link: '/collect/storage' }
          ]
        }
      ],
      '/quickCSS/': [
        {
          text: 'css样式库',
          items: [
            { text: 'Input', link: '/quickCSS/Input' },
            { text: 'Ellipsis', link: '/quickCSS/Ellipsis' },
            { text: 'Scrollbar', link: '/quickCSS/Scrollbar' }
          ]
        }
      ]
    },
    footer: {
      message: 'Javascript基础知识',
      copyright: 'Copyright © 2022-present Closerdoor'
    },
    outline: { level: [2, 3], label: '页面导航' },
    docFooter: { prev: '上一页', next: '下一页' },
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '切换语言'
  }
}
