import React from 'react';
import axios from 'axios';
import ApiHost from '../modules/api-host';
import QueryManager from '../modules/query-manager';

class StoreApi extends React.Component {
  static async getData(query) {
    // console.log(query, 'call');
    console.log(query);
    try {
      if (!query || !query.categoryId) {
        console.log('전체리스트');

        // 쿼리가 없으면 전체 리스트
        return await this.getList();
      } else {
        // 쿼리가 있으면 검색
        console.log('검색');
        return await this.search(query);
      }
    } catch (e) {
      console.log(e);
    }
  }

  static async getList() {
    return await axios.get(ApiHost.getHost() + 'api/v1/store');
  }

  static async search(query) {
    const queryString = QueryManager.makeQueryString(query);

    return await axios.get(
      ApiHost.getHost() + 'api/v1/store/search?' + queryString,
    );
  }
}

export default StoreApi;
