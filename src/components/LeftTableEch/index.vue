<template>
  <div class="bigScreenLeftEch">
    <div class="topEcharts">
      <toggle-tab></toggle-tab>
    </div>
  </div>
</template>

<script>
import ToggleTab from '../ToggleTab.vue'

export default {
  name: 'bigScreenLeftEch',
  components: {
    ToggleTab
  },
  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style scoped lang="scss">
.bigScreenLeftEch {
  width: 480px;
  height: calc(100% - 80px);
  position: fixed;
  top: 60px;
  left: 8px;
  z-index: 9999;
  color: #fff;
  // font-size: 50px;
  // overflow-y: scroll;
}
.topEcharts {
  width: 100%;
  height: 100%;
  opacity: 0.85;
  margin-bottom: 13px;
}
</style>
