import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";

import "../src/assets/scss/global/reset.scss";

import Login from "./pages/login";
import SearchResult from "./pages/search-result";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/search" component={SearchResult} />
    </BrowserRouter>
  );
}

export default App;
