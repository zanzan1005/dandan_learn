// pages/play/play.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id);
    const id = options.id;
    wx.request({
      url:'http://neteasecloudmusicapi.zhaoboy.com/song/url',
      data:{
        id:id
      },
      success:res => {
        console.log('歌曲详情',res);
        if (res.data.code === 200){
          this.creatBackgroundAudio(res.data.data[0] || {});
        }
      }
    })
    wx.request({
      url:'http://neteasecloudmusicapi.zhaoboy.com/song/detail',
      data:{
        ids:id
      },
      success:(res) => {
        console.log('歌曲信息',res);

        this.setData({
          song:res.data.songs[0]
        })
      }
    })
  },
  creatBackgroundAudio(songInfo){
    const bgAudio = wx.getBackgroundAudioManager();
    bgAudio.title= "title";
    bgAudio.epname = "epname";
    bgAudio.singer = "chris wu";
    bgAudio.coverImgUrl = "";
    bgAudio.src = songInfo.url;
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
