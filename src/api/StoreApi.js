import axios from "axios";
import ApiHost from "../modules/ApiHost";

class StoreApi {
  static async getData(query) {
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
    const queryString = Object.entries(query)
      .map((e) => e.join("="))
      .join("&");

    return await axios.get(
      ApiHost.getHost() + "api/v1/store/search?" + queryString
    );
  }
}

export default StoreApi;
