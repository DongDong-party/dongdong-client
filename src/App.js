import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";

import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
