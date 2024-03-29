import { Link, useLocation } from "react-router-dom";
import "../styles/nav.css";

export function Nav() {
  const loc = useLocation();
  return (
    <>
    <nav>
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
          loc.pathname == "/work" || loc.pathname.includes("/project")
            ? "active"
            : ""
        }`}
      >
        work
      </Link> */}
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
          loc.pathname == "/contact" ? "active" : ""
        }`}
      >
        email
      </Link> */}
            <span style={{display:"inline-block", backgroundColor: "yellow", fontFamily: "'Abril Fatface', serif", fontSize: "2em", position: "absolute", top: "1.6em", right: ".5em"}}>Jesse Paulsen</span>
            <span style={{display:"inline-block", backgroundColor: "cyan", fontFamily: "'Rancho', serif", fontSize: "1em", position: "absolute", top: "1.7em", right: ".5em", padding: ".3em"}}>Web Development Professional</span>

    </nav>
    </>
  );
}
