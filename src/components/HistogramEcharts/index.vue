<template>
  <div>
    <div
      id="histogramEch"
      @mouseover="clearTimer"
      @mouseout="timechartes"
    ></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'WatersupplyWebIndex',

  data() {
    return {
      timer: null,
      chartData: [10, 52, 20, 33, 39, 33, 22],
      chartName: [
        '中心城区',
        '黄陂区',
        '江夏区',
        '江岸区',
        '东西湖区',
        '新洲区',
        '江汉区'
      ],
      chart: null,
      max: ''
    }
  },

  mounted() {
    this.initChart()
  },

  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById('histogramEch'))
      this.max = Math.max.apply(null, this.chartData)
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
                return `${value}%`
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
      this.timechartes()
    },
    clearTimer() {
      clearInterval(this.timer)
    },
    timechartes() {
      this.timer = setInterval(() => {
        const lastData = this.chartData.pop()
        const lastNameData = this.chartName.pop()
        this.chartData.unshift(lastData)
        this.chartName.unshift(lastNameData)
        this.chart.setOption({
          xAxis: [
            {
              data: this.chartName.map((item) => item)
            }
          ],
          series: [
            {
              data: this.chartData.map((item) => item)
            }
          ]
        })
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
#histogramEch {
  height: 150px;
  width: 100%;
}
</style>
