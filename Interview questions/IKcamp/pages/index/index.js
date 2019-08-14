//index.js
//获取应用实例

import util from '../../utils/index'
const app = getApp()

Page({
  data: {
    articleList: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   this.requestArticle();
  },
  requestArticle() {
    util.request({
      mock: true,
      url: 'list'
    }).then(res => {
      //正常
      let articleList = res.data.data;
      console.log(articleList);
      this.setData({
        articleList
      })
    }).catch(() => {

    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
