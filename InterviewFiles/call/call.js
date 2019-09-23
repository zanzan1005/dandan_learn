var name = '小王',age = 18
var obj = {
  name : '肖战',
  objSAge: this.age,
  myFunc () {
    console.log(this.name +'年龄:' + age)
    console.log(this)
  }
}