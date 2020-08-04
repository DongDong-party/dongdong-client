import axios from "axios";
import ApiHost from "../modules/api-host";

class CategoryApi {
  static async getList() {
    return await axios.get(ApiHost.getHost() + "api/v1/category");
  }
}

export default CategoryApi;
