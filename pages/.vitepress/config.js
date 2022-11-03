module.exports = {
  title: "Hello VitePress",
  description: "Just playing around.",
  themeConfig: {
    siteTitle: "前端经验",
    logo: "/logo.jpg",

    //顶部
    nav: [
      { text: "面经", link: "/articles/index" },
      { text: "算法", link: "/guide/test" },
      { text: "项目", link: "https://gitee.com/geeksdidi" },
      {
        text: "分类",
        items: [
          { text: "前端", link: "/item-1" },
          { text: "移动端", link: "/item-2" },
          { text: "客户端", link: "/item-3" },
        ],
      },
    ],

    //侧边栏
    sidebar: {
      "/articles/": [
        {
          text: "测试标签",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "测试",
              link: "/articles/index",
            },
          ],
        },
      ],
    },
  },

  //社交
  socialLinks: [{ icon: "github", link: "https://gitee.com/aiai0603" }],
};
