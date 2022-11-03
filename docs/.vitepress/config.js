module.exports = {
  title: "blog",
  description: "Front end project and tips sharing",
  themeConfig: {
    siteTitle: "摸鱼老萌新",
    logo: "/logo.jpg",

    //顶部
    nav: [
      {
        text: "前端",
        items: [
          { text: "基础", link: "/articles/index" },
          { text: "Vue", link: "/item-2" },
          { text: "React", link: "/item-3" },
          { text: "小程序", link: "/item-3" },
          { text: "Electron", link: "/item-3" },
          { text: "Web3D", link: "/item-3" },
          { text: "其他", link: "/item-3" },
        ],
      },
      { text: "算法", link: "/leetcode/index" },
      { text: "项目", link: "/intent/index" },
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
