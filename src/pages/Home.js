import React from "react";

import "./Home.css";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import StoreList from "../components/StoreList";
import CategoryList from "../components/CategoryList";

class Home extends React.Component {
  render() {
    return (
      <section className="container">
        <div>
          <Navigation />
          <Banner />
          <SearchBar />
          <CategoryList />
          <StoreList />
        </div>
      </section>
    );
  }
}

export default Home;
