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
        <div class="header2_1">服务端ip:{{ tableHeaderInfo[0] }}</div>
        <div class="header2_2">服务端ip:172.16.0.1</div>
      </div>
    </div>
    <dv-scroll-board :config="config" style="width: 440px; height: 120px" />
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
          ['平均每次TCP接收到的字节数', '平均每次TCP接收到的字节数'],
          ['系统ip', '系统ip'],
          ['系统端口', '系统端口'],
          ['关闭连接数', '关闭连接数'],
          ['处理packet平均耗时', '处理packet平均耗时'],
          ['处理消息包耗时', '处理消息包耗时'],
          ['处理了的消息包数', '处理了的消息包数'],
          ['监控id', '监控id'],
          ['longtime', 'longtime'],
          ['在线用户数', '在线用户数'],
          ['平均每次TCP接收到的业务包数', '平均每次TCP接收到的业务包数'],
          ['接收到消息字节数', '接收到消息字节数'],
          ['接收到消息包', '接收到消息包'],
          ['本IP已接收了多少次TCP数据包', '本IP已接收了多少次TCP数据包'],
          ['发送了的字节数', '发送了的字节数'],
          ['发送了的消息包数', '发送了的消息包数'],
          ['服务端ip', '服务端ip'],
          ['服务端端口', '服务端端口'],
          ['采集时间', '采集时间']
        ],
        rowNum: 8,
        oddRowBGC: '#273e56',
        evenRowBGC: '#111c35',
        waitTime: 1000000,
        align: ['center', 'center']
      },
      /**
 *
 * ['平均每次TCP接收到的字节数', '平均每次TCP接收到的字节数'],
          ['系统ip', '系统ip'],
          ['系统端口', '系统端口'],
          ['关闭连接数', '关闭连接数'],
          ['处理packet平均耗时', '处理packet平均耗时'],
          ['处理消息包耗时', '处理消息包耗时'],
          ['处理了的消息包数', '处理了的消息包数'],
          ['监控id', '监控id'],
          ['longtime', 'longtime'],
          ['在线用户数', '在线用户数'],
          ['平均每次TCP接收到的业务包数', '平均每次TCP接收到的业务包数'],
          ['接收到消息字节数', '接收到消息字节数'],
          ['接收到消息包', '接收到消息包'],
          ['本IP已接收了多少次TCP数据包', '本IP已接收了多少次TCP数据包'],
          ['发送了的字节数', '发送了的字节数'],
          ['发送了的消息包数', '发送了的消息包数'],
          ['服务端ip', '服务端ip'],
          ['服务端端口', '服务端端口'],
          ['采集时间', '采集时间']
 */
      data3: [
        {
          currentTime: 1681031748476,
          total: 0.0,
          data: [
            {
              bytesPerTcpReceive: 69.75576923076923,
              clientIp: '172.16.0.1',
              clientPort: 54686,
              closed: 317,
              handledCostsPerPacket: 12.0,
              handledPacketCosts: 6246,
              handledPackets: 520,
              id: '64327f08c76e414bdb50c9c9',
              longtime: '1681030860087',
              onlineCount: 1,
              packetsPerTcpReceive: 1.001923076923077,
              receivedBytes: 36273,
              receivedPackets: 521,
              receivedTcps: 520,
              sentBytes: 11472,
              sentPackets: 529,
              serverIP: '172.16.0.16',
              serverPort: 5666,
              time: '2023-04-09 17:01:00'
            },
            {
              bytesPerTcpReceive: 77.39159405433111,
              clientIp: '101.71.37.62',
              clientPort: 8018,
              closed: 331,
              handledCostsPerPacket: 9.0,
              handledPacketCosts: 17639,
              handledPackets: 1956,
              id: '64327f0849613a7ef8cd258d',
              longtime: '1681030860440',
              onlineCount: 1,
              packetsPerTcpReceive: 1.0030753459764223,
              receivedBytes: 150991,
              receivedPackets: 1957,
              receivedTcps: 1951,
              sentBytes: 46186,
              sentPackets: 2006,
              serverIP: '172.16.1.26',
              serverPort: 5666,
              time: '2023-04-09 17:01:00'
            }
          ],
          resultCode: 1,
          count: 28
        }
      ]
    }
  },
  created() {},
  mounted() {
    this.getData()
  },

  methods: {
    getData() {
      const dataArr = []
      const dataArr2 = []
      for (let i = 0; i < Object.values(this.data3[0].data[0]).length; i++) {
        if (Object.keys(this.data3[0].data[0])[i] === 'clientIp') {
          continue
        }
        // console.log(
        //   Object.values(this.data3[0].data[0])[i].length,
        //   Object.values(this.data3[0].data[0])[i]
        // )
        dataArr.push([
          (this.config.data[i][0] += `:<br/>${
            Object.values(this.data3[0].data[0])[i]
          }`)
        ])
        // console.log(dataArr)
      }
      for (let i = 0; i < Object.values(this.data3[0].data[1]).length; i++) {
        if (Object.keys(this.data3[0].data[1])[i] === 'clientIp') {
          continue
        }
        dataArr2.push([
          (this.config.data[i][1] += `:<br/>${
            Object.values(this.data3[0].data[1])[i]
          }`)
        ])
      }

      dataArr.forEach((i, index) => {
        i.push(dataArr2[index].join())
      })

      this.config = {
        data: dataArr,
        rowNum: 3,
        oddRowBGC: 'rgba(17, 28, 53, 0.6)',
        evenRowBGC: 'rgba(5, 36, 84, 0.6)',
        waitTime: 2000,
        align: ['center', 'center']
      }
      const headerArr = []
      Object.keys(this.data3[0].data[0]).forEach((i) => {
        // console.log(Object.keys(this.data3[0].data[0])[i])
        if (i === 'clientIp') {
          headerArr.push(this.data3[0].data[0][i])
        }
      })
      this.tableHeaderInfo = headerArr
    }
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
/*
.header1 .header1_2 {
  background: red;
}
.header1 .header1_3 {
  background: blue;
} */
</style>
