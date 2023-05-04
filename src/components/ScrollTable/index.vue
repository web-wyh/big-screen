<template>
  <div class="scrollTable">
    <div class="header">
      <div class="header1">
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
            协议服务统计
          </div>
        </div>
      </div>
      <div class="header2">
        <div class="header2_1">服务端ip:{{ name3.serverIP }}</div>
        <div class="header2_2">服务端ip:{{ name2.serverIP }}</div>
      </div>
    </div>
    <div style="display: flex">
      <dv-scroll-board :config="config" style="width: 220px; height: 120px" />
      <dv-scroll-board :config="config1" style="width: 220px; height: 120px" />
    </div>
  </div>
</template>
<script>
import api from '../../http/api'
export default {
  name: 'BigScreenScreen',

  data() {
    return {
      tableHeaderInfo: [],
      config: {
        data: [
          ['平均每次TCP接收到的字节数'],
          ['系统IP'],
          ['系统端口'],
          ['关闭连接数'],
          ['处理packet平均耗时'],
          ['处理消息包耗时'],
          ['处理了的消息包数'],
          ['监控id'],
          ['longtime'],
          ['在线用户数'],
          ['平均每次TCP接收到的业务包数'],
          ['接收到消息字节数'],
          ['接收到消息包'],
          ['本IP已接收了多少次TCP数据包'],
          ['发送了的字节数'],
          ['发送了的消息包数'],
          ['服务端端口'],
          ['采集时间']
        ],
        rowNum: 8,
        oddRowBGC: '#273e56',
        evenRowBGC: '#111c35',
        waitTime: 1000000,
        align: ['center', 'center']
      },

      config1: {
        data: [
          ['平均每次TCP接收到的字节数'],
          ['系统端口'],
          ['系统IP'],
          ['关闭连接数'],
          ['处理packet平均耗时'],
          ['处理消息包耗时'],
          ['处理了的消息包数'],
          ['监控id'],
          ['longtime'],
          ['在线用户数'],
          ['平均每次TCP接收到的业务包数'],
          ['接收到消息字节数'],
          ['接收到消息包'],
          ['本IP已接收了多少次TCP数据包'],
          ['发送了的字节数'],
          ['发送了的消息包数'],
          ['服务端端口'],
          ['采集时间']
        ],
        rowNum: 8,
        oddRowBGC: '#273e56',
        evenRowBGC: '#111c35',
        waitTime: 1000000,
        align: ['center', 'center']
      },
      data3: [],
      name3: {},
      name2: {},
      timer: null
    }
  },
  created() {
    this.getTableRequest()
    this.timer = setInterval(() => {
      this.config = {
        data: [
          ['平均每次TCP接收到的字节数'],
          ['系统IP'],
          ['系统端口'],
          ['关闭连接数'],
          ['处理packet平均耗时'],
          ['处理消息包耗时'],
          ['处理了的消息包数'],
          ['监控id'],
          ['longtime'],
          ['在线用户数'],
          ['平均每次TCP接收到的业务包数'],
          ['接收到消息字节数'],
          ['接收到消息包'],
          ['本IP已接收了多少次TCP数据包'],
          ['发送了的字节数'],
          ['发送了的消息包数'],
          ['服务端端口'],
          ['采集时间']
        ],
        rowNum: 8,
        oddRowBGC: '#273e56',
        evenRowBGC: '#111c35',
        waitTime: 1000000,
        align: ['center', 'center']
      }
      this.config1 = {
        data: [
          ['平均每次TCP接收到的字节数'],
          ['系统端口'],
          ['系统IP'],
          ['关闭连接数'],
          ['处理packet平均耗时'],
          ['处理消息包耗时'],
          ['处理了的消息包数'],
          ['监控id'],
          ['longtime'],
          ['在线用户数'],
          ['平均每次TCP接收到的业务包数'],
          ['接收到消息字节数'],
          ['接收到消息包'],
          ['本IP已接收了多少次TCP数据包'],
          ['发送了的字节数'],
          ['发送了的消息包数'],
          ['服务端端口'],
          ['采集时间']
        ],
        rowNum: 8,
        oddRowBGC: '#273e56',
        evenRowBGC: '#111c35',
        waitTime: 1000000,
        align: ['center', 'center']
      }
      this.data3 = []
      this.name3 = {}
      this.name2 = {}
      this.getTableRequest()
    }, 90000)
  },
  methods: {
    getTableRequest() {
      clearInterval(this.timer)
      this.$axios({
        methods: 'get',
        url: api.tableScroll,
        params: {
          secret: 'bebba90cf686d8dab59dd1c3a0b84fa5',
          time: 1680938174,
          access_token: this.$store.state.token,
          page: 1,
          limit: 2
        }
      })
        .then((res) => {
          this.data3 = []
          this.name3 = {}
          this.name2 = {}
          // debugger
          const { data } = res.data
          this.data3 = data
          // console.log(data)
          this.getData()
          this.getDataCopy()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getData() {
      const dataArr = []

      const { serverIP, ...rest } = this.data3[0]
      // console.log(rest)

      this.name3 = { serverIP }
      // console.log(rest)

      const filteredObj = Object.keys(rest).reduce((acc, key) => {
        acc[key] = this.data3[0][key]
        return acc
      }, {})

      for (let i = 0; i < Object.values(filteredObj).length; i++) {
        dataArr.push([
          (this.config.data[i] += `:<br/>${Object.values(filteredObj)[i]}`)
        ])
      }
      // console.log(dataArr)
      this.config = {
        data: dataArr,
        rowNum: 3,
        oddRowBGC: 'rgba(17, 28, 53, 0.6)',
        evenRowBGC: 'rgba(5, 36, 84, 0.6)',
        waitTime: 2000,
        align: ['center', 'center']
      }
    },
    getDataCopy() {
      const dataArr2 = []
      // console.log(dataArr2)

      const { serverIP, ...rest } = this.data3[1]
      this.name2 = { serverIP }

      const filteredObj = Object.keys(rest).reduce((acc, key) => {
        acc[key] = this.data3[1][key]
        return acc
      }, {})

      for (let i = 0; i < Object.values(filteredObj).length; i++) {
        dataArr2.push([
          (this.config1.data[i] += `:<br/>${Object.values(filteredObj)[i]}`)
        ])
      }

      this.config1 = {
        data: dataArr2,
        rowNum: 3,
        oddRowBGC: 'rgba(17, 28, 53, 0.6)',
        evenRowBGC: 'rgba(5, 36, 84, 0.6)',
        waitTime: 2000,
        align: ['center', 'center']
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>
<style scoped>
.scrollTable {
  width: 480px;
  height: 180px;
  margin: 9px 0 0 15px;
}
.header {
  width: 440px;
  height: 60px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 28, 53, 0.6);
}
.header1 {
  width: 100%;
  height: 20px;
  /* background-color: #000; */
}
.header2 {
  width: 100%;
  height: 40px;
  display: flex;
  text-align: center;
  color: #fff;
  font-size: 13px;
  line-height: 40px;
}
.header2_1 {
  width: 50%;
  height: 20px;
  display: flex;
  flex-direction: column;
}
.header2_2 {
  width: 50%;
  height: 20px;
}
.box-logo {
  display: flex;
  margin-left: 20px;
}
.logo-y {
  height: 7px;
  width: 7px;
  background: #00ccff;
  border-radius: 50px;
  box-shadow: 0 0px 12px 3px #00ccff;
  margin: 10px 0 0 7.5px;
}
::v-deep.dv-scroll-board .rows .row-item {
  height: auto !important;
  font-size: 12px;
  line-height: 20px !important;
}
/*
.header1 .header1_2 {
  background: red;
}
.header1 .header1_3 {
  background: blue;
} */
</style>
