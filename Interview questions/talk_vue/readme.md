基于 Vue2.0 + Vuex + VueRouter 全家桶实现方案来模仿网易云音乐webApp项目
CSS预编译工具Sass，音乐上下滚动加载使用betterScroll，全面采用ES6风格代码

 解决了哪些问题
- 图片懒加载 vue-lazyload
- 前后端分离
    使用node.js NeteaseCloudMusicAPI proxy
    8080  + 3000
- fastClick 
- 设计了store
    songs index song singer mode favorateList
    searchHistory playHistory
- iconfont
- eslint

- 上班，vue项目，分析清除目录结构
    1. components/ 跟路由挂钩
        工作的入口
    2. store/ 全局共享 分模块 了解关键状态
    3. common/ 公共组件不用写
    4. api/ 前后端的协作方式
    5. 
