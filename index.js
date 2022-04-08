import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { App } from "./App";
import "./base.css";

const container = document.getElementById("container");

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  container
);
