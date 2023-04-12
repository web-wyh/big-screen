<template>
  <div>
    <div id="pieEch"></div>
    <div class="allNumFontStyle">
      <span style="font-size: 16px">{{ max }}笔</span> 总数
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "WatersupplyWebIndex",

  data() {
    return {
      chart: null,
      dataList: [
        { value: 52, name: "水质工单 " },
        { value: 54, name: "水压居民工单 " },
        { value: 56, name: "其他工单 " },
        { value: 38, name: "水压市政管网工单 " },
        { value: 47, name: "报漏居民工单" },
        { value: 61, name: "营收工单" },
        { value: 64, name: "报漏市政管网工单" },
      ],
      dataArr: [],
      max: 0,
    };
  },

  mounted() {
    this.initChart();
  },

  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById("pieEch"));
      let num = 0;
      this.dataList.forEach((item) => (num += item.value));
      this.max = num;
      this.dataList.forEach((item) => {
        this.dataArr.push({
          value: item.value,
          name: `${item.name}: ${item.value}`,
        });
      });
      this.chart.setOption({
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["50%", "70%"],
            itemStyle: {
              borderRadius: 30,
              borderColor: "#012546",
              borderWidth: 4,
            },
            color: [
              "#00cdff",
              "#0195fe",
              "#fe7775",
              "#ffcc00",
              "#01ffff",
              "#91defe",
              "#8dffad",
            ],
            data: this.dataArr,

            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            label: {
              color: "#fff",
            },
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#pieEch {
  height: 184px;
  z-index: 9999;
}
.allNumFontStyle {
  text-align: center;
  width: 47px;
  font-size: 12px;
  color: #fff;
  position: absolute;
  z-index: 9999;
  left: 207px;
  top: 72px;
  span {
    font-weight: bolder;
    background-image: -webkit-linear-gradient(top, #ffffff, #4fc1e2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
