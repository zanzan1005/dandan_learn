前端路由实现，核心本质是 不刷新页面，但是可以在页面上显示不同的内容 这也是单页应用的本质 就是一种用户体验 （用户感受不到页面加载的过程）
1. hash 实现（锚链接）
 url #hash 部分
 改变，不会刷新页面。在传统的URL里面，/path？queryString 传统的方式都会重刷页面（后果：页面打开慢） 每次刷新页面都是一次新的http请求 
 怎么利用呢？ 动态的加载组件以及发起请求
 js DHTML

- 单页应用避免了传统后端路由每次跳转都刷新页面，给用户带来的慢，白屏（多了HTTP请求，）前端路由却能立即加载。路由对应的组件,其中最简单的方式是hashchange 
http://localhost:8080#a


