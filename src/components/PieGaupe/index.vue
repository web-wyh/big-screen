<template>
  <div>
    <div id="pieGaupe"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import api from '../../http/api'
export default {
  data() {
    return {
      dataList: [],
      chart: null,
      dataArr: []
    }
  },
  created() {
    this.requestPieData()
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
          orient: 'vertical',
          textStyle: {
            color: '#ffffff',
            fontSize: 12
          },
          bottom: '5%',
          itemGap: 15,
          itemWidth: 5,
          itemHeight: 5,
          // orient: 'horizontal',
          left: 'left',
          top: '0%'
        },
        series: [
          {
            name: '运营商信息统计',
            type: 'pie',
            right: '0%',
            top: '10%',
            left: '40%',
            bottom: '0%',
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
    },
    requestPieData() {
      this.$axios({
        methods: 'get',
        url: api.pieGaupeData,
        params: {
          secret: 'fa6fd2501c030f5329d36bb60a13315c',
          time: 1681626074,
          // access_token: sessionStorage.getItem('token')
          access_token: this.$store.state.token
        }
      })
        .then((res) => {
          const { data } = res.data
          this.dataList = data.map((obj) => ({
            name: `${Object.keys(obj)[0]}:${Object.values(obj)[0]}`,
            value: Object.values(obj)[0]
          }))

          this.initChart()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
#pieGaupe {
  height: 110px;
  width: 460px;
}
</style>
