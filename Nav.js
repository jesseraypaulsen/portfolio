import { Link } from "react-router-dom";
import "./nav.css";
import { useState } from "react";

export function Nav() {
  const [arrow, setArrow] = useState("home");
  console.log(arrow);
  return (
    <nav>
      <Link
        aria-label="home"
        to="/"
        className={`nav-item material-icons md-48 md-light ${
          arrow == "home" ? "active" : ""
        }`}
        onClick={() => setArrow("home")}
      >
        home
      </Link>
      <Link
        aria-label="work"
        to="/work"
        className={`nav-item material-icons md-48 md-light ${
          arrow == "work" ? "active" : ""
        }`}
        onClick={() => setArrow("work")}
      >
        work
      </Link>
      <Link
        aria-label="about"
        to="/about"
        className={`nav-item material-icons md-48 md-light ${
          arrow == "about" ? "active" : ""
        }`}
        onClick={() => setArrow("about")}
      >
        info
      </Link>
      <Link
        aria-label="contact"
        to="/contact"
        className={`nav-item material-icons md-48 md-light ${
          arrow == "contact" ? "active" : ""
        }`}
        onClick={() => setArrow("contact")}
      >
        email
      </Link>
    </nav>
  );
}
