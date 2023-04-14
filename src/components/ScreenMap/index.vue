<!--


   <template>
  <div id="container"></div>
</template>
<script>
import * as THREE from 'three'
import mapJson from '../../chinaMap/china.json'
let scene = null,
  camera = null,
  renderer = null,
  mesh = null,
  shape = null

export default {
  name: 'BigScreenScreen',

  data() {
    return {}
  },
  created() {},
  mounted() {
    this.init(), this.animate()
  },

  methods: {
    // init() {
    //   let container = document.getElementById('container')
    //   camera = new THREE.PerspectiveCamera(
    //     70,
    //     container.clientWidth / container.clientHeight,
    //     0.01,
    //     10
    //   )
    //   camera.position.z = 10
    //   scene = new THREE.Scene()

    //   const point = []

    //   mapJson.features.forEach((item) => {
    //     item.geometry.coordinates[0][0].forEach((value) => {
    //       point.push(new THREE.Vector2(value[0], value[1]))
    //     })
    //   })
    //   // console.log(mapJson.features)

    //   shape = new THREE.Shape(point)

    //   let geometry = new THREE.ShapeGeometry(shape)
    //   geometry.center()
    //   geometry.scale(1, 1, 1)
    //   console.log(geometry)

    //   let material = new THREE.MeshNormalMaterial()

    //   mesh = new THREE.Mesh(geometry, material)
    //   scene.add(mesh)

    //   renderer = new THREE.WebGLRenderer({ antialias: true })
    //   renderer.setSize(window.innerWidth, window.innerHeight)
    //   renderer.setClearColor(0x12345)
    //   container.appendChild(renderer.domElement)

    //   console.log(shape)
    // },
    animate() {
      // requestAnimationFrame(this.animate)
      // mesh.rotation.x += 0.01
      // mesh.rotation.y += 0.02
      renderer.render(scene, camera)
    }
  },
  mounted() {
    this.init()
    this.animate()
  }
}
</script>
<style scoped>
#container {
  width: 100vw;
  height: 100vh;
}
</style> 

-->

<template>
  <div id="container"></div>
</template>
<script>
import * as echarts from 'echarts'
import '../../chinaMap/china'
export default {
  name: 'BigScreenScreen',

  data() {
    return {
      chart: null
    }
  },

  mounted() {
    this.initChart()
  },

  methods: {
    initChart() {
      let uploadedDataURL = '/assets/img/data-1640589484383-TgctXdaF8.png'
      let mapName = 'china'
      let data = [
        { name: '天津', value: 4075 },
        { name: '湖北', value: 500 },
        { name: '湖南', value: 3212 },
        { name: '江西', value: 5000 },
        { name: '甘肃', value: 550 },
        { name: '浙江', value: 1233 }
      ]

      let geoCoordMap = {}

      /*获取地图数据*/
      let mapFeatures = echarts.getMap(mapName).geoJson.features

      mapFeatures.forEach((item) => {
        // 地区名称
        let name = item.properties.name
        // 地区经纬度
        geoCoordMap[name] = item.properties.cp
      })
      console.log(geoCoordMap)
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

      this.chart = echarts.init(document.getElementById('container'))
      this.chart.setOption({
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
                res = `<div style="box-shadow: 0 0 10px #3BD9D9; padding: 10px; position: absolute; top: 0; left:0;  border-radius: 4px; border: 1px solid #04b9ff; background: linear-gradient(to bottom,  #51bfd4 0%,rgba(35,90,178,.8) 100%);">
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
            type: 'effectScatter',
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
                shadowBlur: 10,
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
                  image: uploadedDataURL, // 自定义的图片地址
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
      })
    }
  }
}
</script>
<style scoped>
#container {
  width: 100vw;
  height: 100vh;
}
</style>
