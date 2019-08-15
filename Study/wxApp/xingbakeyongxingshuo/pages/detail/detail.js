// pages/gridinfo/gridinfo.js
Page({

  /**
 * 页面的初始数据
   */
  data: {
    barTitle:null,
    toppic:null,
    proList:[
      {
        "pic": "/images/img_bann1.jpg",
        "name": "玩出我的夏天"
      }, {
        "pic": "/images/img_bann2.jpg",
        "name": "你真棒"
      }, {
        "pic": "/images/img_bann3.jpg",
        "name": "毕业季"
      }, {
        "pic": "/images/img_bann4.jpg",
        "name": "干杯"
      }, {
        "pic": "/images/img_bann5.jpg",
        "name": "求抱抱"
      }, {
        "pic": "/images/img_bann6.jpg",
        "name": "宝贝谢谢你"
      }
    ],
    productList:[
      {
        "pic":"/images/img_product1.jpg",
        "name":"当季特饮",
        "price":40
      }, {
        "pic": "/images/img_product2.jpg",
        "name": "馥芮白",
        "price": 36
      }, {
        "pic": "/images/img_product3.jpg",
        "name": "焦糖玛奇朵",
        "price": 35
      }, {
        "pic": "/images/img_product4.jpg",
        "name": "拿铁",
        "price": 31
      }, {
        "pic": "/images/img_product5.jpg",
        "name": "冷萃冰咖啡",
        "price": 36
      }, {
        "pic": "/images/img_product6.jpg",
        "name": "锦云冷萃",
        "price": 42
      }, {
        "pic": "/images/img_product7.jpg",
        "name": "星礼卡",
        "price": 50
      }, {
        "pic": "/images/img_product7.jpg",
        "name": "星礼卡",
        "price": 100
      }, {
        "pic": "/images/img_product7.jpg",
        "name": "星礼卡",
        "price": 200
      }, {
        "pic": "/images/img_product7.jpg",
        "name": "星礼卡",
        "price": 288
      }, {
        "pic": "/images/img_product7.jpg",
        "name": "星礼卡",
        "price": 520
      }
    ],
    isShowDialog:false,
    dialogPic:"",
    dialogName:"",
    dialogPrice:""
  },

  /**
 * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var proList = this.data.proList;
    for (var i = 0; i < proList.length; i++) {
      proList[i].showView = false;
    }
    proList[0].showView = true;
    this.setData({
      barTitle:options.name,
      url:options.url,
      proList:proList
    })
  },

  toProListInfo: function (e) {
    var index = e.currentTarget.dataset.index;
    var proList = this.data.proList;
    var name = proList[index].name;
    var pic = proList[index].pic;
    var self = this;
    for (var i = 0; i < proList.length; i++) {
      proList[i].showView = false;
    }
    proList[index].showView = true;
    self.setData({
      toppic: pic,
      proList:proList
    });
  },

  toProductAdd:function (e) {
    var index = e.currentTarget.dataset.index;
    var productList = this.data.productList;
    var name = productList[index].name;
    var price = productList[index].price;
    wx.showToast({
      title: name + '  ￥' + price,
    })
  },

  toCopyrightMsg:function (e) {
    wx.showToast({
      title: '使用须知',
    })
  }, 

  toCoprightPrivate:function (e) {
    wx.showToast({
      title: '隐私政策',
    })
  },

  toPayInfo:function (e) {
    wx.showToast({
      title: '购买',
    })
  },

  toProductInfo:function (e) {
    var index = e.currentTarget.dataset.index;
    var productList = this.data.productList;
    var name = productList[index].name;
    var price = productList[index].price;
    var pic = productList[index].pic;
    var self = this;
    self.setData({
      isShowDialog:true,
      dialogPic:pic,
      dialogName:name,
      dialogPrice:price
    })
  },

  toDialogClose: function (e) {
    var self = this;
    self.setData({
      isShowDialog:false
    })
  },

  /**
 * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var barTitle = this.data.barTitle;
    wx.setNavigationBarTitle({
      title:barTitle
    })
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