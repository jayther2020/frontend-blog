const basicSidebar = [
  {
    text: "HTML部分",
    collapsible: true,
    items: [
      {
        text: "HTML",
        link: "/pages/front-end-stack/html-common/"
      },
      {
        text: "HTML语义化",
        link: "/pages/front-end-stack/html-semantics/"
      },
      {
        text: "Emmet",
        link: "/pages/front-end-stack/emmet/",
      },
      {
        text: "HTMLCanvas",
        link: "/pages/front-end-stack/html-canvas/",
      },
      {
        text: "SVG",
        link: "/pages/front-end-stack/svg/",
      },
    ]
  },
  {
    text: "CSS部分",
    collapsible: true,
    items: [
      {
        text: "CSS基础知识",
        link: "/pages/front-end-stack/css-basic/"
      },
      {
        text: "CSS高级知识",
        link: "/pages/front-end-stack/css-advanced/"
      },
      {
        text: "CSS杂糅知识",
        link: "/pages/front-end-stack/css-miscellaneous/"
      },
      {
        text: "Bootstrap",
        link: "/pages/front-end-stack/css-bootstrap/",
      },
      // {
      //   text: "CSS预处理器",
      //   link: "/pages/front-end-stack/less-sass/",
      // },
    ]
  },
  {
    text: "JS部分",
    collapsible: true,
    items: [
      {
        text: "JavaScript",
        link: "/pages/front-end-stack/js-basic/"
      },
      {
        text: "JavaScript进阶",
        link: "/pages/front-end-stack/js-advanced/"
      },
      {
        text: "jQuery",
        link: "/pages/front-end-stack/jquery/",
      },
      {
        text: "ES2015+索引",
        link: "/pages/front-end-stack/es6-onwards-dex/"
      },
      {
        text: "异步JavaScript",
        link: "/pages/front-end-stack/async-js/"
      },
      {
        text: "网络请求",
        link: "/pages/front-end-stack/js-request/"
      },
      {
        text: "文件处理",
        link: "/pages/front-end-stack/js-files/"
      },
    ]
  }
]

const frameworkSidebar = [
  {
    text: "Vue相关",
    collapsible: true,
    items: [
      // {
      //   text: "Vue生命周期",
      //   link: "/pages/front-end-application/framework/vue1/",
      // },
      {
        text: "Vue2",
        link: "/pages/front-end-application/vue/v2-features/",
      },
      {
        text: "Vue3",
        link: "/pages/front-end-application/vue/v3-features/",
      },
      {
        text: "Vue项目",
        link: "/pages/front-end-application/vue/vue-projects/",
      },
      {
        text: "Vue-Router",
        link: "/pages/front-end-application/vue/vue-router/",
      },
      {
        text: "Vuex",
        link: "/pages/front-end-application/vue/vuex/",
      },
      {
        text: "Pinia",
        link: "/pages/front-end-application/vue/pinia/",
      },
      {
        text: "Vue原理",
        link: "/pages/front-end-application/vue/how-it-works/",
      },
    ]
  },
  {
    text: "React相关",
    collapsible: true,
    items: [
      {
        text: "React",
        link: "/pages/front-end-application/react/basic/",
      },
      {
        text: "JSX",
        link: "/pages/front-end-application/react/jsx/",
      },
    ]
  },
  {
    text: "Nodejs相关",
    collapsible: true,
    items: [
      {
        text: "Nodejs",
        link: "/pages/front-end-application/nodejs/basic/",
      },
      {
        text: "Express/Koa",
        link: "/pages/front-end-application/nodejs/frameworks/",
      },
    ]
  },
  {
    text: "TS部分",
    collapsible: true,
    items: [
      {
        text: "Typescript",
        link: "/pages/front-end-application/typescript/basic/"
      },
    ]
  },
  // {
  //   text: "小程序部分",
  //   collapsible: true,
  //   items: [
  //     {
  //       text: "微信小程序",
  //       link: "/pages/front-end-application/mini-program/wx/"
  //     },
  //   ]
  // },
  {
    text: "前端可视化",
    collapsible: true,
    items: [
      // {
      //   text: "echarts",
      //   link: "/pages/front-end-application/visual/echarts/",
      // },
      {
        text: "d3js",
        link: "/pages/front-end-application/visual/d3/",
      }
    ]
  },
]

const cksSidebar = [
  {
    text: "算法和数据结构",
    collapsible: true,
    items: [
      {
        text: "算法理论",
        link: "/pages/computer-knowledge-stack/algorithm/complexity/"
      },
      {
        text: "主要算法",
        link: "/pages/computer-knowledge-stack/algorithm/main/"
      },
      // {
      //   text: "排序算法",
      //   link: "/pages/computer-knowledge-stack/algorithm/sorting/"
      // },
      // {
      //   text: "数据结构",
      //   link: "/pages/computer-knowledge-stack/algorithm/ds/"
      // },
      {
        text: "其他算法",
        link: "/pages/computer-knowledge-stack/algorithm/others/"
      },
    ]
  },
  {
    text: "数据库相关",
    collapsible: true,
    items: [
      // {
      //   text: "数据库原理",
      //   link: "/pages/computer-knowledge-stack/db-theorm/"
      // },
      {
        text: "SQL",
        link: "/pages/computer-knowledge-stack/sql/basic/"
      },
      // {
      //   text: "SQL高级知识",
      //   link: "/pages/computer-knowledge-stack/sql/advanced"
      // },
    ]
  },
  // {
  //   text: "操作系统",
  //   collapsible: true,
  //   items: [
  //     // {
  //     //   text: "操作系统",
  //     //   link: "/pages/computer-knowledge-stack/os/"
  //     // },
  //   ]
  // },
  {
    text: "计算机网络",
    collapsible: true,
    items: [
      {
        text: "浏览器相关",
        link: "/pages/computer-knowledge-stack/browser/"
      },
    ]
  },
]

const usefulToolsSidebar = [
  {
    text: "自用工具",
    collapsible: true,
    items: [
      {
        text: "代码片段",
        link: "/pages/useful/snippets/"
      },
      {
        text: "批处理脚本",
        link: "/pages/useful/batch/"
      },
      // {
      //   text: "Swiss工具库",
      //   link: "/pages/useful/swiss/"
      // },
    ]
  },

  // {
  //   text: "前端学习",
  //   collapsible: true,
  //   items: [
  //     {
  //       text: "官方文档",
  //       link: "/pages/useful/docs/"
  //     },
  //     {
  //       text: "演练操场",
  //       link: "/pages/useful/playground/"
  //     },
  //   ]
  // },

  // {
  //   text: "其他前端工具索引",
  //   collapsible: true,
  //   items: [
  //     {
  //       text: "颜色获取",
  //       link: "/pages/useful/colors"
  //     },
  //     {
  //       text: "颜色获取",
  //       link: "/pages/useful/colors"
  //     },
  //   ]
  // }
]

export const sidebar = {
  "/pages/front-end-stack/": basicSidebar,
  "/pages/front-end-application/": frameworkSidebar,
  "/pages/computer-knowledge-stack/": cksSidebar,
  "/pages/useful/": usefulToolsSidebar,
}
