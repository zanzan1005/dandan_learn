// [1,4,2,6,10] 2

// function sortMax (){
//   var arr = [1,4,2,6,10]
//   arr.sort(function(a,b){
//     return b - a;
//   })
//   return arr
// }
// console.log(sortMax());

function findKthLargest (nums,k) {
  if (k < 0 ||k > nums.length -1) return NaN;
  return nums.sort((a,b) => b - a)[k-1];
}

console.log(findKthLargest([1,4,2,6,9,10],2));