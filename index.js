import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Page } from "./Page";
//import material
import "./styles.css";

const container = document.getElementById("container");
//console.log(process.env.BASE_URL);
//<HashRouter basename={process.env.BASE_URL}>

ReactDOM.render(
  <HashRouter>
    <Page />
  </HashRouter>,
  container
);
