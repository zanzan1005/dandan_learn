//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/1.jpg',
      '../../images/2.jpg'
    ],
    productLists: [
      {src:"../../images/title.jpg",title:"Oneplus 7 Pro",price:"最低价 ￥3999"},
      {src:"../../images/title2.jpg",title:"Oneplus 7",price:"最低价 ￥2999"},
      {src:"../../images/title3.jpg",title:"Oneplus 7 加油套装",price:"最低价 ￥345.1",minPrice:"最低价 ￥ 406"},
      {src:"../../images/title4.jpg",title:"Oneplus 7 Pro个性保护壳",price:"最低价 ￥99"},
      {src:"../../images/title5.jpg",title:"Oneplus 7 Pro全包保护壳",price:"最低价 ￥199"},
      {src:"../../images/title6.jpg",title:"一加云耳 2",price:"￥599"},
      {src:"../../images/title7.jpg",title:"OnePlus Warp 30 闪充套装",price:"￥217",minPrice:"￥228"},
      {src:"../../images/title8.jpg",title:"OnePlus 7 Pro 全家桶套装",price:"最低价 ￥421.6",minPrice:" 最低价 ￥496"},
      {src:"../../images/title10.jpg",title:"OnePlus 7 Pro 悦耳套装",price:"最低价 ￥254.6",minPrice:" 最低价 ￥268"},
      {src:"../../images/title9.jpg",title:"一加Wrap闪充30电源适配器",price:"￥149"},
      {src:"../../images/title11.jpg",title:"一加Wrap闪充30车载充电器",price:"￥199"},
      {src:"../../images/title12.jpg",title:"一加Wrap闪充30 Type-C 数据线",price:"最低价 ￥79"},
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
