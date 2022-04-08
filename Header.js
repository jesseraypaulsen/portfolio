import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { MDCTopAppBar } from "@material/top-app-bar/index";
//import "./header.css";

/* https://developers.google.com/fonts/docs/material_icons#styling_icons_in_material_design
   why don't these classes for making icons dark/light/big/small work?
*/

export function Header({ setArrowPosition }) {
  const topAppBarElement = useRef(null);
  useEffect(() => {
    const topAppBar = new MDCTopAppBar(topAppBarElement.current);
  }, []);
  const navigate = useNavigate();
  //header is set to { top: "0" } because the margin from an element in normal flow (Frame),
  //mysteriously changes the starting position of the header even though it has a fixed
  //position. I have no idea why this occurs.

  const homeButtonRef = useRef(null);
  useEffect(() => {
    setArrowPosition((prevState) =>
      homeButtonRef.current.getBoundingClientRect()
    );
  }, []);
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
          {/*<a href="" aria-label="home" onClick={() => navigate("/")}>*/}
          <Link aria-label="home" to="/">
            <i
              className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
              ref={homeButtonRef}
              onClick={(e) =>
                setArrowPosition((prevState) =>
                  e.target.getBoundingClientRect()
                )
              }
            >
              home
            </i>
          </Link>
          <Link aria-label="work" to="/work">
            <i
              className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
              onClick={(e) =>
                setArrowPosition((prevState) =>
                  e.target.getBoundingClientRect()
                )
              }
            >
              work
            </i>
          </Link>
          <Link aria-label="about" to="/about">
            <i
              className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
              onClick={(e) =>
                setArrowPosition((prevState) =>
                  e.target.getBoundingClientRect()
                )
              }
            >
              info
            </i>
          </Link>
          <Link aria-label="contact" to="/contact">
            <i
              className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
              onClick={(e) =>
                setArrowPosition((prevState) =>
                  e.target.getBoundingClientRect()
                )
              }
            >
              email
            </i>
          </Link>
        </section>
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"></section>
      </div>
    </header>
  );
}
