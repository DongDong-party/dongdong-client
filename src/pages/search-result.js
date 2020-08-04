import React from "react";

import QueryManager from "../modules/query-manager";

import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import StoreList from "../components/StoreList";

class SearchResult extends React.Component {
  state = {
    isLoading: true,
    query: {},
  };

  // =====초기화===== //
  async initState() {
    const query = await QueryManager.getQueryStringObject();
    this.setState({ query, isLoading: false });
  }
  componentDidMount() {
    this.initState();
  }

  // =====핸들러 함수===== //
  handleSearch = (data) => {
    this.setState({ query: { keyword: data.keyword } }, () =>
      console.log("다시 API CALL")
    );
  };

  // =======렌더링======= //
  render() {
    const { isLoading, query } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <div className="wrapper">
            <Navigation />
            <SearchBar handleSearch={this.handleSearch} />
            <StoreList query={query} />
          </div>
        )}

        <style jsx>{`
          .wrapper {
            width: 95%;
            margin-left: auto;
            margin-right: auto;
            border: 1px solid black;
          }
        `}</style>
      </section>
    );
  }
}

export default SearchResult;
