<template>
  <dv-full-screen-container>
    <!-- 顶部导航 -->
    <top-menu></top-menu>
    <!-- <screen-map></screen-map> -->
    <left-table-ech></left-table-ech>
    <right-table-ech></right-table-ech>
  </dv-full-screen-container>
</template>
<script>
import TopMenu from '../TopMenu'
import ScreenMap from '../ScreenMap'
// import LeftTableEch from '../components/LeftTableEch'
import LeftTableEch from '../LeftTableEch'
import RightTableEch from '../RightTableEch'
export default {
  components: {
    TopMenu,
    ScreenMap,
    LeftTableEch,
    RightTableEch
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
