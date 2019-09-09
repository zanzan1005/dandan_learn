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
      - 
    







