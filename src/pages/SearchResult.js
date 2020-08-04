import React from "react";

import "./Home.css";

import QueryParser from "../modules/QueryParser";

import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import StoreList from "../components/StoreList";

class SearchResult extends React.Component {
  state = {
    isLoading: true,
    query: {},
  };

  async initState() {
    const query = await QueryParser.getQueryStringObject();
    this.setState({ query, isLoading: false });
  }
  componentDidMount() {
    this.initState();
  }
  render() {
    const { isLoading, query } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <div className="wrapper">
            <Navigation />
            <SearchBar />
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
