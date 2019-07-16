ES6 => ES2015
最新为ES10 ES2019
优点： 方便 具有工程性

主要内容：变量 作用域 函数 系统自带的对象 异步处理（async/await) promise

1. 变量
  新的关键字 let => 变量 const => 常量
  可以禁止重复声明  支持控制修改 支持块级作用域 

  传统的JS只支持函数级作用域，ES6支持块级作用域 
  块级=>语法块 if(){}  {}  for(){}
  let/const 只有在语法块内才可调用，在语法块外则无法调用

2. ES6 结构赋值
 左右两边需要一样 右边需要是一整块
 let[a,b,c] = [1,2,3]

3. 函数 箭头函数
  传统js写函数 function (参数) {}
  ES6箭头函数 (参数) => {}

  注意： 如果箭头函数有且只有一个参数，那么()可以省略
        如果箭头函数有且只有一条语句，且是return ... ,那么{}可以省略
        如果省略的{}的语句还需要{}的话，可以使用()将其写成一个整体，只能省略函数体里面的{}

window.onload 会在页面加载完成后立刻发生
箭头函数的this是死死地绑在当前作用域下不会变化的

参数展开
  用来收集剩余参数
  用来展开一个数组

4. String 
  字符串模板` `
  
