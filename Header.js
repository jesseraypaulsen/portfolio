import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { MDCTopAppBar } from "@material/top-app-bar/index";
import "./header.css";

/* https://developers.google.com/fonts/docs/material_icons#styling_icons_in_material_design
   why don't these classes for making icons dark/light/big/small work?
*/

export function Header() {
  const topAppBarElement = useRef(null);
  useEffect(() => {
    const topAppBar = new MDCTopAppBar(topAppBarElement.current);
  }, []);
  const navigate = useNavigate();
  //header is set to { top: "0" } because the margin from an element in normal flow (Frame),
  //mysteriously changes the starting position of the header even though it has a fixed
  //position. I have no idea why this occurs.
  return (
    <header
      className="mdc-top-app-bar"
      ref={topAppBarElement}
      style={{ top: "0" }}
    >
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
            aria-label="Home"
            onClick={(e) => showTriangle(e, navigate)}
            // onClick={() => navigate("/")}
          >
            <i className="material-icons mdc-top-app-bar__action-item mdc-icon-button">
              home
            </i>
          </a>
          <Link
            //className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
            aria-label="Work"
            to="/work"
            onClick={(e) => showTriangle(e)}
          >
            <i className="material-icons mdc-top-app-bar__action-item mdc-icon-button">
              work
            </i>
          </Link>
          <Link
            //className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
            aria-label="About"
            to="/about"
            onClick={(e) => showTriangle(e)}
          >
            <i className="material-icons mdc-top-app-bar__action-item mdc-icon-button">
              info
            </i>
          </Link>
          <Link
            //className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
            aria-label="Contact"
            to="/contact"
            onClick={(e) => showTriangle(e)}
          >
            <i className="material-icons mdc-top-app-bar__action-item mdc-icon-button">
              email
            </i>
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
