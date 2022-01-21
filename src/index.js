import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import CurrentUserProvider from "./context/current-user";
import SearchNameProvider from "./context/searchContext";

ReactDOM.render(
  <CurrentUserProvider>
    <SearchNameProvider>
    <Router>
      <App />
    </Router>
    </SearchNameProvider>
  </CurrentUserProvider>,
  document.getElementById("root")
);
