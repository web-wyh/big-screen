<template>
  <div class="topNav">
    <div class="footSty">
      家&nbsp;聊&nbsp;IM&nbsp;数&nbsp;据&nbsp;大&nbsp;屏
      <!-- 武&nbsp;汉&nbsp;保&nbsp;供&nbsp;水&nbsp; -->
    </div>
    <div class="weather">
      <span>{{
        `${this.weatherPosition}天气：${this.weather?.weather} ${this.weather?.temperature}℃`
      }}</span>
    </div>
    <div class="date">{{ date }}</div>
  </div>
</template>
<script>
import $API from '../../http/api'
import moment from 'moment'
export default {
  name: 'BigScreenScreen',

  data() {
    return {
      weather: {},
      weatherPosition: '',
      date: ''
    }
  },

  mounted() {
    this.weatherRequest()
    this.getEveryDayDate()
  },

  methods: {
    weatherRequest() {
      this.$axios({
        methods: 'get',
        url: $API.weatherGeographicPosition,
        params: {
          key: '3542a10127628dad9dce5f03afa6f175'
        }
      })
        .then((res) => {
          const { data } = res
          this.weatherPosition = data?.city
          this.$axios({
            url: $API.weatherData,
            methods: 'get',
            params: {
              key: '3542a10127628dad9dce5f03afa6f175',
              city: `${data.adcode}`
            }
          }).then((res) => {
            const { lives } = res?.data

            this.weather = lives[0]
            // console.log(this.weather, this.weatherPosition)
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getEveryDayDate() {
      const day = new Date()
      setInterval(() => {
        this.date = `${day.getFullYear()}-${
          day.getMonth() + 1
        }-${day.getDate()} ${moment().format('h:mm:ss')}`
      }, 1000)
    }
  }
}
</script>
<style scoped>
.topNav {
  width: 100%;
  height: 60px;
  background: url(../../assets/img/nav.png) no-repeat;
  background-position: 0px -30px;
  position: fixed;
  background-size: 100%;
}
.footSty {
  position: absolute;
  font-style: italic;
  font-weight: bolder;
  font-size: 35px;
  color: #fff;
  text-shadow: 0 0 50px #4ba1e0;
  left: 39%;
  top: 12%;
  cursor: default;
}
.weather {
  color: #fff;
  font-size: 14px;
  width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.date {
  position: absolute;
  right: 0;
  top: 0;
  color: #fff;
  font-size: 14px;
  width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
</style>
