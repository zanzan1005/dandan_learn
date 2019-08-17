const app = getApp()
Page({
  data: {  
    slideshow:[],
    cover:[],
    detail:[],
    autoplay: true,
    interval: 3000,
    duration: 1000,
    swiperCurrent: 0
  },
  toSwiper:function(e) {
    console.log(e)
    let id = e.currentTarget.dataset.id
    console.log(id)
    if(id == 0) {
      wx.navigateTo({
        url: `/pages/swiper/swiperOne/swiperOne?id=${id}`
      })
    } else if(id == 1) {
      wx.navigateTo({
        url: `/pages/swiper/swiperTwo/swiperTwo?id=${id}`
      })
    } else if(id == 2) {
      wx.navigateTo({
        url: `/pages/swiper/swiperThree/swiperThree?id=${id}`
      })
    } else if(id == 3) {
      wx.navigateTo({
        url: `/pages/swiper/swiperFour/swiperFour?id=${id}`
      })
    } else if(id == 4) {
      wx.navigateTo({
        url: `/pages/swiper/swiperFive/swiperFive?id=${id}`
      })
    } else if(id == 5) {
      wx.navigateTo({
        url: `/pages/swiper/swiperSix/swiperSix?id=${id}`
      })
    } 
  },
  toCover:function() {
    wx.navigateTo({
      url: '/pages/cover/cover',
    })
  },
  // 去到商品详情页
  toLists:function(e) {
    // console.log(e)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/goods/goods/goods?id=${id}`
    })
  },
  onLoad: function (options) {
    let that = this
    wx.setNavigationBarTitle({ 
      title: options.navigationText
    })
  },
  onReady: function () {
    let self = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d077b333780f05f8385d2c1/xiaoMi_youPin/xiaomiyoupin',
      success(res){
        console.log(res)
        let data = res.data.data
        self.setData({
          slideshow: data.slideshow,
          cover: data.cover,
          detail: data.detail
        })
      }
    })
  }
})
