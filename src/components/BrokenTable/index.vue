<template>
  <div>
    <div id="brokenTable"></div>
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
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              normal: {
                width: 2,
                color: 'rgba(17,239,168,1)' // 线条颜色
              },
              borderColor: 'rgba(0,0,0,.4)'
            },
            itemStyle: {
              color: 'rgba(17,239,168,1)'
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
                      color: 'rgba(17,239,168,.3)'
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
            data: ['410', '220', '430', '245', '550', '260']
          },
          {
            name: '上月',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              normal: {
                width: 2,
                color: 'rgba(45,131,234,1)' // 线条颜色
              }
            },
            itemStyle: {
              color: 'rgba(45,131,234,1)'
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
                      color: 'rgba(45,131,234,.3)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(45,131,234,0)'
                    }
                  ],
                  false
                ),
                shadowColor: 'rgba(10,219,250, 0.5)', // 阴影颜色
                shadowBlur: 20 // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: [
              '500',
              '300',
              '272',
              '235',
              '280',
              '260',
              '500',
              '300',
              '272',
              '235',
              '280',
              '260',
              '500',
              '300',
              '272',
              '235',
              '280',
              '260',
              '500',
              '300',
              '272',
              '235',
              '280',
              '260',
              '500',
              '300',
              '272',
              '235',
              '280',
              '260',
              '140'
            ]
          },
          {
            name: '去年同期',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              normal: {
                width: 2,
                color: 'rgba(232,91,91,1)' // 线条颜色
              }
            },
            itemStyle: {
              color: 'rgba(232,91,91,1)'
            },
            tooltip: {
              show: true
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(232,91,91,.3)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(232,91,91,0)'
                    }
                  ],
                  false
                ),
                shadowColor: 'rgba(10,219,250, 0.5)', // 阴影颜色
                shadowBlur: 20 // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: [
              '320',
              '310',
              '222',
              '225',
              '250',
              '320',
              '320',
              '310',
              '222',
              '225',
              '250',
              '320',
              '320',
              '310',
              '222',
              '225',
              '250',
              '320',
              '320',
              '310',
              '222',
              '225',
              '250',
              '320',
              '320',
              '310',
              '222',
              '225',
              '250',
              '320',
              '110'
            ]
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
      this.chart = echarts.init(document.getElementById('brokenTable'))
      this.chart.setOption(this.chartOption)
    }
  }
}
</script>

<style lang="scss" scoped>
#brokenTable {
  width: 450px;
  height: 150px;
  z-index: 9999;
}
</style>
