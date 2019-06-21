//启用一个中间件 app.use 加载用于处理http请求的middleware（中间件），当一个请求来的时候，会依次被这些 middlewares处理。
// 执行的顺序是你定义的顺序，
//链接数据库 next
//验证一下身份信息 session=>cookie next
//表单处理 parseBody next
//跨域  一件事 cors
var express = require('express')
var app = express();
var cors = require('cors');

app.use(cors());
app.get('/products/:id', function(req, res, next) {
  res.json({
    msg: 'This is cross-enabled for all original'
  })
});
app.listen(80, function() {
  console.log('web server listening on port 80');
})
