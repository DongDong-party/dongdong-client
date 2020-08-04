import React from "react";

import "./home.css";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import StoreList from "../components/StoreList";
import CategoryList from "../components/CategoryList";
import { Link } from "react-router-dom";

class Home extends React.Component {
  // =====핸들러 함수===== //
  handleSearch = (data) => {
    this.setState({ query: { keyword: data.keyword } }, () =>
      console.log("검색 페이지로 이동")
    );
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
