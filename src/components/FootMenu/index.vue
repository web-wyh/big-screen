<template>
  <div class="FootScrollTable">
    <div class="header1">
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
          告警事件
        </div>
      </div>
    </div>
    <div class="header2">
      <div>
        <div class="header2_1">
          {{ `${name3.activeAt}:${name3.summary}` }}
        </div>
        <dv-scroll-board :config="config" style="width: 400px; height: 40px" />
      </div>
      <div>
        <div class="header2_2">{{ `${name2.activeAt}:${name2.summary}` }}</div>
        <dv-scroll-board :config="config1" style="width: 400px; height: 40px" />
      </div>
    </div>
    <div class="header3">
      <div>
        <div class="header3_1">{{ `${name1.activeAt}:${name1.summary}` }}</div>
        <dv-scroll-board :config="config2" style="width: 400px; height: 40px" />
      </div>
      <div>
        <div class="header3_2">{{ `${name.activeAt}:${name.summary}` }}</div>
        <dv-scroll-board :config="config3" style="width: 400px; height: 40px" />
      </div>
    </div>
  </div>
</template>
<script>
import api from '../../http/api'
export default {
  name: 'BigScreenScreen',

  data() {
    return {
      tableHeaderInfo: [],
      config: {
        data: [
          ['告警名称'],
          ['告警描述'],
          ['ID'],
          ['告警来源'],
          ['探针来源'],
          ['告警分类'],
          ['告警级别'],
          ['告警状态']
        ],
        rowNum: 1,
        oddRowBGC: 'rgba(17, 28, 53, 0.6)',
        evenRowBGC: 'rgba(5, 36, 84, 0.6)',
        waitTime: 2000,
        align: ['center', 'center']
      },
      config1: {
        data: [
          ['告警名称'],
          ['告警描述'],
          ['ID'],
          ['告警来源'],
          ['探针来源'],
          ['告警分类'],
          ['告警级别'],
          ['告警状态']
        ],
        rowNum: 1,
        oddRowBGC: 'rgba(17, 28, 53, 0.6)',
        evenRowBGC: 'rgba(5, 36, 84, 0.6)',
        waitTime: 2000,
        align: ['center', 'center']
      },
      config2: {
        data: [
          ['告警名称'],
          ['告警描述'],
          ['ID'],
          ['告警来源'],
          ['探针来源'],
          ['告警分类'],
          ['告警级别'],
          ['告警状态']
        ],
        rowNum: 1,
        oddRowBGC: 'rgba(17, 28, 53, 0.6)',
        evenRowBGC: 'rgba(5, 36, 84, 0.6)',
        waitTime: 2000,
        align: ['center', 'center']
      },
      config3: {
        data: [
          ['告警名称'],
          ['告警描述'],
          ['ID'],
          ['告警来源'],
          ['探针来源'],
          ['告警分类'],
          ['告警级别'],
          ['告警状态']
        ],
        rowNum: 1,
        oddRowBGC: 'rgba(17, 28, 53, 0.6)',
        evenRowBGC: 'rgba(5, 36, 84, 0.6)',
        waitTime: 2000,
        align: ['center', 'center']
      },
      data3: [],
      name2: {},
      name3: {},
      name1: {},
      name: {}
    }
  },
  created() {},
  mounted() {
    this.getRequest()
  },

  methods: {
    getRequest() {
      this.$axios({
        methods: 'get',
        url: api.tableErr,
        params: {
          secret: '738616019746446fbe5df582aadeb850',
          time: 1680789750,
          access_token: this.$store.state.token
        }
      })
        .then((res) => {
          // debugger
          const { data } = res.data
          this.data3 = data
          console.log(res)
          this.getData()
          this.getDataCopy()
          this.getDataCopyC()
          this.getDataCopyCc()
          // console.log(this.data3[0])
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getData() {
      const dataArr = []

      const { activeAt, summary, ...rest } = this.data3[0]

      this.name3 = { activeAt, summary }
      const filteredObj = Object.keys(rest).reduce((acc, key) => {
        acc[key] = this.data3[0][key]
        return acc
      }, {})

      for (let i = 0; i < Object.values(filteredObj).length; i++) {
        dataArr.push([
          (this.config.data[i] += `:${Object.values(filteredObj)[i]}`)
          // (this.config.data[i] += `:<br/>${Object.values(filteredObj)[i]}`)
        ])
      }
      // console.log(dataArr)
      this.config = {
        data: dataArr,
        rowNum: 1,
        oddRowBGC: 'rgba(17, 28, 53, 0.6)',
        evenRowBGC: 'rgba(5, 36, 84, 0.6)',
        waitTime: 2000,
        align: ['center', 'center']
      }
    },
    getDataCopy() {
      const dataArr2 = []
      // console.log(dataArr2)

      const { activeAt, summary, ...rest } = this.data3[1]

      // console.log(rest)
      this.name2 = { activeAt, summary }

      const filteredObj = Object.keys(rest).reduce((acc, key) => {
        acc[key] = this.data3[1][key]
        return acc
      }, {})

      for (let i = 0; i < Object.values(filteredObj).length; i++) {
        dataArr2.push([
          (this.config1.data[i] += `:${Object.values(filteredObj)[i]}`)
        ])
      }

      this.config1 = {
        data: dataArr2,
        rowNum: 1,
        oddRowBGC: 'rgba(17, 28, 53, 0.6)',
        evenRowBGC: 'rgba(5, 36, 84, 0.6)',
        waitTime: 2000,
        align: ['center', 'center']
      }
    },
    getDataCopyC() {
      const dataArr2 = []
      // console.log(dataArr2)

      const { activeAt, summary, ...rest } = this.data3[1]

      // console.log(rest)
      this.name1 = { activeAt, summary }

      const filteredObj = Object.keys(rest).reduce((acc, key) => {
        acc[key] = this.data3[2][key]
        return acc
      }, {})

      for (let i = 0; i < Object.values(filteredObj).length; i++) {
        dataArr2.push([
          (this.config2.data[i] += `:${Object.values(filteredObj)[i]}`)
        ])
      }

      this.config2 = {
        data: dataArr2,
        rowNum: 1,
        oddRowBGC: 'rgba(17, 28, 53, 0.6)',
        evenRowBGC: 'rgba(5, 36, 84, 0.6)',
        waitTime: 2000,
        align: ['center', 'center']
      }
    },
    getDataCopyCc() {
      const dataArr2 = []
      // console.log(dataArr2)

      const { activeAt, summary, ...rest } = this.data3[1]

      // console.log(rest)
      this.name = { activeAt, summary }

      const filteredObj = Object.keys(rest).reduce((acc, key) => {
        acc[key] = this.data3[3][key]
        return acc
      }, {})

      for (let i = 0; i < Object.values(filteredObj).length; i++) {
        dataArr2.push([
          (this.config3.data[i] += `:${Object.values(filteredObj)[i]}`)
        ])
      }

      this.config3 = {
        data: dataArr2,
        rowNum: 1,
        oddRowBGC: 'rgba(17, 28, 53, 0.6)',
        evenRowBGC: 'rgba(5, 36, 84, 0.6)',
        waitTime: 11112000,
        align: ['center', 'center']
      }
    }
  }
}
</script>
<style scoped>
.FootScrollTable {
  width: 800px;
  height: 148px;
  position: fixed;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
}
.header1 {
  width: 100%;
  height: 30px;
  background-color: rgba(17, 28, 53, 0.6);
}
.header2 {
  width: 100%;
  height: 80px;
  display: flex;
  text-align: center;
  color: #fff;
  font-size: 13px;
  line-height: 40px;
}
.header2_1 {
  width: 100%;
  height: 28px;
  font-size: 13px;
  line-height: 28px;
  text-align: center;
  background-color: rgba(17, 28, 53, 0.6);
}
.header2_2 {
  width: 100%;
  height: 28px;
  font-size: 13px;
  text-align: center;
  line-height: 28px;
  background-color: rgba(17, 28, 53, 0.6);
}
.header3 {
  width: 100%;
  height: 80px;
  display: flex;
  text-align: center;
  color: #fff;
  font-size: 13px;
  line-height: 40px;
}
.header3_1 {
  width: 100%;
  height: 28px;
  font-size: 13px;
  text-align: center;
  line-height: 28px;
  background-color: rgba(17, 28, 53, 0.6);
}
.header3_2 {
  width: 100%;
  height: 28px;
  text-align: center;
  font-size: 13px;
  line-height: 28px;
  background-color: rgba(17, 28, 53, 0.6);
}
.box-logo {
  display: flex;
  margin-left: 20px;
}
.logo-y {
  height: 7px;
  width: 7px;
  background: #00ccff;
  border-radius: 50px;
  box-shadow: 0 0px 12px 3px #00ccff;
  margin: 10px 0 0 7.5px;
}
</style>
