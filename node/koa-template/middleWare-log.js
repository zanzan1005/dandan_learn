const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  const start = Date.now();
  ctx.body = `hello koa`;
  const end = Date.now();
  //writeHead() 设置响应头 content-type.
  ctx.set('X-Response-time',`${end - start}ms`);
  console.log('speed',`${end - start}ms`);
})
app.use(async (ctx) => {
  ctx.body = `hello koa`;
})

app.listen(8080,() => {
  console.log('server is running 8080');
})