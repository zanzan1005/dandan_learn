//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  toDetail: function () {
    wx.navigateTo({
      url: '../detail/detail'
    })
  }
})
