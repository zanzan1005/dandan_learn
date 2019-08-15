// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [],
    totalNum: 0,
    hasProductNum: false,
    cartLists: [
      {
        url: '../../images/product1.jpg',
        name: 'OnePlus 7 Pro 曜岩灰 6G+128G',
        price: '￥3999.00'
      },
      {
        url: '../../images/title2.jpg',
        name: 'OnePlus 7 Pro 曜岩灰 6G+128G',
        price: '￥3999.00'
      }
    ]
  },
  toIndex: function () {
    wx.navigateTo({
      url: '../../pages/product/product'
    })
  },
  //存储数组函数
  upLists(e) {
    wx.setStorage({
      key: 'lists',
      data: this.data.lists
    })
  },
  //存储购物车数量函数
  getProductNum(e) {
    let totalNum = this.data.totalNum;
    wx.getStorage({
      key: 'product_detail',
      data: totalNum
    })
  },
  //取得购物车数量函数
  PutProductNum (e) {
    wx.getStorage({
      key: 'product_detail',
      success: (res)=>{
        this.setData({
          hasProductNum: res.data
        })
      },
    })
  },
  getProductNum(e) {

  },
  del_lists: function () {

  },
  reduceNum: function () {},
  changeNum: function () {},
  addNum: function () {},
  toIndex: function () {
    wx.switchTab({
      url: '../../pages/index/index'
    })
  },

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