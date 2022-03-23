import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Page } from "./Page";
//import material
import "./styles.css";

const container = document.getElementById("container");

ReactDOM.render(
  <HashRouter>
    <Page />
  </HashRouter>,
  container
);
