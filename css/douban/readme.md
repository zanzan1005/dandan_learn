-   css命名词汇
feeds    *-item content
-   html 结构及布局
从上到下，从左到右，还有语义化和功能性
1.  套路
content>h3+p
2.  盒子
3.  a作为盒子，在移动端是很正常的
diaplay:block diaplay 属性
4.  盒子模型
文字line-height padding margin
5.   文字截断 
tmall 商户信息是由用户商家填的，它的高度不会被限制
diaplay:-webkit-box;新的盒子模型 像flex一样来划分父元素的空间。
overflow：hidden
-webkit-line-clamp:行数
-webkit-box-orient;vertical
6.  浮动 float：left|right
离开文档流 
在一个盒子里，将要浮动的元素写在最前面
左右布局，
在flex布局之前，我们一般借助于float来布局
图片的宽高？宽度用百分比 ,自适应的需求，
高度怎么做？ 高度无法确定 
div padding-top：自身的宽度来做比例100% 正方形
自适应设备里盒子的等比例设置 width 百分比，
高度用padding-top

