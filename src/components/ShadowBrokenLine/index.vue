<template>
  <div>
    <div id="shadowBrokenLine"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import api from '../../http/api'
export default {
  name: 'WatersupplyWebIndex',

  data() {
    return {
      chart: null,
      chartName: [],
      chartData: [],
      intervalId: null
    }
  },

  created() {
    this.requestSingleChat()
    this.intervalId = setInterval(() => {
      this.chartData = []
      this.chartName = []
      this.requestSingleChat()
    }, 90000)
  },

  // watch: {
  //   chartData(newValue, oldValue) {
  //     if (newValue !== oldValue) {
  //       console.log(newValue)
  //       console.log(oldValue)
  //     } else {
  //       console.log('没有变化1111111')
  //     }
  //   }
  // },

  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById('shadowBrokenLine'))
      this.chart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          align: 'left',
          right: '2%',
          type: 'plain',
          top: '8px',
          textStyle: {
            color: '#fff',
            fontSize: 10
          },
          itemGap: 8,
          itemWidth: 18,
          data: ['单聊消息统计']
        },
        grid: {
          top: '26%',
          left: '10%',
          bottom: '18%',
          right: '9%'
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLine: {
              // 坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#063b59'
              }
            },
            axisLabel: {
              interval: 0,
              // 坐标轴刻度标签的相关设置

              textStyle: {
                color: '#fff',
                // padding: 10,
                fontSize: 10
              },
              formatter(data) {
                return data
              }
            },
            axisTick: {
              show: false
            },
            data: this.chartName
          }
        ],
        yAxis: [
          {
            nameTextStyle: {
              show: false
            },
            // splitNumber: 2,
            interval: 100,
            splitLine: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
                // padding: 10,
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '单聊消息统计',
            symbol: 'circle',
            type: 'line',
            // stack: 'Total',
            itemStyle: {
              color: 'rgba(176, 238, 241, 1)'
            },
            data: this.chartData
          }
        ]
      })
    },
    requestSingleChat() {
      this.$axios({
        methods: 'get',
        url: api.singleChat,
        params: {
          secret: '9908919d741c7f9f1556d7d884af0340',
          time: 1680789307,
          access_token: this.$store.state.token
        }
      })
        .then((res) => {
          const { data } = res.data
          const dataCopy = [...data].reverse()
          const dataArr = []
          for (let i = 0; i < 15; i++) {
            dataArr.push(dataCopy[i])
          }
          dataArr.reverse()

          dataArr.map((item) => {
            this.chartName.push(
              `${Object.keys(item)[0].slice(8, Object.keys(item)[0].length)}日`
            )

            this.chartData.push(Object.values(item)[0])
          })
          this.initChart()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  }
}
</script>

<style lang="scss" scoped>
#shadowBrokenLine {
  width: 450px;
  height: calc((100vh / 4) - 80px);
  z-index: 9999;
}
</style>
