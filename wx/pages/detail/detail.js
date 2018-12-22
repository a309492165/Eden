// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播
    imgUrls: [
      { id: 1, url: 'http://hbimg.b0.upaiyun.com/1cb8381936569e88ae30c4a7e02575f2d312f7a53402-aYtOBQ_fw658' },
      { id: 2, url: 'http://img.zcool.cn/community/01218559df1f79a80121ae0c60c470.jpg@1280w_1l_2o_100sh.jpg' },
      { id: 3, url: 'http://hbimg.b0.upaiyun.com/f8034cce77f379e18be14a1af481571607cad4492a8c-Zf8lnc_fw658' }
    ],
    //评价
    commentList:[
      { id: 1, name: '实物外观' },
      { id: 2, name: '商品质量' },
      { id: 3, name: '服务质量' },
      {id:4,name:'配送效率'}
    ],
    //判断图文详情
    curIndex:0,
    navList:[
      { id: 1, title: "图文详情" },
      { id: 2, title: "产品参数" },
      {id:3,title:"相关推荐"},
    ],
    //轮播图高度自适应解决方案有小case
    swiperHeight:null,
    imgheights:[],
    imgDetailList:[
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545297310007&di=fba9dfcf06ef56e5ee7a72fcf5e58c2f&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F10%2F98%2F08%2F61t58PICFyS.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545298183223&di=4645e4c7ea53168f597ef40d1bc26c01&imgtype=0&src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FXSsGFTsgekILFSTnTGspzE4TZNkNnYtRe4OCyI8p0OJouI64PLnDNyiI08ZHM8ZfTYGVDmosZWTLal1WbWRW3A.jpg",      "http://img.juimg.com/tuku/yulantu/120522/183791-120522103U074.jpg"
    ],
    shopList: [
      { id: 0, img: 'http://img2.imgtn.bdimg.com/it/u=2972896022,2526109288&fm=26&gp=0.jpg', desc: '美味蛋糕美味蛋糕美味蛋糕美味', price: 198 },
      { id: 1, img: 'http://img2.imgtn.bdimg.com/it/u=2972896022,2526109288&fm=26&gp=0.jpg', desc: '美味蛋糕美味蛋糕美味蛋糕美味', price: 298 },
      { id: 2, img: 'http://img2.imgtn.bdimg.com/it/u=2972896022,2526109288&fm=26&gp=0.jpg', desc: '美味蛋糕美味蛋糕美味蛋糕美味', price: 398 },
      { id: 3, img: 'http://img2.imgtn.bdimg.com/it/u=2972896022,2526109288&fm=26&gp=0.jpg', desc: '美味蛋糕美味蛋糕美味蛋糕美味', price: 398 }
    ],
    //购物或购买
    payCart:['加入购物车','立即购买'],
    //模态层
    showPop: false,
  },
  // 图片自适应
  imageLoad(e) {
    var imgheight = e.detail.height,
      imgwidth = e.detail.width,
      //宽高比  
      ratio = imgwidth / imgheight;
    //计算的高度值  
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight;
    var imgheights = this.data.imgheights;
    //把每一张图片的对应的高度记录到数组里  
    imgheights[e.target.dataset.index] = imgheight;
    this.setData({
      imgheights: imgheights
    })
    //小case遍历重置swiper高度问题
    var count = 0;
    for(var item of this.data.imgheights){
      count += item;
    }
    this.setData({
      swiperHeight: count
    })
  },
  //改变高度
  handleHeight(tmpName){
    const query = wx.createSelectorQuery()
    var that = this
    query.select(tmpName).boundingClientRect((rect) => {
      console.log(rect.height)
      that.setData({
        swiperHeight: rect.height*2+20
      })
    }).exec();
  },
  // 相关侧滑 
  handleNav(e){
    let index = e.target.dataset.index;
    this.setData({
      curIndex:index
    })
  },
  handleSwiper(e){
    let index = e.detail.current;
    this.setData({
      curIndex: index
    })
    if (this.data.curIndex == 1){
      this.handleHeight('.relevant-navItem-pro')
    }else if(this.data.curIndex == 2) {
      this.handleHeight('.relevant-navItem-recommend')
    }else{
      this.imageLoad(e)
    }
  },
  
  // 电话接口
  handleCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.replyPhone,
      success: function () {
        console.log("成功拨打电话")
      },
    })
  },
  handleDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail'
    })
  },
  handleShowModel(e) {
    console.log(e.target.dataset.index)
    this.setData({
      showPop: true
    })  
  },
  handleHideModel() {
    this.setData({
      showPop: false
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