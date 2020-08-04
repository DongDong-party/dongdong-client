import React from "react";

import "./Home.css";

import Navigation from "../components/Navigation";

class Login extends React.Component {
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
