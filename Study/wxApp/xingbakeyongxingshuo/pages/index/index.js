// pages/grid/grid.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "/images/banner1.png",
      "/images/banner2.jpg",
      "/images/banner3.jpg",
      "/images/banner4.jpg",
      "/images/banner5.jpg",
      "/images/banner6.jpg",
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    proList:[
      {
        "toppic": "/images/img_bann1.jpg",
        "name": "玩出我的夏天"
      }, {
        "toppic": "/images/img_bann2.jpg",
        "name": "你真棒"
      }, {
        "toppic": "/images/img_bann3.jpg",
        "name": "毕业季"
      }, {
        "toppic": "/images/img_bann4.jpg",
        "name": "干杯"
      }, {
        "toppic": "/images/img_bann5.jpg",
        "name": "求抱抱"
      }, {
        "toppic": "/images/img_bann6.jpg",
        "name": "宝贝谢谢你"
      }, {
        "toppic": "/images/img_bann7.jpg",
        "name": "有你真好"
      }, {
        "toppic": "/images/img_bann8.jpg",
        "name": "宝贝 生快"
      }, {
        "toppic": "/images/img_bann9.jpg",
        "name": "为你点赞"
      }, {
        "toppic": "/images/img_bann10.jpg",
        "name": "休息一夏"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  toDetail: function () {},
  onLoad: function (options) {
    this.getImgUrls();
  },

  getImgUrls: function () {
    var self = this;
    wx.request({
      url: '你的服务器地址...',
      method: "GET",
      success(res) {
        console.log(res)
        self.setData({
          // imgUrls: res.data.bannerList,
          // proList: res.data.centerList,
          // bottomItem: res.data.bottom
        })
      }
    })
  },

  toBannerInfo: function (e) {
    var index = e.currentTarget.dataset.index;
    var imgUrls = this.data.imgUrls;
    var name = imgUrls[index].name;
    var toppic = imgUrls[index].toppic;
    // wx.showToast({
    //   title: name + '',
    // })
    wx.navigateTo({
      url: '/pages/gridinfo/gridinfo?name=' + name + '&toppic=' + toppic,
    })
  },

  toProListInfo: function (e) {
    var index = e.currentTarget.dataset.index;
    var proList = this.data.proList;
    var name = proList[index].name;
    var toppic = proList[index].toppic;
    // wx.showToast({
    //   title: name + '',
    // })
    wx.navigateTo({
      url: '/pages/gridinfo/gridinfo?name=' + name + '&toppic=' + toppic,
    })
  },

  toProHistory: function (e) {
    wx.showToast({
      title: '购买历史',
    })
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