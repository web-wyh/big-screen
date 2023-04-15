<template>
  <div class="left_ech_1">
    <div class="allBox">
      <dv-border-box-1 style="height: 280px">
        <div style="height: 280px"><droplet-pattern></droplet-pattern></div>
      </dv-border-box-1>

      <dv-border-box-1>
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
              222
            </div>
          </div>
          <div style="width: 100%; height: 150px; display: flex">
            <div style="width: 50%"><shrink-table></shrink-table></div>
            <div style="width: 50%"><bar-line></bar-line></div>
          </div>
        </div>
      </dv-border-box-1>

      <dv-border-box-1>
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
              111
            </div>
          </div>
          <div style="width: 100%; height: 150px">
            <shadow-broken-line></shadow-broken-line>
          </div>
        </div>
      </dv-border-box-1>
    </div>
  </div>
</template>

<script>
// import * as echarts from 'echarts'
import ShrinkTable from './ShrinkTable'
import ShadowBrokenLine from './ShadowBrokenLine'
import BarLine from './BarLine'
import ScrollTable from './ScrollTable'
import DropletPattern from './DropletPattern'

export default {
  components: {
    ShrinkTable,
    ShadowBrokenLine,
    BarLine,
    ScrollTable,
    DropletPattern
  },
  data() {
    return {}
  },

  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss">
.left_ech_1 {
  width: 480px;
  height: auto;
  .allBox {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    padding: 20px 10px;

    .box {
      display: flex;
      flex-direction: column;
      position: relative;
      border-radius: 10px;
      width: 440px;

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
        background: url(../assets/img/bubble.png) no-repeat;
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
    }
  }
}
@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(-90deg);
  }
  50% {
    -webkit-transform: rotate(-180deg);
  }
  75% {
    -webkit-transform: rotate(-270deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
  }
}
@keyframes rotate1 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
.my-collapse .collapse-con {
  padding: 12px 10px;
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
