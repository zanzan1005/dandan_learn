## 跨域
浏览器的安全策略
同源策略
同协议 域名 端口  === 同源


## CORS 
  规定了一组HTTP 的头部字段
  允许哪些网站通过浏览器有访问的权限
  1. access-X
  2. cookie
  3. 浏览器会先 以 OPTIONS 请求方法发起一个预检（preflight)请求，获取一下允不允许当前的域请求，服务器允许之后才会发起正式的请求

## 代理
1. nginx

反向代理
http://localhost:9999/api
http://localhost:8888/api
不知道请求的是哪一个服务器

正向代理
google
A => proxy => google.com
B => proxy => google.com

## iframe + window.name
  iframe 共享 window.name

## jsonp
1. 定义一个回调
2. 将回调函数的名字告诉后端，后端会返回
```js
回调(res)
```

3. script 标签 加载过后 执行返回的内容 
写一个jsonp 的函数 ，以 promise 的方法调用
json(url)
.then(res => {
  
})
