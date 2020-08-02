import React from "react";
import StoreApi from "../api/StoreApi";

import "./Home.css";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import StoreList from "../components/StoreList";

class Home extends React.Component {
  state = {
    isLoading: false,
  };

  render() {
    const { isLoading } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text"></span>
          </div>
        ) : (
          <div>
            <Navigation />
            <Banner />
            <SearchBar />
            <StoreList />
          </div>
        )}
      </section>
    );
  }
}

export default Home;
