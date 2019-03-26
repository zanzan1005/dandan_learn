三角恋 
三者 ？构造函数Constructor
prototype 原型对象 
实例 Instance
其实JS没有类，只有对象，所有的一切都是通过原型来拿到的

通过构造函数Person 生成了person（对象）这个实例
同时我们在Person 的原型 Person.prototype 定义了getName方法

构造函数 是需要运行的new Person()  this->新的实例 ，空对象Person{} .name
实例怎么拿到 原型对象的方法或属性？
1.  任何对象都有__proto__私有属性，这个对象出处是哪里？
实例和类之间没有血缘关系
__proto__
2.  构造函数有prototpye 属性
3.  原型对象上有constructor 属性 指向构造函数，

js面向对象是基于原型的

原型链