// app.js
App({
  onLaunch() {
      console.log('0000onlunch');
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.getUserInfo({
            withCredentials:true,
            success(res){
                console.log(res);
            }
        }
        )
      }
    })
  },
  onShow() {
    console.log('00000onshow');
  },
  onHide() {
    console.log('00000onhide');
  },
  globalData: {
    userInfo: null
  }
})
