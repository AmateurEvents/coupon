Page({
  data: {
    inputShowed: false,
    inputVal: "",
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  searchData: function (e) {
    console.log(e.detail)
    this.setData({
      inputVal: e.detail.value
    })
  },
  startSearch: function (e) {
    wx.navigateTo({
      //目的页面地址
      url: '../../pages/search/search?value=' + e.detail.value,
      success: function (res) { 
        console.log("success")
      },
    })
  }
});
