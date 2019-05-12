// pages/categories/categories.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category:[
      {name:'日常保洁',id:'baojie'},
      {name:'保姆月嫂',id:'baomu'},
      {name:'搬家',id:'banjia'},
      {name:'房屋维修',id:'fangwu'},
      {name:'家电维修',id:'jiadian'},
      {name:'数码维修',id:'shuma'},
      {name:'上门安装',id:'shangmen'},
      {name:'鲜花绿植',id:'xianhua'},
      {name:'丽人',id:'liren'},
      {name:'汽车',id:'qiche'},
      {name:'便民服务',id:'bianmin'}
    ],
    Dailycleaning:[
      {name:'日常保洁',id:'richang'},
      {name:'深度保洁',id:'shendu'},
      {name:'周期保洁',id:'zhouqi'}
    ],
    Householdcleaning:[
      {name:'洗衣机',id:'xiyiji'},
      {name:'油烟机',id:'youyanji'},
      {name:'空调',id:'kongtiao'},
      {name:'冰箱',id:'bingxiang'},
      {name:'热水器',id:'reshuiqi'},
      {name:'饮水机',id:'yinshuiji'},
      {name:'微波炉',id:'weibolu'}
    ],
    Homecleaning:[
      {name:'擦玻璃',id:'caboli'},
      {name:'洗纱窗',id:'xishachuang'},
      {name:'洗窗帘',id:'xichuanglian'},
      {name:'灯具清洗',id:'dengjuqingxi'},
      {name:'床垫清洗',id:'chuangdianqingxi'},
      {name:'地毯清洗',id:'maotanqingxi'}
    ],
    Airtreatment:[
      {name:'房屋消毒',id:'fangwuxiaodu'},
      {name:'除甲醛',id:'chujiaquan'},
      {name:'除异味',id:'chuyiwei'},
      {name:'甲醛检测',id:'jiaquanjiance'},
      {name:'新风系统',id:'xinfengxitong'}
    ],
    Homemaintenance:[
      {name:'家具保养',id:'jiajubaoyang'},
      {name:'沙发保养',id:'shafabaoyang'},
      {name:'墙面保养',id:'qiangmianbaoyang'},
      {name:'地板打蜡',id:'dibandala'},
      {name:'瓷砖美缝',id:'cizhuanmeifeng'},
      {name:'地暖清洗',id:'dinuanqingxi'}
    ],
    Removinginsects:[
      {name:'除虫灭鼠',id:'chuchongmieshu'},
      {name:'除螨虫',id:'chumanchong'}
    ],
    Hometextiles:[
      {name:'洗鞋',id:'xiexi'},
      {name:'洗衣',id:'xiyi'},
      {name:'修鞋',id:'xiuxie'},
      {name:'洗家纺',id:'xijiafang'},
      {name:'奢侈品洗护',id:'shechipinxihu'},
      {name:'改衣修补',id:'gaiyixiubu'}
    ],
    Nanny:[
      {name:'保姆',id:'baomu'},
      {name:'月嫂',id:'yuesao'},
      {name:'育儿嫂',id:'yuersao'}
    ],
    Housemoving:[
      {name:'普通搬家',id:'putongbanjia'},
      {name:'日式搬家',id:'rishibanjia'},
      {name:'企业搬家',id:'qiyebanjia'},
      {name:'跨省搬家',id:'kuashengbanjia'}
    ],
    Rushpipe:[
      {name:'马桶疏通',id:'matongshutong'},
      {name:'地漏疏通',id:'diloushutong'},
      {name:'洗菜盆疏通',id:'xicaipenshutong'},
      {name:'洗手池疏通',id:'xishouchishutong'},
      {name:'浴缸疏通',id:'yugangshutong'},
      {name:'蹲坑疏通',id:'dunkengshutong'},
      {name:'小便池疏通',id:'xiaobianchishutong'}
    ],
    Waterwaymaintenance:[
      {name:'水管维修',id:'shuiguanweixiu'},
      {name:'龙头维修',id:'longtouweixiu'},
      {name:'阀门维修',id:'famenweixiu'}
    ],
    Circuitmaintenance:[
      {name:'开关维修',id:'kaiguanweixiu'},
      {name:'插座维修',id:'chazuoweixiu'},
      {name:'电路检测改造',id:'dianlujiancegaizao'},
      {name:'灯具维修',id:'dengjuweixiu'}
    ],
    Leakageprevention:[
      {name:'全部服务',id:'quanbufuwu'},
      {name:'外墙防水',id:'waiqiangfangshui'},
      {name:'厨卫防水',id:'chuweifangshui'},
      {name:'阳台防水',id:'yangtaifangshui'},
      {name:'房屋漏水',id:'fangwuloushui'}
    ],
    MaintenanceCurtain:[
      {name:'窗帘杆维修',id:'chuanglianganweixiu'},
      {name:'晾衣架维修',id:'liangyijiaweixiu'},
      {name:'地热暖气维修',id:'direnuanqiweixiu'},
      {name:'五金配件维修',id:'wujinpeijianweixiu'}
    ],
    Kitchenware:[
      {name:'马桶维修',id:'matongweixiu'},
      {name:'地漏维修',id:'dilouweixiu'},
      {name:'洗手盆维修',id:'xishoupenweixiu'},
      {name:'淋浴花洒维修',id:'linyuhuasaweixiu'},
      {name:'浴霸维修',id:'yubaweixiu'},
      {name:'浴缸维修',id:'yugangweixiu'},
      {name:'换气扇维修',id:'huanqishanweixiu'},
      {name:'淋浴房维修',id:'linyufangweixiu'},
      {name:'厨卫挂件维修',id:'chuweiguajianweixiu'}
    ],
    Wallsurface:[
      {name:'全部服务',id:'quanbufuwu'},
      {name:'地毯维修',id:'ditanweixiu'},
      {name:'吊顶',id:'diaoding'},
      {name:'外墙保湿',id:'waiqiangbaoshi'},
      {name:''}
    ],
    isScorll:true,
    toView:'baojie',
    detail:[],
    curIndex:0
  },
  switchTab(e){
    console.log(e)
    // this.setData({
    //     toView:e.target.dataset.id,
    //     curIndex:e.target.dataset.index
    // })
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