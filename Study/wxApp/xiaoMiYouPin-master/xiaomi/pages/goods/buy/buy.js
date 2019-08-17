Page({
  data: {
    goods:[],
    goodsPrice:'',
    carriage:'',
    discounts:'',
    totalPrice: '',
    carriage:'',
    discounts: ''
  },
  toAddress () {
    wx.navigateTo({
      url:'../../goods/addressList/addressList'
    })
  },
  toPay () {
    wx.showModal({
      title: '请先填写地址信息',
      showCancel:false
    })
  },
  onShow () {
    let self = this
    wx.request({
      url:'https://www.easy-mock.com/mock/5d077b333780f05f8385d2c1/xiaoMi_youPin/goods_detail',
      success(res){
        console.log(res)
        self.setData({
          goods:res.data.data.goods
        })
        self.setData({
          sum: self.data.goods[0].goodsPrice + self.data.goods[0].carriage - self.data.goods[0].discounts
        })
      }
    })
  }
})