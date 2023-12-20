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
          Welcome. I'm Jesse. I build web applications. Thank you for taking the time to look at my portfolio.
        </p>

      </div>

      <SocialLinks />

    </div>
  );
}
