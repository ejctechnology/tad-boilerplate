import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";
import Description from "./Description";

ReactDOM.render(
  <React.StrictMode>
    <Description />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
