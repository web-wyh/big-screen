<template>
  <div class="supplyTableRightEcharts">
    <div class="rightEch">
      <right-echarts-components></right-echarts-components>
    </div>
  </div>
</template>

<script>
import RightEchartsComponents from '../RightEchartsComponent.vue'

export default {
  name: 'WatersupplyWebIndexRight',
  components: {
    RightEchartsComponents
  },
  data() {
    return {}
  },
  mounted() {},

  methods: {}
}
</script>

<style scoped lang="scss">
.supplyTableRightEcharts {
  width: 480px;
  height: calc(100vh - 60px);
  position: fixed;
  top: 60px;
  right: 8px;
  z-index: 9999;
  color: #fff;
  font-size: 50px;
  overflow-y: scroll;
}
.rightEch {
  width: 100%;
  height: calc(100vh - 60px);
  margin-bottom: 13px;
}
</style>
