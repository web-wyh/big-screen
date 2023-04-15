<template>
  <dv-full-screen-container>
    <!-- 顶部导航 -->
    <top-menu></top-menu>
    <screen-map></screen-map>
    <left-table-ech></left-table-ech>
    <right-table-ech></right-table-ech>
    <foot-menu></foot-menu>
  </dv-full-screen-container>
</template>
<script>
import TopMenu from '../TopMenu'
import ScreenMap from '../ScreenMap'
import LeftTableEch from '../LeftTableEch'
import RightTableEch from '../RightTableEch'
import FootMenu from '../FootMenu'
export default {
  components: {
    TopMenu,
    ScreenMap,
    LeftTableEch,
    RightTableEch,
    FootMenu
  },
  name: 'BigScreenScreen',

  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>
<style scoped></style>
