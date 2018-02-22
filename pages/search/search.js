const { Tab, extend } = require('../../dist/index');

Page(extend({}, Tab,{
  data: {
    inputShowed: false,
    showResult: false,
    inputVal: "",
    loading: false,
    nodata: true,
    nomore: false,
    couponList: [],
    sort_method: {
      list: [{
        id: 'commission_rate_desc',
        title: '默认'
      }, {
        id: 'new',
        title: '最新'
      }, {
        id: 'sale_num',
        title: '销量'
      }, {
        id: 'price_asc',
        title: '价格'
      }, {
        id: 'commission_rate_descsign',
        title: '券额'
      }],
      selectedId: 'commission_rate_desc'
    },
  },
  onLoad: function (res) {
    this.setData({
      inputVal: res.value
    })
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
      nodata: false,
      loading: true,
    })
    this.setData({
      inputVal: e.detail.value,
      loading: false,
      showResult: true,
      couponList: [
        {
          "ItemPic": "../../images/taobao.png",
          "ItemName": "test0",
          "QuanHouJia": 200,
          "ItemPrice": 300,
          "MonthlySales": 2000,
          "Jian": 100
        }, {
          "ItemPic": "../../images/taobao.png",
          "ItemName": "test1",
          "QuanHouJia": 200,
          "ItemPrice": 300,
          "MonthlySales": 2000,
          "Jian": 100
        }, {
          "ItemPic": "../../images/taobao.png",
          "ItemName": "test2",
          "QuanHouJia": 200,
          "ItemPrice": 300,
          "MonthlySales": 2000,
          "Jian": 100
        }, {
          "ItemPic": "../../images/taobao.png",
          "ItemName": "test",
          "QuanHouJia": 200,
          "ItemPrice": 300,
          "MonthlySales": 2000,
          "Jian": 100
        }, {
          "ItemPic": "../../images/taobao.png",
          "ItemName": "test",
          "QuanHouJia": 200,
          "ItemPrice": 300,
          "MonthlySales": 2000,
          "Jian": 100
        }, {
          "ItemPic": "../../images/taobao.png",
          "ItemName": "test",
          "QuanHouJia": 200,
          "ItemPrice": 300,
          "MonthlySales": 2000,
          "Jian": 100
        }, {
          "ItemPic": "../../images/taobao.png",
          "ItemName": "test",
          "QuanHouJia": 200,
          "ItemPrice": 300,
          "MonthlySales": 2000,
          "Jian": 100
        }, {
          "ItemPic": "../../images/taobao.png",
          "ItemName": "test",
          "QuanHouJia": 200,
          "ItemPrice": 300,
          "MonthlySales": 2000,
          "Jian": 100
        }, {
          "ItemPic": "../../images/taobao.png",
          "ItemName": "test",
          "QuanHouJia": 200,
          "ItemPrice": 300,
          "MonthlySales": 2000,
          "Jian": 100
        }, {
          "ItemPic": "../../images/taobao.png",
          "ItemName": "test",
          "QuanHouJia": 200,
          "ItemPrice": 300,
          "MonthlySales": 2000,
          "Jian": 100
        }]
    })
  },
  handleZanTabChange(e) {
    console.log(e)
    var componentId = e.componentId;
    var selectedId = e.selectedId;
    // if (componentId === "sort_method") {
    //   this.setData({
    //     sort: selectedId
    //   })
    // }
    this.setData({
      [`${componentId}.selectedId`]: selectedId,
      // couponList: [],
      // pageIndex: 0,
    });
  },
}));
