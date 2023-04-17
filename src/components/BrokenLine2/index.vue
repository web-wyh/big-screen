<template>
  <div>
    <div id="brokenLine2"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'WatersupplyWebIndex',

  data() {
    return {
      chart: null,
      chartOption: {
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
          itemWidth: 18
        },
        grid: {
          top: '26%',
          left: '15%',
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
            data: ['01日', '02日', '03日', '04日', '05日', '06日']
          }
        ],
        yAxis: [
          {
            nameTextStyle: {
              show: false
            },
            min: 200,
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
            name: '本月',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 5,
            lineStyle: {
              normal: {
                width: 2,
                color: 'rgba(95, 191, 251, 1)' // 线条颜色
              },
              borderColor: 'rgba(0,0,0,.4)'
            },
            itemStyle: {
              color: 'rgba(95, 191, 251, 1)'
            },
            tooltip: {
              show: true
            },
            data: ['410', '220', '430', '245', '550', '260']
          },
          {
            name: '上月',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 5,
            lineStyle: {
              normal: {
                width: 2,
                color: 'rgba(42, 235, 232, 1)' // 线条颜色
              }
            },
            itemStyle: {
              color: 'rgba(42, 235, 232, 1)'
            },
            tooltip: {
              show: true
            },
            data: ['500', '300', '272', '235', '280', '260']
          }
        ]
      }
    }
  },

  mounted() {
    this.initChart()
  },

  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById('brokenLine2'))
      this.chart.setOption(this.chartOption)
    }
  }
}
</script>

<style lang="scss" scoped>
#brokenLine2 {
  width: 230px;
  height: 150px;
  z-index: 9999;
}
</style>
