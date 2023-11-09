import { useEffect, useState } from "react";
import "../styles/work.css";
import { ExternalLinks } from "./ExternalLinks"

export function Home({ callback }) {

  const [imagesLoaded, setImagesLoaded] = useState([])
  
  const imageLoaded = () => {
    setImagesLoaded((prev) => [
      ...prev,
      true
    ])
  }

  useEffect(() => {
    
    // wait until both images have loaded before sizing the container in Main
    if (imagesLoaded.length == 2) callback();

  }, [imagesLoaded])
  

  return (
    <div>
      <h3 style={{padding: "1rem",   fontFamily: "Verdana, sans-serif", color: "lightgrey" }}>
        Projects 
        </h3>

      <ul className="cardList">

        <li className="card">

          <img src="https://picsum.photos/200/100" style={{ aspectRatio: "auto"}} onLoad={() => callback()}/>

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
          
            <img src="https://picsum.photos/200/100" onLoad={() => imageLoaded()}/>
          

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

