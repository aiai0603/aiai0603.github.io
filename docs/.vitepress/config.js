import autoGetSidebarOptionBySrcDir from "./sidebar";
const path = require("path");

module.exports = {
  title: "摸鱼老萌新",
  description: "Front end project and tips sharing",
  lang: "cn-ZH",
  base: "/",
  themeConfig: {
    siteTitle: "摸鱼老萌新",
    logo: "/logo.jpg",
    //顶部
    nav: [
      {
        text: "前端",
        items: [
          { text: "基础", link: "/articles/basic/index" },
          { text: "Vue", link: "/articles/vue/index" },
          { text: "React", link: "/articles/react/index" },
          { text: "小程序", link: "/articles/mini/index" },
          { text: "Electron", link: "/articles/electron/index" },
          { text: "Web3D", link: "/articles/web3d/index" },
          { text: "其他", link: "/articles/other/vitepress/01.vitepress的搭建" },
        ],
      },
      { text: "算法", link: "/leetcode/LEET_CODE题解/47. 全排列 II" },
      { text: "项目", link: "/intent/" },
    ],

    //侧边栏
    sidebar: {
      "/articles/basic": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/basic"),
        "基础课"
      ),
      "/articles/vue": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/vue"),
        "VUE"
      ),
      "/articles/react": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/react"),
        "React"
      ),
      "/articles/mini": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/mini"),
        "小程序"
      ),
      "/articles/electron": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/electron"),
        "electron"
      ),
      "/articles/web3d": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/web3d"),
        "3D"
      ),
      "/articles/other": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../articles/other/vitepress")
      ),
      "/leetcode": autoGetSidebarOptionBySrcDir(
        path.resolve(__dirname, "../leetcode")
      ),
    },

    //社交
    socialLinks: [{ icon: "github", link: "https://github.com/aiai0603" }],
  },
};
