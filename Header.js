import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { MDCTopAppBar } from "@material/top-app-bar/index";
import "./header.css";

/* Material Icons Library -> https://fonts.google.com/icons */

export function Header() {
  const topAppBarElement = useRef(null);
  useEffect(() => {
    const topAppBar = new MDCTopAppBar(topAppBarElement.current);
  }, []);
  const navigate = useNavigate();
  return (
    <header className="mdc-top-app-bar" ref={topAppBarElement}>
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"></section>

        <section
          className="mdc-top-app-bar__section"
          role="toolbar"
          style={{ justifyContent: "center" }}
        >
          {/* useNavigate is a workaround for issues with Github Pages and React Router */}
          <a
            href=""
            // onClick={() => navigate("/")}
            className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
            aria-label="Home"
            onClick={(e) => showTriangle(e)}
          >
            home
          </a>
          <Link
            className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
            aria-label="Work"
            to="/work"
            onClick={(e) => showTriangle(e)}
          >
            work
          </Link>
          <Link
            className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
            aria-label="About"
            to="/about"
            onClick={(e) => showTriangle(e)}
          >
            info
          </Link>
          <Link
            className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
            aria-label="Contact"
            to="/contact"
            onClick={(e) => showTriangle(e)}
          >
            email
          </Link>
        </section>
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"></section>
      </div>
    </header>
  );
}

function showTriangle(e, callback) {
  //e.preventDefault();
  console.log(`showTriangle called`);
  if (callback) callback("/"); // navigate("/")
}

/*
  https://material-components.github.io/material-components-web-catalog/#/component/top-app-bar
  https://github.com/material-components/material-components-web/tree/master/packages/mdc-top-app-bar
  https://material.io/components/app-bars-top/web#style-customization
*/
