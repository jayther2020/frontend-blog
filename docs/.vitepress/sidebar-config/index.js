const basicSidebar = [
  {
    text: "前端基础",
    collapsible: true,
    items: [
      {
        text: "HTML",
        link: "/pages/front-end-stack1/basic/html/"
      },
      {
        text: "CSS知识",
        link: "/pages/front-end-stack1/basic/css1/"
      },
      {
        text: "CSS高级",
        link: "/pages/front-end-stack1/basic/css2/"
      },
      {
        text: "CSS杂糅知识",
        link: "/pages/front-end-stack1/basic/css3/"
      },
      {
        text: "JavaScript",
        link: "/pages/front-end-stack1/basic/js1/"
      },
      {
        text: "JavaScript进阶",
        link: "/pages/front-end-stack1/basic/js2/"
      },
      {
        text: "ES2015+索引",
        link: "/pages/front-end-stack1/basic/es6-onwards-dex/"
      },
      {
        text: "异步JavaScript",
        link: "/pages/front-end-stack1/basic/js3/"
      },
      {
        text: "网络请求",
        link: "/pages/front-end-stack1/basic/js4/"
      },
      {
        text: "文件处理",
        link: "/pages/front-end-stack1/basic/js5/"
      },
    ]
  },
  {
    text: "基础工具",
    collapsible: true,
    items: [
      {
        text: "Emmet",
        link: "/pages/front-end-stack1/tools/emmet/",
      },
      {
        text: "jQuery",
        link: "/pages/front-end-stack1/tools/jquery/",
      },
      // {
      //   text: "Bootstrap",
      //   link: "/pages/front-end-stack1/tools/bootstrap/",
      // },
      // {
      //   text: "其他前端工具索引",
      //   link: "/pages/front-end-stack1/tools/frontend-tooldex/",
      // },
    ]
  }
]

const frameworkSidebar = [
  {
    text: "前端框架",
    collapsible: true,
    items: [
      {
        text: "Vue2",
        link: "/pages/front-end-stack2/framework/vue1/",
      },
      {
        text: "Vue3",
        link: "/pages/front-end-stack2/framework/vue2/",
      },
      {
        text: "React",
        link: "/pages/front-end-stack2/framework/react/",
      },
      {
        text: "Nodejs",
        link: "/pages/front-end-stack2/framework/nodejs/",
      },
      {
        text: "Typescript",
        link: "/pages/front-end-stack2/framework/typescript/",
      },
    ]
  },
  {
    text: "前端可视化",
    collapsible: true,
    items: [
      {
        text: "echarts",
        link: "/pages/front-end-stack2/vis/echarts/",
      },
      {
        text: "d3js",
        link: "/pages/front-end-stack2/vis/d3/",
      },
      {
        text: "SVG",
        link: "/pages/front-end-stack2/vis/svg/",
      },
      {
        text: "HTML5Canvas",
        link: "/pages/front-end-stack2/vis/canvas/",
      },
    ]
  },
]

const cksSidebar = [
  {
    text: "计算机基础笔记",
    collapsible: true,
    items: [
      {
        text: "SQL",
        link: "/pages/computer-knowledge-stack/sql/"
      },
      {
        text: "数据库原理",
        link: "/pages/computer-knowledge-stack/db-theorm/"
      },
      {
        text: "操作系统",
        link: "/pages/computer-knowledge-stack/os/"
      },
      {
        text: "数据结构",
        link: "/pages/computer-knowledge-stack/ds/"
      },
      {
        text: "算法",
        link: "/pages/computer-knowledge-stack/algorithm/"
      }
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
  "/pages/front-end-stack1/": basicSidebar,
  "/pages/front-end-stack2/": frameworkSidebar,
  "/pages/computer-knowledge-stack/": cksSidebar,
  "/pages/useful/": usefulToolsSidebar,
}
