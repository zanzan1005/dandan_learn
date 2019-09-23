var arr = [1,2,3,4,5,6]
var newArr = arr.filter(function (x){
  return x % 2 == 1
})
console.log(newArr)