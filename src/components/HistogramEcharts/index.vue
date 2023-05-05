<template>
  <div>
    <div id="histogramEch"></div>
    <!-- @mouseover="clearTimer"
      @mouseout="timechartes" -->
  </div>
</template>

<script>
import * as echarts from 'echarts'
import api from '../../http/api'
export default {
  name: 'WatersupplyWebIndex',

  data() {
    return {
      timer: null,
      chartData: [],
      chartName: [],
      chart: null,
      timerId: null
    }
  },
  created() {
    this.requestRegister()
    this.timerId = setInterval(() => {
      this.chartData = []
      this.chartName = []
      this.requestRegister()
    }, 90000)
  },

  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById('histogramEch'))
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '20%',
          left: '2%',
          right: '2%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.chartName,
            axisTick: {
              alignWithLabel: false,
              show: false
            },
            axisLine: {
              lineStyle: { color: '#1c739c' }
            },
            axisLabel: { color: '#d7dcdf', interval: 0 }
          }
        ],
        yAxis: [
          {
            type: 'value',
            interval: 20,
            axisLabel: {
              formatter(value) {
                if (value === 0) {
                  return 0
                }
                return `${value}`
              }
            },
            axisLine: {
              lineStyle: {
                color: '#d7dcdf'
              },
              show: false
            },
            axisTick: {
              alignWithLabel: false,
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: '#053254'
              }
            }
          }
        ],
        series: [
          {
            color: '#00dbfc',
            type: 'bar',
            barWidth: '30%',
            data: this.chartData
          }
        ],
        dataZoom: [
          {
            xAxisIndex: 0, // 这里是从X轴的0刻度开始
            show: false, // 是否显示滑动条，不影响使用
            type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            startValue: 0, // 从头开始。
            endValue: 6 // 一次性展示6个。
          }
        ]
      })
      // this.timechartes()
    },
    // clearTimer() {
    //   clearInterval(this.timer)
    // },
    // timechartes() {
    //   this.timer = setInterval(() => {
    //     const lastData = this.chartData.pop()
    //     const lastNameData = this.chartName.pop()
    //     this.chartData.unshift(lastData)
    //     this.chartName.unshift(lastNameData)
    //     this.chart.setOption({
    //       xAxis: [
    //         {
    //           data: this.chartName.map((item) => item)
    //         }
    //       ],
    //       series: [
    //         {
    //           data: this.chartData.map((item) => item)
    //         }
    //       ]
    //     })
    //   }, 3000)
    // },
    requestRegister() {
      this.$axios({
        methods: 'get',
        url: api.registerData,
        params: {
          secret: '9908919d741c7f9f1556d7d884af0340',
          time: 1680789307,
          access_token: this.$store.state.token
        }
      })
        .then((res) => {
          this.chartData = []
          this.chartName = []
          const { data } = res.data
          const dataCopy = [...data].reverse()
          // console.log(data)
          const dataArr = []
          for (let i = 0; i < 7; i++) {
            dataArr.push(dataCopy[i])
          }
          dataArr.reverse()
          dataArr.map((item) => {
            this.chartName.push(
              Object.keys(item)[0].slice(5, Object.keys(item)[0].length)
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
    clearInterval(this.timerId)
  }
}
</script>

<style lang="scss" scoped>
#histogramEch {
  height: calc((100vh / 4) - 80px);
  width: 100%;
}
</style>
