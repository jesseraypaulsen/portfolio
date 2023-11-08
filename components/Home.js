import { useEffect } from "react";
import "../styles/work.css";
//const pkmScreencast = new URL("../assets/pkm-screencast.mp4", import.meta.url);


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
              
            <div class="external-links">

              <span class="demo">

                <a href="https://nodecards-git-main-jesseraypaulsen.vercel.app/" target="_blank" rel="noopener">
                Demo <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
</svg>
                </a>

              </span>
              <span class="github">

                <a href="https://github.com/jesseraypaulsen/nodecards" target="_blank" rel="noopener">
                Github <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
</svg>
                </a>

              </span>

              
            </div>

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
            <div class="external-links">

              <span class="demo">
                <a href="https://personality-test-beta.vercel.app/" target="_blank" rel="noopener">
                Demo <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
</svg>
                </a>
                </span>
              <span class="github">
                <a href="https://github.com/jesseraypaulsen/personality-test" target="_blank" rel="noopener">
                Github <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
</svg>
                </a>
              </span>


            </div>

            </div>

          </div>


 
        </li>
      </ul>
    </div>
  );
}

