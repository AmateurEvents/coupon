const Zan = require('../../dist/index');


Page(Object.assign({}, Zan.Dialog, {
  data: {
    couponInfo: {},
    picWidth: wx.getSystemInfoSync().windowWidth,
    platformTypeUrl: "../../images/taobao.png",
    loadingBtn: false,
    showStatus: false,
    content: "",
    maxLength: 0
  },
  onShow: function () {
    wx.setStorageSync('isDetailBack', true)
  },
  onLoad: function (options) {
    this.setData({
      couponInfo: wx.getStorageSync('couponInfo')
    })
    if (this.data.couponInfo.PlatformType == "天猫")
      this.setData({
        platformTypeUrl: "../../images/tmall.png"
      })
  },
  hideView: function () {
    this.setData({
      showStatus: false
    })
  },
  getCoupon: function (options) {
    var that = this;
    that.setData({
      loadingBtn: true
    })
    var InfoData = {
        "message": "success", "data": { "content": "\u6253\u5f00\u624b\u673a\u6dd8\u5b9d\u5929\u732b\u5ba2\u6237\u7aef\u5373\u53ef\u4f7f\u7528", "info_id": "\uffe5lEoJ0nBsWGa\uffe5" }, "errcode": 10000, "getCouponTitle": "\u83b7\u53d6\u6210\u529f", "getCouponInfo": "\u606d\u559c\u83b7\u5f97\u8be5\u5238\uff0c\u8bf7\u8054\u7cfb\u5ba2\u670d" }
    wx.setClipboardData({
      data: InfoData.data.info_id,
      success: function (res) {
        that.setData({
          content: InfoData.data.content,
          loadingBtn: false,
          showStatus: true,
          maxLength: InfoData.data.content.length
        })
      },
    })
    that.showZanDialog({
      title: '复制成功',
      content: InfoData.data.content,
      buttons: [{
        text: '使用教程',
        type: 'explain'
      }, {
        text: '确定',
        color: '#3CC51F',
        type: 'confirm'
      }]
    }).then(({ type }) => {
      if (type === 'explain') {
        wx.navigateTo({
          url: "../../pages/explain/explain",
        })
      }
      console.log('=== dialog with custom buttons ===', `type: ${type}`);
    });
    // 在有服务端时使用
    // wx.request({
    //   url: "https://tuteng2345.applinzi.com/api/v1/word",
    //   data: {
    //     "ItemID": that.data.couponInfo.ItemID,
    //     "CouponID": that.data.couponInfo.CouponID,
    //     "text": that.data.couponInfo.ItemName
    //   },
    //   method: "POST",
    //   success: function (resRequest) {
    //     if (resRequest.statusCode === 200 && resRequest.data.errcode === 10000) {
    //       wx.setClipboardData({
    //         data: resRequest.data.data.info_id,
    //         success: function (res) {
    //           that.setData({
    //             content: resRequest.data.data.content,
    //             loadingBtn: false,
    //             showStatus: true,
    //             maxLength: resRequest.data.data.content.length
    //           })
    //         },
    //       }) 
    //       that.showZanDialog({
    //         title: '复制成功',
    //         content: resRequest.data.data.content,
    //         buttons: [{
    //           text: '使用教程',
    //           type: 'explain'
    //         }, {
    //           text: '确定',
    //           color: '#3CC51F',
    //           type: 'confirm'
    //         }]
    //       }).then(({ type }) => {
    //         if (type === 'explain') {
    //             wx.navigateTo({
    //               url: "../../pages/explain/explain",
    //             })
    //         }
    //         console.log('=== dialog with custom buttons ===', `type: ${type}`);
    //       });
    //     }
    //   }
    // })
  }
}))
