import { Link } from "react-router-dom";

export function Header() {
  return (
    <header
      className="mdc-top-app-bar mdc-top-app-bar--short mdc-top-app-bar--short-has-action-item"
      style={{ top: "0px" }}
    >
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <a
            href="/#"
            className="material-icons mdc-top-app-bar__navigation-icon mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
          >
            gesture
          </a>
          <span className="mdc-top-app-bar__title">My Portfolio</span>
        </section>
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
          <ul className="navList">
            <li className="navListItem">
              <Link className="navListLink mdc-typography--button" to="/">
                Work
              </Link>
            </li>
            <li className="navListItem">
              <Link className="navListLink mdc-typography--button" to="/about">
                About
              </Link>
            </li>
            <li className="navListItem">
              <Link
                className="navListLink mdc-typography--button"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </header>
  );
}
