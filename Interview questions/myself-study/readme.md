前端43道面试题
1. 
  function sayHi() {
    console.log(name);
    console.log(age);
    var name = "Lydia";
    let age = 21;
}
sayHi();
输出结果为：undefined ReferenceError
解析：var 一个变量系统会给它分配一个内存空间，但还未定义时其值为undefined
，一直到调用该变量之前它的值都是undefined
let 一个变量到我们初始化它之前，都存在一个不可访问的死区，ReferenceError

变量的赋值可以分为三个阶段：

  创建变量，在内存中开辟空间
  初始化变量，将变量初始化为undefined
  真正赋值

关于let、var和function：

let 的「创建」过程被提升了，但是初始化没有提升。
var 的「创建」和「初始化」都被提升了。
function 的「创建」「初始化」和「赋值」都被提升了。
