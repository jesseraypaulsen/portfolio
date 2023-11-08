import { useEffect } from "react";
import { SocialLinks } from "./SocialLinks";
import "../styles/about.css";
import picture from "../assets/from-pic-sum-but-kinda-lookalike-me.jpg";

export function About({ callback }) {
  useEffect(() => {
    // 1. set the height of Main based on the height of this div.
    // 2. scroll to the top of Main.
    callback();
  }, []);
  return (
    <div className="section-about">

      <div className="aboutMe">
        <figure className="selfPortrait">
          <p>
            <SocialLinks />
          </p>
          <img src={picture} />
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
