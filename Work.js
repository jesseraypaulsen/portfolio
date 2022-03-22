import { Link } from "react-router-dom";

export function Work() {
  return (
    <main>
      <h1 class="mdc-typography--headline2 centered">Work</h1>
      <ul class="cardList">
        <li class="mdc-card card">
          <Link to="/project" class="mdc-card__primary-action" tabindex="0">
            <img
              src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers3.jpg?1558559904507"
              alt=""
            />
            <div class="cardContent">
              <h3 class="mdc-typography mdc-typography--overline cardCategory">
                Photography
              </h3>
              <h2 class="mdc-typography mdc-typography--headline6 cardTitle">
                Flowers of Amsterdam
              </h2>
              <div class="demo-card__secondary mdc-typography mdc-typography--body2">
                Flowers are an essential part of nature. Here they mix with city
                life.
              </div>
            </div>
          </Link>
        </li>
        <li class="mdc-card card">
          <Link to="/project" class="mdc-card__primary-action" tabindex="0">
            <img
              src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers5.jpg?1558558462565"
              alt=""
            />
            <div class="cardContent">
              <h3 class="mdc-typography mdc-typography--overline cardCategory">
                Photography
              </h3>
              <h2 class="mdc-typography mdc-typography--headline6 cardTitle">
                Flowers of Amsterdam
              </h2>
              <div class="demo-card__secondary mdc-typography mdc-typography--body2">
                Flowers are an essential part of nature. Here they mix with city
                life.
              </div>
            </div>
          </Link>
        </li>
        <li class="mdc-card card">
          <Link to="/project" class="mdc-card__primary-action" tabindex="0">
            <img
              src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers4.jpg?1558558462683"
              alt=""
            />
            <div class="cardContent">
              <h3 class="mdc-typography mdc-typography--overline cardCategory">
                Photography
              </h3>
              <h2 class="mdc-typography mdc-typography--headline6 cardTitle">
                Flowers of Amsterdam
              </h2>
              <div class="demo-card__secondary mdc-typography mdc-typography--body2">
                Flowers are an essential part of nature. Here they mix with city
                life.
              </div>
            </div>
          </Link>
        </li>
        <li class="mdc-card card">
          <Link to="/project" class="mdc-card__primary-action" tabindex="0">
            <img
              src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers7.jpg?1558558462200"
              alt=""
            />
            <div class="cardContent">
              <h3 class="mdc-typography mdc-typography--overline cardCategory">
                Photography
              </h3>
              <h2 class="mdc-typography mdc-typography--headline6 cardTitle">
                Flowers of Amsterdam
              </h2>
              <div class="demo-card__secondary mdc-typography mdc-typography--body2">
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
