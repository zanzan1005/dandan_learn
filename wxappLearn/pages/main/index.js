Page({
  data: {
    city: '南昌',
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    items:[]
  },
  //在所有的方法中如果this 不更改都指向数据源，data
  onLoad(){
    //最先执行的生命周期
    // console.log(this.data.city)
    let that = this
    wx.request({
      url:'https://www.easy-mock.com/mock/5cbf00d8330edc5317b8164b/haha',
      success:function(res){
        console.log(res)
        that.setData({
          items:res.data.data.movieList
        });
        console.log(that.data.items)
      }
    })
  },
  onPullDownRefresh(){
    console.log(12234)
  },
  onReachBottom(){
    console.log(666)
  }
})