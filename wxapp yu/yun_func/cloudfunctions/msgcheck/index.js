// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const got = require('got')

let appid = 'wx9b4f41b9c3a6d842';
let secret = 'c94e8ac41cb854fa60d25f5ffc06fe63';


let msgCheckUrl = 'https://api.weixin.qq.com/wxa/msg_sec_check?access_token=';
let tokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appid + '&secret=' + secret;
//https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx9b4f41b9c3a6d842&secret=c94e8ac41cb854fa60d25f5ffc06fe63

// 云函数入口函数
exports.main = async (event, context) => {
    //令牌许可
//     let tokenResponse = await got(tokenUrl);
//     console.log(tokenResponse);
//     let token = JSON.parse(tokenResponse.body).access_token;
//     console.log(token);
//     let checkResponse = await got(msgCheckUrl + token,{
//         body:JSON.stringify({
//             content:event.text
//         })
//     });
//     console.log(checkResponse)
//   return checkResponse.body;
  return event.a + event.b
}
