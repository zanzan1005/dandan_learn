类型 typeof 
复杂数据类型 object
Array 是可遍历的对象
Function 是可运行的对象
JSON object 对象字面量是可枚举的对象 for(key in)
typeof 半吊子，typeof[]没有办法和json 区分

希望有一个方法可以区分Array和JSon Object

1.  用对象字面量来做面向对象 区别于原型式的
他没有被实例化的需要 Type.将在程序中就做类型检测
var Type = {};组织你的代码
2.  for 来一次性的加完 同步异步的问题
使用闭包来讲type 作用域封闭起来，立即执行函数，同步执行，类型检测函数的定义，因为函数嵌套，是形成闭包的条件
当函数再次被调用时，这个时候就是异步的，找到定义时刻的type 
3.  Object.prototype.toString.call(obj)
Object ?祖先，顶级对象 函数才有prototype 属性，原型上有这样的toString 方法，解决typeof 的尴尬
"[object object]"
[object Array] 方法的执行方式可以被改变 
Object.prototype.toString.call(obj)