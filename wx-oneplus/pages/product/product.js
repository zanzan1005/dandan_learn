// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1,
    minStatus: false,
    productNum: 0,
    imgUrls: [
      '../../images/product1.jpg',
      '../../images/product2.jpg',
      '../../images/product3.jpg',
      '../../images/product4.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 2000,
    show: false,
    overlay: true,
    close: true
  },
  del: function () {
    this.setData({
      show: false
    })
  },
  success: function () {
    wx.showToast({
      title: '成功加入购物车',
      duration: 1500,
      mask: false
    });
  },
  buy: function (e) {
    console.log(e)
    wx.switchTab({
      url: '../../pages/cart/cart',
      success: () => {
        wx.setStorage({
          key: 'product_detail',
          data: this.data.ProductNum
        })
      }
    })
  },
  reduceNum: function () {
    var num = this.data.num;
    if (num > 1) {
      num--
    }
    var minStatus = num > 1 ? 'true' : 'false'
    this.setData({
      num: num,
      minStatus: minStatus
    })
  },
  addNum: function () {
    var num = this.data.num;
    num++;
    var minStatus = num > 1 ? 'true' : 'false'
    this.setData({
      num: num,
      minStatus: minStatus
    })
  },
  changeNum: function (e) {
    var num = e.detail.value;
    var minStatus = num > 1 ? 'true' : 'false'
    this.setData({
      num: num,
      minStatus: minStatus
    })
  },
  toCard: function () {
    wx.switchTab({
      url: '../../pages/cart/cart'
    });
  },
  onClose() {
    this.setData({ show: false });
  },
  change: function () {
    this.setData({ show: true });
  },
  // toProductDetail: function () {
  //   wx.navigateTo({
  //     url: '../../pages/product_detail/product_detail'
  //   });
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})