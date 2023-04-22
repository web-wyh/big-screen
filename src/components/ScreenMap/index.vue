<template>
  <div id="container"></div>
</template>
<script>
import * as echarts from 'echarts'
import '../../chinaMap/china'
import api from '../../http/api'
export default {
  name: 'BigScreenScreen',

  data() {
    return {
      chart: null
    }
  },
  created() {
    this.requestMap()
  },
  mounted() {},

  methods: {
    requestMap() {
      console.log(this.$store.state.token)

      this.$axios({
        methods: 'get',
        url: api.mapData,
        params: {
          secret: 'fa6fd2501c030f5329d36bb60a13315c',
          time: 1681626074,
          // access_token: sessionStorage.getItem('token')
          access_token: this.$store.state.token
        }
      })
        .then((res) => {
          const { data } = res.data
          const result = data.map((obj) => ({
            name: Object.keys(obj)[0],
            value: Object.values(obj)[0]
          }))
          // console.log(this.$store.state.token)
          this.initChart(result)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    initChart(result) {
      // let uploadedDataURL = '/assets/img/data-1640589484383-TgctXdaF8.png'
      let mapName = 'china'
      let data = result

      let geoCoordMap = {}

      /*获取地图数据*/
      let mapFeatures = echarts.getMap(mapName).geoJson.features

      // console.log(mapFeatures)
      mapFeatures.forEach((item) => {
        // 地区名称
        let name = item.properties.name
        // 地区经纬度
        geoCoordMap[name] = item.properties.cp
      })

      let max = 4000

      let pointData = []

      for (let i = 0; i < data.length; i++) {
        let geoCoord = geoCoordMap[data[i].name]
        if (geoCoord) {
          pointData.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          })
        }
      }

      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          // show: true,
          right: '10%',
          top: 5,
          bottom: '10%',
          left: '10%'
        },
        geo: [
          {
            map: mapName,
            zlevel: -1,
            zoom: 1.0,
            silent: true,
            layoutCenter: ['50%', '50%'],
            layoutSize: '100%',
            roam: false,
            itemStyle: {
              normal: {
                borderColor: 'rgba(192,245,249,.8)',
                borderWidth: 3,
                shadowColor: '#6FFDFF',
                shadowOffsetY: 0,
                shadowBlur: 10
                // areaColor: 'rgba(29,85,139,.6)',
              }
            },
            label: {
              normal: {
                //静态的时候展示样式
                show: false, //是否显示地图省份得名称
                textStyle: {
                  color: '#fff',
                  fontSize: 12,
                  fontFamily: 'Arial'
                }
              },
              emphasis: {
                //动态展示的样式
                show: false,
                color: '#fff'
              }
            }
          },
          {
            show: true,
            map: mapName,
            zoom: 1.0,
            layoutCenter: ['50%', '50%'],
            layoutSize: '100%',
            label: {
              normal: {
                //静态的时候展示样式
                show: false, //是否显示地图省份得名称
                textStyle: {
                  color: '#fff',
                  fontSize: 12,
                  fontFamily: 'Arial'
                }
              },
              emphasis: {
                //动态展示的样式
                color: '#fff'
              }
            },

            blur: {
              label: { show: true, color: '#000' }
            },
            roam: false, // 是否开启鼠标滚轮缩放
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  color: '#fff'
                },
                color: '#fff',
                borderColor: '#32CBE0',
                borderWidth: 1.5,
                areaColor: {
                  type: 'linear-gradient',
                  x: 0,
                  y: 1000,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0.5,
                      color: '#273e56' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#111c35' // 100% 处的颜色
                    }
                  ],
                  global: true // 缺省为 false
                }
              },
              emphasis: {
                label: {
                  show: true,
                  color: '#fff'
                },
                borderWidth: 3,
                borderColor: 'rgba(255, 230, 175,0.8)',
                shadowColor: 'rgba(255, 230, 175,0.5)',
                shadowBlur: 30,
                textStyle: {
                  color: '#fff',
                  fontSize: 12,
                  backgroundColor: 'transparent'
                },
                areaColor: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#1cfbfe'
                    },
                    {
                      offset: 1,
                      color: '#3348e7'
                    }
                  ],
                  false
                )
              }
            }
          },
          {
            type: 'map',
            map: mapName,
            zlevel: -2,
            zoom: 1.0,
            layoutCenter: ['50%', '51.4%'],
            layoutSize: '100%',
            roam: false,
            silent: true,
            itemStyle: {
              normal: {
                borderColor: 'rgba(35, 161, 184,0.5)',
                shadowColor: 'rgba(35, 161, 184,0.8)',
                shadowOffsetY: 5,
                shadowBlur: 15,
                areaColor: '#257AB2'
              }
            }
          },
          {
            type: 'map',
            map: mapName,
            zlevel: -3,
            zoom: 1.0,
            layoutCenter: ['50%', '52.4%'],
            layoutSize: '100%',
            roam: false,
            silent: true,
            itemStyle: {
              normal: {
                borderColor: 'rgba(7, 65, 117,0.5)',
                shadowColor: 'rgba(7, 65, 117,0.8)',
                shadowOffsetY: 15,
                shadowBlur: 8,
                areaColor: '#0A2763'
              }
            }
          }
        ],
        series: [
          {
            type: 'map',
            layoutCenter: ['50%', '50%'],
            layoutSize: '100%',
            label: {
              normal: {
                //静态的时候展示样式
                show: false, //是否显示地图省份得名称
                textStyle: {
                  color: '#fff',
                  fontSize: 12
                }
              },
              emphasis: {
                //动态展示的样式
                color: '#fff'
              }
            },
            // geoIndex: 0,
            map: mapName,
            tooltip: {
              trigger: 'item',
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              extraCssText: 'z-index:100;color:#fff;',
              confine: true, //是否将 tooltip 框限制在图表的区域内
              formatter: function (params, ticket, callback) {
                //根据业务自己拓展要显示的内容
                var res = ''
                var name = params.name
                var count = params.value ? params.value : 0
                res = `<div style="box-shadow: 0 0 10px #3BD9D9; padding: 10px; position: absolute; top: 0; left:0;  border-radius: 4px; border: 1px solid #04b9ff; background: linear-gradient(to bottom,  rgba(1,37,70,.2) 0%,rgba(1,37,70,.2) 100%);">
                             <div style='color:#F4BD59; font-size: 14px;'>${name}</div>
                             <div style="display: flex; align-items: center;padding-top: 6px;">
                              <div style="height: 6px; width: 6px; border-radius: 50%; background:#F4BD59; margin-right: 10px;"></div> <span style='color:#fff;font-size: 12px;margin-right: 20px;'>tooltip</span><span style="font-size: 12px;font-family: 'PangMenZhengDao'">${count}</span>
                             </div>
                          </div>`
                return res
              }
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  color: '#fff'
                },
                color: '#fff',
                borderColor: '#32CBE0',
                borderWidth: 1.5,
                areaColor: {
                  type: 'linear-gradient',
                  x: 0,
                  y: 1000,
                  x2: 0,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0.5,
                      color: '#273e56' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#111c35' // 100% 处的颜色
                    }
                  ],
                  global: true // 缺省为 false
                }
              },
              emphasis: {
                label: {
                  show: true,
                  color: '#fff'
                },
                borderWidth: 3,
                borderColor: 'rgba(255, 230, 175,0.8)',
                shadowColor: 'rgba(255, 230, 175,0.5)',
                shadowBlur: 30,
                textStyle: {
                  color: '#fff',
                  fontSize: 12,
                  backgroundColor: 'transparent'
                },
                areaColor: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#1cfbfe'
                    },
                    {
                      offset: 1,
                      color: '#3348e7'
                    }
                  ],
                  false
                )
              }
            },
            data: data
          },
          {
            type: 'scatter',
            // type: 'effectScatter',
            coordinateSystem: 'geo',
            rippleEffect: {
              brushType: 'fill'
            },
            label: {
              show: true,
              color: '#fff',
              formatter: function (obj) {
                return obj.name
              }
            },
            symbolSize: function (val) {
              var value = val[2]
              if (value < max) {
                return 15
              }
              return 20
            },
            showEffectOn: 'render', //加载完毕显示特效
            itemStyle: {
              normal: {
                color: '#FEBE13', // 圆点的颜色
                shadowBlur: 1,
                shadowColor: '#333'
              }
            },
            zlevel: 6,
            data: pointData
          },
          {
            type: 'custom',
            coordinateSystem: 'geo',
            renderItem: function (params, api) {
              //具体实现自定义图标的方法
              return {
                type: 'image',
                style: {
                  x:
                    api.coord([
                      pointData[params.dataIndex].value[0],
                      pointData[params.dataIndex].value[1]
                    ])[0] - 6, // 数据的设置
                  y:
                    api.coord([
                      pointData[params.dataIndex].value[0],
                      pointData[params.dataIndex].value[1]
                    ])[1] - 34
                }
              }
            },
            zlevel: 10,
            data: pointData
          }
        ]
      }

      this.chart = echarts.init(document.getElementById('container'))
      this.chart.setOption(option)

      var count = 0
      var timer = null
      var chart = echarts.init(document.getElementById('container'))
      var dataLength = option.series[0].data.length
      timer && clearInterval(timer)
      timer = setInterval(() => {
        chart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0
        })
        chart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: count % dataLength
        })
        chart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: count % dataLength
        })
        count++
      }, 3000)
      chart.on('mouseover', function (params) {
        clearInterval(timer)
        chart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0
        })
        chart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: params.dataIndex
        })
        chart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: params.dataIndex
        })
      })
      chart.on('mouseout', function (params) {
        timer && clearInterval(timer)
        timer = setInterval(function () {
          chart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0
          })
          chart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: count % dataLength
          })
          chart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: count % dataLength
          })
          count++
        }, 3000)
      })
    }
  }
}
</script>
<style scoped>
#container {
  width: 100vw;
  height: 100vh;
  animation: bounce-down 7s linear infinite;
}
@keyframes bounce-down {
  25% {
    transform: translateY(-15px);
  }
  50%,
  100% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(15px);
  }
}
</style>
