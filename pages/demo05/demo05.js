// pages/demo05/demo05.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:0,
        name:"苹果",
        price:8999
      },
      {
        id:1,
        name:"一加",
        price:4599
      },
      {
        id:2,
        name:"小米",
        price:3499
      }
    ],
    SelectedList:[],
    tabs:[
      {
        id:0,
        name:"首页",
        isActive:false
      },
      {
        id:1,
        name:"原创",
        isActive:false
      },
      {
        id:2,
        name:"分类",
        isActive:false
      },
      {
        id:3,
        name:"关于",
        isActive:false
      }
    ]
  },
  onCheckBoxSelect(e){
    //console.log(e)
    const selist=e.detail.value;
    console.log(selist),
    this.setData({
      SelectedList:selist
    })
    // this.setData({
    //   SelectedList=e.detail.value
    // })
  },
  onTabItemChange(e){
    console.log(e)
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