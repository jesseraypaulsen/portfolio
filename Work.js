import { Link } from "react-router-dom";

export function Work() {
  return (
    <main>
      <h1 className="mdc-typography--headline2 centered">Projects</h1>
      <ul className="cardList">
        <li className="mdc-card card">
          <Link to="/project" className="mdc-card__primary-action" tabIndex="0">
            <img
              src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers3.jpg?1558559904507"
              alt=""
            />
            <div className="cardContent">
              <h3 className="mdc-typography mdc-typography--overline cardCategory">
                Web Application
              </h3>
              <h2 className="mdc-typography mdc-typography--headline6 cardTitle">
                Personal Knowledge Management System
              </h2>
              <div className="demo-card__secondary mdc-typography mdc-typography--body2">
                Inspired by Memex and the Zettelkasten. Renders notecards as
                nodes on a graph.
              </div>
            </div>
          </Link>
        </li>
        <li className="mdc-card card">
          <Link to="/project" className="mdc-card__primary-action" tabIndex="0">
            <img
              src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers5.jpg?1558558462565"
              alt=""
            />
            <div className="cardContent">
              <h3 className="mdc-typography mdc-typography--overline cardCategory">
                Web Application
              </h3>
              <h2 className="mdc-typography mdc-typography--headline6 cardTitle">
                Personality Test
              </h2>
              <div className="demo-card__secondary mdc-typography mdc-typography--body2">
                The Five O.C.E.A.N. Traits
              </div>
            </div>
          </Link>
        </li>
        <li className="mdc-card card">
          <Link to="/project" className="mdc-card__primary-action" tabIndex="0">
            <img
              src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers4.jpg?1558558462683"
              alt=""
            />
            <div className="cardContent">
              <h3 className="mdc-typography mdc-typography--overline cardCategory">
                Photography
              </h3>
              <h2 className="mdc-typography mdc-typography--headline6 cardTitle">
                Flowers of Amsterdam
              </h2>
              <div className="demo-card__secondary mdc-typography mdc-typography--body2">
                Flowers are an essential part of nature. Here they mix with city
                life.
              </div>
            </div>
          </Link>
        </li>
        <li className="mdc-card card">
          <Link to="/project" className="mdc-card__primary-action" tabIndex="0">
            <img
              src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers7.jpg?1558558462200"
              alt=""
            />
            <div className="cardContent">
              <h3 className="mdc-typography mdc-typography--overline cardCategory">
                Photography
              </h3>
              <h2 className="mdc-typography mdc-typography--headline6 cardTitle">
                Flowers of Amsterdam
              </h2>
              <div className="demo-card__secondary mdc-typography mdc-typography--body2">
                Flowers are an essential part of nature. Here they mix with city
                life.
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </main>
  );
}
