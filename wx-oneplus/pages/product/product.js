// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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