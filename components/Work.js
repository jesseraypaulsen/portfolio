import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "../styles/work.css";
//import pkmScreencast from "../assets/pkm-screencast.mp4";
//const pkmScreencast = new URL("../assets/pkm-screencast.webm", import.meta.url);
const pkmScreencast = new URL("../assets/pkm-screencast.mp4", import.meta.url);

export function Work({ callback }) {
  useEffect(() => {
    // 1. set the height of Main based on the height of this div.
    // 2. scroll to the top of Main.
    callback();
  }, []);
  return (
    <div className="section-work">
      <h1 className="mdc-typography--headline2 centered section-title">
        Jesse Paulsen
      </h1>
      <ul className="cardList">
        <li className="mdc-card card">
          <Link
            to="/project/pkm"
            className="mdc-card__primary-action"
            tabIndex="0"
          >
            {/* <img
              src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers3.jpg?1558559904507"
              alt=""
            /> */}
            <video
              src={pkmScreencast}
              height="100%"
              width="100%"
              autoPlay
              muted
              loop
            ></video>
            <div className="cardContent">
              <h3 className="mdc-typography mdc-typography--overline cardCategory">
                Web Application
              </h3>
              <h2 className="mdc-typography mdc-typography--headline6 cardTitle">
                Nodecards
              </h2>
              <div className="demo-card__secondary mdc-typography mdc-typography--body2">
                This application re-purposes a graph rendering library into a
                tiny personal knowledge management system, where nodes become
                notecards distributed over 2-D space and connected to each other
                with visible links.
              </div>
            </div>
          </Link>
        </li>
        <li className="mdc-card card">
          <Link
            to="/project/ocean"
            className="mdc-card__primary-action"
            tabIndex="0"
          >
            <img
              src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers8.jpg?1558558471249"
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
      </ul>
    </div>
  );
}
