import { useEffect } from "react";
import { SocialLinks } from "./SocialLinks";
import "../styles/about.css";

export function About({ callback }) {
  useEffect(() => {
    // 1. set the height of Main based on the height of this div.
    // 2. scroll to the top of Main.
    callback();
  }, []);
  return (
    <div className="section-about">
      <h1 className="mdc-typography--headline2 centered section-title">
        About Me
      </h1>
      <div className="aboutMe">
        <figure className="selfPortrait">
          <p>
            <SocialLinks />
          </p>
          <img
            src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fbarcelona1.jpg?1558558467346"
            alt=""
          />
        </figure>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          cupiditate, pariatur autem deserunt numquam dignissimos amet fuga
          cumque possimus maiores quaerat, alias rem, commodi esse culpa
          molestiae ut aspernatur. Odio? Magnam asperiores impedit fuga
          <br />
          <br />
          Repudiandae sunt quaerat, similique minus, velit est laborum fugit
          nostrum non vel temporibus incidunt ab natus nisi. Ad necessitatibus,
          nulla reiciendis veniam dolore sapiente alias error?
          <br />
          <br />
          Tempora aperiam nobis asperiores consequatur cumque, sed nisi
          perferendis laudantium a odit excepturi quo distinctio incidunt
          molestiae, dicta quia saepe laborum perspiciatis odio alias aspernatur
          quis. Quam corrupti error recusandae. Dicta cupiditate, pariatur autem
          deserunt numquam dignissimos amet fuga cumque possimus maiores
          quaerat, alias rem.
        </p>
      </div>
    </div>
  );
}