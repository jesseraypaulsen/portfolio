import { useEffect } from "react";
import { SocialLinks } from "./SocialLinks";
import "../styles/about.css";
import picture from "../assets/from-pic-sum-but-kinda-lookalike-me.jpg";

export function About({ callback }) {

  return (
    <div className="section-about">

      <div className="aboutMe">

        <img src={picture} onLoad={callback()}/>
        
        <p>
          Hello I'm Jesse. Thank you for your time and consideration.
          Tempora aperiam nobis asperiores consequatur cumque, sed nisi
          perferendis laudantium a odit excepturi quo distinctio incidunt
          molestiae, dicta quia saepe laborum perspiciatis odio alias aspernatur
          quis. Quam corrupti error recusandae. Dicta cupiditate, pariatur autem
          deserunt numquam dignissimos amet fuga cumque possimus maiores
          quaerat, alias rem.
        </p>

      </div>

      <SocialLinks />

    </div>
  );
}
