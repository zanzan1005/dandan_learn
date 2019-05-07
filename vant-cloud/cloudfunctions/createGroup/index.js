// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'goudan-nswye' //环境id

cloud.init() //获取服务器的句柄

const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo
  return await db.collection('group').add({
    data:{
      name:event.groupName,
      createBy:userInfo.openId,
      createTime:new Date(),
      deleted:false,
      updateTime:new Date()
    }
  })
}