跨域 
前后端分离 不同端口
- 前端解决方案 
  proxy 代理
  原来的请求被与后端同源的代替了，拿到数据后再交给原来的请求
- 后端解决方案
  让后端同意所有的/部分 可以跨域访问资源
  用中间件来处理 cors 放在路由之前
//启用一个中间件 app.use 加载用于处理http请求的middleware（中间件），当一个请求来的时候，会依次被这些 middlewares处理。
// 执行的顺序是你定义的顺序，
//链接数据库 next
//验证一下身份信息 session=>cookie next
//表单处理 parseBody next
//跨域  一件事 cors
