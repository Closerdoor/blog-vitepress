export default {
  lang: 'zh-CN',
  title: 'Javascript 基础补完计划',
  description: 'Javascript基础知识',
  base: '/blog-vitepress/',
  ignoreDeadLinks: true,
  srcDir: '.',
  vite: {
    publicDir: '.vitepress/public'
  },
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/blog-vitepress/favicon.png' }],
    [
      'script',
      {},
      "(function(){var l=window.location;var prefix='/blog-vitepress/';var key='__vp_restore__';if(l.search.indexOf('?p=')===0){var target=l.search.slice(3).replace(/~and~/g,'&');window.history.replaceState(null,'',prefix+target+l.hash);}else if(l.pathname.indexOf(prefix)===0&&document.referrer&&document.referrer.indexOf(prefix)!==-1){sessionStorage.setItem(key,l.pathname+l.search+l.hash);}})();"
    ]
  ],
  themeConfig: {
    logo: '/favicon.png',
    nav: [
      { text: '主页', link: '/' },
      {
        text: '前端基础',
        items: [
          { text: 'HTML / CSS', link: '/frontend-basic/html-css/meta' },
          { text: 'JavaScript', link: '/frontend-basic/javascript/general' },
          { text: 'Vue', link: '/frontend-basic/vue/vue2' },
          { text: 'React', link: '/frontend-basic/react/create-react-app' },
          { text: 'TypeScript', link: '/frontend-basic/typescript/basic' },
          { text: '移动端开发', link: '/frontend-basic/mobile/page' }
        ]
      },
      {
        text: '工程化',
        items: [
          { text: 'Webpack', link: '/engineering/webpack/' },
          { text: 'Git', link: '/engineering/git/' }
        ]
      },
      {
        text: 'Node.js',
        items: [{ text: 'Node.js', link: '/nodejs/node/http' }]
      },
      {
        text: '工具箱',
        items: [
          { text: '常用库', link: '/toolbox/common-libs/echarts' },
          { text: '样式工具', link: '/toolbox/style-tools/input' },
          { text: '小工具', link: '/toolbox/utilities/ascii' }
        ]
      },
      {
        text: '代码块',
        items: [
          { text: '通用片段', link: '/snippets/general/type-check' },
          { text: '网络通信', link: '/snippets/network/websocket' },
          { text: 'DOM 与交互', link: '/snippets/dom/anchor' },
          { text: '登录与鉴权', link: '/snippets/auth/login' }
        ]
      },
      {
        text: '待整理',
        items: [
          { text: '面试整理', link: '/question/resume' },
          { text: '资料收集', link: '/collect/ajax' },
          { text: '历史教程', link: '/tutorial/vuepress/' },
          { text: '项目记录', link: '/project/experience' }
        ]
      },
      {
        text: 'Closerdoor',
        items: [{ text: 'Github', link: 'https://github.com/Closerdoor' }]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Closerdoor/blog-vitepress' }],
    sidebar: {
      '/frontend-basic/html-css/': [
        {
          text: 'HTML 基础',
          items: [
            { text: 'meta', link: '/frontend-basic/html-css/meta' },
            { text: 'html', link: '/frontend-basic/html-css/html' },
            { text: 'img', link: '/frontend-basic/html-css/image' },
            { text: 'table表格', link: '/frontend-basic/html-css/table' },
            { text: 'form表单', link: '/frontend-basic/html-css/form' }
          ]
        },
        {
          text: 'CSS 基础',
          items: [
            { text: 'css基础', link: '/frontend-basic/html-css/css-basic' },
            { text: '常用css', link: '/frontend-basic/html-css/css-common' },
            { text: 'css3', link: '/frontend-basic/html-css/css3' },
            { text: '浮动和定位', link: '/frontend-basic/html-css/layout' },
            { text: 'css书写规范', link: '/frontend-basic/html-css/style-guide' },
            { text: 'seo', link: '/frontend-basic/html-css/seo' }
          ]
        },
        {
          text: 'HTML5',
          items: [
            { text: '新特性', link: '/frontend-basic/html-css/html5-new-feature' },
            { text: 'drag', link: '/frontend-basic/html-css/html5-drag' },
            { text: 'video', link: '/frontend-basic/html-css/html5-video' },
            { text: 'audio', link: '/frontend-basic/html-css/html5-audio' },
            { text: '页面生命周期', link: '/frontend-basic/html-css/page-lifecycle' },
            { text: 'canvas', link: '/frontend-basic/html-css/canvas' },
            { text: '多线程与通知', link: '/frontend-basic/html-css/web-worker' }
          ]
        }
      ],
      '/frontend-basic/javascript/': [
        {
          text: 'JavaScript 基础',
          items: [
            { text: '数据类型基础', link: '/frontend-basic/javascript/general' },
            { text: 'Array数组方法', link: '/frontend-basic/javascript/array' },
            { text: 'String字符串方法', link: '/frontend-basic/javascript/string' },
            { text: 'Object对象方法', link: '/frontend-basic/javascript/object' },
            { text: 'Date和Math对象', link: '/frontend-basic/javascript/date-math' },
            { text: 'Math三角函数', link: '/frontend-basic/javascript/trigonometric' },
            { text: 'DOM', link: '/frontend-basic/javascript/dom' },
            { text: 'BOM', link: '/frontend-basic/javascript/bom' },
            { text: 'cookie', link: '/frontend-basic/javascript/cookie' },
            { text: '坐标', link: '/frontend-basic/javascript/position' },
            { text: '滚动条相关', link: '/frontend-basic/javascript/scrollbar' },
            { text: 'AJAX', link: '/frontend-basic/javascript/ajax' },
            { text: '浏览器存储', link: '/frontend-basic/javascript/storage' },
            { text: 'this', link: '/frontend-basic/javascript/this-basic' },
            { text: '正则表达式', link: '/frontend-basic/javascript/regexp' }
          ]
        },
        {
          text: 'JavaScript 进阶',
          items: [
            { text: 'call、apply、bind', link: '/frontend-basic/javascript/this-advanced' },
            { text: '闭包', link: '/frontend-basic/javascript/closure' },
            { text: '柯里化函数', link: '/frontend-basic/javascript/currying' },
            { text: '解构赋值', link: '/frontend-basic/javascript/destructuring-rest' },
            { text: 'prototype', link: '/frontend-basic/javascript/prototype' },
            { text: 'function', link: '/frontend-basic/javascript/function-advanced' },
            { text: '对象高级', link: '/frontend-basic/javascript/object-advanced' },
            { text: 'symbol', link: '/frontend-basic/javascript/symbol' },
            { text: 'promise', link: '/frontend-basic/javascript/promise' },
            { text: '对象拦截', link: '/frontend-basic/javascript/proxy-setter-getter' }
          ]
        }
      ],
      '/frontend-basic/vue/': [
        {
          text: 'Vue',
          items: [
            { text: 'vue2', link: '/frontend-basic/vue/vue2' },
            { text: 'vue3', link: '/frontend-basic/vue/vue3' },
            { text: 'vue3.2 setup', link: '/frontend-basic/vue/vue3-setup' },
            { text: 'markdown语法模板', link: '/frontend-basic/vue/markdown-template' }
          ]
        }
      ],
      '/frontend-basic/react/': [
        {
          text: 'React',
          items: [{ text: 'create-react-app', link: '/frontend-basic/react/create-react-app' }]
        }
      ],
      '/frontend-basic/typescript/': [
        {
          text: 'TypeScript',
          items: [
            { text: '基础', link: '/frontend-basic/typescript/basic' },
            { text: '条件类型', link: '/frontend-basic/typescript/conditional-types' }
          ]
        }
      ],
      '/frontend-basic/mobile/': [
        {
          text: '移动端开发',
          items: [
            { text: '移动端适配方案', link: '/frontend-basic/mobile/page' },
            { text: '移动端尺寸介绍', link: '/frontend-basic/mobile/size' },
            { text: 'touch 事件', link: '/frontend-basic/mobile/touch-event' },
            { text: 'rem 适配', link: '/frontend-basic/mobile/rem' }
          ]
        }
      ],
      '/engineering/webpack/': [
        {
          text: 'Webpack',
          items: [{ text: 'Webpack', link: '/engineering/webpack/' }]
        }
      ],
      '/engineering/git/': [
        {
          text: 'Git',
          items: [{ text: 'Git 笔记', link: '/engineering/git/' }]
        }
      ],
      '/nodejs/node/': [
        {
          text: 'Node.js',
          items: [
            { text: 'http', link: '/nodejs/node/http' },
            { text: '状态码', link: '/nodejs/node/status-code' },
            { text: 'module', link: '/nodejs/node/module' },
            { text: '内置模块与node模块使用', link: '/nodejs/node/built-in-module' },
            { text: 'blob二进制数据流', link: '/nodejs/node/blob' },
            { text: 'fileReader', link: '/nodejs/node/file-reader' },
            { text: 'EventLoop', link: '/nodejs/node/event-loop' }
          ]
        }
      ],
      '/toolbox/common-libs/': [
        {
          text: '常用库',
          items: [
            { text: 'Echarts', link: '/toolbox/common-libs/echarts' },
            { text: 'Qrcodejs2', link: '/toolbox/common-libs/qrcodejs2' },
            { text: 'Moment', link: '/toolbox/common-libs/moment' },
            { text: 'marked', link: '/toolbox/common-libs/marked' },
            { text: 'swiper', link: '/toolbox/common-libs/swiper' },
            { text: 'jquery', link: '/toolbox/common-libs/jquery' }
          ]
        }
      ],
      '/toolbox/style-tools/': [
        {
          text: '样式工具',
          items: [
            { text: 'Input 输入框', link: '/toolbox/style-tools/input' },
            { text: 'Ellipsis', link: '/toolbox/style-tools/ellipsis' },
            { text: 'Scrollbar', link: '/toolbox/style-tools/scrollbar' }
          ]
        }
      ],
      '/toolbox/utilities/': [
        {
          text: '小工具',
          items: [{ text: 'ASCII', link: '/toolbox/utilities/ascii' }]
        }
      ],
      '/snippets/general/': [
        {
          text: '通用片段',
          items: [
            { text: '数据类型判断', link: '/snippets/general/type-check' },
            { text: '对象去重', link: '/snippets/general/object-deduplication' },
            { text: '扁平/树形结构转换', link: '/snippets/general/tree-transform' },
            { text: 'Generator 生成器', link: '/snippets/general/generator' }
          ]
        }
      ],
      '/snippets/network/': [
        {
          text: '网络通信',
          items: [
            { text: '封装 websocket', link: '/snippets/network/websocket' },
            { text: 'websocket 消息通知', link: '/snippets/network/websocket-notification' }
          ]
        }
      ],
      '/snippets/dom/': [
        {
          text: 'DOM 与交互',
          items: [
            { text: '锚点跳转', link: '/snippets/dom/anchor' },
            { text: '点击复制链接', link: '/snippets/dom/copy-link' },
            { text: '滚动条追踪动画', link: '/snippets/dom/scroll-animation' }
          ]
        }
      ],
      '/snippets/auth/': [
        {
          text: '登录与鉴权',
          items: [{ text: '登录/注册', link: '/snippets/auth/login' }]
        }
      ],
      '/question/': [
        {
          text: '面试整理',
          items: [
            { text: '简历', link: '/question/resume' },
            { text: 'HTML 面试整理', link: '/question/html' },
            { text: 'CSS 面试整理', link: '/question/css' },
            { text: 'JavaScript 面试整理', link: '/question/js' },
            { text: 'Vue 面试整理', link: '/question/vue' }
          ]
        },
        {
          text: '题目代码',
          items: [
            { text: '图片懒加载', link: '/question/code/imgLoad' },
            { text: 'Promise 原理', link: '/question/code/promise' },
            { text: 'Vue 响应式原理', link: '/question/code/vue' }
          ]
        }
      ],
      '/collect/': [
        {
          text: '资料收集',
          items: [
            { text: '闭包', link: '/collect/closure' },
            { text: 'eventLoop', link: '/collect/eventLoop' },
            { text: 'cookie、localStorage 和 sessionStorage', link: '/frontend-basic/javascript/storage' }
          ]
        }
      ],
      '/tutorial/vuepress/': [
        {
          text: '历史教程',
          items: [
            { text: 'VuePress 博客搭建', link: '/tutorial/vuepress/' },
            { text: 'VuePress 插件', link: '/tutorial/vuepress/plugin' }
          ]
        }
      ],
      '/project/': [
        {
          text: '项目记录',
          items: [
            { text: '项目经历', link: '/project/experience' },
            { text: '图片放大镜', link: '/project/picscope' }
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
