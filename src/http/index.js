import actorApi from "./apis/ActorApi";
import directorApi from "./apis/DirectorApi";
import movieApi from "./apis/MovieApi";

// 当前index.js, 整合apis文件夹中的所有接口
const httpApi = {
  actorApi,
  directorApi,
  movieApi
}

export default httpApi;