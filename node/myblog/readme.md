- req.query queryString ?a=1
- req.params /:name
- req.body body-parser 中间件

- 路由的提升
  express.Router
  app.use('/users',router);

- render 传值
  使用一个模板 ejs

- views 
  app.set 路径 模板引擎设置
  <% code %> 运行javascript
  <%= code %> 输出转义后的html
  <&- code %> 输出html

- models 存放操作数据库的文件
- public 存放静态服务器
- routes 存放路由文件
- 存放模板文件 
- index.js 入口文件
- controllers 控制器

- 开发业务中间件
  1. express Web框架
  2. express-session session 中间件
  3. connect-mongo 将session存于mongodb
  4. connect-flash 页面通知中间件
  5. ejs 模板
  6. express-formidable 接收表单及文件
  7. config-lite 读取配置文件
  8. marked markdown 解析
  9. moment 时间格式化
  10. mongolass mongodb 驱动
  11. 
