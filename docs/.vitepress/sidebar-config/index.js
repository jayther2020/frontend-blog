const featuredBlogSidebar = [
  {
    text: "前端基础",
    collapsible: true,
    items: [
      {
        text: "HTML",
        link: "/pages/front-end-stack1/basic/html/"
      },
      {
        text: "CSS",
        link: "/pages/front-end-stack1/basic/css1/"
      },
      {
        text: "CSS高级",
        link: "/pages/front-end-stack1/basic/css2/"
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
        text: "异步JavaScript",
        link: "/pages/front-end-stack1/basic/js3/"
      },
      {
        text: "网络请求",
        link: "/pages/front-end-stack1/basic/js4/"
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
      }
      // {
      //   text: "Bootstrap",
      //   link: "/pages/front-end-stack1/tools/bootstrap/",
      // }
    ]
  }
]

const toolsSidebar = [
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

const pitfallSidebar = [
  {
    text: "踩坑详情",
    collapsible: true,
    items: [
      {
        text: "CSS相关",
        link: "/pages/pitfalls/css/index"
      },
      {
        text: "CSS预处理器相关",
        link: "/pages/pitfalls/css+/index"
      },
      {
        text: "JS相关",
        link: "/pages/pitfalls/js/index"
      },
      {
        text: "NodeJS相关",
        link: "/pages/pitfalls/nodejs/index"
      },
      {
        text: "NPM相关",
        link: "/pages/pitfalls/npm/index"
      },
      {
        text: "Vue相关",
        link: "/pages/pitfalls/vue/index"
      },
      {
        text: "其他相关",
        link: "/pages/pitfalls/others/index"
      },
    ]
  }
]

export const sidebar = {
  "/pages/front-end-stack1/": featuredBlogSidebar,
  "/pages/front-end-stack2/": toolsSidebar,
  "/pages/computer-knowledge-stack/": cksSidebar,
  // "/pages/thoughts/": cksSidebar,
}
