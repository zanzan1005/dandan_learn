//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/1.jpg',
      '../../images/2.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    index: 1,
    navbar: ['商品精选', '耳机', '壳/膜','适配器/数据线','套装','生活馆'],
    currentTab: 0
  },
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  oneplus7Pro: function(e){

  },
  oneplus7: function(e){

  },
  oneplus7good: function(){

  },
  oneplus7proProtect: function(){

  },

  onLoad: function () {

  }
})
