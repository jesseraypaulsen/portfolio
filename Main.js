import { Home } from "./Home";
import { Work } from "./Work";
import { About } from "./About";
import { Contact } from "./Contact";
import { Project } from "./Project";
import { Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";
import "./main.css";

export function Main() {
  const scrollRef = useRef(null);
  /* ReactRouter breaks scrolling by not refreshing it when new components are rendered.
     Solutions on stackoverflow all rely on useLocation to call scrollTo once in the parent 
     component and apply it to all sub-components. But HashRouter and useLocation do not work 
     together. */

  /*
   pass down setHeight to each component. for height transition.
  */
  const [height, setHeight] = useState("100px");
  const long = () => setHeight("900px");
  const short = () => setHeight("300px");
  return (
    <div className="main" ref={scrollRef} style={{ height }}>
      <Routes>
        <Route
          path="/"
          element={<Home scrollRef={scrollRef} callback={short} />}
        />
        <Route
          path="work"
          element={<Work scrollRef={scrollRef} callback={long} />}
        />
        <Route
          path="about"
          element={<About scrollRef={scrollRef} callback={long} />}
        />
        <Route
          path="contact"
          element={<Contact scrollRef={scrollRef} callback={long} />}
        />
        <Route
          path="/project/:id"
          element={<Project scrollRef={scrollRef} callback={long} />}
        />
      </Routes>
    </div>
  );
}
