import { SocialLinks } from "./SocialLinks";
import "../styles/about.css";
import me from "../assets/from-pic-sum-but-kinda-lookalike-me.jpg";
import { useState, useEffect } from 'react';

export function About({ doStuff, setAboutImageFlag, aboutImageLoaded }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [opacity, setOpacity] = useState("0")

  const effects = () => {

    doStuff();

    setTimeout(() => {
      setOpacity("1")
    }, 500)

  }

  useEffect(() => {
    setAboutImageFlag()
    effects()
  }, [imageLoaded])

  useEffect(() => {

    if (aboutImageLoaded) effects();

  }, [])


  return (
    <div className="section-about" style={{ opacity, transition: "opacity 0.25s ease-in-out" }}>

      <div className="aboutMe">

        <img src={me} onLoad={() => setImageLoaded(true)}/>
        
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
