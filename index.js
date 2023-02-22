import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { App } from "./components/App";
import "./styles/base.css";

const container = document.getElementById("container");

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  container
);
