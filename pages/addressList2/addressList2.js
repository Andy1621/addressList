// pages/addressList2/addressList2.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'addresslist_holde1r',
        name: '我创建的通讯录',
        open: false,
        subName: ['火警', '盗警', '急救','asdas'],
        phone: ['119', '110', '120','asdasd']
      },
      {
        id: 'addresslist_holder2',
        name: '我加入的通讯录',
        open: false,
        subName: ['火警', '盗警', '急救','asd'],
        phone: ['119', '110', '120','asd']
      },
    ],
    navbar: ['名片夹', '通讯录'], //选项卡 导航
    currentTab: 0,//选项卡 索引
  },
  //展开按钮
  widgetsToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      }
    }
    this.setData({
      list: list
    });
  },
  fLongpress: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.id
    var index = e.currentTarget.dataset.index, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        wx.showModal({
          title: '提示',
          content: '确定要退出此通讯录吗？',
          success: function (res) {
            if (res.confirm) {
              console.log('点击确定了');
            } else if (res.cancel) {
              console.log('点击取消了');
              return false;
            }
            that.setData({
              list: list
            });
          }
        })
      }
    }
  },


  // 点击切换选项卡

  navbarTap: function (e) {

    this.setData({

      currentTab: e.currentTarget.dataset.idx

    })

    console.log('最怕空气突然安静(点击)' + e.target.dataset.idx)

  },

  // 点击切换选项卡

  trendsSwiperChange: function (e) {

    var that = this;

    that.setData({

      currentTab: e.detail.current

    });

    console.log('最怕朋友突然的关心(滑动)' + e.detail.current)

  },

  /**
   * button点击事件监听
   */
  jumpToCreate: function (e) {
    wx.navigateTo({
      url: '../createAddressList/createAddressList',
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