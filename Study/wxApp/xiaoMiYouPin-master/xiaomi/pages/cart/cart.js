const app = getApp();
Page({
  data: {
    hasGoods: false,
    carts: [],// 购物车列表
    count: 1,   
    selectAllStatus: true,
    getTotalPrice: '',
    totalPrice: 0,
    totalNum: 0
  },
  onShow: function () {
    setTimeout(() => {
      console.log(app.globalData.cart)
      this.setData({
        hasGoods: true,
        carts: app.globalData.cart
      })
      this.getTotalPrice()
    }, 1000)
  },   
  selectAll() {
    let selectAllStatus = this.data.selectAllStatus
    selectAllStatus = !selectAllStatus
    let carts = this.data.carts
    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus
    }
    this.setData({
      selectAllStatus,
      carts
    })
    this.getTotalPrice()
  },
  selectList (e) {
    console.log(e.currentTarget.dataset.index)
    let oIndex = e.currentTarget.dataset.index
    let carts = this.data.carts
    let test = carts[oIndex].selected
    test = !test
    let cartSelect = `carts[${oIndex}].selected`
    this.setData({
      [cartSelect]: test
    })
    if (this.data.carts.find(function(e) {return e.selected === false})) {
      this.setData({
        selectAllStatus: false
      })
    } else {
      this.setData({
        selectAllStatus: true
      })
    }
    this.getTotalPrice()
  },
  getTotalPrice() {
    let carts = this.data.carts
    let total = 0
    let totalNum = 0
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].selected) {
        total += carts[i].num * carts[i].price
        totalNum += carts[i].num
      }
    }
    this.setData({
      totalPrice: total.toFixed(2),
      totalNum
    })
  },
  minusCount(e) {
    // console.log(e)
    const index = e.target.id
    let carts = this.data.carts
    // console.log(index,carts)
    let num = carts[index].num
    if (num <= 1) {
      return
    }
    num = num - 1
    carts[index].num = num
    this.setData({
      carts: carts
    })
    this.getTotalPrice()
  },
  addCount(e) {
    // console.log(e)
    const index = e.target.id
    let carts = this.data.carts
    let num = carts[index].num
    num = num + 1
    carts[index].num = num
    this.setData({
      carts: carts
    })
    this.getTotalPrice()
  },
  toBuy: function() {
    wx.navigateTo({
      url: '../goods/buy/buy'
    })
  },
  goIndex:function(){
    wx.switchTab({
      url: '../../pages/index/index'
    })
  }
  // deleteList(e) {
  //   const index = e.target.dataset.index
  //   let carts = this.data.carts
  //   carts.splice(index, 1)
  //   this.setData({
  //     carts: carts
  //   })
  //   if (!carts.length) {
  //     this.setData({
  //       hasList: false
  //     })
  //   } else {
  //     this.getTotalPrice()
  //   }
  // }
})