import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Page } from "./Page";
import "./styles.css";

const container = document.getElementById("container");
/*
ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Page />
  </BrowserRouter>,
  container
);
*/

ReactDOM.render(
  <HashRouter>
    <Page />
  </HashRouter>,
  container
);
