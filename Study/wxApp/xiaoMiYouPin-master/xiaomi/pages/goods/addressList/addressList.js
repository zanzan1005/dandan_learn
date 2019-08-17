//pages/goods/addressList/addressList.js
Page({
  data: {
    addressList:[]
  },
  onLoad: function (options) {
    var arr = wx.getStorageSync('addressList') || [];
    console.info("缓存数据：" + arr);
    // 更新数据  
    this.setData({
      addressList: arr
    });
  },
  onShow: function () {
    this.onLoad();
  },
  addAddress:function(){
    wx.navigateTo({ 
      url: '../../goods/address/address' 
    });
  },
  /* 删除item */
  delAddress: function (e) {
    this.data.addressList.splice(e.target.id.substring(3), 1);
    // 更新data数据对象  
    if (this.data.addressList.length > 0) {
      this.setData({
        addressList: this.data.addressList
      })
      wx.setStorageSync('addressList', this.data.addressList);
    } else {
      this.setData({
        addressList: this.data.addressList
      })
      wx.setStorageSync('addressList', []);
    }
  }
})