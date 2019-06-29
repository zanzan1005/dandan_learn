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
    index: 1
 },
  
  onLoad: function () {
 
  }
})
