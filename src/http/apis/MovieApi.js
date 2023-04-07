import myaxios from "../MyAxios";

import BASEURL from '@/http/BaseUrl'
const BMDURL = BASEURL.BMDURL

const movieApi = {

  /** 新增电影 */
  add(params) {
    let url = BMDURL + "/movie-info/add"
    return myaxios.post(url, params)
  },

  /**
   * 查询所有的电影类型  
   */
  queryTypes() {
    return myaxios.get(BMDURL + '/movie-types')
  },

  /**
   * 通过页码/每页条目数据  分页查询电影列表
   * @param {Object} params {page:1, pagesize:3}
   */
  queryAll(params) {
    let url = BMDURL + "/movie-infos"
    return myaxios.get(url, params)
  },

  /**
   * 模糊查询电影列表
   * @param {Object} params {name, page, pagesize}
   */
  queryAllByName(params) {
    let url = BMDURL + '/movie-infos/name'
    return myaxios.post(url, params)
  },

  /**
   * 删除电影
   * @param {Object} params  {id}
   */
  delete(params) {
    let url = BMDURL + '/movie-info/del'
    return myaxios.post(url, params)
  }
}

export default movieApi;