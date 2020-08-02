import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";

import "./App.css";
import "./static/style/fonts.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
