function getMiddleNum(arr, num) {
  var len = arr.length
  start = 0
  end = len - 1
  while (start <= end) {
    var middleNum = Math.floor((start + end) / 2)
    if (arr[middleNum] == num) {
      return middleNum
    } else if (arr[middleNum] <= num) {
      start = middleNum + 1
    } else {
      end = middleNum - 1
    }
  }
}

var arr = [1,2,3,4,5,6]
console.log(getMiddleNum(arr, 4))

//注意：采用二分法查找时数组需要排好序