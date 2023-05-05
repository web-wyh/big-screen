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
      //各省份的地图json文件
      provinces: {
        上海市: 'https://geo.datav.aliyun.com/areas_v3/bound/310000_full.json',
        河北省: 'https://geo.datav.aliyun.com/areas_v3/bound/130000_full.json',
        山西省: 'https://geo.datav.aliyun.com/areas_v3/bound/140000_full.json',
        内蒙古自治区:
          'https://geo.datav.aliyun.com/areas_v3/bound/150000_full.json',
        辽宁省: 'https://geo.datav.aliyun.com/areas_v3/bound/210000_full.json',
        吉林省: 'https://geo.datav.aliyun.com/areas_v3/bound/220000_full.json',
        黑龙江省:
          'https://geo.datav.aliyun.com/areas_v3/bound/230000_full.json',
        江苏省: 'https://geo.datav.aliyun.com/areas_v3/bound/320000_full.json',
        浙江省: 'https://geo.datav.aliyun.com/areas_v3/bound/330000_full.json',
        安徽省: 'https://geo.datav.aliyun.com/areas_v3/bound/340000_full.json',
        福建省: 'https://geo.datav.aliyun.com/areas_v3/bound/350000_full.json',
        江西省: 'https://geo.datav.aliyun.com/areas_v3/bound/360000_full.json',
        山东省: 'https://geo.datav.aliyun.com/areas_v3/bound/370000_full.json',
        河南省: 'https://geo.datav.aliyun.com/areas_v3/bound/410000_full.json',
        湖北省: 'https://geo.datav.aliyun.com/areas_v3/bound/420000_full.json',
        湖南省: 'https://geo.datav.aliyun.com/areas_v3/bound/430000_full.json',
        广东省: 'https://geo.datav.aliyun.com/areas_v3/bound/440000_full.json',
        广西壮族自治区:
          'https://geo.datav.aliyun.com/areas_v3/bound/450000_full.json',
        海南省: 'https://geo.datav.aliyun.com/areas_v3/bound/460000_full.json',
        四川省: 'https://geo.datav.aliyun.com/areas_v3/bound/510000_full.json',
        贵州省: 'https://geo.datav.aliyun.com/areas_v3/bound/520000_full.json',
        云南省: 'https://geo.datav.aliyun.com/areas_v3/bound/530000_full.json',
        西藏自治区:
          'https://geo.datav.aliyun.com/areas_v3/bound/540000_full.json',
        陕西省: 'https://geo.datav.aliyun.com/areas_v3/bound/610000_full.json',
        甘肃省: 'https://geo.datav.aliyun.com/areas_v3/bound/620000_full.json',
        青海省: 'https://geo.datav.aliyun.com/areas_v3/bound/630000_full.json',
        宁夏回族自治区:
          'https://geo.datav.aliyun.com/areas_v3/bound/640000_full.json',
        新疆维吾尔自治区:
          'https://geo.datav.aliyun.com/areas_v3/bound/650000_full.json',
        北京市: 'https://geo.datav.aliyun.com/areas_v3/bound/110000_full.json',
        天津市: 'https://geo.datav.aliyun.com/areas_v3/bound/120000_full.json',
        重庆市: 'https://geo.datav.aliyun.com/areas_v3/bound/500000_full.json',
        香港特别行政区:
          'https://geo.datav.aliyun.com/areas_v3/bound/810000_full.json',
        澳门特别行政区:
          'https://geo.datav.aliyun.com/areas_v3/bound/820000_full.json',
        台湾省: 'https://geo.datav.aliyun.com/areas_v3/bound/710000.json'
      },
      //请求的数据
      intervalData: [],
      //处理后的省份数据
      provinceData: [],
      //全部城市列表
      allCityData: [],
      //下钻城市列表
      cityData: [],
      //各省份的数据
      allData: [
        { name: '北京市' },
        { name: '天津市' },
        { name: '上海市' },
        { name: '重庆市' },
        { name: '河北省' },
        { name: '河南省' },
        { name: '云南省' },
        { name: '辽宁省' },
        { name: '黑龙江省' },
        { name: '湖南省' },
        { name: '安徽省' },
        { name: '山东省' },
        { name: '新疆维吾尔自治区' },
        { name: '江苏省' },
        { name: '浙江省' },
        { name: '江西省' },
        { name: '湖北省' },
        { name: '广西壮族自治区' },
        { name: '甘肃省' },
        { name: '山西省' },
        { name: '内蒙古自治区' },
        { name: '陕西省' },
        { name: '吉林省' },
        { name: '福建省' },
        { name: '贵州省' },
        { name: '广东省' },
        { name: '青海省' },
        { name: '西藏自治区' },
        { name: '四川省' },
        { name: '宁夏回族自治区' },
        { name: '海南省' },
        { name: '台湾省' },
        { name: '香港特别行政区' },
        { name: '澳门特别行政区' }
      ],
      //定时器
      count: 0,
      timer: null,
      dataLength: 0,
      //单双击延时策略
      timeFn: null,
      max: 4000,
      myChart: null,
      //处理后的数据
      Province: [],
      //数据总数
      Length: 0,
      //省份地图点位
      provincePointData: [],
      //所有城市点位
      allCityPointData: [],
      //下钻省份的城市点位
      cityPointData: [],
      //下钻省份名称
      paramsName: ''
    }
  },
  created() {
    this.requestMap()
  },
  mounted() {},
  watch: {
    Province: {
      handler(n, o) {
        //数据全部循环完毕
        if (n.length && n.length == this.Length) {
          //监听地图数据请求完成
          this.intervalData = this.Province
          this.loadMap(
            'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json',
            'china'
          )
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    //请求地图数据
    requestMap() {
      this.$axios({
        methods: 'get',
        url: api.mapData,
        params: {
          secret: 'fa6fd2501c030f5329d36bb60a13315c',
          time: 1681626074,
          access_token: sessionStorage.getItem('token')
          // access_token: '93359f0dd5fe43fb9cf2d64634b037d7'
        }
      })
        .then((res) => {
          const { data } = res.data
          this.Result = data.map((obj) => ({
            name: Object.keys(obj)[0],
            value: Object.values(obj)[0]
          }))
          this.Length = this.Result.length
          this.compileCode(this.Result)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    //加载图表
    loadMap(mapCode, name) {
      this.$axios({
        methods: 'get',
        url: mapCode,
        params: {}
      })
        .then((res) => {
          this.myChart = echarts.init(document.getElementById('container'))
          echarts.registerMap(name, res.data)
          // 点位
          this.allCityPointData = []
          //将省市区分
          this.provinceData = []
          this.allCityData = []
          for (var i = 0; i < this.intervalData.length; i++) {
            if (this.intervalData[i].level == '省') {
              this.provinceData.push(this.intervalData[i])
            } else {
              this.allCityData.push(this.intervalData[i])
            }
          }
          //将区父级追加到provinceData并且和相加
          for (var c = 0; c < this.allCityData.length; c++) {
            //将原始数据与城市数据的父级进行匹配
            if (
              this.provinceData.find(
                (item) => item.name == this.allCityData[c].parent
              )
            ) {
              //相同省份的数据value相加
              let provinceDataList = this.provinceData.filter(
                (item) => item.name == this.allCityData[c].parent
              )
              provinceDataList[0].value += this.allCityData[c].value
            } else {
              //省份数据添加市
              this.provinceData.push({
                name: this.allCityData[c].parent,
                value: this.allCityData[c].value
              })
            }
          }
          for (var i = 0; i < this.intervalData.length; i++) {
            for (var j = 0; j < res.data.features.length; j++) {
              if (res.data.features[0].properties.level == 'province') {
                if (
                  this.intervalData[i].parent ==
                  res.data.features[j].properties.name
                ) {
                  let geoCoord = []
                  geoCoord.push(
                    res.data.features[j].properties.centroid
                      ? res.data.features[j].properties.centroid[0]
                      : res.data.features[j].properties.center[0]
                  )
                  geoCoord.push(
                    res.data.features[j].properties.centroid
                      ? res.data.features[j].properties.centroid[1]
                      : res.data.features[j].properties.center[1]
                  )
                  if (geoCoord) {
                    if (
                      !this.provincePointData.find(
                        (item) => item.name == this.intervalData[i].parent
                      )
                    ) {
                      this.provincePointData.push({
                        name: this.intervalData[i].parent,
                        value: geoCoord.concat(this.intervalData[i].value)
                      })
                    }
                  }
                }
              } else {
                if (
                  this.intervalData[i].name ==
                  res.data.features[j].properties.name
                ) {
                  let geoCoord = []
                  geoCoord.push(
                    res.data.features[j].properties.centroid
                      ? res.data.features[j].properties.centroid[0]
                      : res.data.features[j].properties.center[0]
                  )
                  geoCoord.push(
                    res.data.features[j].properties.centroid
                      ? res.data.features[j].properties.centroid[1]
                      : res.data.features[j].properties.center[1]
                  )
                  if (geoCoord) {
                    this.allCityPointData.push({
                      name: this.intervalData[i].name,
                      parent: this.intervalData[i].parent,
                      value: geoCoord.concat(this.intervalData[i].value)
                    })
                  }
                }
              }
            }
          }
          this.cityPointData = []
          for (var i = 0; i < this.allCityPointData.length; i++) {
            if (this.allCityPointData[i].parent == this.paramsName) {
              let point = {}
              point.name = this.allCityPointData[i].name
              point.value = this.allCityPointData[i].value
              this.cityPointData.push(point)
            }
          }

          var option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                show: false,
                type: 'shadow'
              }
            },
            grid: {
              right: '10%',
              top: '25%',
              bottom: '90%',
              left: '10%'
            },
            geo: [
              {
                map: name,
                zlevel: -1,
                zoom: 1.0,
                silent: true,
                layoutCenter: ['50%', '60%'],
                layoutSize: '100%',
                roam: false,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(192,245,249,.8)',
                    borderWidth: 3,
                    shadowColor: '#6FFDFF',
                    shadowOffsetY: 0,
                    shadowBlur: 10
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
                map: name,
                zoom: 1.0,
                layoutCenter: ['50%', '60%'],
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
                          color: '#0D59C1' // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: '#53C9C7' // 100% 处的颜色
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
                map: name,
                zlevel: -2,
                zoom: 1.0,
                layoutCenter: ['50%', '60.7%'],
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
                map: name,
                zlevel: -3,
                zoom: 1.0,
                layoutCenter: ['50%', '61.7%'],
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
                name: 'MAP',
                type: 'map',
                layoutCenter: ['50%', '60%'],
                layoutSize: '100%',
                mapType: name,
                selectedMode: 'false', //是否允许选中多个区域
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
                itemStyle: {
                  normal: {
                    label: {
                      show: true,
                      color: '#fff',
                      formatter: (params) => {
                        for (var i = 0; i < this.intervalData.length; i++) {
                          if (this.intervalData[i].parent == params.name) {
                            return ''
                          }
                          if (this.intervalData[i].name == params.name) {
                            return ''
                          }
                        }
                        return params.name
                      }
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
                          color: '#0D59C1' // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: '#53C9C7' // 100% 处的颜色
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
                data:
                  res.data.features[0].properties.level == 'province'
                    ? this.provinceData
                    : this.cityData,

                tooltip: {
                  show: true,
                  transitionDuration: 0,
                  trigger: 'item',
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                  extraCssText: 'z-index:100;color:#fff;',
                  confine: false, //是否将 tooltip 框限制在图表的区域内
                  formatter: (params, ticket, callback) => {
                    //根据业务拓展要显示的内容
                    var res = ''
                    var name = params.name
                    let count = params.value ? params.value : 0
                    res = `<div style="box-shadow: 0 0 10px #3BD9D9; padding: 10px; position: absolute; top: 0; left:0;  border-radius: 4px; border: 1px solid #04b9ff; background: linear-gradient(to bottom,  #51bfd4 0%,rgba(35,90,178,.8) 100%);">
                          <div style='color:#F4BD59; font-size: 14px;'>${name}</div>
                          <div style="display: flex; align-items: center;padding-top: 6px;">
                          <div style="height: 6px; width: 6px; border-radius: 50%; background:#F4BD59; margin-right: 10px;"></div> <span style='color:#fff;font-size: 12px;margin-right: 20px;'>在线人数</span><span style="font-size: 12px;font-family: 'PangMenZhengDao'">${count}</span>
                          </div>
                      </div>`
                    return res
                  }
                }
              },
              // 点位
              {
                type: 'scatter',
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
                  let value = val[2]
                  if (value < 4000) {
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
                data:
                  res.data.features[0].properties.level == 'province'
                    ? this.provincePointData
                    : this.cityPointData
              }
            ]
          }
          this.myChart.setOption(option)
          this.dataLength = option.series[0].data.length
          //如果为省级数据，则开启定时器
          if (
            option.series[0].data.length &&
            option.series[0].data[0].level == '省'
          ) {
            this.interval()
          }
          //单击切换到省级地图，当mapCode有值,说明可以切换到下级地图
          this.myChart.off('click')
          this.myChart.on('click', (params) => {
            this.paramsName = params.name
            this.myChart.off('click')
            //由于单击事件和双击事件冲突，故单击的响应事件延迟250毫秒执行
            this.timeFn = setTimeout(() => {
              let name = params.name //地区name
              let mapCode = this.provinces[name] //地区的json数据
              if (!mapCode) {
                return
              }
              this.loadMap(mapCode, name)
              //清除定时器
              clearInterval(this.timer)
            }, 250)
            this.cityData = []
            this.cityPointData = []
            for (var i = 0; i < this.allCityData.length; i++) {
              if (this.allCityData[i].parent == params.name) {
                let city = {}
                city.name = this.allCityData[i].name
                city.value = this.allCityData[i].value
                this.cityData.push(city)
              }
            }
            option.series[0].data = this.cityData
          })
          // 绑定双击事件，返回全国地图
          this.myChart.off('dblclick')
          this.myChart.on('dblclick', (params) => {
            //当双击事件发生时，清除单击事件，仅响应双击事件
            this.myChart.off('click')
            //返回全国地图
            this.loadMap(
              'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json',
              'china'
            )
          })
          //鼠标划入清除定时器，并高亮模块
          this.myChart.on('mouseover', (params) => {
            clearInterval(this.timer)
            this.myChart.dispatchAction({
              type: 'downplay',
              seriesIndex: 2
            })
            this.myChart.dispatchAction({
              type: 'highlight',
              seriesIndex: 2,
              dataIndex: 2
            })
            this.myChart.dispatchAction({
              type: 'showTip',
              seriesIndex: 2,
              dataIndex: 2
            })
          })
          //鼠标划出，启动定时器
          this.myChart.on('mouseout', (params) => {
            clearInterval(this.timer)
            if (
              this.myChart._model.option.series[0].data.length &&
              this.myChart._model.option.series[0].data[0].level == '省'
            ) {
              this.timer = setInterval(() => {
                this.myChart.dispatchAction({
                  type: 'downplay',
                  seriesIndex: 0
                })
                this.myChart.dispatchAction({
                  type: 'highlight',
                  seriesIndex: 0,
                  dataIndex: this.count % this.dataLength
                })
                this.myChart.dispatchAction({
                  type: 'showTip',
                  seriesIndex: 0,
                  dataIndex: this.count % this.dataLength
                })
                this.count++
              }, 3000)
            }
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    //定时器
    interval() {
      this.timer && clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0
        })
        this.myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: this.count % this.dataLength
        })
        this.myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: this.count % this.dataLength
        })
        this.count++
      }, 3000)
    },
    //地理编码，传入城市名返回省份或完整城市名
    compileCode(val) {
      const tk = '76dbd3dee0d0009ad97a34f71366a35f'
      val.map((item) => {
        this.$axios({
          url: 'https://restapi.amap.com/v3/geocode/geo',
          method: 'get',
          params: {
            key: tk,
            address: item.name
          }
        })
          .then((res) => {
            let Province = {}
            Province.level = res.data.geocodes[0].level
            Province.parent = res.data.geocodes[0].province
            Province.name =
              res.data.geocodes[0].city.length == 0
                ? res.data.geocodes[0].district
                : res.data.geocodes[0].city
            Province.value = item.value
            this.Province.push(Province)
          })
          .catch((err) => {
            console.log(err)
          })
      })
    }
  }
}
</script>
<style scoped lang="scss">
#container {
  width: 100vw;
  height: 100vh;
  // height: 1000px;
  animation: bounce-down 7s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
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
