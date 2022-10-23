const featuredBlogSidebar = [
  {
    text: "精妙文章",
    link: "/pages/featured-blogs/blogs/",
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
    link: "/pages/featured-blogs/extraordinary-people",
    collapsible: true
  },
]

const toolsSidebar = [
  {
    text: "前端素材相关",
    link: "/pages/tool/素材/",
    collapsible: true,
  },
  {
    text: "HTML相关",
    link: "/pages/tool/HTML/",
    collapsible: true,
  },
  {
    text: "CSS相关",
    link: "/pages/tool/CSS/",
    collapsible: true,
  },
  {
    text: "JS相关",
    link: "/pages/tool/JS/",
    collapsible: true,
  },
  {
    text: "Vue相关",
    link: "/pages/tool/VUE/",
    collapsible: true,
    // items:[{
    //   text: "VueRouter",
    //   link: "/pages/tool/vue2/vue-router"
    // }]
  },
  {
    text: "NodeJS相关",
    link: "/pages/tool/NODEJS",
    collapsible: true,
  }, {
    text: "其他相关",
    link: "/pages/tool/OTHERS",
    collapsible: true,
  }
]

export const sidebar = {
  "/pages/featured-blogs/": featuredBlogSidebar,
  "/pages/tools/": toolsSidebar,
}
