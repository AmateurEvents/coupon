const { Tab, extend } = require('../../dist/index');

Page(extend({}, Tab, {
  data: {
    inputShowed: false,
    inputVal: "",
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    couponList: [],
    inputContent: "",
    selectCategory: 0,
    sort: "commission_rate_desc",
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    cate_method: {},    
    sort_method: {},
    cate_src: []
  },
  onShow: function () {
    this.setData({
      couponList: [],
      pageIndex: 0,
      isLoading: true,
      loadOver: false,
    })
    this.getMoreCouponList()
  },
  onLoad: function (options) {
    // this.getCategoryList()
    var that = this;
      this.setData({
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
        cate_method: {
          list: [{
            id: '1',
            title: '全部'
          }, {
            id: '2',
            title: '女装'
          }, {
            id: '3',
            title: '男装'
          }, {
            id: '4',
            title: '鞋子'
          }, {
            id: '5',
            title: '箱包'
          }, {
            id: '6',
            title: '母婴'
          }, {
            id: '7',
            title: '内衣'
          }, {
            id: '8',
            title: '美妆'
          }, {
            id: '9',
            title: '配饰'
          }, {
            id: '10',
            title: '家居'
          }, {
            id: '11',
            title: '文体'
          }, {
            id: '12',
            title: '数码'
          }, {
            id: '13',
            title: '电器'
          }, {
            id: '14',
            title: '美食'
          }, {
            id: '15',
            title: '其他'
          }],
          selectedId: '1',
          scroll: true,
          height: 42,
        },
        cate_src: [
          {
            mode: 'scaleToFill',
            text: '九块九',
            picture: '../../images/jkj.png',
          },
          {
            mode: 'scaleToFill',
            text: '20封顶',
            picture: '../../images/hot.png',
          },
          {
            mode: 'scaleToFill',
            text: '爆款推荐',
            picture: '../../images/bktj.png',
          },
          {
            mode: 'scaleToFill',
            text: '找优惠券',
            picture: '../../images/jkj.png',
          }
        ]
      })
  },
  getMoreCouponList: function () {
    var that = this
    var data = [
      {
        "ItemID": "521424623286",
        "QuanHouJia": 2.4,
        "CouponID": "25e180440f884a5ebeca22249fa14c91",
        "background": "券",
        "Jian": "3.0",
        "CounponIDText": "券ID",
        "ItemPic": "https://img.alicdn.com/imgextra/i4/1713332935/TB2KxAikXcJL1JjSZFOXXcWlXXa_!!1713332935.jpg",
        "MonthlySales": "742",
        "ZongHeBiLi": 0.56,
        "buttonText": "领取优惠券",
        "proportion": "优惠\n比例",
        "CouponTotalText": "数量",
        "ItemPrice": "5.4",
        "MonthlySalesText": "月销量",
        "CouponEndTimeText": "结束时间",
        "ItemPriceText": "在售价",
        "QuanHouJiaText": "券后价",
        "CouponEndTime": "2018-02-28 11:59:59",
        "ItemName": "四季景观混色格桑花种子波斯菊野花组合百日草盆栽庭院易活包邮",
        "CouponDenomination": "3.0"
      },
      {
        "ItemID": "16807798207",
        "QuanHouJia": 44.35,
        "CouponID": "e423193ba0694c80bacc2ab4e39cb9bf",
        "background": "券",
        "Jian": "20.0",
        "CounponIDText": "券ID",
        "ItemPic": "https://img.alicdn.com/tfscom/i1/249551805/TB2j3Fil0RopuFjSZFtXXcanpXa_!!249551805.jpg",
        "MonthlySales": "70",
        "ZongHeBiLi": 0.31,
        "buttonText": "领取优惠券",
        "proportion": "优惠\n比例",
        "CouponTotalText": "数量",
        "ItemPrice": "64.35",
        "MonthlySalesText": "月销量",
        "CouponEndTimeText": "结束时间",
        "ItemPriceText": "在售价",
        "QuanHouJiaText": "券后价",
        "CouponEndTime": "2018-02-27 11:59:59",
        "ItemName": "檀香家用室内净化空气倒流香粒塔香沉香锥香线香盘香藏香天然瓦纳",
        "CouponDenomination": "20.0"
      },
      {
        "ItemID": "559553538275",
        "QuanHouJia": 49.8,
        "CouponID": "928152738dea4173ba269abd0eb732cb",
        "background": "券",
        "Jian": "10.0",
        "CounponIDText": "券ID",
        "ItemPic": "https://img.alicdn.com/bao/uploaded/i3/1974868550/TB1pc3NhWmWQ1JjSZPhXXXCJFXa_!!0-item_pic.jpg",
        "MonthlySales": "960",
        "ZongHeBiLi": 0.17,
        "buttonText": "领取优惠券",
        "proportion": "优惠\n比例",
        "CouponTotalText": "数量",
        "ItemPrice": "59.8",
        "MonthlySalesText": "月销量",
        "CouponEndTimeText": "结束时间",
        "ItemPriceText": "在售价",
        "QuanHouJiaText": "券后价",
        "CouponEndTime": "2018-02-28 11:59:59",
        "ItemName": "海鲜水产干鱿鱼 大鱿鱼干500g 烧烤鱿鱼板 鱿鱼片 鱿鱼头",
        "CouponDenomination": "10.0"
      },
      {
        "ItemID": "534797190507",
        "QuanHouJia": 12.9,
        "CouponID": "9f24c67029644eaa8b9a31043b28ea18",
        "background": "券",
        "Jian": "3.0",
        "CounponIDText": "券ID",
        "ItemPic": "https://img.alicdn.com/imgextra/i1/1838814586/TB2puqnaBE_1uJjSZFOXXXNwXXa_!!1838814586.jpg",
        "MonthlySales": "724",
        "ZongHeBiLi": 0.19,
        "buttonText": "领取优惠券",
        "proportion": "优惠\n比例",
        "CouponTotalText": "数量",
        "ItemPrice": "15.9",
        "MonthlySalesText": "月销量",
        "CouponEndTimeText": "结束时间",
        "ItemPriceText": "在售价",
        "QuanHouJiaText": "券后价",
        "CouponEndTime": "2018-02-28 11:59:59",
        "ItemName": "苹果6/6s/6plus手机壳套苹果保护壳全包7Plus防摔时尚款7潮男女",
        "CouponDenomination": "3.0"
      },
      {
        "ItemID": "538044838934",
        "QuanHouJia": 12.9,
        "CouponID": "9f24c67029644eaa8b9a31043b28ea18",
        "background": "券",
        "Jian": "3.0",
        "CounponIDText": "券ID",
        "ItemPic": "https://img.alicdn.com/imgextra/i1/1838814586/TB2vNBpXcrHK1JjSszbXXXbvVXa_!!1838814586.jpg",
        "MonthlySales": "642",
        "ZongHeBiLi": 0.19,
        "buttonText": "领取优惠券",
        "proportion": "优惠\n比例",
        "CouponTotalText": "数量",
        "ItemPrice": "15.9",
        "MonthlySalesText": "月销量",
        "CouponEndTimeText": "结束时间",
        "ItemPriceText": "在售价",
        "QuanHouJiaText": "券后价",
        "CouponEndTime": "2018-02-28 11:59:59",
        "ItemName": "苹果5/5s防摔手机壳iPhoneX/7/8保护壳plus软胶6/6s套男女奢华皮",
        "CouponDenomination": "3.0"
      }
    ]
    data.forEach(function (coupon) {
      coupon.ZongHeBiLiText = parseInt(coupon.ZongHeBiLi * 100) + "%"
      // coupon.CouponEndTime = coupon.CouponEndTime.substring(0, 10)
      if (coupon.ItemName.length > 25) {
        coupon.SimpleName = coupon.ItemName.substring(0, 25) + "..."
      } else {
        coupon.SimpleName = coupon.ItemName
      }
    })
    that.setData({
      couponList: that.data.couponList.concat(data),
      isLoading: false
    })
    // 在有服务端时使用
    // wx.request({
    //   url: "https://tuteng2345.applinzi.com/api/v1/search",
    //   data: {
    //     "sort": that.data.sort,
    //     "q": that.data.inputContent,
    //     "cate_id": that.data.selectCategory
    //   },
    //   method: "GET",
    //   success: function (resRequest) {
    //     if (resRequest.statusCode === 200) {
    //       if (resRequest.data != null && resRequest.data.errcode === 10000 && resRequest.data.data.length > 0) {
    //         resRequest.data.data.forEach(function (coupon) {
    //           coupon.ZongHeBiLiText = parseInt(coupon.ZongHeBiLi * 100) + "%"
    //           // coupon.CouponEndTime = coupon.CouponEndTime.substring(0, 10)
    //           if (coupon.ItemName.length > 25) {
    //             coupon.SimpleName = coupon.ItemName.substring(0, 25) + "..."
    //           } else {
    //             coupon.SimpleName = coupon.ItemName                
    //           }
    //         })
    //         that.setData({
    //           couponList: that.data.couponList.concat(resRequest.data.data),
    //           isLoading: false
    //         })
    //       }
    //       else {
    //         that.setData({
    //           isLoading: true,
    //           loadOver: true
    //         })
    //       }
    //     }
    //   }
    // })
  },
  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;
    if (componentId === "cate_method") {
      this.setData({
        selectCategory: selectedId
      })
    }
    if (componentId === "sort_method") {
      this.setData({
        sort: selectedId
      })
    }
    this.setData({
      [`${componentId}.selectedId`]: selectedId,
      couponList: [],
      pageIndex: 0,
    });
    this.getMoreCouponList()
  },
  setCouponInfo: function (e) {
    wx.setStorageSync('couponInfo', this.data.couponList[e.currentTarget.dataset.index])
  },
  onPullDownRefresh: function () {
    this.setData({
      couponList: [],
      loadOver: false,
      isLoading: true,
      pageIndex: 0
    })
    wx.stopPullDownRefresh()
    this.getMoreCouponList()
  },
  onReachBottom: function () {
    this.setData({
      isLoading: true,
      loadOver: false,
      pageIndex: this.data.pageIndex + 1
    })
    this.getMoreCouponList()
  },
  inputTyping: function () {
    wx.navigateTo({
      url: "../../pages/search/search",
    })
  }
}));
