import { useEffect } from "react";
import "../styles/work.css";
import { ExternalLinks } from "./ExternalLinks"

export function Home({ callback }) {
  useEffect(() => {
    // 1. set the height of Main based on the height of this div.
    // 2. scroll to the top of Main.
    callback();
  }, []);
  return (
    <div>
      <h3 style={{padding: "1rem",   fontFamily: "Verdana, sans-serif", color: "lightgrey"
}}>
        Projects
        </h3>
      {/* <h1 style={{padding:"1rem", marginLeft: "auto", width: "5em"}}>Jesse Paulsen</h1> */}

      <ul className="cardList">

        <li className="card">

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
          

            <img src="https://picsum.photos/200/200"/>
            

          
        
        </li>

        <li className="card">
          
            <img src="https://picsum.photos/200/200"/>
          

          <div className="cardContent">

            <h2 className="cardTitle">
              Personality Test
            </h2>

            <div>

              <p>
                A Personality Test that evaluates for the Big 5 traits of Openness, Conscientiousness, Extraversion, 
                Agreeableness, Neuroticism.
              </p>
            <ExternalLinks demo="https://personality-test-beta.vercel.app/" code="personality-test" />
            

            </div>

          </div>


 
        </li>
      </ul>
    </div>
  );
}

