var url = "/api/acts";

Page({  
  data:{  
      acts:[],
      website:getApp().globalData.website
  }, 
  onLoad: function () {
      var that = this;

    //获取活动项目
      wx.request({
          url: that.data.website + url,
          method: "post",
          data: {},
          success: function(res) {
              that.setData({
                  acts: res.data
              });
          },
          fail:function(res){
                console.log(res);
          }
      });
  }
})