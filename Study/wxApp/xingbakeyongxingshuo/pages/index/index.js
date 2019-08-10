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
    duration: 2000,
    Lists:[
      {
        "url": "../../images/card01.jpg",
        "title": "夏日 冰爽"
      }, {
        "url": "../../images/card02.jpg",
        "title": "DIY夏日祝福"
      }, {
        "url": "../../images/card03.jpg",
        "title": "冰饮派对"
      }, {
        "url": "../../images/card04.jpg",
        "title": "酷爽一夏"
      }, {
        "url": "../../images/card05.jpg",
        "title": "我想你了"
      }, {
        "url": "../../images/card06.jpg",
        "title": "有你真好"
      }, {
        "url": "../../images/card07.jpg",
        "title": "咖啡有你"
      }, {
        "url": "../../images/card08.jpg",
        "title": "生日快乐"
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