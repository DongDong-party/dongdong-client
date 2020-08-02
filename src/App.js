import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";

import "./App.css";
import "./static/style/fonts.css";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default App;
