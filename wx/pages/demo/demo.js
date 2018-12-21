// pages/demo/demo.js
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({
  data:{

  },
  onLoad: function () {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'SXJBZ-QTXHR-MUYWW-WPGTM-U3ANH-Z4FSE'
    });
  },
  onShow: function () {
    // 调用接口
    qqmapsdk.getCityList({
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });
  }
  })
// Page({
//   onReady: function (e) {
//     // 使用 wx.createMapContext 获取 map 上下文
//     this.mapCtx = wx.createMapContext('myMap')
//   },
//   getCenterLocation: function () {
//     this.mapCtx.getCenterLocation({
//       success: function (res) {
//         console.log(res.longitude)
//         console.log(res.latitude)
//       }
//     })
//   },
//   /**
//    * 页面的初始数据
//    */
//   data: {

//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {

//   },

  

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })