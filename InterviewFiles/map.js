let arr = [1,2,3,4,5]
let newArr = arr.map(x => x*2)
console.log(newArr)
console.log(arr)

//map不会对空数组进行检测
//map不会改变原有数组