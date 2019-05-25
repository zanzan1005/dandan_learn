const http = require('http'); //服务
//监听在 8080 端口的服务
const userLists = [{name:'1'},{name:'2'}];
http.createServer((req,res) =>{
  //2/user/lists
  //1 POST
  //[{name:'1'},{name:'2'}]
  //向我们的浏览器返回内容
  const method = req.method;
  const url = req.url;
  if(method.toLowerCase() === 'post' && url ==='/user/lists'){
    res.end(JSON.stringify(userLists));
  }
}).listen(8080,()=>{
  console.log('server is running 8080');
})