//peoplePage.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var sliderWidth = 200; // 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        userInfo: {},
        logged: false,
        takeSession: false,
        requestResult: '',
        //SearchBar
        inputShowed: false,
        inputVal: "",
        //navbar
        tabs: ["通讯录", "消息"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        peopleShow: 1,
        releaseFocus: false,
        messageVal:"",
        msgName:"Tom",
        msgCount: 0,
    },

//Search Bar
    showInput: function () {
        this.setData({
            inputShowed: true,
            //peopleShow: 0
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false,
            peopleShow: 1
        });
    },

    clearInput: function () {
        this.setData({
            inputVal: "",
            peopleShow:true,
        });
    },

    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value,
        });
        if(this.data.inputVal==""){
            this.setData({ peopleShow: 1 });
        }
        else{
            this.setData({ peopleShow: 0 });
        }
    },

//navbar
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id,
            releaseFocus:false,
        });
    },

    clickView: function (e) {
        if(this.data.releaseFocus==true){
            this.setData({
                releaseFocus:false,
                messageVal:""
            });
        }
    },

//Reply
    bindReply: function (e) {
        this.setData({
            releaseFocus: true,
            messageVal:""

        })
    },

    bindSend: function (e) {
        this.setData({
            releaseFocus: false,
            messageVal:"",
            msgCount:this.data.msgCount+1,
        })
    },

    bindCancel: function (e) {
        this.setData({
            releaseFocus: false,
            messageVal:""
        })
    },
})