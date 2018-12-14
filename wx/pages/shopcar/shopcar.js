// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts:[
      { id: 0, desc: '美味蛋糕美味蛋糕美味蛋糕美味', addr: '三环以内免费送货三环以内免货', price: 198, num: 1 },
      { id: 1, desc: '美味蛋糕美味蛋糕美味蛋糕美味', addr: '三环以内免费送货三环以内免货', price: 298, num: 3 },
      { id: 2, desc: '美味蛋糕美味蛋糕美味蛋糕美味', addr: '三环以内免费送货三环以内免货', price: 398, num: 2 },
      { id: 3, desc: '美味蛋糕美味蛋糕美味蛋糕美味', addr: '三环以内免费送货三环以内免货', price: 298, num: 3 }, 
      { id: 4, desc: '美味蛋糕美味蛋糕美味蛋糕美味', addr: '三环以内免费送货三环以内免货', price: 298, num: 3 },
    ],
    totalPrice:'0.00',
    hasList:false,
    selectAllStatus:false
  },
  getTotalPrice() {
    let carts = this.data.carts;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
      if (carts[i].selected) {                   // 判断选中才会计算价格
        total += carts[i].num * carts[i].price;     // 所有价格加起来
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
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  // 计算数量
  // modifyCount(e){
  //   const index = e.currentTarget.dataset.index;
  //   const state = e.currentTarget.dataset.state;
  //   let carts = this.data.carts;
  //   let num = carts[index].num;
  //   if (state){
  //     num++;
  //     carts[index].num = num;
  //     this.setData({
  //       carts:carts
  //     });
  //   }else{
  //     if (carts[index].num == 1){
  //       return
  //     };
  //     num--;
  //     carts[index].num = num;
  //     this.setData({
  //       carts: carts
  //     });
  //     console.log(state);
  //   }
    
  // },  
  // 增加数量
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  // 减少数量
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  //删除列表项
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index, 1);              // 删除购物车列表里这个商品
    this.setData({
      carts: carts
    });
    if (!carts.length) {                  // 如果购物车为空
      this.setData({
        hasList: false              // 修改标识为false，显示购物车为空页面
      });
    } else {                              // 如果不为空
      this.getTotalPrice();           // 重新计算总价格
    }
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
    //判断是否有列表
    if (this.data.carts.length > 0) {
      this.setData({
        hasList: true
      })
    }
    console.log(this.data.hasList);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //循环插入多选框判断条件
    for (var i = 0; i < this.data.carts.length; i++) {
      this.data.carts[i].selected = false
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