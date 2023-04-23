//请求天气数据
const weatherData = 'https://restapi.amap.com/v3/weather/weatherInfo?'
//地理位置数据
const weatherGeographicPosition = 'https://restapi.amap.com/v3/ip?'
const requestAllWay = 'https://xn1.shandianyun.com.cn'

const api = {
  weatherData,
  weatherGeographicPosition,
  map: `${requestAllWay}/mp/login`,
  mapData: `${requestAllWay}/areastatis/list`,
  shuidi: `${requestAllWay}/console/countNum`,
  maxAndAll: `${requestAllWay}/console/online/user/count`,
  barData: `${requestAllWay}/console/getUserStatusCount`,
  registerData: `${requestAllWay}/console/getUserRegisterCount`,
  singleChat: `${requestAllWay}/console/chatMsgCount`,
  addFirends: `${requestAllWay}/console/addFriendsCount`,
  addRooms: `${requestAllWay}/console/addRoomsCount`,
  tableScroll: `${requestAllWay}/listenport/list`,
  pieGaupeData: `${requestAllWay}/operatortatis/list`,
  activeData: `${requestAllWay}/console/serven/statistics`
}

export default api
