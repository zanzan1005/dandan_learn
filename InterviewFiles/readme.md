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
    vertical-align: center;
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

4. position 的 8 种定位
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




    







