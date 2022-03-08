// pages/demo02/demo02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: Number(0),
    Person: {
      age:21,
      Height:183,
      Weight:140
    }
  },
  // onInput(e){
  //   console.log("😊"),
  //   console.log(e),
  //   console.log(e.detail.value)
  //   this.setData({
  //     num:parseInt(e.detail.value)
  //   }),
  //   this.setData({
  //     // Person.age:e.detail.value
  //     ['Person.age']: e.detail.value
  //   })
  // },
  onTap(e){
    // e.get
    // console.log(e),
     
   // const targetdata=e.currentTarget.dataset.operation,
    const operation = e.currentTarget.dataset.operation;
   //val evalue;
    console.log("操作数%d",operation),
    console.log("数字%d",this.data.num),
    // this.setData({
    //   num: Number(this.num) + Number(operation)         //2022/3/1 晚 未解决这个Null的问题
    // }),
    this.setData({
      num: this.data.num+operation
    })
    // console.log(this.data.num),
    // console.log(operation)

    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log()
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