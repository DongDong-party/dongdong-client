import React from "react";

import "./home.css";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import StoreList from "../components/StoreList";
import CategoryList from "../components/CategoryList";

class Home extends React.Component {
  // =====핸들러 함수===== //
  handleSearch = (data) => {
    this.props.history.push({
      pathname: "/search",
      search: `?keyword=${data.keyword}`,
    });
  };

  // =======렌더링======= //
  render() {
    return (
      <section className="container">
        <div className="wrapper">
          <Navigation />
          <Banner />
          <SearchBar handleSearch={this.handleSearch} />
          <CategoryList />
          <StoreList />
        </div>
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

export default Home;
