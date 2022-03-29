import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { MDCTopAppBar } from "@material/top-app-bar/index";
import "./header.css";

export function Header() {
  const topAppBarElement = useRef(null);
  useEffect(() => {
    const topAppBar = new MDCTopAppBar(topAppBarElement.current);
  }, []);
  const navigate = useNavigate();
  return (
    <header
      className="mdc-top-app-bar"
      style={{ top: "0" }}
      ref={topAppBarElement}
    >
      <div className="mdc-top-app-bar__row">
        {/* https://fonts.google.com/icons */}
        <section
          className="mdc-top-app-bar__section mdc-top-app-bar__section--align-middle"
          role="toolbar"
        >
          {/* useNavigate is a workaround for issues with Github Pages and React Router */}
          <a
            href=""
            onClick={() => navigate("/")}
            className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
            aria-label="Home"
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
          >
            info
          </Link>
          <Link
            className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
            aria-label="Contact"
            to="/contact"
          >
            email
          </Link>
        </section>
      </div>
    </header>
  );
}

function showTriangle(e) {}

/*
  https://material-components.github.io/material-components-web-catalog/#/component/top-app-bar
  https://github.com/material-components/material-components-web/tree/master/packages/mdc-top-app-bar
  https://material.io/components/app-bars-top/web#style-customization
*/
