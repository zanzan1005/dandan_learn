// let arr = 'abc'
// let list = arr.split('')
// let re_list = list.reverse()
// let a = re_list.join('')
// console.log(a)

// function validPalindrome(str) {
//   if (!str || typeof str != 'string') return false;
//   return str.split('').reverse().join('') === str;
// }
// console.log(validPalindrome())
//大小写
//空 特殊符号 忽略
//A man ,a plan, a cancal:Panama

var isValidChar = (c) => { // abc 123
  return /^[\w]$/.test(c);
}
var isPalindrom = (s) => {
  s = s.toLowerCase();
  let left = 0,
    right = s.length -1;

    while(left < right) {
      if (!isValidChar(s[left])) {
        left ++;
        continue;
      }

      if (!isValidChar(s[right])) {
        right --;
        continue;
      }

      if (s[left] === s[right]) {
        left ++;
        right --;
      } else {
        break;
      }
    }
    return right <= left;
}


