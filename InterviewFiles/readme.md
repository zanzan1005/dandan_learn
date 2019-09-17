CSS 
1. 盒模型
  margin 外边距
  border 边框
  padding 内边框
  content 内容
  当你设置一个css元素的高度和宽度时，只是内容区域的高宽
  一个完全大小的盒子还需要添加外边距，边框和内边框

  W3C盒模型  IE盒模型
  box-sizing: content-box W3C
  box-sizing: border-box IE
  box-sizing: inherit 从父元素继承
  
2. 不定宽高的盒子垂直居中
  - flex 
    display:flex;
    align-item: center;
    content: center;

  - CSS transform
    父元素盒子
     display: relative;
    子元素盒子：
     display: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%,-50%);

  - 父元素盒子：
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    子元素盒子： 
    display: inline-block;
    vertical-align: middle;

3. Float 浮动的特点
  - 盖不住的文本，因为浮动的本质就是为了实现文字的环绕
  - 浮动元素后面的块级元素会占据浮动元素的位置，浮动元素会在标准流元素的上面
  - 浮动元素不是块级元素，后面的元素会和它并排 

  为什么要清除浮动？
  一个块级元素（父元素）没有设置高度height，父元素的height将由子元素的内容撑开，如果子元素浮动，则父元素的高度height将会被忽略，会产生父元素文本坍塌，父元素无法自适应
  
  如何清除浮动？(清除浮动也可以理解成打破横向排列)
  - 给父元素添加属性overflow: hidden,也可以是overflow: auto
  - 在父元素前面添加伪元素清除浮动
    .box::after{
      content: '';
      diaplay: block;
      clear: both;
    }
  不会破坏文档流，也没有副作用

4. position 的 4 种定位
  - static 默认定位，没有定位
  - relative 设置相对定位，一般在子元素设置absolute的时候父元素设置relative
  - absolute 绝对定位，相对于上一级不是static的第一个父元素进行定位，如果向上没有找到position,则相对于body进行定位
  - fixed 相对于浏览器窗口进行定位，或者iframe框架

5. css选择器分类
     基本的：
      - 标签选择器
      - ID选择器
      - 类选择器
      - 通用选择器 *

      复杂的：
      - 组合选择器 （.head .head_one)
      - 后代选择器 （#head ul li)
      - 群组选择器 （div span image{color:red} )
      - 继承选择器
      - 伪类选择器 （a::after)
      - 子选择器 （div>p)
      - CSS相邻选择器 

6. 前端像素问题 ————画一条0.5px的线
    目标元素 相对定位 
    .div
      position relative
    设置目标元素伪元素的绝对定位
    .div::after 
      position absolute
      border: 1px solid red
      box-sizing: border-box
      height: 200%
      width: 200%
      transform: scale(0.5)
      transform-origin: 0 0

7. transition and animation 的区别
   - transition 是2帧2帧的，animation 可以1帧1帧的


- display: flex
    align-item: center
    justify-content: center

    fu 
      position relative
    zi
      position absolute
      top 50%
      left 50%
      transform: translate (-50%,-50%)

    fu 
      display: table-cell
      text-align: center
      vertrical-align: middle
    zi 
      display: inline-block
      vertical-align: middle

8. css选择器优先级
    !important > 行内样式 > ID选择器 > 类选择器 > 标签选择器 > 通配符 > 继承 > 浏览器默认样式
    1. 属性后面加!important 会覆盖页面内的任何样式
    2. 通配符选择器 *
    3. 同一级别后写的会覆盖先写的

9. 行内元素和块级元素
    块级元素：div p ul li h1-h6
    行内元素: span img a i

10. 如何用css3画一个三角形
    width: 0
    height: 0
    border: 100px solid transparent
    border-bottom: 100px solid blue;

    如果限制了高度直接改变border-bottom 的值

11. flex 弹性布局
    - 弹性布局默认不改变项目的宽度，但是默认改变项目的高度
    任何一个容器都可以指定为 flex 布局，行内元素也一样
    display: inline-flex
    webkit 内核的浏览器必须加上webkit 前缀
    flex-direction 决定主轴的方向 row/column/row-reverse/column-reverse

12. BFC 块级格式化上下文

    - 特性：1.使BFC内部浮动元素不会乱跑
            2. 和浮动元素产生边界
    (具有BFC特性的元素可以看作是一种独立的容器，容器里面的元素不会影响外面元素的布局)

    形成BFC的条件(脱离文档流)
    1. 根元素，HTML，是最大的BFC
    2. 浮动元素，float: none 之外的所有值
    3. position: fixed /absolute
    4. overflow: visiable 之外的所有值
    5. display: inline-block / table-cell /flex

    BFC 和普通文档流的 区别 
    普通： 
      1. 浮动的元素不会被计入父级高度
      2. 非浮动元素会覆盖浮动元素的位置
      3. margin 会传给父级
      4. 两个相邻元素上下 margin 会重叠

    BFC:
      1. 浮动的元素会被计入父级高度
      2. 非浮动元素不会覆盖浮动元素的位置
      3. margin 不会传给父级
      4. 两个相邻元素上下 margin 不会重叠

    BFC布局特性：
      1. 在BFC布局下，内部的盒子会在垂直方向一个一个放置
      2. 盒子垂直方向的距离由margin决定，属于同一个BFC的盒子margin会重叠
      3. BFC区域的元素不会与浮动的元素重叠
      4. 计算BFC的高度时，浮动元素也参与计算

13. 行内元素水平垂直居中： 
    1. (父元素)text-align: center
    2. display: flex
       align-items: center
       justify-content: center

    块级元素水平垂直居中

14. this指向问题
    函数的不同场合，this有不同的值，this就是函数运行时的环境对象
    1. 普通函数调用，指向全局对象——window(全局作用域下，this和window指向同一个内存堆)
      - 自执行函数的this
      - 回调函数的this
      - 递归函数的this 
    2. 对象方法调用，指向上一级对象
    3. 作为构造函数调用，所谓构造函数 ，就是通过这个函数生成一个新的对象，这时候的this就指向这个新的对象
    4. apply调用，apply是函数的一个方法，作用是改变this的作用域

15. 介绍一下MVVM(数据的双向绑定)
    Model-View-ViewModel (MVVM)  => 模型-视图-视图模型
    (模型是指后端传递的数据，视图是指要展示的页面，视图模型是MVVM的核心，它是链接view和model的桥梁)

    它有两种实现方式： 
    1. 将【模型】转换为【视图】，即将后端传递的数据转换成前端的页面，实现的方式是  数据绑定
    2. 将【视图】转换成【模型】，即将前端的页面转换成后端的数据，实现的方式是  DOM 监听
    3. 这两个方向都能实现的我们称之为 双向绑定
    总结： 在MVVM框架下，模型和视图是不能直接通信的，他们通过ViewModel来实现通信，ViewModel通常需要一个观察者observer,当数据发生变化，ViewModel可以监听到数据的这个变化，并且通知视图做相应的更新，当用户操作视图时，ViewModel也可以通知数据做出相应的改变
    只关心数据的流传，减少强耦合性，关键就是数据的双向绑定

    关键步骤：
    1. 实现数据监听器observer,用object.defineProperty()来重写数据的get/set方法，值更新就在订阅者中通知set更新数据
    2. 实现模板编译compile，深度遍历dom树，对每个元素节点的指令模板替换数据以及订阅数据
	  3. 实现watch用于连接Observer和compile，能够订阅并接受每一个属性的变动的通知，执行指令绑定的相应的回调函数，从而更新数据

16. eventBus vuex
    - eventBus 解决了兄弟组件之间事件的传递问题，本质是订阅者发布者模式
    - vuex 数据流,$emit 发布，$on 订阅一个组件 
     npm  vue-enent-proxy

17. 圣杯布局 
    <div class="container">
      <div class="main">main</div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>

    .container{
      padding: 0 300px 0 200px;
    }
    .main,.left,.right{
      min-height: 200px;
      position: relative;
      float: left;
    }
    .left{
      background: red;
      width: 200px;
      margin-left: 100%;
      left: -200px;
    }
    .right{
      background: blue;
      width: 300px;
      margin-left: -300px;
      right: -300px;
    }
    .main{
      background: green;
      width: 100%;
    }
     
18. 实现三栏布局之双飞翼布局
    <div class="container">
      <div class="main">
        <div class="content">content</div>
      </div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>

    .main,.left,.right{
      float: left;
      min-height: 200px;
      text-align: center;
    }
    .left{
      background: green;
      margin-left: -100%;
      width: 200px;
    }
    .right{
      width: 300px;
      background: red;
      margin-left: -300px;
    }
    .main{
      width: 100%;
      background: blue;
    }
    .content{
      margin: 0 300px 0 200px;
    }

19. vue 中设置key 值的作用
    - vue 总是高效的渲染元素而不是从头渲染，这也是diff算法的精髓
    在执行列表渲染时要求添加key值

    key的作用是为了更高效的更新虚拟DOM
    1. 元素的唯一性： 提升了匹配元素index的性能
    2. key值设置唯一可以很快的找到相对应的元素

20. 如何模拟一个map

    map()方法遍历数组中每一个元素，且对其执行一次回调函数
    currentValue: 必选 
    index: 可选
    arr: 可选

21. push() 方法朝数组的末尾添加一个或多个元素，并返回新的长度
    reverse() 方法用于颠倒数组的顺序

22. JavaScript的内置可迭代对象
    1. 数组Arrays
    2. 字符串Strings
    3. Map
    4. Set
    5. arguments
    6. Typed Arrays
    7. Generators

23. 闭包
    闭包发生在创建函数的时候，实质上是一个作用域，在该作用于允许自身访问并操作该作用域之外的变量

24. 异步类型：
    - 普通事件 click resize
    - 资源加载 load error
    - 定时器 setTimeout setInveral


25. HTTP 
    1. https的SSL加密是在传输层实现的
    2. 基本概念
      http: 超文本传输协议
      https: 以安全为目标的http通道(理解为http的安全版本)

26. TCP 和 UDP 的差别
    1. TCP是面向连接的，UDP是无连接的，即发送数据前不需要建立连接
    2. TCP提供可靠的交付，UDP尽最大努力交付，不保证可靠交付
    因此TCP适合大数据量的交换
    3. TCP面向字节流，UDP面对报文
    4. TCP是1对1，UDP是1对1或1对多
    5. TCP首部20字节，UDP8字节
    6. TCP是面向连接的可靠性传输，UDP不可靠





    







