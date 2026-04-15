module.exports = {
  base: '/blog-vitepress/',
  title: 'Javascript 基础补完计划',
  description: 'Javascript基础知识',
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.png'
    }]
  ],
  themeConfig: {
    // search: false,//禁用内置搜索(默认顶部出现搜索框)
    // searchMaxSuggestions: 10,//搜索数量
    logo: "/favicon.png",
    nav: [
      // 导航栏
      {
        text: "主页",
        link: "/",
        icon: "reco-home"
      },
      {
        text: "学习笔记",
        icon: "reco-blog",
        items: [{
            text: "htmlcss",
            link: "/note/htmlcss/htmlcss/meta",
          },
          {
            text: "javascript",
            link: "/note/javascript/javascript/general"
          },
          {
            text: "node",
            link: "/note/node/http/http"
          },
          {
            text: "git",
            link: "/note/git/"
          },
          {
            text: "vue",
            link: "/note/vue/vue3_2"
          },
          {
            text: "react",
            link: "/note/react/createApp"
          },
          {
            text: "typescript",
            link: "/note/typescript/basic"
          },
          {
            text: "移动端开发",
            link: "/note/webapp/page"
          },
          {
            text: "webpack",
            link: "/note/webpack/index"
          },
        ]
      },
      {
        text: "工具箱",
        icon: "reco-tool",
        link: "/tool/Echarts"
      },
      /* {
        text: "项目",
        icon: 'reco-project',
        items: [{
            text: '图片放大镜',
            link: '/project/picscope',
          },
          {
            text: '电商后台管理系统 V：1.3.0',
            link: 'http://120.53.120.229:1921/#/login',
            icon: "iconfont icon-vue"
          },
          {
            text: '电商后台管理系统 V：1.2.0',
            link: 'http://120.53.120.229:1920/#/login',
            icon: "iconfont icon-vue"
          },
          {
            text: "电商平台实时监控系统(Echarts)",
            link: "http://120.53.120.229:9989/#/home",
            icon: "iconfont icon-vue"
          },
          {
            text: "仿微信聊天",
            link: "http://120.53.120.229:8100",
            icon: "reco-wechat"
          },
        ]
      }, */
      {
        text: '代码块',
        link: "/code/Fragment1",
        icon: 'reco-api',
      },
      {
        text: '教程',
        link: "/tutorial/vuepress/",
        icon: 'reco-faq',
      },
      {
        text: '更多',
        icon: 'reco-category',
        items: [{
          text: '面试用',
          link: '/question/resume'
        }, {
          text: '待整理',
          link: '/collect/ajax'
        }, {
          text: 'css样式库',
          link: '/quickCSS/Input'
        }]
      },
      {
        text: 'Closerdoor',
        items: [{
          text: 'Github',
          link: 'https://github.com/Closerdoor'
        }, ]
      }
    ],
    sidebar: 'auto',
    subSidebar: 'auto',
    /* sidebar: [
       {
        title: "移动端开发",
        path: '/webapp/index',
        collapsable: false, // 不折叠
        children: [{
          title: "移动端尺寸",
          path: "/webapp/index"
        }, {
          title: "移动端适配方案",
          path: "/webapp/page"
        }, {
          title: "手指触摸事件",
          path: "/webapp/touchEvent"
        }, {
          title: "rem",
          path: "/webapp/rem"
        }, {
          title: "viewport",
          path: "/webapp/viewport"
        }]
      },
     
      {
        title: "项目案例",
        path: '/project/',
        collapsable: false, // 不折叠
        children: [{
          title: "测试",
          path: "/project/"
        }],
      },
      {
        title: "vue框架常用",
        path: '/vue/vue3_2',
        collapsable: false, // 不折叠
        children: [{
            title: "vue3.2 setup",
            path: "/vue/vue3_2"
          }, {
            title: "vue3",
            path: "/vue/vue3"
          },
          {
            title: "vue2",
            path: "/vue/vue2"
          },
          {
            title: "markdown语法模板",
            path: "/vue/Generics"
          }
        ],
      },
      {
        title: "react",
        path: '/react/createApp',
        collapsable: false, // 不折叠
        children: [{
          title: "react setup",
          path: "/react/createApp"
        }],
      },
      {
        title: "题目收集",
        path: '/question/collect',
        collapsable: false, // 不折叠
        children: [{
          title: "题目收集",
          path: "/question/collect"
        }, ],
      },
      {
        title: "待整理",
        path: '/clear/eventLoop',
        collapsable: false, // 不折叠
        children: [{
            title: "JavaScript Event Loop",
            path: "/clear/eventLoop"
          },
          {
            title: "AJAX",
            path: "/clear/ajax"
          }, {
            title: "闭包",
            path: "/clear/closure"
          },
          {
            title: "Storage",
            path: "/clear/storage"
          }
        ],
      },
      {
        title: "Typescript",
        path: '/typescript/basic',
        collapsable: false, // 不折叠
        children: [{
          title: "基础类型",
          path: "/typescript/basic"
        }, ],
      },
      {
        title: '日常收集',
        path: '/collect/Fragment1',
        collapsable: false, // 不折叠
        children: [{
          title: "数据类型判断",
          path: "/collect/Fragment1"
        }, {
          title: "数组对象去重",
          path: "/collect/Fragment2"
        }, {
          title: "点击复制链接",
          path: "/collect/Fragment3"
        }, {
          title: "websocket实现消息通知",
          path: "/collect/Fragment4"
        }, {
          title: "websocket封装",
          path: "/collect/websocket"
        }, {
          title: "扁平/树形结构转换",
          path: "/collect/Fragment5"
        }, {
          title: "滚动条实现动画",
          path: "/collect/Fragment6"
        }, {
          title: "锚点链接",
          path: "/collect/anchor"
        }, {
          title: "登录/注册",
          path: "/collect/login"
        }]
      }, {
        title: '小插件(工具库)',
        path: '/plugin/Moment',
        collapsable: false, // 不折叠
        children: [{
          title: "moment.js",
          path: "/plugin/Moment"
        }, {
          title: "生成二维码(qrcodejs2)",
          path: "/plugin/Qrcodejs2"
        }, {
          title: "前端显示markdown文件",
          path: "/plugin/marked"
        }, {
          title: "swiper",
          path: "/plugin/swiper"
        }, {
          title: "Echarts",
          path: "/plugin/Echarts"
        }, {
          title: "jquery",
          path: "/plugin/jquery"
        }]
      }, {
        title: 'css样式库',
        path: '/quickCSS/Scrollbar',
        collapsable: false, // 不折叠
        children: [{
          title: "滚动条样式",
          path: "/quickCSS/Scrollbar"
        }, {
          title: "文本超出换行",
          path: "/quickCSS/Ellipsis"
        }, {
          title: "input输入框",
          path: "/quickCSS/Input"
        }]
      }
    ] */
    sidebar: {
      '/note/htmlcss/': [{
          title: "htmlcss",
          path: '/note/htmlcss/htmlcss/meta',
          collapsable: false, // 不折叠
          children: [{
            title: "meta",
            path: "htmlcss/meta"
          }, {
            title: "html",
            path: "htmlcss/html"
          }, {
            title: "img",
            path: "htmlcss/img"
          }, {
            title: "table表格",
            path: "htmlcss/table"
          }, {
            title: "form表单",
            path: "htmlcss/form"
          }, {
            title: "css基础",
            path: "htmlcss/css2"
          }, {
            title: "常用css",
            path: "htmlcss/css1"
          }, {
            title: "css3",
            path: "htmlcss/css3"
          }, {
            title: "浮动和定位",
            path: "htmlcss/float"
          }, {
            title: "css书写规范",
            path: "htmlcss/stand"
          }, {
            title: "seo",
            path: "htmlcss/seo"
          }]
        },
        {
          title: "html5",
          path: '/note/htmlcss/html5/newFeature',
          collapsable: false, // 不折叠
          children: [{
            title: "新特性",
            path: "html5/newFeature"
          }, {
            title: "drag",
            path: "html5/h5drag"
          }, {
            title: "video",
            path: "html5/video"
          }, {
            title: "audio",
            path: "html5/audio"
          }, {
            title: "页面生命周期",
            path: "html5/pageCycle"
          }, {
            title: "canvas",
            path: "html5/canvas"
          }, {
            title: "多线程与通知",
            path: "html5/worker"
          }]
        },
      ],
      '/note/javascript/': [{
          title: "javascript",
          path: '/note/javascript/javascript/general',
          collapsable: false, // 不折叠
          children: [{
            title: "数据类型基础",
            path: "javascript/general"
          }, {
            title: "Array数组方法",
            path: "javascript/array"
          }, {
            title: "String字符串方法",
            path: "javascript/string"
          }, {
            title: "Object对象方法",
            path: "javascript/object"
          }, {
            title: "Date和Math对象",
            path: "javascript/date_math"
          }, {
            title: "Math三角函数",
            path: "javascript/math"
          }, {
            title: "DOM",
            path: "javascript/dom"
          }, {
            title: "BOM",
            path: "javascript/bom"
          }, {
            title: "cookie",
            path: "javascript/cookie"
          }, {
            title: "坐标",
            path: "javascript/position"
          }, {
            title: "滚动条相关",
            path: "javascript/scrollbar"
          }, {
            title: "this",
            path: "javascript/this"
          }, {
            title: "正则表达式",
            path: "javascript/RegExp"
          }]
        },
        {
          title: "ES6高阶",
          path: '/note/javascript/es6/this',
          collapsable: false, // 不折叠
          children: [{
            title: "call、apply、bind",
            path: "es6/this"
          }, {
            title: "闭包",
            path: "es6/closure"
          }, {
            title: "柯里化函数",
            path: "es6/currying"
          }, {
            title: "解构赋值",
            path: "es6/rest"
          }, {
            title: "prototype",
            path: "es6/prototype"
          }, {
            title: "function",
            path: "es6/function"
          }, {
            title: "对象高级",
            path: "es6/object"
          }, {
            title: "symbol",
            path: "es6/symbol"
          }, {
            title: "promise",
            path: "es6/promise"
          }, {
            title: "对象拦截",
            path: "es6/setget"
          }],
        }
      ],
      '/note/node/': [{
          title: "http协议",
          path: '/note/node/http/http',
          collapsable: false, // 不折叠
          children: [{
            title: "http",
            path: "http/http"
          }, {
            title: "状态码",
            path: "http/StatusCode"
          }, ],
        },
        {
          title: "ajax",
          path: '/note/node/ajax/blob',
          collapsable: false, // 不折叠
          children: [{
            title: "blob二进制数据流",
            path: "ajax/blob"
          }, {
            title: "fileReader",
            path: "ajax/fileReader"
          }],
        }, 'module', 'EventLoop'
      ],
      '/note/git/': [],
      '/note/vue/': [
        'vue3_2',
        'vue3',
        'vue2',
        'Generics'
      ],
      '/note/react/': [
        'createApp'
      ],
      '/note/typescript/': [
        'basic'
      ],
      '/note/webapp/': [
        'page',
        'size',
        'touchEvent',
        'rem',
      ],
      //工具箱
      '/tool/': ['Echarts', 'Qrcodejs2', 'Moment', 'marked', 'swiper', 'jquery'],
      //项目-目前为链接
      '/project/': ['picscope'],
      //代码块
      '/code/': [
        "Fragment1",
        "Fragment2",
        "Fragment3",
        'Fragment4',
        'websocket',
        'Fragment5',
        'Fragment6',
        'anchor',
        'login',
        'Generator',
      ],
      //教程
      '/tutorial/': [{
        title: 'vuepress搭建博客',
        path: '/tutorial/vuepress/',
        collapsable: false, // 不折叠
        children: [{
          title: "启动",
          path: "vuepress/"
        }, {
          title: "vuepress插件",
          path: "vuepress/plugin"
        }]
      }],
      //更多-面试题用
      '/question/': ['resume', 'project', {
        title: "手撕代码",
        path: '/question/code/imgLoad',
        collapsable: false, // 不折叠
        children: [{
          title: "图片懒加载",
          path: "code/imgLoad"
        }, {
          title: "vue响应式原理",
          path: "code/vue"
        }, {
          title: "promise原理",
          path: "code/promise"
        }],
      }, 'html', 'css', 'js', 'vue'],
      //更多-待整理文章
      '/collect/': ['ajax', 'closure', 'eventLoop', 'storage'],
      //更多-css样式库
      '/quickCSS/': ['Input', 'Ellipsis', 'Scrollbar'],

    }
  }
}
