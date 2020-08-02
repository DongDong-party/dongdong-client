import React from "react";
import StoreApi from "../api/StoreApi";

import Store from "../components/Store";

import "./Home.css";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";

class Home extends React.Component {
  state = {
    isLoading: true,
    stores: [],
  };

  async componentDidMount() {
    const { data } = await StoreApi.getList();
    this.setState({ stores: data, isLoading: false });
  }

  render() {
    const { isLoading, stores } = this.state;
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
            <div className="stores">
              {stores.map((store) => {
                console.log(store);
                return <Store key={store.storeId} store={store} />;
              })}
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Home;
