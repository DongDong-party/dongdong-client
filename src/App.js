import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";

import "./App.css";
import "./static/style/fonts.css";
import Login from "./pages/Login";
import SearchResult from "./pages/SearchResult";

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
