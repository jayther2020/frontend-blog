const featuredBlogSidebar = [
  {
    text: "精妙文章",
    collapsible: true,
    items: [
      {
        text: "HTML",
        link: "/pages/featured-blogs/blogs/html"
      },
      {
        text: "CSS",
        link: "/pages/featured-blogs/blogs/css"
      },
      {
        text: "JavaScript",
        link: "/pages/featured-blogs/blogs/js"
      },
      {
        text: "Vue",
        link: "/pages/featured-blogs/blogs/vue"
      },
      {
        text: "Nodejs",
        link: "/pages/featured-blogs/blogs/nodejs"
      },
      {
        text: "前沿科技",
        link: "/pages/featured-blogs/blogs/state-of-the-art"
      }
    ]
  },
  {
    text: "大牛博客",
    collapsible: true,
    items: [
      {
        text: "大牛列表",
        link: "/pages/featured-blogs/extraordinary-people",
      }
    ]
  }
]

const toolsSidebar = [
  {
    text: "三件套相关",
    collapsible: true,
    items: [
      {
        text: "前端素材相关",
        link: "/pages/tool/素材/",
      },
      {
        text: "HTML相关",
        link: "/pages/tool/HTML/",
      },
      {
        text: "CSS相关",
        link: "/pages/tool/CSS/",
      },
      {
        text: "JS相关",
        link: "/pages/tool/JS/",
      },
    ]
  },
  {
    text: "组件化和框架",
    collapsible: true,
    items: [
      {
        text: "Vue相关",
        link: "/pages/tool/VUE/",
        // items:[{
        //   text: "VueRouter",
        //   link: "/pages/tool/vue2/vue-router"
        // }]
      },
      {
        text: "NodeJS相关",
        link: "/pages/tool/NODEJS",
      }
    ]
  },
  {
    text: "其他工具",
    collapsible: true,
    items: [
      {
        text: "其他工具列表",
        link: "/pages/tool/OTHERS",
      }
    ]
  }
]

const solutionSidebar = [
  {
    text: "已解决问题",
    collapsible: true,
    items: [
      {
        text: "VUE2",
        link: "/pages/solution/vue2"
      },
      {
        text: "VUE3",
        link: "/pages/solution/vue3"
      },
      {
        text: "NodeJS",
        link: "/pages/solution/nodejs"
      },
      {
        text: "Webpack",
        link: "/pages/solution/webpack"
      }
    ]
  },
  {
    text: "待解决问题",
    collapsible: true,
    items: [{
      text: "未解决问题列表",
      link: "/pages/solution/unsolved-problems"
    }]
  },
]

export const sidebar = {
  "/pages/featured-blogs/": featuredBlogSidebar,
  "/pages/tools/": toolsSidebar,
  "/pages/solutions/": solutionSidebar,
}
