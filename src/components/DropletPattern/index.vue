<template>
  <div class="box" style="margin: 14px 0 20px 17px">
    <div class="box-logo" style="width: 100%; height: 26px">
      <div style="width: 22px; height: 26px">
        <div class="logo-y"></div>
      </div>
      <div
        style="
          color: #00ccff;
          font-size: 15px;
          line-height: 26px;
          font-weight: bolder;
        "
      >
        444
      </div>
    </div>
    <div style="width: 100%; height: 280px">
      <div class="bubble allLoadRate">
        <div style="width: 45px; margin: 10px 0 0 23px; font-size: 12px">
          <span style="font-size: 17px; color: #8dcbff">105</span>
          <span>%</span>
          全市总负荷率
        </div>
      </div>
      <div class="bubble centralCity">
        <div style="width: 49px; margin: 7px 0 0 9px; font-size: 12px">
          <span style="font-size: 17px; color: #8dcbff">141</span>
          <span>%</span>
          历下区
        </div>
      </div>
      <div class="bubble dongxiLake">
        <div style="width: 38px; margin: 7px 0 0 12px; font-size: 12px">
          <span style="font-size: 17px; color: #8dcbff">50</span>
          <span>%</span>
          大明湖
        </div>
      </div>
      <div class="bubble jingkaiDistrict">
        <div style="width: 38px; margin: 7px 0 0 12px; font-size: 12px">
          <span style="font-size: 17px; color: #8dcbff">42</span>
          <span>%</span>
          历城区
        </div>
      </div>
      <div class="bubble xinzhouDistrict">
        <div style="width: 38px; margin: 7px 0 0 10px; font-size: 12px">
          <span style="font-size: 17px; color: #8dcbff">77</span>
          <span>%</span>
          槐荫区
        </div>
      </div>
      <div class="bubble xinzhouDistrict1">
        <div style="width: 38px; margin: 7px 0 0 10px; font-size: 12px">
          <span style="font-size: 17px; color: #8dcbff">77</span>
          <span>%</span>
          槐荫区
        </div>
      </div>
      <div class="bubble xinzhouDistrict2">
        <div style="width: 38px; margin: 7px 0 0 10px; font-size: 12px">
          <span style="font-size: 17px; color: #8dcbff">77</span>
          <span>%</span>
          槐荫区
        </div>
      </div>
      <div class="bubble xinzhouDistrict3">
        <div style="width: 38px; margin: 7px 0 0 10px; font-size: 12px">
          <span style="font-size: 17px; color: #8dcbff">77</span>
          <span>%</span>
          槐荫区
        </div>
      </div>
      <div class="bubble xinzhouDistrict4">
        <div style="width: 38px; margin: 7px 0 0 10px; font-size: 12px">
          <span style="font-size: 17px; color: #8dcbff">77</span>
          <span>%</span>
          槐荫区
        </div>
      </div>
      <div class="bubble xinzhouDistrict5">
        <div style="width: 38px; margin: 7px 0 0 10px; font-size: 12px">
          <span style="font-size: 17px; color: #8dcbff">77</span>
          <span>%</span>
          槐荫区
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shuidi',

  data() {
    return {}
  },

  mounted() {
    this.initChart()
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
  width: 440px;
  height: 250px;
  background-color: rgba(1, 37, 70, 0.3);

  .box-logo {
    display: flex;
    margin-left: 20px;
    .logo-y {
      height: 7px;
      width: 7px;
      background: #00ccff;
      border-radius: 50px;
      box-shadow: 0 0px 12px 3px #00ccff;
      margin: 10px 0 0 7.5px;
    }
  }
  .bubble {
    background: url(../../assets/img/bubble.png) no-repeat;
    position: absolute;
    font-size: 11px;
    text-align: center;
    cursor: default;
  }
  .allLoadRate {
    width: 88px;
    height: 88px;
    background-size: 88px 88px;
    top: 48px;
    left: 182px;
    -webkit-animation: bounce-down 3s linear infinite;
    animation: bounce-down 3s linear infinite;
  }
  .centralCity {
    width: 66px;
    height: 66px;
    background-size: 66px 66px;
    top: 32px;
    left: 14px;
    -webkit-animation: bounce-down 4s linear infinite;
    animation: bounce-down 4s linear infinite;
  }
  .dongxiLake {
    width: 62px;
    height: 62px;
    background-size: 62px 62px;
    top: 102px;
    left: 14px;
    -webkit-animation: bounce-down 5s linear infinite;
    animation: bounce-down 5s linear infinite;
  }
  .jingkaiDistrict {
    width: 62px;
    height: 62px;
    background-size: 62px 62px;
    top: 18px;
    right: 3px;
    -webkit-animation: bounce-down 6s linear infinite;
    animation: bounce-down 6s linear infinite;
  }
  .xinzhouDistrict {
    width: 62px;
    height: 62px;
    background-size: 62px 62px;
    top: 96px;
    right: 7px;
    -webkit-animation: bounce-down 7s linear infinite;
    animation: bounce-down 7s linear infinite;
  }
  .xinzhouDistrict1 {
    width: 62px;
    height: 62px;
    background-size: 62px 62px;
    bottom: 6px;
    left: 57px;
    -webkit-animation: bounce-down 7s linear infinite;
    animation: bounce-down 7s linear infinite;
  }
  .xinzhouDistrict2 {
    width: 62px;
    height: 62px;
    background-size: 62px 62px;
    bottom: 6px;
    right: 77px;
    -webkit-animation: bounce-down 7s linear infinite;
    animation: bounce-down 7s linear infinite;
  }
  .xinzhouDistrict3 {
    width: 62px;
    height: 62px;
    background-size: 62px 62px;
    top: 166px;
    right: 207px;
    -webkit-animation: bounce-down 7s linear infinite;
    animation: bounce-down 7s linear infinite;
  }
  .xinzhouDistrict4 {
    width: 62px;
    height: 62px;
    background-size: 62px 62px;
    top: 106px;
    right: 237px;
    -webkit-animation: bounce-down 7s linear infinite;
    animation: bounce-down 7s linear infinite;
  }
  .xinzhouDistrict5 {
    width: 62px;
    height: 62px;
    background-size: 62px 62px;
    top: 96px;
    right: 97px;
    -webkit-animation: bounce-down 7s linear infinite;
    animation: bounce-down 7s linear infinite;
  }
}
@-webkit-keyframes bounce-down {
  25% {
    -webkit-transform: translateY(-5px);
  }
  50%,
  100% {
    -webkit-transform: translateY(0);
  }
  75% {
    -webkit-transform: translateY(5px);
  }
}

@keyframes bounce-down {
  25% {
    transform: translateY(-5px);
  }
  50%,
  100% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(5px);
  }
}
</style>
