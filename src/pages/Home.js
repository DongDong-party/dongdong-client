import React from "react";

import "../assets/scss/home.scss";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import StoreList from "../components/StoreList";
import CategoryList from "../components/CategoryList";

class Home extends React.Component {
  // =====핸들러 함수===== //
  handleSearch = (data) => {
    this.props.history.push("/search", { keyword: data.keyword });
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
      </section>
    );
  }
}

export default Home;
