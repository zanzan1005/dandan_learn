//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      "../../images/1.jpg",
      "../../images/2.jpg",
      "../../images/3.jpg"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 3000,
    circle: true
  },
})
