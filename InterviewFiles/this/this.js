// function a () {
//   var user = 'ergou';
//   console.log(user)
//   console.log(this.user)
//   console.log(this)
// }
// a();

// var a = {
//   user:'sangou',
//   b:function () {
//     console.log(this.user)
//     console.log(this)
//   }
// }
// window.a.b()

var o = {
  user:"追梦子",
  fn:function(){
      console.log(this.user);  //追梦子
      console.log(this)
  }
}
o.fn();

output(
  typeof (function() {
    output("Hello World!")
  })());


