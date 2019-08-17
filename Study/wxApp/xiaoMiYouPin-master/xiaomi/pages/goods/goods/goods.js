const app = getApp();
Page({
  data: {
    imgUrls:[
      'https://img.youpin.mi-img.com/goods/4552448d5ee0e9937e66a26121aa3947.jpg@base@tag=imgScale&F=webp',
      'https://img.youpin.mi-img.com/goods/0641d876f470cf0cd0cff781ac42964e.jpg@base@tag=imgScale&F=webp',
      'https://img.youpin.mi-img.com/goods/60b5f67b09a627f6513f01da45fd8352.jpg@base@tag=imgScale&F=webp',
      'https://img.youpin.mi-img.com/goods/2e57ba922114dfd425a330c5a7920698.jpg@base@tag=imgScale&F=webp',
      'https://img.youpin.mi-img.com/goods/fc75fae708e4dbdb0a26eaa25f698eae.jpg@base@tag=imgScale&F=webp',
      'https://img.youpin.mi-img.com/goods/189d4aeedc142c761bc407b81db8fc96.jpg@base@tag=imgScale&F=webp'
    ],
    detail:[],
    selected: true
  },
  onLoad: function (options) {
    const id = options.id
    this.setData({
      index: id
    })
  },
  skipIndex() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  // 分享
  toShare() {
    this.setData({
      active: true
    })
  },
  // 隐藏遮罩层
  hideMask() {
    this.setData({
      active: false
    })
  },
  // 分享
  onShareAppMessage (options) {
    return {
      title:this.data.detail[0].detailOne
    }
  },
  // 跳到购物车页面
  skipCart(e) {  
    let id = e.currentTarget.dataset.id  
    wx.reLaunch({
      url: `/pages/cart/cart?id=${id}`
    })
  },
  // 添加到购物车
  addCart() {
    app.globalData.cart = [...app.globalData.cart, this.data.detail];
    console.log(app.globalData.cart)
    wx.showToast({
      title: '加入购物车成功',
      icon: 'success',
      duration: 2000
    })
  },
  buyNow() {
    wx.navigateTo({
      url: '../../goods/buy/buy'
    })
  },
  onReady: function () {
    let self = this
    wx.request({
      url:'https://www.easy-mock.com/mock/5d077b333780f05f8385d2c1/xiaoMi_youPin/xiaomiyoupin',
      success(res){
        // console.log(res.data.data.detail)
        // console.log(res)
        self.setData({
          detail: res.data.data.detail[self.data.index]
        })
        // console.log(self.data.detail)
      }
    })
  }
})
