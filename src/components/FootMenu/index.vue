<template>
  <div class="FootScrollTable">
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
          协议服务监控
        </div>
      </div>
    </div>
    <div class="header2">
      <div>
        <div class="header2_1">2023-4-15:xx事件</div>
        <dv-scroll-board :config="config" style="width: 320px; height: 40px" />
      </div>
      <div>
        <div class="header2_2">2023-4-15:xx事件</div>
        <dv-scroll-board :config="config" style="width: 320px; height: 40px" />
      </div>
    </div>
    <div class="header3">
      <div>
        <div class="header3_1">2023-4-15:xx事件</div>
        <dv-scroll-board :config="config" style="width: 320px; height: 40px" />
      </div>
      <div>
        <div class="header3_2">2023-4-15:xx事件</div>
        <dv-scroll-board :config="config" style="width: 320px; height: 40px" />
      </div>
    </div>

    <!-- <dv-scroll-board :config="config" style="width: 640px; height: 140px" /> -->
  </div>
</template>
<script>
// import $API from '../../http/api'
export default {
  name: 'BigScreenScreen',

  data() {
    return {
      tableHeaderInfo: [],
      config: {
        data: [
          ['平均每次TCP接收到的字节数'],
          ['系统ip'],
          ['系统端口'],
          ['关闭连接数'],
          ['处理packet平均耗时'],
          ['数据显示次数']
        ],
        rowNum: 1,
        oddRowBGC: 'rgba(17, 28, 53, 0.6)',
        evenRowBGC: 'rgba(5, 36, 84, 0.6)',
        waitTime: 2000,
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
    // this.getData()
  },

  methods: {
    getData() {
      const dataArr = []
      const dataArr2 = []
      for (let i = 0; i < Object.values(this.data3[0].data[0]).length; i++) {
        if (Object.keys(this.data3[0].data[0])[i] === 'clientIp') {
          continue
        }
        // console.log(Object.keys(this.data3[0].data[0])[i])
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
        rowNum: 10,
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
.FootScrollTable {
  width: 640px;
  height: 190px;
  position: fixed;
  bottom: 0;
  left: 32%;
  display: flex;
  flex-direction: column;
}

.header1 {
  width: 100%;
  height: 30px;
  background-color: rgba(17, 28, 53, 0.6);
}
.header2 {
  width: 100%;
  height: 80px;
  display: flex;
  text-align: center;
  color: #fff;
  font-size: 13px;
  line-height: 40px;
}
.header2_1 {
  width: 100%;
  height: 40px;
  background-color: rgba(17, 28, 53, 0.6);
}
.header2_2 {
  width: 100%;
  height: 40px;
  background-color: rgba(17, 28, 53, 0.6);
}
.header3 {
  width: 100%;
  height: 80px;
  display: flex;
  text-align: center;
  color: #fff;
  font-size: 13px;
  line-height: 40px;
}
.header3_1 {
  width: 100%;
  height: 40px;
  background-color: rgba(17, 28, 53, 0.6);
}
.header3_2 {
  width: 100%;
  height: 40px;
  background-color: rgba(17, 28, 53, 0.6);
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
</style>
