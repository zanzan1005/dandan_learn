# Q1: new 的实现原理
    JS全局执行上下文为我们创建了两个东西：全局对象和this关键字
    new 的实现原理
    1. 创建一个空对象，构造函数的this指向这个空对象
    2.这个新对象被执行 [原型] 连接（本来对象是没有原型链的，强制给对象连接一个原型链）
    3.执行构造函数，将属性或者方法添加到this引用的对象上
    4.如果构造函数中没有返回其他对象，那么返回this，即创建的新对象；否则返回构造函数返回的对象

# Q2: call bind apply
1. b.call(a)
    1.b.call(a) 就相当于把b的作用域从全局强行指到a里面去
    2.第一个参数一定是this作用域要渠道的地方；第二三四....个参数是该作用域里面用到的值
2. b.apply(a)
    事实上apply 和 call 的用法几乎相同,
    唯一的差别在于：当函数需要传递多个变量时,
    apply 可以接受一个数组作为参数输入, call 则是接受一系列的单独变量。
3. b.call() || b.apply() 此时this的作用域会指向window
4. c = b.bind(a)
    c()  || b.bind(a)()
    因为bind方法返回的是一个修改过的函数所以该用函数该有的姿态去调用
    bind方法接受的参数是按照形参的顺序来进行的

# Q3: 浅拷贝和深拷贝
1. 数组解构：
    let [x,y] = [1,2]
    //x = 1
    //y = 2
2. 对象解构：
    let { foo , bar } = {foo: "aaa",bar: "bbb"}
    //foo = "aaa"
    //bar = "bbb"
    注意：对象解构允许给赋值的变量重命名
    eg: let {foo : baz } = {foo : "abc"}
        //baz = "abc" foo 被重命名为baz
3. 浅拷贝只是第一层属性进行拷贝，当第一层的属性为基本数据类型时，新对象和原来     的对象互不影响。但是如果第一层的属性值是 # 复杂数据类型 （数组）# ，那么新     对象和原对象的属性值其指向的是同一块内存地址，他们两个会同步更新。
    
    深拷贝是将对象及其值一起复制过来，两个对象修改其中任意一个的值，另一个不会跟着改变。深拷贝解决浅拷贝问题是在拷贝构造或者是赋值运算符重载的时候，也要对指针所指向的空间进行拷贝。

# Q4：闭包
    闭包是指有权限访问另一个函数作用域中的变量的函数 
    1.能够访问函数定义时所在的词法作用域（阻止其作用域被回收）
    2.私有化变量
    3.模拟块级作用域

# Q5：数组去重
    Set indexOf includes map reduce

# Q6 防抖节流函数原理

# Q7 __proto__ 和 prototype 关联
    __proto__是每一个实例都有的属性，可以访问[prototype]属性
    实例的__proto__与其构造函数的prototype指向的是同一个对象

# Q10 get 和 post 请求在缓存方面的区别
    get请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存
    post不同,post一般做的是修改和删除数据的工作，所以必须与数据库交互，所以不能使用缓存
    因此get请求更适合请求缓存

# Q11 url 长度限制
    http协议并没有限制url的长度，是浏览器或者web浏览器做了url长度的限制，并且只针对于get请求做的限制
    IE： 2803
    FireFox： 65536
    Chrome：8182
    Safari： 80000
    Opera： 190000

#Q12 前端事件流
    在DOM标准的事件模型中，事件流包括下面几个阶段：
        1.事件捕获阶段
        2.处于目标阶段
        3.事件冒泡阶段
        addEventListener第三个参数为true时，捕获，false时，冒泡
        默认为false (IE只支持事件冒泡)

#Q13 图片的懒加载和预加载的区别
    预加载： 提前加载图片，当用户需要查看图片时可直接从本地缓存中渲染
    懒加载：最为服务器的前端优化，减少请求或延迟请求
    （懒加载对服务器有一定的缓解压力作用，预加载则会增加服务器的压力）

#Q14 js中的各种位置
    clientHeight: 表示可视区域的高度，不包含border和滚动条
    offsetHeight: 表示可视区域的高度，包含border和滚动条
    scrollHeight: 表示所有区域的高度，包含因为滚动被隐藏的部分
    clientTop: 表示边框border的厚度，在未指定的情况下一般为0
    scrollTop: 滚动后被隐藏的高度

#Q15 JS拖拽功能的实现

#Q16 类的创建和继承

#Q17 click在iOS手机上有300ms的延迟，原因及解决方法
    1.<meta name="viewport" content="width=device-width, initial-scale=1.0"> 禁止缩放
    2.FastClick,其原理是：检测到touchend事件后，立刻发出模拟click事件，并把浏览器300ms之后真实发出的事件阻断

#Q18 Cookie,sessionStorage,loaclStorage
    1.cookie:数据始终在同源的http请求中携带（即使不需要）
    即cookie在浏览器和服务器之间来回传递，
    sessionStorage和localStorage不会自动把数据发给服务器，只会在本地保存
    cookie：单个cookie保存的数据不能超过4kb；session大小没有限制。
    cookie还有路径(path)的概念，可以限制cookie只属于某个路径下，存储大小只有4KB

    2.sessionStorage：仅在当前浏览器窗口关闭之前生效

    3.localStorage：将数据保存在客户端本地的硬件设备(通常指硬盘，也可以是其他硬件设备)中，即使浏览器被关闭了，该数据仍然存在，下次打开浏览器访问网站时仍然可以继续使用。
    
    localStorage除非主动删除数据，否则数据永远不会消失。

    cookie和localStorage在所有的同源窗口都是共享的

    localStorage和sessionStorage的存储数据大小一般都是：5MB

    这两者的区别在于，sessionStorage为临时保存，而localStorage为永久保存。

#Q19 任务列表(event loop)
    marcotask(宏观任务)
    setTimeout
    setInterval
    requestAnimationFrame
    HTML的解析
    js的主线程
    页面加载
    用户交互

    mircotask(微观任务)
    promise
    mutation.oberver
    process.nextTick

    执行顺序：
    script(主程序代码) ---> process.nextTick ----> promise ----> setTimeout ----> setInterval ---->setTmmediate ----> I/O ---->
    UI rendeind

#Q21 浏览器的重绘和回流
    浏览器渲染页面的过程
    1.解析HTML，生成DOM树，解析CSS，生成CSSOM树
    2. 将DOM树和CSSOM树结合生成render树
    3. 回流： 根节点生成的render树，进行回流，得到节点的几何信息
    4. 重绘： 根据render树和回流得到的信息，得到节点的绝对像素
    5. 将像素发给GPU，展示在页面上

    
    





