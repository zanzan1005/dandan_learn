// 云函数入口文件
const cloud = require('wx-server-sdk');
const got = require('got')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let getResponse = await got('httpbin.org/get');
  let postResopnse = await got('httpbin.org/post',
  {
    method:'POST',/*秘密*/
    header:{
      'Contect-Type':'application/json'
      // 内容类型 head
    },
    body:JSON.stringify({
      title:'带个弟弟回家',
      value:'弟弟'
    })
  })
  return postResopnse.body
}