//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/banner1.jpg',
      '../../images/banner2.jpg',
      '../../images/banner3.jpg'
    ],
    titleLists: [
      '咖啡+祝福，即刻表心意',
      '点滴心意，保护自然',
      '这一路，有你真好',
    ],
    cardLists1: [
      {src: '../../images/card1.jpg',name: '冰饮派对'},
      {src: '../../images/card2.gif', name: 'DIY一份夏日心意'}
    ],
    cardLists2: [
      {src: '../../images/card3.jpg', name: '自然守护者'},
      {src: '../../images/card4.jpg', name: '一起出发吧'}
    ],
    cardLists3: [
      {src: '../../images/card5.jpg', name: '我想你了'},
      {src: '../../images/card6.jpg', name: '感恩有你'},
      {src: '../../images/card7.jpg', name: '咖啡有你'},
      {src: '../../images/card8.jpg', name: '生日快乐'}
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 1000
  },
})
