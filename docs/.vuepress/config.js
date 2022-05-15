const { defaultTheme } = require("vuepress");

module.exports = {
  title: "Monster知识体系",
  description: "包括但不限于前端知识",
  head: [["link", { rel: "icon", href: "/assets/favicon.ico" }]],
  base: '/monster-note/',
  theme: defaultTheme({
    // 侧边栏深度2=>h3
    sidebarDepth: 3,
    // 是否展开所有标题
    displayAllHeaders: false,
    collapsable: false,
    // 页面滚动效果
    smoothScroll: true,
  }),
}