JS 是一种弱类型语言
- 六种基本的数据类型
1. number
2. string
3. boolean
4. null
5. undefined
- object （对象）函数也可以叫做对象

- 隐式转换
  1. "37" + 7 //377
  2. "37" - 7 //30
  以上，加法理解为字符串拼接，减法则理解为减号
eg: num - 0 //num转换为数字
    num + '' //num转换为字符串

- 严格等于 ===
  1. 首先判断等式两边的类型，类型不同返回false
   注意：NaN != NaN

- document.write("0") 将内容写进页面里
DOM:document object model 文档对象模型
1. document.getElementById("")
如果页面中的id重复了，那么这个方法默认只获得第一个元素
在ie6、7中,会把表单元素（input）的name属性值当做ID来使用
在ie6、7中，不区分ID的大小写
项目实战注意:不要让表单元素的name和其他元素的id重复，不要用id的大小写来区分我们的不同元素

