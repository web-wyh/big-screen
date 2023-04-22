<template>
  <div>
    <div id="brokenLine1"></div>
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
      chartData: []
    }
  },
  created() {
    this.requestAddFriends()
  },
  mounted() {},

  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById('brokenLine1'))
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
              interval: 0,
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
            min: 0,
            // interval: ,
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
            name: '好友关系统计 ',
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
            data: this.chartData
          }
        ]
      })
    },
    requestAddFriends() {
      this.$axios({
        methods: 'get',
        url: api.addFirends,
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
          for (let i = 0; i < 7; i++) {
            dataArr.push(dataCopy[i])
          }

          dataArr.map((item) => {
            this.chartName.push(
              `${Object.keys(item)[0].slice(5, Object.keys(item)[0].length)}`
            )
            // this.chartName.push(Object.keys(item)[0])
            this.chartData.push(Object.values(item)[0])
          })
          // console.log(this.chartData)
          // console.log(this.chartName)
          this.initChart()

          // console.log(data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
#brokenLine1 {
  width: 230px;
  height: 120px;
  z-index: 9999;
}
</style>
