// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts:[],
    totalPrice:'0.00',
    hasList:false,
    selectAllStatus:false
  },
  //总价计数功能
  getTotalPrice() {
    let carts = this.data.carts;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
      if (carts[i].selected) {                   // 判断选中才会计算价格
        total += carts[i].count * carts[i].price;     // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2)
    });
  },
  //判断单选状态
  selectList(e) {
    const index = e.currentTarget.dataset.index;    // 获取data- 传进来的index
    let carts = this.data.carts;                    // 获取购物车列表
    const selected = carts[index].selected;         // 获取当前商品的选中状态
    carts[index].selected = !selected;              // 改变状态
    //判断selectAllStatus和selected单和全关系
    var result = true;                              
    for (var i = 0; i < this.data.carts.length; i++) {
      result = result && this.data.carts[i].selected
      console.log(this.data.carts[i].selected)
    }
    this.setData({
      carts: carts,
      selectAllStatus: result
    });
    this.getTotalPrice();                           // 重新获取总价
    //console.log(e);
  },
  //判断全选状态
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;    // 是否全选状态
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;            // 改变所有商品状态
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice();                               // 重新获取总价
  },

  // 增加数量
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].count;
    num = num + 1;
    carts[index].count = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  // 减少数量
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].count;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].count = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
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
    // 获取产品展示页保存的缓存数据（购物车的缓存数组，没有数据，则赋予一个空数组）  
    var arr = wx.getStorageSync('cart') || [];
    //console.info("缓存数据：" + arr);    // 有数据的话，就遍历数据，计算总金额 和 总数量  
    if (arr.length > 0) {
      // 更新数据  
      this.setData({
        carts: arr,
        iscart: true,
        hidden: false
      });
      console.info("缓存数据：" + arr);
    } else {
      this.setData({
        iscart: false,
        hidden: true,
      });
    }
    //console.log(this.data.carts,this.data.hasList);
    //判断是否有列表
    if (this.data.carts.length > 0) {
      this.setData({
        hasList: true
      })
    }else{
      this.setData({
        hasList: false
      })
    }
    //循环插入多选框判断条件
    for (var i = 0; i < this.data.carts.length; i++) {
      this.data.carts[i].selected = false
    } 
  },
  //删除列表项
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    if (this.data.carts.length > 0) {
      carts.splice(index, 1);              // 删除购物车列表里这个商品
      this.setData({
        carts: carts
      });
      this.getTotalPrice();           // 重新计算总价格
      wx.setStorageSync('cart', this.data.carts);
      if (this.data.carts.length == 0){
        this.setData({
          hasList: false                // 修改标识为false，显示购物车为空页面
        });
        console.log(this.data.carts)
        wx.setStorageSync('cart', []);  //设置为空缓存列表
      }
    }
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