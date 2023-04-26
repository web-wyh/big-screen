<template>
  <div class="supplyTableRightEcharts">
    <right-echarts-components></right-echarts-components>
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
  height: calc(100% - 80px);
  position: fixed;
  top: 60px;
  right: 8px;
  z-index: 9999;
  color: #fff;
  // overflow-y: scroll;
}
</style>
