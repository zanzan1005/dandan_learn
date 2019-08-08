//1000s
// function sleep (e) {
//   var now = new Date()
//   var exitTime = now.getTime() + e;
//   while(true) {
//     now = new Date()
//     if (now.getTime() > exitTime) 
//     return
//   }
// }

// const sleep = time => {
//   return new Promise(
//     (resolve,reject) => setTimeout(resolve,time)) //箭头函数不能换行
// }

// sleep(5000).then(() => {
//   console.log('come on!')
// });

//函数生成器特点是函数名前面有一个‘*’
// function *sleepGenerator (time) {
//   yield new Promise((resolve,reject) => {
//     setTimeout(resolve,time);
//   });
//   console.log('aaaaaa')
// }

// sleepGenerator(1000)
//   .next()
//   .value
//   .then(() => {
//   console.log('一千年以后！')
// });

// console.log('helloworld');
// console.log(sleepGenerator());
//实现一个功能 + 发散理解

//async的用法，它作为一个关键字放到函数前面，用于表示函数是一个异步函数，因为async就是异步的意思， 异步函数也就意味着该函数的执行不会阻塞后面代码的执行。
// async function timeout() {
//   return 'hello world'
// }
// console.log(timeout());
// console.log('虽然在后面，但是我先执行');

// function sleep(time) {
//   return new Promise(resolve => setTimeout(resolve,time));
// }

// async function output() {
//   let out = await sleep(1000);
//   console.log(1);
//   return out;
// }
// console.log(output());

function sleep(callback,time) {
  if(typeof callback === 'function')
  setTimeout(callack,time);
}
sleep(function() {
  console.log('10000')
})