import { useEffect, useState } from "react";
import "../styles/work.css";
import { ExternalLinks } from "./ExternalLinks"
import firstProject from "../assets/204-200x100.jpg"
import secondProject from "../assets/350-200x100.jpg"
import { Loading } from "./Loading"

export function Home({ doStuff, setHomeImagesFlag, homeImagesLoaded }) {

  const [imagesLoaded, setImagesLoaded] = useState([])
  const [opacity, setOpacity] = useState("0")
  
  const imageLoaded = () => {

    setImagesLoaded((prev) => [
      ...prev,
      true
    ])
  }

  const effects = () => {

    doStuff()

    setTimeout(() => {
      setOpacity('1')
    }, 500)

  }

  useEffect(() => {
    
    // wait until both images have loaded before sizing the container in Main
    if (imagesLoaded.length == 2) {
      setHomeImagesFlag()
    }

  }, [imagesLoaded])

  useEffect(() => {
    if (homeImagesLoaded) effects()
  }, [])

  useEffect(() => {
    effects()
  }, [homeImagesLoaded])
  

  return (
    <div style={{ opacity, transition: "opacity 0.25s ease-in-out" }}>
      <h3 style={{padding: "1rem",   fontFamily: "Verdana, sans-serif", color: "lightgrey" }}>
        Projects 
        </h3>

      <ul className="cardList">

        <li className="card">

          <img src={firstProject} style={{ aspectRatio: "auto"}} onLoad={() => imageLoaded()}/>

          <div className="cardContent">

            <h2 className="cardTitle">
              Nodecards
            </h2>

            <p>
              {/* It extends a web-based graph renderer, and transforms it into a personal knowledge management system, where nodes become notecards that are distributed over 2d space and connected to each other with visible links. */}
              This app re-purposes a graph rendering library into a
              note-taking system, where nodes expand into
              notecards. The complex UI behavior is managed in <a href="https://xstate.js.org/" target="_blank" rel="noopener" style={{color:"grey"}}>XState</a>.
              
            </p>
              
            <ExternalLinks demo="https://nodecards-git-main-jesseraypaulsen.vercel.app/" code="nodecards" />

          </div>
        
        </li>

        <li className="card">
          
          <img src={secondProject} onLoad={() => imageLoaded()}/>
          

          <div className="cardContent">
            <div>
              <h2 className="cardTitle">
                Personality Test
              </h2>
            </div>

            <div>

              <p>
                A Personality Test that evaluates for the Big 5 traits of Openness, Conscientiousness, Extraversion, 
                Agreeableness, Neuroticism.
              </p>
            

            </div>

            <ExternalLinks demo="https://personality-test-beta.vercel.app/" code="personality-test" />

          </div>


 
        </li>
      </ul>
    </div>
  );
}

