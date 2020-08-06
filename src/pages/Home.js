import React from "react";

import Banner from "../components/Banner";
import Navigation from "../components/nav/Navigation";
import SearchBar from "../components/SearchBar";
import StoreList from "../components/StoreList";
import CategoryList from "../components/CategoryList";

import "../assets/scss/pages/home.scss";

class Home extends React.Component {
  // =====핸들러 함수===== //
  handleSearch = (data) => {
    this.props.history.push("/search", { keyword: data.keyword });
  };

  // =======렌더링======= //
  render() {
    return (
      <section className="home-container">
        <div className="home-wrapper">
          <Navigation />
          <Banner />
          <SearchBar handleSearch={this.handleSearch} />
          <CategoryList />
          <StoreList />
        </div>
      </section>
    );
  }
}

export default Home;
