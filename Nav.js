import { Link, useLocation } from "react-router-dom";
import "./nav.css";
//import { useState } from "react";

export function Nav() {
  //const [arrow, setArrow] = useState("home");
  //console.log(arrow);
  const loc = useLocation();
  console.log("useLocation: ", loc);
  return (
    <nav>
      {/* <Link
        aria-label="home"
        to="/"
        className={`nav-item material-icons md-48 md-light ${
          arrow == "home" ? "active" : ""
        }`}
        onClick={() => setArrow("home")}
      > */}
      <Link
        aria-label="home"
        to="/"
        className={`nav-item material-icons md-48 md-light ${
          loc.pathname == "/" ? "active" : ""
        }`}
      >
        home
      </Link>
      {/* <Link
        aria-label="work"
        to="/work"
        className={`nav-item material-icons md-48 md-light ${
          arrow == "work" ? "active" : ""
        }`}
        onClick={() => setArrow("work")}
      > */}
      <Link
        aria-label="work"
        to="/work"
        className={`nav-item material-icons md-48 md-light ${
          loc.pathname == "/work" ? "active" : ""
        }`}
      >
        work
      </Link>
      {/* <Link
        aria-label="about"
        to="/about"
        className={`nav-item material-icons md-48 md-light ${
          arrow == "about" ? "active" : ""
        }`}
        onClick={() => setArrow("about")}
      > */}
      <Link
        aria-label="about"
        to="/about"
        className={`nav-item material-icons md-48 md-light ${
          loc.pathname == "/about" ? "active" : ""
        }`}
      >
        info
      </Link>
      {/* <Link
        aria-label="contact"
        to="/contact"
        className={`nav-item material-icons md-48 md-light ${
          arrow == "contact" ? "active" : ""
        }`}
        onClick={() => setArrow("contact")}
      > */}
      <Link
        aria-label="contact"
        to="/contact"
        className={`nav-item material-icons md-48 md-light ${
          loc.pathname == "/contact" ? "active" : ""
        }`}
      >
        email
      </Link>
    </nav>
  );
}
