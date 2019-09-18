//类的创建
//new 一个function，在function的prototype上增加属性和方法
function Animal (name) {
  this.name = name //属性
  this.sleep = function () {
    console.log(this.name + '正在睡觉！')
  }
}

Animal.prototype.eat = function (food) {
  console.log(this.name + '正在吃：' + food)
}


function People (name) {
  this.name = name
  this.age = function (number) {
    console.log(this.name + '的年龄是：' + number)
  }
}
People.prototype.height = function (tall) {
  console.log(this.name + '有' + tall + '高')
}

//生成类之后实例化，有属性和方法