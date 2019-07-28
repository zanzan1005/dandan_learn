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
    propsList: [
      {name: '富安娜(FUANNA)',price: '￥369.00'},
      {name: '富安娜(FUANNA)',price: '￥368.00'},
      {name: '富安娜(FUANNA)',price: '￥367.00'},
      {name: '富安娜(FUANNA)',price: '￥366.00'},
      {name: '富安娜(FUANNA)',price: '￥365.00'},
      {name: '富安娜(FUANNA)',price: '￥364.00'},
      {name: '富安娜(FUANNA)',price: '￥363.00'},
      {name: '富安娜(FUANNA)',price: '￥362.00'},
      {name: '富安娜(FUANNA)',price: '￥361.00'}
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 3000,
    circle: true
  },
})
