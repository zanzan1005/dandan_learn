//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // banner
    imgUrls: [
      '../../images/1.jpg',
      '../../images/2.jpg',
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
 },
  //事件处理函数
  onLoad: function () {
 
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
