// pages/grid/grid.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {
        "url": "../../images/banner1.png",
        "name": "banner1"
      },
      {
        "url": "../../images/banner2.jpg",
        "name": "banner2"
      },
      {
        "url": "../../images/banner3.jpg",
        "name": "banner3"
      },
      {
        "url": "../../images/banner4.jpg",
        "name": "banner4"
      },
      {
        "url": "../../images/banner5.jpg",
        "name": "banner5"
      },
      {
        "url": "../../images/banner6.jpg",
        "name": "banner6"
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 5000,
    circular: true,
    cardLists:[
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

  toBanner: function (e) {
    var index = e.currentTarget.dataset.index;
    var imgUrls = this.data.imgUrls;
    var name = imgUrls[index].name;
    var url = imgUrls[index].url;
    wx.navigateTo({
      url: `../detail/detail?name=${name} url=${url}`
    })
  },

  toDetail: function (e) {
    var index = e.currentTarget.dataset.index;
    var cardLists = this.data.cardLists;
    var title = cardLists[index].title;
    var url = cardLists[index].url;
    wx.navigateTo({
      url: `../detail/detail?title=${title} url=${url}`
    })
  },

  toHistory: function (e) {
    wx.navigateTo({
      url: '../history/history'
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