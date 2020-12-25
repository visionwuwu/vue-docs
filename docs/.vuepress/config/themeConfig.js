const nav = require("./navbar")
const sidebar = require("./sidebar")

module.exports = {
    logo: "/vue.png", // 导航栏logo
    nav, // 导航栏
    sidebar, // 侧边栏
    searchMaxSuggestions: 10, // 搜索框显示的搜索数量
    lastUpdated: "上次更新时间", // 每个文件上次git commit时的UNIX时间戳
    nextLinks: true, // 下一篇 链接
    prevLinks: true, // 上一篇 链接
    repo: "https://github.com/vuejs/docs-next-zh-cn", // github仓库地址
    smoothScroll: true, // 启用页面滚动效果
}