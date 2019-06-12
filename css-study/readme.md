html 结构 css 样式
- css 原则
1. 优先原则：后来的样式会覆盖之前的样式，后解析的样式会覆盖之前解析的样式
2. 继承原则：嵌套里面的标签会继承外部的某些样式
            子元素可以继承父元素的样式和属性

优先原则解析：1. 同一个选择器，从上往下执行
             2. 同一种类型的选择器，从上往下执行
             3.不同类型的选择器也是有优先级的（先解析低优先级的，再解析高优先级的）
优先原则：
1. 同一个选择器，从上往下解析，执行
2. 同一个类型的选择器，从上往下
3. 不同类型的选择器，优先级
先解析，低优先级->高优先级，高优先级最后解析
4. 外部样式 内部样式 合并之后一起解析
先外部->内部
5. 内联样式 外部+内部解析完事之后再解析内联样式
6. !important 最后执行

- 组合选择器
1. 分组选择器 用,  
  div,p{
    background:red;
    color:green;
  }
2. 嵌套选择器，用空格隔开（指的是父级元素里含有子元素的元素标签）
    只要从上找能找到相应的父元素即可 
    div p => p(div)
3. 子选择器 div > p （用>表示）父标签为div的p标签才会生效
    即高一级的标签
4. 相邻的，同级别的标签，用+号
5. 属性选择器，针对自定义的属性而言
  基本s[属性]
  例子：html:
      <p title="qiuqiu">p1</p>
      css:
      p[title=qiuqiu]{
        ...
      }
      两个值必须相对应，否则无法生效
  基本s[属性=值]
  基本s[属性~=值] 含有这个值的
  基本s[属性^=值] 以这个值开始的
  基本s[属性$=值] 以这个值结束的
6. 伪元素选择器
  真的，是我们自己写的
  每个标签都有两个伪元素before＆after

  p::before{
    content:'before';
  }
  p::after{
    content:'after';
  }
7. 块元素
    第一个字母/字 first-letter 
    p::first{
      ...
    }
    第一行 first-line
    p::first-line{
      ...
    }
8. 伪类 （状态的改变）
    由于操作的不同状态发生改变（a,input标签）

- 背景
  background-color:red (颜色)
  background-image:url('...') 背景图
  background-repeat:(repeat-x,repeat-y,no-repeat) 平铺
  background-position:(x轴)100px (y轴)100px
  x:left center right
  y:top ceneter bottom

- 字体
  font-family:"宋体","黑体","微软雅黑";
  多个字体之间用逗号隔开
  font-size:30px 16px=1em(系统默认设置为16px)
  font-weight:100~900(normal,lighter,bold)
  font-style:(normal,italic)(普通，斜体)
  line-hight:60px(行高)

- 其他css
  color:red;文字颜色
  letter-spacing:0px -50px 60px（字符间距，可以为正值，和负值）
  word-spacing:(空格间距，只会影响空格)
  direction:ltr rtl(从右到左 从左到右)书写习惯
  text-decoration:none line-through overline underline(加线)
  text-align:center left right justify(两端对齐)(默认状态为左对齐left)
  text-indent:60px(缩进空格)
  







             
