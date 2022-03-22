import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Page } from "./Page";
import "./styles.css";

const container = document.getElementById("container");
ReactDOM.render(
  <BrowserRouter>
    <Page />
  </BrowserRouter>,
  container
);