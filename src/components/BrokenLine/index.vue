<template>
  <div>
    <div id="brokenLine"></div>
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
      chartData1: []
    }
  },

  created() {
    this.requestActive()
  },

  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById('brokenLine'))
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
            min: 0,
            interval: 10,
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
            name: '活跃用户数',
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
            areaStyle: {
              // 区域填充样式
              normal: {
                // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(95, 191, 251, .3)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(17,239,168,0)'
                    }
                  ],
                  false
                ),
                shadowColor: 'rgba(25,163,223, 0.5)', // 阴影颜色
                shadowBlur: 20 // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: this.chartData
          },
          {
            name: '新增用户数',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 5,
            lineStyle: {
              normal: {
                width: 2,
                color: 'rgba(95, 191, 151, 1)' // 线条颜色
              },
              borderColor: 'rgba(0,0,0,.4)'
            },
            itemStyle: {
              color: 'rgba(95, 191, 151, 1)'
            },
            tooltip: {
              show: true
            },
            areaStyle: {
              // 区域填充样式
              normal: {
                // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(95, 191, 151, .3)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(17,239,168,0)'
                    }
                  ],
                  false
                ),
                shadowColor: 'rgba(25,163,223, 0.5)', // 阴影颜色
                shadowBlur: 20 // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: this.chartData1
          }
        ]
      })
    },
    requestActive() {
      this.$axios({
        methods: 'get',
        url: api.activeData,
        params: {
          secret: '5f37767efca7a4c71c9aaab94be5f43d',
          time: '1680921792',
          access_token: this.$store.state.token
        }
      })
        .then((res) => {
          const { data } = res.data
          const dataCopy1 = data.servenUserActive
          const dataCopy2 = data.servenNew

          for (let i = 0; i < 7; i++) {
            this.chartName.push(
              Object.keys(dataCopy1)[i].slice(
                5,
                Object.keys(dataCopy1)[i].length
              )
            )
            this.chartData.push(Object.values(dataCopy1)[i])
          }

          for (let i = 0; i < 7; i++) {
            this.chartData1.push(Object.values(dataCopy2)[i])
          }
          // const dataArr1 = []
          // for (let i = 0; i < 7; i++) {
          //   dataArr.push(dataCopy2[i])
          // }

          // dataArr.map((item) => {
          //   this.chartName.push(
          //     Object.keys(item)[0].slice(5, Object.keys(item)[0].length)
          //   )
          //   this.chartData.push(Object.values(item)[0])
          // })

          // dataArr1.map((item) => {
          //   this.chartData1.push(Object.values(item)[0])
          // })
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
#brokenLine {
  width: 450px;
  height: 150px;
  z-index: 9999;
}
</style>
