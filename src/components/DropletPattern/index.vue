<template>
  <div class="box" style="margin: 14px 0 20px 17px">
    <div class="box-logo" style="width: 100%; height: 26px">
      <div style="width: 22px; height: 26px">
        <div class="logo-y"></div>
      </div>
      <div
        style="
          color: #00ccff;
          font-size: 15px;
          line-height: 26px;
          font-weight: bolder;
        "
      >
        关键指标统计
      </div>
    </div>
    <div style="width: 100%; height: 280px">
      <div class="bubble allLoadRate">
        <div style="width: 45px; margin: 24px 0 0 21px; font-size: 12px">
          用户数
          <span style="font-size: 20px; color: #8dcbff">{{
            dataList.userNum
          }}</span>
        </div>
      </div>
      <div class="bubble centralCity">
        <div style="width: 38px; margin: 20px 0 0 24px; font-size: 12px">
          单聊消息数<span style="font-size: 14px; color: #8dcbff">{{
            dataList.msgNum
          }}</span>
        </div>
      </div>
      <div class="bubble dongxiLake">
        <div style="width: 38px; margin: 20px 0 0 25px; font-size: 12px">
          添加好友数<span style="font-size: 14px; color: #8dcbff">{{
            dataList.friendsNum
          }}</span>
        </div>
      </div>
      <div class="bubble jingkaiDistrict">
        <div style="width: 38px; margin: 20px 0 0 23px; font-size: 12px">
          朋友圈动态数<span style="font-size: 14px; color: #8dcbff">{{
            dataList.circleNum
          }}</span>
        </div>
      </div>
      <div class="bubble xinzhouDistrict">
        <div style="width: 38px; margin: 26px 0 0 26px; font-size: 12px">
          公众号数<span style="font-size: 14px; color: #8dcbff">{{
            dataList.pubNum
          }}</span>
        </div>
      </div>
      <div class="bubble xinzhouDistrict1">
        <div style="width: 38px; margin: 24px 0 0 24px; font-size: 12px">
          群组数<span style="font-size: 14px; color: #8dcbff">{{
            dataList.roomNum
          }}</span>
        </div>
      </div>
      <div class="bubble xinzhouDistrict2">
        <div style="width: 38px; margin: 20px 0 0 23px; font-size: 12px">
          上传文件数<span style="font-size: 14px; color: #8dcbff"
            >{{ dataList.fileNum }}
          </span>
        </div>
      </div>
      <div class="bubble xinzhouDistrict3">
        <div style="width: 38px; margin: 20px 0 0 23px; font-size: 12px">
          接口调用数<span style="font-size: 14px; color: #8dcbff">{{
            dataList.apilogNum
          }}</span>
        </div>
      </div>
      <div class="bubble xinzhouDistrict4">
        <div style="width: 38px; margin: 24px 0 0 24px; font-size: 12px">
          企业数<span style="font-size: 14px; color: #8dcbff">{{
            dataList.companyNum
          }}</span>
        </div>
      </div>
      <div class="bubble xinzhouDistrict5">
        <div style="width: 36px; margin: 24px 0 0 25px; font-size: 12px">
          内容举报数<span style="font-size: 14px; color: #8dcbff">{{
            dataList.reportNum
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../http/api'
export default {
  name: 'shuidi',

  data() {
    return {
      dataList: [],
      timerId: null
    }
  },
  created() {
    this.requestShuidi()
    this.timerId = setInterval(() => {
      this.dataList = []
      this.requestShuidi()
    }, 90000)
  },

  methods: {
    requestShuidi() {
      // ;[
      //   { name: '用户总数', text: 'userNum', value: 1 },
      //   { name: '单聊消息总数', text: 'msgNum', value: 2 },
      //   { name: '添加好友数', text: 'friendsNum', value: 3 },
      //   { name: 朋友圈动态数, text: 'circleNum', value: 1 },
      //   { name: 群组总数, text: 'roomNum', value: 1 },
      //   { name: 上传文件总数, text: 'fileNum', value: 1 },
      //   { name: 接口调用总数, text: 'apilogNum', value: 1 },
      //   { name: 企业总数, text: 'companyNum', value: 1 },
      //   { name: 内容举报总数, text: 'reportNum', value: 1 },
      //   { name: 公众号总数, text: 'pubNum', value: 1 }
      // ]

      // {apilogNum: 17816
      // circleNum: 2223
      // companyNum: 2
      // fileNum: 10751
      // friendsNum: 256
      // msgNum: 17719
      // pubNum: 5
      // reportNum: 3
      // roomNum: 17
      // userNum: 81}

      this.$axios({
        methods: 'get',
        url: api.shuidi,
        params: {
          secret: '9908919d741c7f9f1556d7d884af0340',
          time: '1680789307',
          access_token: this.$store.state.token
        }
      })
        .then((res) => {
          const { data } = res.data
          this.dataList = data
          // console.log(this.dataList)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  beforeDestroy() {
    clearInterval(this.timerId)
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
  width: 440px;
  height: 200px;
  background-color: rgba(1, 37, 70, 0.3);

  .box-logo {
    display: flex;
    margin-left: 20px;
    .logo-y {
      height: 7px;
      width: 7px;
      background: #00ccff;
      border-radius: 50px;
      box-shadow: 0 0px 12px 3px #00ccff;
      margin: 10px 0 0 7.5px;
    }
  }
  .bubble {
    background: url(../../assets/img/bubble.png) no-repeat;
    position: absolute;
    font-size: 11px;
    text-align: center;
    cursor: default;
  }
  .allLoadRate {
    width: 88px;
    height: 88px;
    background-size: 88px 88px;
    top: 40px;
    left: 196px;
    -webkit-animation: bounce-down 3s linear infinite;
    animation: bounce-down 3s linear infinite;
  }
  .centralCity {
    width: 88px;
    height: 88px;
    background-size: 88px 88px;
    top: 18px;
    left: 4px;
    -webkit-animation: bounce-down 4s linear infinite;
    animation: bounce-down 4s linear infinite;
  }
  .dongxiLake {
    width: 88px;
    height: 88px;
    background-size: 88px 88px;
    top: 102px;
    left: 4px;
    -webkit-animation: bounce-down 5s linear infinite;
    animation: bounce-down 5s linear infinite;
  }
  .jingkaiDistrict {
    width: 88px;
    height: 88px;
    background-size: 88px 88px;
    top: 18px;
    right: 3px;
    -webkit-animation: bounce-down 6s linear infinite;
    animation: bounce-down 6s linear infinite;
  }
  .xinzhouDistrict {
    width: 88px;
    height: 88px;
    background-size: 88px 88px;
    top: 96px;
    right: 7px;
    -webkit-animation: bounce-down 7s linear infinite;
    animation: bounce-down 7s linear infinite;
  }
  .xinzhouDistrict1 {
    width: 88px;
    height: 88px;
    background-size: 88px 88px;
    bottom: 36px;
    left: 77px;
    -webkit-animation: bounce-down 7s linear infinite;
    animation: bounce-down 7s linear infinite;
  }
  .xinzhouDistrict2 {
    width: 88px;
    height: 88px;
    background-size: 88px 88px;
    top: 0px;
    right: 77px;
    -webkit-animation: bounce-down 7s linear infinite;
    animation: bounce-down 7s linear infinite;
  }
  .xinzhouDistrict3 {
    width: 88px;
    height: 88px;
    background-size: 88px 88px;
    top: 6px;
    right: 227px;
    -webkit-animation: bounce-down 7s linear infinite;
    animation: bounce-down 7s linear infinite;
  }
  .xinzhouDistrict4 {
    width: 88px;
    height: 88px;
    background-size: 88px 88px;
    top: 100px;
    right: 203px;
    -webkit-animation: bounce-down 7s linear infinite;
    animation: bounce-down 7s linear infinite;
  }
  .xinzhouDistrict5 {
    width: 88px;
    height: 88px;
    background-size: 88px 88px;
    top: 96px;
    right: 97px;
    -webkit-animation: bounce-down 7s linear infinite;
    animation: bounce-down 7s linear infinite;
  }
}
@-webkit-keyframes bounce-down {
  25% {
    -webkit-transform: translateY(-5px);
  }
  50%,
  100% {
    -webkit-transform: translateY(0);
  }
  75% {
    -webkit-transform: translateY(5px);
  }
}

@keyframes bounce-down {
  25% {
    transform: translateY(-5px);
  }
  50%,
  100% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(5px);
  }
}
</style>
