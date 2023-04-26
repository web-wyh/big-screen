<template>
  <div>
    <div id="Bar" @mouseover="clearTimer" @mouseout="timechartes"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import api from '../../http/api'
export default {
  name: 'WatersupplyWebIndex',
  data() {
    return {
      chartData: [],
      chartName: [],
      myChart: '',
      max: '',
      timer: null
    }
  },
  created() {
    this.reuqestBar()
  },
  mounted() {},

  methods: {
    initChart() {
      this.myChart = echarts.init(document.getElementById('Bar'))
      this.max = Math.max.apply(null, this.chartData)
      this.myChart.setOption({
        tooltip: {
          show: true,
          trigger: 'item'
        },
        grid: {
          top: '3%',
          right: '18%',
          left: '-10%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'value',
            axisLabel: {
              // 坐标轴字体颜色
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              // y轴刻度线
              show: false
            },
            splitLine: {
              // 网格
              show: false
            },
            max(value) {
              return value.max
            }
          }
        ],
        yAxis: [
          {
            type: 'category',
            show: true,
            inverse: true,
            data: this.chartName,
            axisTick: {
              // y轴刻度线
              show: false
            },
            axisLabel: {
              formatter: '{value}',
              color: '#fff',
              fontSize: 12,
              align: 'left',
              margin: 44
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            }
          },
          {
            type: 'category',
            name: '',
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false
            },
            inverse: true,
            data: ''
          }
        ],
        series: [
          {
            type: 'bar',
            barWidth: '10',
            yAxisIndex: 1,
            min: 0,
            max: 10,
            silent: true,
            itemStyle: {
              normal: {
                color: '#35507f'
              }
            },
            label: {
              show: true
            },
            data: this.chartData.map((v, i) => {
              const item = {
                value: this.max,
                label: {
                  // 右边数值
                  formatter: `{a|${v}}`,
                  position: 'right',
                  rich: {
                    a: {
                      color: '#fff',
                      fontSize: 12,
                      padding: [0, 4, 0, 0]
                    },
                    b: {
                      color: '#fff',
                      fontSize: 12
                    }
                  }
                }
              }
              return item
            })
          },
          {
            show: true,
            type: 'bar',

            barWidth: '10',
            z: 2,
            label: {
              show: false
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#96c5fc' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#167ff8' // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            },
            data: this.chartData
          }
        ],
        dataZoom: [
          {
            yAxisIndex: 0, // 这里是从X轴的0刻度开始
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
        this.myChart.setOption({
          yAxis: [
            {
              data: this.chartName.map((item) => item)
            }
          ],
          series: [
            {
              data: this.chartData.map((v, i) => {
                const item = {
                  value: this.max,
                  label: {
                    // 右边数值
                    formatter: `{a|${v}}`,
                    position: 'right',
                    rich: {
                      a: {
                        color: '#fff',
                        fontSize: 12,
                        padding: [0, 4, 0, 0]
                      },
                      b: {
                        color: '#fff',
                        fontSize: 12
                      }
                    }
                  }
                }
                return item
              })
            },
            {
              data: this.chartData.map((item) => item)
            }
          ]
        })
      }, 3000)
    },
    reuqestBar() {
      this.$axios({
        methods: 'get',
        url: api.barData,
        params: {
          secret: '9908919d741c7f9f1556d7d884af0340',
          time: '1680789307',
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
  }
}
</script>

<style lang="scss" scoped>
#Bar {
  width: 230px;
  height: calc(100vh / 4 - 60px);
  z-index: 9999;
}
</style>
