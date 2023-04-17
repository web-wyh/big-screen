<template>
  <div>
    <div id="pieGaupe"></div>
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
        { value: 53, name: '章丘区 ' },
        { value: 53, name: '槐荫区 ' },
        { value: 53, name: '市中区 ' },
        { value: 53, name: '天桥区 ' }
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
      this.chart = echarts.init(document.getElementById('pieGaupe'))
      let max = 0
      this.dataList.forEach((item) => (max += item.value))
      this.dataList.forEach((item) => {
        this.dataArr.push({
          value: item.value,
          name: item.name
        })
      })
      this.chart.setOption({
        color: [
          '#1994ff',
          '#f48483',
          '#00BFFF',
          '#4169E1',
          '#48D1CC',
          '#FFD700'
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
          orient: 'horizontal',
          left: 'center',
          top: '0%'
        },
        series: [
          {
            name: '济南市',
            type: 'pie',
            right: '0%',
            top: '15%',
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
#pieGaupe {
  height: 150px;
  width: 460px;
}
</style>
