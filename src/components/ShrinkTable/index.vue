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
        { value: 53, name: '历城区 ' }
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
          name: item.name
        })
      })
      this.chart.setOption({
        color: ['#1994ff', '#f48483'],
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
#pie1 {
  height: 150px;
  width: 230px;
}
</style>
