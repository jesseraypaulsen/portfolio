import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
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
  const [arrow, setArrow] = useState("home");
  const triangleBottom = alignArrowWithFrame();
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
          <a href="" aria-label="Home" onClick={() => navigate("/")}>
            <i
              className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
              onClick={(e) => setArrow((prevState) => "home")}
            >
              home
              {/*<div
                className={arrow == "home" ? "triangle show" : "triangle"}
              ></div>*/}
              {triangleBottom ? (
                <div
                  style={{ bottom: triangleBottom }}
                  className={arrow == "home" ? "triangle show" : "triangle"}
                ></div>
              ) : null}
            </i>
          </a>
          <Link aria-label="Work" to="/work">
            <i
              className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
              onClick={(e) => setArrow((prevState) => "work")}
            >
              work
              {triangleBottom ? (
                <div
                  style={{ bottom: triangleBottom }}
                  className={arrow == "work" ? "triangle show" : "triangle"}
                ></div>
              ) : (
                <div
                  className={arrow == "work" ? "triangle show" : "triangle"}
                ></div>
              )}
            </i>
          </Link>
          <Link aria-label="About" to="/about">
            <i
              className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
              onClick={(e) => setArrow((prevState) => "about")}
            >
              info
              {triangleBottom ? (
                <div
                  style={{ bottom: triangleBottom }}
                  className={arrow == "about" ? "triangle show" : "triangle"}
                ></div>
              ) : (
                <div
                  className={arrow == "about" ? "triangle show" : "triangle"}
                ></div>
              )}
            </i>
          </Link>
          <Link aria-label="Contact" to="/contact">
            <i
              className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
              onClick={(e) => setArrow((prevState) => "contact")}
            >
              email
              {triangleBottom ? (
                <div
                  style={{ bottom: triangleBottom }}
                  className={arrow == "contact" ? "triangle show" : "triangle"}
                ></div>
              ) : (
                <div
                  className={arrow == "contact" ? "triangle show" : "triangle"}
                ></div>
              )}
            </i>
          </Link>
        </section>
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"></section>
      </div>
    </header>
  );
}

function alignArrowWithFrame() {
  const frame = document.querySelector(".frame");
  const i = document.querySelector("i");
  // doesn't matter which i element, because they all have the same vertical position.
  if (frame && i) {
    const domRectF = frame.getBoundingClientRect();
    const domRectI = i.getBoundingClientRect();
    return -(domRectF.top - domRectI.bottom);
  }
}

/*
  https://material-components.github.io/material-components-web-catalog/#/component/top-app-bar
  https://github.com/material-components/material-components-web/tree/master/packages/mdc-top-app-bar
  https://material.io/components/app-bars-top/web#style-customization
*/
