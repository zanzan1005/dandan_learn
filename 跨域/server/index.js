const Koa = require('koa');
const app = new Koa()
const koaStatic = require('koa-static');
const path = require('path');
const router = require('koa-router')();

app.use(koaStatic(
  path.join(__dirname,'./static/')
))
app.use(async (ctx,next) =>{
  // 允许哪个域名访问资源
  ctx.set('Access-Control-Allow-Origin','http://127.0.0.1:8080');
  ctx.set('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
  ctx.set('Access-Control-Allow-Headers','X-custom');
  //cookie
  ctx.set('Access-Control-Allow-Credentials',true)//允许携带cookie
  //当设为true的时候 Access-Control-Allow-Origin 需要是一个详细的域名，而不能是 *
   await next();
})
router.get('/api/post', async function (ctx) {
  console.log('cookie',ctx.cookies.get('name'));
  ctx.body = [
    { title: 'node.js 入门到精通', createTime: '2018-12-12' },
    { title: 'php 入门到精通', createTime: '2018-11-11' },
  ]
});
router.get('api/jsonp',async (ctx) => {
  const cb = ctx.request.query.callback;
  const person = {
    name: 'name1',age: 18
  }
  ctx.body = `${cb}(${JSON.stringify(person)})`;
})
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(9999, () => {
  console.log('success!!!!!!');
});