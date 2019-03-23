## css 预编译语言stylus
写的是stylus 后缀 .styl 在浏览器端运行的是.CSS
前端工作流在发生改变  
界面开发工作被重新定义了，从小米加步枪变生产线
stylus main.styl -o main.css
编译功能  -o 输出 
stylus 提供了CSS不具备的变量定义，模块化，甚至可以提供函数，快捷  新的语法
-w watch 监听文件修改 ，同步编译

1.  变量
2.  减少输入{}：；
3.  函数
4.  嵌套
.book-bought 购买模块
    .label
        img
    & 引用上一级的层次类名，同时可以缩进，省去重复上一次选择

flex 是CSS在移动时代最爽的布局方案 ，手机端子元素们的对齐方式
水平 主轴 justify-content
纵轴 align-items center
传统方案是img + 兄弟节点 vertical-align:middle

flex的考点 自适应 多设备跨终端访问
1.  flex:1比例划分 ，只给一个元素设置它将占据主体之外的所有
2.  父元素与多个子元素之间的关系
水平对齐 justify-content
垂直对齐 align-items
3.  剩余空间 flex-grow

















1、-moz代表firefox浏览器私有属性

2、-ms代表ie浏览器私有属性

3、-webkit代表safari、chrome私有属性

这些是为了兼容老版本的写法，比较新版本的浏览器都支持直接写：border-radius。
