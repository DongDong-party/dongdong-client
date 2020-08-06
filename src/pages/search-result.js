import React from "react";

import Navigation from "../components/nav/Navigation";
import SearchBar from "../components/SearchBar";
import StoreList from "../components/StoreList";

import "../assets/scss/pages/search_result.scss";

class SearchResult extends React.Component {
  state = {
    query: {},
  };

  // =====초기화===== //
  async initState() {
    if (this.props.history.location.state) {
      this.setState({ query: this.props.history.location.state });
    }
  }
  componentDidMount() {
    this.initState();
  }

  // =====핸들러 함수===== //
  handleSearch = (data) => {
    this.setState(() => ({
      query: { categoryId: this.state.query.categoryId, keyword: data.keyword },
    }));
  };

  // =======렌더링======= //
  render() {
    const { query } = this.state;

    return (
      <section className="container">
        <div className="wrapper">
          <Navigation />
          <SearchBar
            handleSearch={this.handleSearch}
            keyword={this.state.query.keyword}
          />
          <StoreList query={query} />
        </div>
      </section>
    );
  }
}

export default SearchResult;
