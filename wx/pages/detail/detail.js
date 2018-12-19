// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      { id: 1, url: 'http://hbimg.b0.upaiyun.com/1cb8381936569e88ae30c4a7e02575f2d312f7a53402-aYtOBQ_fw658' },
      { id: 2, url: 'http://img.zcool.cn/community/01218559df1f79a80121ae0c60c470.jpg@1280w_1l_2o_100sh.jpg' },
      { id: 3, url: 'http://hbimg.b0.upaiyun.com/f8034cce77f379e18be14a1af481571607cad4492a8c-Zf8lnc_fw658' }
    ],
    commentList:[
      { id: 1, name: '实物外观' },
      { id: 2, name: '商品质量' },
      { id: 3, name: '服务质量' },
      {id:4,name:'配送效率'}
    ]
  },
  handleCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.replyPhone,
      success: function () {
        console.log("成功拨打电话")
      },
    })
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