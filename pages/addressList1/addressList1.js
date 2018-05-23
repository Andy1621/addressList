// pages/addressList1/addressList1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        // id: 'card_holder',
        // name: '名片夹',
        // open: false,
        // subName: ['火警', '盗警', '急救'],
        // phone: ['119', '110', '120']
        id: 'card_holder',
        name: '名片夹',
        open: false,
        subName: ['火警', '盗警', '急救'],
        phone: ['119', '110', '120']
      }, {
        id: 'special_attention',
        name: '特别关注',
        open: false,
        subName: ['工商银行', '建设银行', '农业银行', '中国银行', '交通银行', '浦发银行', '民生银行', '兴业银行', '中信银行', '深圳发展银行', '华夏银行', '招商银行', '广发银行', '广东农信', '光大银行'],
        phone: ['95588', '95533', '95599', '95566', '95559', '95528', '95568', '95561', '95558', '95501', '95577', '95555', '95508', '96138', '95595']
      }, {
        id: 'blacklist',
        name: '黑名单',
        open: false,
        subName: ['申通快递', 'EMS', '第三人民医院', '顺丰速运', '	圆通速递', '中通速递', '韵达快运', '天天快递', '汇通快运', '速尔快递', '德邦物流', '中铁快运', '鑫飞鸿快递', 'UPS', 'FedEx(联邦快递)'],
        phone: ['4008895543', '4008100999', '400-811-1111', '021-69777888', '021-39777777', '021-39207888', '021-67662333', '021-62963636', '4008822168', '4008305555', '95572', '021-69781999', '4008208388', '4008861888']
      }
    ]
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
  fLongpress:function(e){
    var that=this;
    var id = e.currentTarget.dataset.id
    var index = e.currentTarget.dataset.index, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        wx.showModal({
          title: '提示',
          content: '确定要删除此名片吗？',
          success: function (res) {
            if (res.confirm) {
              console.log('点击确定了');
            } else if (res.cancel) {
              console.log('点击取消了');
              return false;
            }
            that.setData({
              list:list
            });
          }
       })
      }
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