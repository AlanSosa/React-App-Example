import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

import "./styles.css";

const API_KEY = "AIzaSyAuQCVeNfJhtRj9klChQPT1n027DP0_5Ss";

const App = () => {
  return (
    <div className="mainCSS">
      <SearchBar />
    </div>
  );
};

const AppContainer = document.querySelector("#AppContainer");
ReactDOM.render(<App />, AppContainer);
