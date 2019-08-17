// pages/category/category.js
Page({
  data: {
    category:[
      { name: '有品推荐', id: 'youpin' },
      { name: '家用电器', id: 'dianqi' },
      { name: '智能家庭', id: 'zhineng' },
      { name: '家具家装', id: 'jiaju' },
      { name: '居家餐厨', id: 'canchu' },
      { name: '运动户外', id: 'yundong' },
      { name: '电视影音', id: 'dianshi'},
      { name: '日用文创', id: 'riyong' },
      { name: '服装配饰', id: 'fuzhuang' },
      { name: '鞋靴箱包', id: 'xiexue' },
      { name: '美妆个护', id: 'meizhuang' },
      { name: '手机电脑', id: 'shouji' },
      { name: '数码配件', id: 'shuma' },
      { name: '出行车品', id: 'chuxing' },
      { name: '美食酒饮', id: 'meishi' }
      // { name: '医疗健康', id: 'yiliao' },
      // { name: '母婴亲子', id: 'muying' },
      // { name: '宠物生活', id: 'chongwu' },
    ],
    detail: [],
    detailList: {},
    curIndex:0,
    toView:"youpin",
  },
  switchTab(e){
    let currentId = e.currentTarget.dataset.id
    let currentIndex = e.currentTarget.dataset.index
    this.setData({
      detailList: this.data.detail[currentIndex],
      curIndex: currentIndex
    })
  },
  
  onReady: function () {
    let self = this
    wx.request({
      url:"https://www.easy-mock.com/mock/5cf269c364873463eb866309/test/xiaomiyoupin",
      success(res){
        console.log(res)
        self.setData({
          detail:res.data.data,
          detailList: res.data.data[0]
        })
      }
    })
  }
})
