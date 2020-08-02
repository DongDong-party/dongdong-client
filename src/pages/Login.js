import React from "react";

import "./Home.css";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import StoreList from "../components/StoreList";

class Login extends React.Component {
  state = {
    isLoading: false,
  };

  render() {
    return (
      <section className="container">
        <div>
          <Navigation />
          <span>Log in Page</span>
        </div>
      </section>
    );
  }
}

export default Login;
