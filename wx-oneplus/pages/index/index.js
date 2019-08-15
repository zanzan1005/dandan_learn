//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/1.jpg',
      '../../images/2.jpg'
    ],
    productLists1: [
      {src:"../../images/title.jpg", title:"Oneplus 7 Pro", price:"最低价 ￥3999"},
      {src:"../../images/title2.jpg", title:"Oneplus 7", price:"最低价 ￥2999"},
      {src:"../../images/title3.jpg", title:"Oneplus 7 加油套装", price:"最低价 ￥345.1", minPrice:"最低价 ￥ 406"},
      {src:"../../images/title4.jpg", title:"Oneplus 7 Pro个性保护壳", price:"最低价 ￥99"},
      {src:"../../images/title5.jpg", title:"Oneplus 7 Pro全包保护壳",price:"最低价 ￥199"},
      {src:"../../images/title6.jpg", title:"一加云耳 2",price:"￥599"},
      {src:"../../images/title7.jpg", title:"OnePlus Warp 30 闪充套装",price:"￥217",smallPrice:"￥228"},
      {src:"../../images/title8.jpg", title:"OnePlus 7 Pro 全家桶套装",price:"最低价 ￥421.6", minPrice:" 最低价 ￥496"},
      {src:"../../images/title10.jpg", title:"OnePlus 7 Pro 悦耳套装",price:"最低价 ￥254.6", minPrice:" 最低价 ￥268"},
      {src:"../../images/title9.jpg", title:"一加Wrap闪充30电源适配器",price:"￥149"},
      {src:"../../images/title11.jpg", title:"一加Wrap闪充30车载充电器",price:"￥199"},
      {src:"../../images/title12.jpg", title:"一加Wrap闪充30 Type-C 数据线", price:"最低价 ￥79"},
      {src:"../../images/title13.jpg",title:"OnePlus 6T 硅胶保护壳",price:"￥77.4", minPrice:" 最低价 ￥129"},
      {src:"../../images/title14.jpg", title:"一加云耳", price:"最低价 ￥299"},
      {src:"../../images/title15.jpg",title:"OnePlus 6T 全包保护壳",price:"￥119.4", minPrice:" 最低价 ￥149"},
      {src:"../../images/title16.jpg",title:"OnePlus 6T 个性保护壳",price:"￥59.4", minPrice:" 最低价 ￥99"},
      {src:"../../images/title17.jpg",title:"OnePlus 6 各项保护壳",price:"￥59.4", minPrice:" 最低价 ￥99"},
      {src:"../../images/title18.jpg",title:"OnePlus 5T 个性保护壳",price:"￥49.4", minPrice:" 最低价 ￥99"},
      {src:"../../images/title19.jpg",title:"OnePlus 5T 全包保护壳",price:"￥99.5", minPrice:" ￥199"},
      {src:"../../images/title20.jpg",title:"闪充套装",price:"￥159", minPrice:"最低价 ￥199"},
      {src:"../../images/title21.jpg",title:"OnePlus 5T 全包保护壳",price:"￥129"},
      {src:"../../images/title22.jpg",title:"闪充套装",price:"￥159", minPrice:"最低价 ￥199"},
    ],
    productLists2: [
      {src:"../../images/title6.jpg", title:"一加云耳 2",price:"￥599"},
      {src:"../../images/title14.jpg", title:"一加云耳", price:"最低价 ￥299"},
      {src:"../../images/title23.jpg", title:"OnePlus 轻生活套装", price:"最低价 ￥294.95", minPrice: "最低价 ￥347"},
      {src:"../../images/title24.jpg", title:"OnePlus7 能量套装", price:"最低价 ￥336.6", minPrice: "最低价 ￥396"},
      {src:"../../images/title25.jpg", title:"OnePlus7 Pro 全家桶套装", price:"最低价 ￥421.6", minPrice: "最低价 ￥496"},
      {src:"../../images/title10.jpg", title:"OnePlus 7 Pro 悦耳套装",price:"最低价 ￥254.6", minPrice:" 最低价 ￥268"},
      {src:"../../images/title20.jpg",title:"闪充套装",price:"￥159", minPrice:"最低价 ￥199"},
      {src:"../../images/title21.jpg",title:"OnePlus 5T 全包保护壳",price:"￥129"},
      {src:"../../images/title22.jpg",title:"闪充套装",price:"￥159", minPrice:"最低价 ￥199"},
      {src:"../../images/title15.jpg",title:"OnePlus 6T 全包保护壳",price:"￥119.4", minPrice:" 最低价 ￥149"},
      {src:"../../images/title16.jpg",title:"OnePlus 6T 个性保护壳",price:"￥59.4", minPrice:" 最低价 ￥99"},
      {src:"../../images/title17.jpg",title:"OnePlus 6 各项保护壳",price:"￥59.4", minPrice:" 最低价 ￥99"}
    ],
    productLists3: [
      {src:"../../images/title3.jpg", title:"Oneplus 7 加油套装", price:"最低价 ￥345.1", minPrice:"最低价 ￥ 406"},
      {src:"../../images/title4.jpg", title:"Oneplus 7 Pro个性保护壳", price:"最低价 ￥99"},
      {src:"../../images/title5.jpg", title:"Oneplus 7 Pro全包保护壳",price:"最低价 ￥199"},
      {src:"../../images/title6.jpg", title:"一加云耳 2",price:"￥599"},
      {src:"../../images/title7.jpg", title:"OnePlus Warp 30 闪充套装",price:"￥217",smallPrice:"￥228"},
      {src:"../../images/title10.jpg", title:"OnePlus 7 Pro 悦耳套装",price:"最低价 ￥254.6", minPrice:" 最低价 ￥268"},
      {src:"../../images/title20.jpg",title:"闪充套装",price:"￥159", minPrice:"最低价 ￥199"},
      {src:"../../images/title21.jpg",title:"OnePlus 5T 全包保护壳",price:"￥129"},
      {src:"../../images/title22.jpg",title:"闪充套装",price:"￥159", minPrice:"最低价 ￥199"},
      {src:"../../images/title15.jpg",title:"OnePlus 6T 全包保护壳",price:"￥119.4", minPrice:" 最低价 ￥149"},
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
  toPage: function (res) {
    console.log(res)
  },
  toProduct: function (res) {
    console.log(res)
    wx.navigateTo({
      url: '../../pages/product/product',
    });
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
