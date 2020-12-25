const path = require("path")
const head = require("./config/head")
const themeConfig = require("./config/themeConfig")

module.exports = {
    base: "/", // 部署站点的基础路径
    title: "Vue文档学习笔记", // 网站的标题
    description: "用vuepress搭建的一个用于学习vue的文档", // 网站的描述
    head, // 需要额外注入页面head标签上
    themeConfig, // 默认主题的配置
    configureWebpack: {
        resolve: {
            alias: {
                "@alias": path.resolve(__dirname, "./")
            }
        }
    }
}