// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classList: [
      {id:1,class_name:"精美蛋糕",ishaveChild:true,children:[
        { child_id: 1,img: 'http://img2.imgtn.bdimg.com/it/u=2972896022,2526109288&fm=26&gp=0.jpg', desc: '美味蛋糕'},
        { child_id: 2, img: 'http://img2.imgtn.bdimg.com/it/u=2972896022,2526109288&fm=26&gp=0.jpg', desc: '美味蛋糕' },
        { child_id: 3, img: 'http://img2.imgtn.bdimg.com/it/u=2972896022,2526109288&fm=26&gp=0.jpg', desc: '美味蛋糕' }
        ]
      },
      {
        id: 2, class_name: "美味慕斯", ishaveChild: true, children: [
          { child_id: 1, img: 'http://img2.imgtn.bdimg.com/it/u=2972896022,2526109288&fm=26&gp=0.jpg', desc: '美味蛋糕' },
          { child_id: 2, img: 'http://img2.imgtn.bdimg.com/it/u=2972896022,2526109288&fm=26&gp=0.jpg', desc: '美味蛋糕' },
          { child_id: 3, img: 'http://img2.imgtn.bdimg.com/it/u=2972896022,2526109288&fm=26&gp=0.jpg', desc: '美味蛋糕' },
          { child_id: 4, img: 'http://img2.imgtn.bdimg.com/it/u=2972896022,2526109288&fm=26&gp=0.jpg', desc: '美味蛋糕' },
          { child_id: 5, img: 'http://img2.imgtn.bdimg.com/it/u=2972896022,2526109288&fm=26&gp=0.jpg', desc: '美味蛋糕' }
        ]
      },
      {
        id: 3, class_name: "庆典祝寿", ishaveChild: false, children: []
      }
    ],
    curNav:1,
    curIndex:0
  },
  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
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