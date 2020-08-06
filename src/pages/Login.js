import React from "react";

import Navigation from "../components/nav/Navigation";

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
