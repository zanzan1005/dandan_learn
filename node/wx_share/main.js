// live-server
{/* <script src="./fs.js"></script> */}
// require 进来 COMMONJS　模块化方案
const http = require('http');
const https = require('https');//访问更加健全的网站

http
    .createServer(function(request,response){
        i++;
    response.end(`Hello World!${i}`);
})
    .listen(3000);


// Web 服务在软件上理解就是一个HTTP访问的服务
