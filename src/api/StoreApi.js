import axios from "axios";
import ApiHost from "../modules/ApiHost";
import QueryManager from "../modules/QueryManager";

class StoreApi {
  static async getData(query) {
    console.log("api Call 하자");
    if (query === undefined) {
      // 쿼리가 없으면 전체 리스트
      return await this.getList();
    } else {
      // 쿼리가 있으면 검색
      return await this.search(query);
    }
  }

  static async getList() {
    return await axios.get(ApiHost.getHost() + "api/v1/store");
  }

  static async search(query) {
    const queryString = QueryManager.makeQueryString(query);

    return await axios.get(
      ApiHost.getHost() + "api/v1/store/search?" + queryString
    );
  }
}

export default StoreApi;
