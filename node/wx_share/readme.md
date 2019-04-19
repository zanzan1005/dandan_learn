传统的MVC的后端开发

MVVM 
Model Page({  data:{}})
View Template wxml
VM {{}} wx:for

MVC  是经典的web开发 模式 （Model）数据库
V View 静态页面
C Controller 

Web HTTP 服务器
端口是什么 3000
Mysql 3306
 WebServer 80

 用户 Request 通过IP＋端口 
 Web Server 提供的是Response

 http
    .createServer(function(request,response){
        request 用户 N
        response
        
    })  创建服务器
    .listen(8080)

