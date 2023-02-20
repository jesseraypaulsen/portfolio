import { Link, useLocation } from "react-router-dom";
import "./nav.css";

export function Nav() {
  const loc = useLocation();
  console.log("/project -> ", loc.pathname.includes("/project"));
  return (
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
      <Link
        aria-label="work"
        to="/work"
        className={`nav-item material-icons md-48 md-light ${
          loc.pathname == "/work" || loc.pathname.includes("/project")
            ? "active"
            : ""
        }`}
      >
        work
      </Link>
      <Link
        aria-label="about"
        to="/about"
        className={`nav-item material-icons md-48 md-light ${
          loc.pathname == "/about" ? "active" : ""
        }`}
      >
        info
      </Link>
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
