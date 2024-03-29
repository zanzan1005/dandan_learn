// 一次页面从输入URL 到页面加载显示完成，这个过程发生了什么
// 1、浏览器的地址栏输入URL并按下回车。
// 2、浏览器查找当前URL是否存在缓存，并比较缓存是否过期。
// 3、DNS解析URL对应的IP。
// 4、根据IP建立TCP连接（三次握手）。
// 5、HTTP发起请求。
// 6、服务器处理请求，浏览器接收HTTP响应。
// 7、渲染页面，构建DOM树。
// 8、关闭TCP连接（四次挥手）。

const a = {
  b: 1
}
function b() {
  console.log('a的值发生改变',a.b)
}

function bindData() {
  Object.keys(a).map(key => {
    let v = a[key]
    
    Object.defineProperty(a,key,{
      get() {
        //读取属性时调用的方法
        console.log('正在读取a里面的值')
        return v
      },
      set(newA) {//写入属性时调用的方法
        v = newA
        b()
      }
    })
  })
  //会返回一个给定对象的自身可枚举属性的数组
}

bindData()
b.a = 3