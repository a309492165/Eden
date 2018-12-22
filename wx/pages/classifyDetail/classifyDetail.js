// pages/classifyDetail/classifyDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showPop: false,
    curIndex:-1,
    nav: ["店铺", "综合", "评价", "价格"],
    popList:[
      ['思甜忆苦'],
      ['价格从低到高','价格从高到低','上架时间','销量最多','打折最多'],
      ['好评最多'],
      ['0-100','100-300','300-600','600-1000','1000-2000']
    ],
    curPopIndex:-1,
    popItemList:[],
    shopList: [
      { id: 0, img: 'http://img2.imgtn.bdimg.com/it/u=2972896022,2526109288&fm=26&gp=0.jpg', desc: '美味蛋糕美味蛋糕美味蛋糕美味', price: 198 },
      { id: 1, img: 'http://img2.imgtn.bdimg.com/it/u=2972896022,2526109288&fm=26&gp=0.jpg', desc: '美味蛋糕美味蛋糕美味蛋糕美味', price: 298 },
      { id: 2, img: 'http://img2.imgtn.bdimg.com/it/u=2972896022,2526109288&fm=26&gp=0.jpg', desc: '美味蛋糕美味蛋糕美味蛋糕美味', price: 398 },
      { id: 3, img: 'http://img2.imgtn.bdimg.com/it/u=2972896022,2526109288&fm=26&gp=0.jpg', desc: '美味蛋糕美味蛋糕美味蛋糕美味', price: 398 },
      { id: 4, img: 'http://img2.imgtn.bdimg.com/it/u=2972896022,2526109288&fm=26&gp=0.jpg', desc: '美味蛋糕美味蛋糕美味蛋糕美味', price: 398 },
      { id: 5, img: 'http://img2.imgtn.bdimg.com/it/u=2972896022,2526109288&fm=26&gp=0.jpg', desc: '美味蛋糕美味蛋糕美味蛋糕美味', price: 398 }
    ]
  },
  handleShowModel(e){
    var index = e.target.dataset.index
    this.setData({
      showPop: true,
      curIndex:index
    })
    this.handleChangeItem(index)
    
    this.handleDisPop()
  },
  handleHideModel(){
    this.setData({
      showPop: false,
      curIndex: -1
    })
  },
  //添加不同选中条件
  handleChangeItem(index){
    let newList = [];
    for (var tmp in this.data.popList) {
      if (index == tmp) {
        newList = this.data.popList[tmp]
      }
    }
    this.setData({
      popItemList:newList
    })
  },
  //改变不同的选中对号**
  handleChangePop(e){
    let index = e.target.dataset.index
    this.setData({
      curPopIndex:index
    })
  },
  //清除的选中对号**
  handleDisPop(){
    this.setData({
      curPopIndex: -1
    })
  },
  //根据条件重排
  handleSelect(){
    console.log(123)
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