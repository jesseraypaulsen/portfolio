import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Page } from "./Page";
import "./general.css";
//import "./header.css";
import "./work.css";
import "./project.css";
import "./contact.css";
import "./about.css";

const container = document.getElementById("container");

ReactDOM.render(
  <HashRouter>
    <Page />
  </HashRouter>,
  container
);
