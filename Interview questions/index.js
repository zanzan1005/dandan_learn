var b = 10 //定义常量
(function b() { //定义b为一个函数体
  let b = 20
  console.log(b)
})()
//函数表达式与函数声明不同，函数声明只在函数内部有效，并且此绑定常量
//
// 不能对常量进行赋值
// const b = function () {}
// b = 20
// console.log(b)

