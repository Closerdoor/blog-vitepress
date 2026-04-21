export default {
  lang: 'zh-CN',
  title: '前端技术笔记',
  description: '聚焦前端基础、工程化与实践的中文技术笔记',
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
      { text: '首页', link: '/' },
      {
        text: '前端基础',
        items: [
          { text: 'HTML 与 CSS', link: '/frontend-basic/html-css/meta' },
          { text: 'JavaScript', link: '/frontend-basic/javascript/general' },
          { text: '浏览器原理', link: '/frontend-basic/browser/http-and-rendering' },
          { text: 'Vue', link: '/frontend-basic/vue/vue2' },
          { text: 'React', link: '/frontend-basic/react/create-react-app' },
          { text: 'TypeScript', link: '/frontend-basic/typescript/basic' },
          { text: '移动端', link: '/frontend-basic/mobile/page' },
          { text: 'Svelte', link: '/frontend-basic/svelte/basic' },
          { text: '微信小程序', link: '/miniprogram/wechat/basic' }
        ]
      },
      {
        text: '工程化',
        items: [
          { text: 'Webpack', link: '/engineering/webpack/' },
          { text: 'ES Module', link: '/engineering/modules/es-module' },
          { text: 'Git', link: '/engineering/git/' },
          { text: '开发环境', link: '/engineering/environment/windows-dev-setup' }
        ]
      },
      {
        text: 'Node.js',
        items: [
          { text: 'Node.js', link: '/nodejs/node/http' },
          { text: 'NPM', link: '/nodejs/npm/basic' }
        ]
      },
      {
        text: '数据库',
        items: [{ text: 'MySQL', link: '/database/mysql/basic' }]
      },
      {
        text: '实用工具',
        items: [
          { text: '常用库', link: '/toolbox/common-libs/echarts' },
          { text: '样式工具', link: '/toolbox/style-tools/input' },
          { text: '实用小工具', link: '/toolbox/utilities/ascii' }
        ]
      },
      {
        text: '代码片段',
        items: [
          { text: '通用片段', link: '/snippets/general/type-check' },
          { text: '网络通信', link: '/snippets/network/websocket' },
          { text: 'DOM 交互', link: '/snippets/dom/anchor' },
          { text: '登录鉴权', link: '/snippets/auth/login' }
        ]
      },
      {
        text: '专题整理',
        items: [
          { text: '面试笔记', link: '/question/resume' },
          { text: '资料摘录', link: '/collect/closure' },
          { text: '项目实践', link: '/project/experience' },
          { text: '历史教程', link: '/tutorial/vuepress/' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Closerdoor/blog-vitepress' }],
    sidebar: {
      '/frontend-basic/html-css/': [
        {
          text: 'HTML 基础',
          items: [
            { text: '文档元信息', link: '/frontend-basic/html-css/meta' },
            { text: 'HTML 标签基础', link: '/frontend-basic/html-css/html' },
            { text: '图片', link: '/frontend-basic/html-css/image' },
            { text: '表格', link: '/frontend-basic/html-css/table' },
            { text: '表单', link: '/frontend-basic/html-css/form' }
          ]
        },
        {
          text: 'CSS 基础',
          items: [
            { text: 'CSS 基础', link: '/frontend-basic/html-css/css-basic' },
            { text: '常用样式', link: '/frontend-basic/html-css/css-common' },
            { text: 'CSS3', link: '/frontend-basic/html-css/css3' },
            { text: '布局与定位', link: '/frontend-basic/html-css/layout' },
            { text: 'CSS 书写规范', link: '/frontend-basic/html-css/style-guide' },
            { text: 'SEO 基础', link: '/frontend-basic/html-css/seo' }
          ]
        },
        {
          text: 'HTML5',
          items: [
            { text: '新特性', link: '/frontend-basic/html-css/html5-new-feature' },
            { text: '拖拽', link: '/frontend-basic/html-css/html5-drag' },
            { text: '视频', link: '/frontend-basic/html-css/html5-video' },
            { text: '音频', link: '/frontend-basic/html-css/html5-audio' },
            { text: '页面生命周期', link: '/frontend-basic/html-css/page-lifecycle' },
            { text: 'Canvas', link: '/frontend-basic/html-css/canvas' },
            { text: 'Web Worker 与通知', link: '/frontend-basic/html-css/web-worker' }
          ]
        }
      ],
      '/frontend-basic/javascript/': [
        {
          text: 'JavaScript 基础',
          items: [
            { text: '数据类型基础', link: '/frontend-basic/javascript/general' },
            { text: '数组方法', link: '/frontend-basic/javascript/array' },
            { text: '字符串方法', link: '/frontend-basic/javascript/string' },
            { text: '对象方法', link: '/frontend-basic/javascript/object' },
            { text: 'Date 与 Math', link: '/frontend-basic/javascript/date-math' },
            { text: 'Math 三角函数', link: '/frontend-basic/javascript/trigonometric' },
            { text: 'DOM', link: '/frontend-basic/javascript/dom' },
            { text: 'BOM', link: '/frontend-basic/javascript/bom' },
            { text: 'Cookie', link: '/frontend-basic/javascript/cookie' },
            { text: '坐标', link: '/frontend-basic/javascript/position' },
            { text: '滚动相关', link: '/frontend-basic/javascript/scrollbar' },
            { text: 'AJAX', link: '/frontend-basic/javascript/ajax' },
            { text: '浏览器存储', link: '/frontend-basic/javascript/storage' },
            { text: 'this', link: '/frontend-basic/javascript/this-basic' },
            { text: '正则表达式', link: '/frontend-basic/javascript/regexp' }
          ]
        },
        {
          text: 'JavaScript 进阶',
          items: [
            { text: 'call / apply / bind', link: '/frontend-basic/javascript/this-advanced' },
            { text: '闭包', link: '/frontend-basic/javascript/closure' },
            { text: '柯里化', link: '/frontend-basic/javascript/currying' },
            { text: '解构与剩余参数', link: '/frontend-basic/javascript/destructuring-rest' },
            { text: '原型 prototype', link: '/frontend-basic/javascript/prototype' },
            { text: '函数进阶', link: '/frontend-basic/javascript/function-advanced' },
            { text: '对象进阶', link: '/frontend-basic/javascript/object-advanced' },
            { text: 'Symbol', link: '/frontend-basic/javascript/symbol' },
            { text: 'Promise', link: '/frontend-basic/javascript/promise' },
            { text: 'Proxy / getter / setter', link: '/frontend-basic/javascript/proxy-setter-getter' }
          ]
        }
      ],
      '/frontend-basic/browser/': [
        {
          text: '浏览器原理',
          items: [
            { text: 'HTTP 与浏览器渲染', link: '/frontend-basic/browser/http-and-rendering' },
            { text: '浏览器渲染流水线', link: '/frontend-basic/browser/rendering-pipeline' },
            { text: '网络基础概念', link: '/frontend-basic/browser/network-basic' }
          ]
        }
      ],
      '/frontend-basic/vue/': [
        {
          text: 'Vue',
          items: [
            { text: 'Vue 2', link: '/frontend-basic/vue/vue2' },
            { text: 'Vue 3', link: '/frontend-basic/vue/vue3' },
            { text: 'Vue 3.2 Setup', link: '/frontend-basic/vue/vue3-setup' },
            { text: 'Vue CLI', link: '/frontend-basic/vue/vue-cli' },
            { text: 'Vuex', link: '/frontend-basic/vue/vuex' }
          ]
        }
      ],
      '/frontend-basic/react/': [
        {
          text: 'React',
          items: [{ text: 'Create React App', link: '/frontend-basic/react/create-react-app' }]
        }
      ],
      '/frontend-basic/typescript/': [
        {
          text: 'TypeScript',
          items: [
            { text: '类型基础', link: '/frontend-basic/typescript/basic' },
            { text: '条件类型', link: '/frontend-basic/typescript/conditional-types' }
          ]
        }
      ],
      '/frontend-basic/mobile/': [
        {
          text: '移动端开发',
          items: [
            { text: '适配方案', link: '/frontend-basic/mobile/page' },
            { text: '尺寸体系', link: '/frontend-basic/mobile/size' },
            { text: 'Touch 事件', link: '/frontend-basic/mobile/touch-event' },
            { text: 'REM 适配', link: '/frontend-basic/mobile/rem' }
          ]
        }
      ],
      '/frontend-basic/svelte/': [
        {
          text: 'Svelte',
          items: [{ text: 'Svelte 基础', link: '/frontend-basic/svelte/basic' }]
        }
      ],
      '/engineering/environment/': [
        {
          text: '开发环境',
          items: [{ text: 'Windows 开发环境初始化', link: '/engineering/environment/windows-dev-setup' }]
        }
      ],
      '/engineering/modules/': [
        {
          text: '模块化',
          items: [{ text: 'ES Module', link: '/engineering/modules/es-module' }]
        }
      ],
      '/engineering/webpack/': [
        {
          text: 'Webpack',
          items: [{ text: 'Webpack 基础', link: '/engineering/webpack/' }]
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
            { text: 'HTTP', link: '/nodejs/node/http' },
            { text: '状态码', link: '/nodejs/node/status-code' },
            { text: '模块机制', link: '/nodejs/node/module' },
            { text: '内置模块', link: '/nodejs/node/built-in-module' },
            { text: 'Blob 二进制数据', link: '/nodejs/node/blob' },
            { text: 'FileReader', link: '/nodejs/node/file-reader' },
            { text: '事件循环', link: '/nodejs/node/event-loop' },
            { text: 'Puppeteer 爬虫', link: '/nodejs/node/puppeteer-crawler' }
          ]
        }
      ],
      '/nodejs/npm/': [
        {
          text: 'NPM',
          items: [{ text: '基础', link: '/nodejs/npm/basic' }]
        }
      ],
      '/database/mysql/': [
        {
          text: 'MySQL',
          items: [{ text: 'MySQL 基础操作', link: '/database/mysql/basic' }]
        }
      ],
      '/miniprogram/wechat/': [
        {
          text: '微信小程序',
          items: [{ text: '基础', link: '/miniprogram/wechat/basic' }]
        }
      ],
      '/toolbox/common-libs/': [
        {
          text: '常用库',
          items: [
            { text: 'ECharts', link: '/toolbox/common-libs/echarts' },
            { text: 'QRCode.js', link: '/toolbox/common-libs/qrcodejs2' },
            { text: 'Moment.js', link: '/toolbox/common-libs/moment' },
            { text: 'Marked', link: '/toolbox/common-libs/marked' },
            { text: 'Swiper', link: '/toolbox/common-libs/swiper' },
            { text: 'jQuery', link: '/toolbox/common-libs/jquery' }
          ]
        }
      ],
      '/toolbox/style-tools/': [
        {
          text: '样式工具',
          items: [
            { text: 'Input 输入框', link: '/toolbox/style-tools/input' },
            { text: '文本省略', link: '/toolbox/style-tools/ellipsis' },
            { text: '滚动条', link: '/toolbox/style-tools/scrollbar' },
            { text: '环形进度条', link: '/toolbox/style-tools/progress-ring' }
          ]
        }
      ],
      '/toolbox/utilities/': [
        {
          text: '实用小工具',
          items: [{ text: 'ASCII 编码', link: '/toolbox/utilities/ascii' }]
        }
      ],
      '/snippets/general/': [
        {
          text: '通用片段',
          items: [
            { text: '数据类型判断', link: '/snippets/general/type-check' },
            { text: '对象去重', link: '/snippets/general/object-deduplication' },
            { text: '扁平结构与树结构转换', link: '/snippets/general/tree-transform' },
            { text: 'Generator 生成器', link: '/snippets/general/generator' }
          ]
        }
      ],
      '/snippets/network/': [
        {
          text: '网络通信',
          items: [
            { text: '封装 WebSocket', link: '/snippets/network/websocket' },
            { text: 'WebSocket 消息通知', link: '/snippets/network/websocket-notification' }
          ]
        }
      ],
      '/snippets/dom/': [
        {
          text: 'DOM 交互',
          items: [
            { text: '锚点跳转', link: '/snippets/dom/anchor' },
            { text: '点击复制链接', link: '/snippets/dom/copy-link' },
            { text: '滚动追踪动画', link: '/snippets/dom/scroll-animation' },
            { text: '全局弹窗', link: '/snippets/dom/global-modal' },
            { text: '瀑布流布局', link: '/snippets/dom/masonry-layout' }
          ]
        }
      ],
      '/snippets/auth/': [
        {
          text: '登录鉴权',
          items: [{ text: '登录与注册', link: '/snippets/auth/login' }]
        }
      ],
      '/question/': [
        {
          text: '面试笔记',
          items: [
            { text: '简历要点', link: '/question/resume' },
            { text: 'HTML 面试题', link: '/question/html' },
            { text: 'CSS 面试题', link: '/question/css' },
            { text: 'JavaScript 面试题', link: '/question/js' },
            { text: 'Vue 面试题', link: '/question/vue' }
          ]
        },
        {
          text: '原理实现',
          items: [
            { text: '常见算法练习题', link: '/question/code/algorithm-exercises' },
            { text: '图片懒加载', link: '/question/code/imgLoad' },
            { text: 'Promise 原理', link: '/question/code/promise' },
            { text: 'Vue 响应式原理', link: '/question/code/vue' }
          ]
        }
      ],
      '/collect/': [
        {
          text: '资料摘录',
          items: [
            { text: '闭包', link: '/collect/closure' },
            { text: '事件循环', link: '/collect/eventLoop' },
            { text: 'Cookie / LocalStorage / SessionStorage', link: '/frontend-basic/javascript/storage' }
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
          text: '项目实践',
          items: [
            { text: '项目经历', link: '/project/experience' },
            { text: '图片放大镜', link: '/project/picscope' }
          ]
        }
      ]
    },
    footer: {
      message: '前端基础、工程化与实践记录',
      copyright: 'Copyright © 2022-present Closerdoor'
    },
    outline: { level: [2, 3], label: '本文导航' },
    docFooter: { prev: '上一页', next: '下一页' },
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '侧边栏',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '切换语言'
  }
}
