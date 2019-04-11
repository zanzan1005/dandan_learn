// js 的后端 Node 用核心模块打理起服务器开发
// require(后端关键字)
//要读文件，先引入fs
const fs = require('fs');
//读文件
//读一个文件需要几步？js 运行在服务器命令行上
//1.找到文件 代码由CPU执行 内存    a.txt在磁盘的文件夹里
//IO 操作   花时间找文件 打开文件 读取文件 输出到命令行中
//经典的异步问题     耗时文件 callback 使用回调函数 



// fs.readFile('./a.txt','utf8',(err,data) => {
//     console.log(data);
// })
// fs.readFile('./b.txt','utf8',(err,data) =>{
//     console.log(data);
//     fs.readFile('./c.txt','utf8',(err,data) =>{
//         console.log(data);
//     })
// })

// 当出现耗时问题时，寻找Promise 这是一类问题
//promise 是耗时问题的包裹 
const fileAPromise = new Promise((resolve,reject) =>{
    fs.readFile('./a.txt','utf8',(err,data) =>{
        if (err) {
            reject(err);
            //出错把错误显示出来
        }
        resolve(data);
        //没出错显示内容
    })
});
const fileBPromise = new Promise((resolve,reject) =>{
    fs.readFile('./b.txt','utf8',(err,data) =>{
        if (err){
            reject(err);
            return;
        }
        resolve(data);
    })
})
fileAPromise 
    .then(data =>{
        console.log(data);
        return fileBPromise;
    })
    .then(data =>{
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })