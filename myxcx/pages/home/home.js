// pages/home/home.js
import {request} from '../../utils/util'
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    handlePost(){
      request.post({
        url:'/users',
        data:{
              name:"adf",
              id:1
            }
      }).then(res=>{
        console.log(res);
      })
    },
    handleGet(){
      request.get({
        url: '/users/1'
      }).then(res=>{
        console.log(res);
      })
    },
    handleNav(){
        wx.redirectTo({
          url: '/pages/detail/detail',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log('onload-');
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        console.log('onReady-');
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        console.log('onShow-');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {
        console.log('onHide-');
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
        console.log('onUnload-');
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
      wx.stopPullDownRefresh()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})