<template>
  <div>
    <div id="pie1"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  data() {
    return {
      dataList: [
        { value: 112, name: '历下区 ' },
        { value: 53, name: '历城区 ' },
        { value: 112, name: '槐荫区 ' },
        { value: 53, name: '章丘区 ' },
        { value: 74, name: '天桥区 ' },
        { value: 50, name: '市中区 ' }
      ],
      chart: null,
      dataArr: []
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    /* 初始化charts */
    initChart() {
      this.chart = echarts.init(document.getElementById('pie1'))
      let max = 0
      this.dataList.forEach((item) => (max += item.value))
      this.dataList.forEach((item) => {
        this.dataArr.push({
          value: item.value,
          name: `${item.name} ${item.value}吨 ${
            (item.value / max).toFixed(2) * 100
          }%`
        })
      })
      this.chart.setOption({
        color: [
          '#1994ff',
          '#f48483',
          '#3fcdbd',
          '#8073c5',
          '#00d7e9',
          '#ffc700'
        ],
        tooltip: {
          trigger: 'item'
        },
        legend: {
          width: '100%',
          textStyle: {
            color: '#ffffff',
            fontSize: 12
          },
          bottom: '5%',
          itemGap: 10,
          itemWidth: 5,
          itemHeight: 5,
          orient: 'vertical',
          right: '10%',
          top: '0%'
        },
        series: [
          {
            name: '济南市',
            type: 'pie',
            right: '34%',
            top: '-5%',
            bottom: '5%',
            radius: ['50%', '80%'],
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            data: this.dataArr
          }
        ]
      })
    }
  }
}
</script>

<style scoped lang="scss">
#pie1 {
  height: 150px;
  width: 480px;
}
</style>
